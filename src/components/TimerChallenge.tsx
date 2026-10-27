import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Square, RotateCcw, Award, Zap, Timer, CheckCircle2, Flame, Sparkles } from 'lucide-react';
import { formatMilliseconds, formatMillisecondsShort, evaluateTargetStop, AccuracyResult } from '../utils/timerLogic';
import { safeGetItem, safeSetItem } from '../utils/safeStorage';

export const TimerChallenge: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'challenge' | 'stopwatch'>('challenge');
  const [targetSeconds, setTargetSeconds] = useState<number>(5); // 5s or 10s target
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedMs, setElapsedMs] = useState<number>(0);
  const [lastResult, setLastResult] = useState<AccuracyResult | null>(null);
  const [bestStreak, setBestStreak] = useState<number>(0);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);

  // High-precision timing refs using performance.now()
  const startTimeRef = useRef<number>(0);
  const accumulatedTimeRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);

  // Load saved records safely
  useEffect(() => {
    const savedHighScore = safeGetItem('uh_high_score');
    const savedStreak = safeGetItem('uh_best_streak');
    if (savedHighScore) setHighScore(parseInt(savedHighScore, 10));
    if (savedStreak) setBestStreak(parseInt(savedStreak, 10));
  }, []);

  // requestAnimationFrame loop with performance.now()
  const updateTimer = useCallback(() => {
    if (!startTimeRef.current) return;
    const now = performance.now();
    const currentElapsed = accumulatedTimeRef.current + (now - startTimeRef.current);
    setElapsedMs(currentElapsed);

    animFrameIdRef.current = requestAnimationFrame(updateTimer);
  }, []);

  const handleStart = () => {
    if (isRunning) return;
    startTimeRef.current = performance.now();
    setIsRunning(true);
    setLastResult(null);
    animFrameIdRef.current = requestAnimationFrame(updateTimer);
  };

  const handleStop = () => {
    if (!isRunning) return;
    const now = performance.now();
    const finalElapsed = accumulatedTimeRef.current + (now - startTimeRef.current);
    accumulatedTimeRef.current = finalElapsed;
    startTimeRef.current = 0;
    setIsRunning(false);

    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
      animFrameIdRef.current = null;
    }

    setElapsedMs(finalElapsed);

    // If in challenge mode, evaluate precision
    if (activeTab === 'challenge') {
      const targetMs = targetSeconds * 1000;
      const evaluation = evaluateTargetStop(finalElapsed, targetMs);
      setLastResult(evaluation);

      // Streak & High Score Management
      if (evaluation.grade === 'PERFECT' || evaluation.grade === 'GREAT') {
        const newStreak = currentStreak + 1;
        setCurrentStreak(newStreak);
        if (newStreak > bestStreak) {
          setBestStreak(newStreak);
          safeSetItem('uh_best_streak', newStreak.toString());
        }
      } else {
        setCurrentStreak(0);
      }

      if (evaluation.points > highScore) {
        setHighScore(evaluation.points);
        safeSetItem('uh_high_score', evaluation.points.toString());
      }
    }
  };

  const handleReset = () => {
    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
      animFrameIdRef.current = null;
    }
    startTimeRef.current = 0;
    accumulatedTimeRef.current = 0;
    setIsRunning(false);
    setElapsedMs(0);
    setLastResult(null);
    setLaps([]);
  };

  const handleLap = () => {
    if (isRunning) {
      setLaps((prev) => [elapsedMs, ...prev]);
    }
  };

  // Keyboard shortcut: Spacebar to Start/Stop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        if (isRunning) {
          handleStop();
        } else {
          handleStart();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRunning, activeTab, targetSeconds, currentStreak, bestStreak, highScore]);

  // Clean up RAF on unmount
  useEffect(() => {
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#061427] via-[#091f3a] to-[#061427] border-y border-cyan-500/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Coordinación y Tiempo de Reacción
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Urban Hero Precision Timer
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Pon a prueba tu agudeza neuromuscular con nuestro cronómetro de alta precisión impulsado por microsegundos, o úsalo para tus series y descansos.
          </p>
        </div>

        {/* Outer Card */}
        <div className="bg-[#07192f] border-2 border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          
          {/* Mode Switcher Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-xl bg-black/40 border border-white/10">
              <button
                type="button"
                onClick={() => {
                  handleReset();
                  setActiveTab('challenge');
                }}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                  activeTab === 'challenge'
                    ? 'bg-[#00d2ff] text-[#061325] shadow-md shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Desafío de Precisión</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  handleReset();
                  setActiveTab('stopwatch');
                }}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                  activeTab === 'stopwatch'
                    ? 'bg-[#00d2ff] text-[#061325] shadow-md shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Timer className="w-3.5 h-3.5" />
                <span>Cronómetro Libre WOD</span>
              </button>
            </div>
          </div>

          {/* Challenge Mode Target Selector */}
          {activeTab === 'challenge' && (
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-semibold uppercase tracking-wider">
                  Objetivo:
                </span>
                <div className="flex gap-2">
                  {[5, 10].map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      disabled={isRunning}
                      onClick={() => {
                        setTargetSeconds(sec);
                        handleReset();
                      }}
                      className={`px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider border transition-all ${
                        targetSeconds === sec
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                          : 'bg-black/30 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      {sec}.000s
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span>Racha actual: <strong className="text-white">{currentStreak}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Récord: <strong className="text-cyan-300">{bestStreak}</strong></span>
                </div>
              </div>
            </div>
          )}

          {/* Main Display: High-Precision Millisecond Readout */}
          <div className="text-center py-6 px-4 rounded-2xl bg-black/40 border border-cyan-500/20 mb-8 relative">
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest block mb-2">
              {activeTab === 'challenge'
                ? `Para el reloj exactamente en ${targetSeconds}.000s`
                : 'Cronometraje de Alta Precisión'}
            </span>

            <div className="font-mono text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white select-none">
              {formatMilliseconds(elapsedMs)}
            </div>

            {/* Instruction tooltip */}
            <span className="text-[11px] text-slate-500 mt-2 block">
              Tip: También puedes pulsar la <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 text-[10px] font-mono">Barra Espaciadora</kbd>
            </span>
          </div>

          {/* Result Card for Target Challenge */}
          {activeTab === 'challenge' && lastResult && (
            <div className="mb-8 p-5 rounded-2xl bg-cyan-950/40 border border-cyan-400/40 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                        lastResult.grade === 'PERFECT'
                          ? 'bg-emerald-400 text-black'
                          : lastResult.grade === 'GREAT'
                          ? 'bg-cyan-400 text-black'
                          : lastResult.grade === 'GOOD'
                          ? 'bg-yellow-400 text-black'
                          : 'bg-rose-500 text-white'
                      }`}
                    >
                      {lastResult.grade === 'PERFECT' && '★ PERFECTO ★'}
                      {lastResult.grade === 'GREAT' && 'GENIAL'}
                      {lastResult.grade === 'GOOD' && 'BUEN INTENTO'}
                      {lastResult.grade === 'OFF' && 'DESVIADO'}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Diferencia: {lastResult.signedDiffMs > 0 ? `+${lastResult.signedDiffMs}` : lastResult.signedDiffMs} ms
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white mt-1">
                    {lastResult.feedbackEs}
                  </p>
                </div>

                <div className="text-center sm:text-right">
                  <span className="text-2xl font-black text-cyan-300 font-heading block">
                    {lastResult.accuracyPercent}% PRECISIÓN
                  </span>
                  <span className="text-xs text-slate-400">
                    +{lastResult.points} puntos de agilidad
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {!isRunning ? (
              <button
                type="button"
                onClick={handleStart}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d2ff] to-[#0ea5e9] text-[#061325] font-black text-base uppercase tracking-wider shadow-lg shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Play className="w-5 h-5 fill-[#061325]" />
                <span>Iniciar Cronómetro</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleStop}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 text-white font-black text-base uppercase tracking-wider shadow-lg shadow-rose-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Square className="w-5 h-5 fill-white" />
                <span>{activeTab === 'challenge' ? '¡FRENAR AHORA!' : 'Detener'}</span>
              </button>
            )}

            {activeTab === 'stopwatch' && isRunning && (
              <button
                type="button"
                onClick={handleLap}
                className="px-6 py-4 rounded-xl bg-[#0f2d52] hover:bg-[#163c6c] border border-cyan-500/30 text-cyan-300 font-bold text-sm uppercase tracking-wider transition-all"
              >
                Vuelta / Lap
              </button>
            )}

            <button
              type="button"
              onClick={handleReset}
              disabled={elapsedMs === 0 && !isRunning}
              className="px-6 py-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-slate-300 hover:text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2 disabled:opacity-40 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reiniciar</span>
            </button>
          </div>

          {/* Laps List in Stopwatch Mode */}
          {activeTab === 'stopwatch' && laps.length > 0 && (
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Vueltas Registradas ({laps.length})
              </span>
              <div className="max-h-40 overflow-y-auto space-y-1.5 pr-2">
                {laps.map((lapMs, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-xs p-2 rounded-lg bg-black/25 font-mono text-slate-200"
                  >
                    <span className="text-cyan-400 font-semibold">Vuelta #{laps.length - idx}</span>
                    <span>{formatMilliseconds(lapMs)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
