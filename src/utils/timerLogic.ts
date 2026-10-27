/**
 * High-precision timer and score calculation utilities for Urban Hero athletes
 */

export interface AccuracyResult {
  diffMs: number;
  signedDiffMs: number;
  accuracyPercent: number;
  grade: 'PERFECT' | 'GREAT' | 'GOOD' | 'OFF';
  points: number;
  feedbackEs: string;
}

export interface IntervalState {
  currentRound: number;
  totalRounds: number;
  phase: 'WORK' | 'REST' | 'COMPLETED';
  phaseTimeRemainingMs: number;
  phaseProgressPercent: number;
}

/**
 * Format milliseconds into MM:SS.mmm
 */
export function formatMilliseconds(ms: number): string {
  if (ms < 0) ms = 0;
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const millis = Math.floor(ms % 1000);

  const mm = minutes.toString().padStart(2, '0');
  const ss = seconds.toString().padStart(2, '0');
  const mmm = millis.toString().padStart(3, '0');

  return `${mm}:${ss}.${mmm}`;
}

/**
 * Format milliseconds into SS.mmm (short format for target challenge)
 */
export function formatMillisecondsShort(ms: number): string {
  if (ms < 0) ms = 0;
  const totalSeconds = Math.floor(ms / 1000);
  const millis = Math.floor(ms % 1000);

  const ss = totalSeconds.toString().padStart(2, '0');
  const mmm = millis.toString().padStart(3, '0');

  return `${ss}.${mmm}`;
}

/**
 * Precision Stop Target Challenge evaluation
 * Evaluates how close an athlete stopped relative to the target time in milliseconds.
 */
export function evaluateTargetStop(elapsedMs: number, targetMs: number): AccuracyResult {
  const signedDiff = Math.round(elapsedMs - targetMs);
  const diffMs = Math.abs(signedDiff);

  // Maximum tolerance before 0% accuracy
  const maxTolerance = 1500; // 1.5 seconds
  const rawRatio = Math.max(0, 1 - diffMs / maxTolerance);
  const accuracyPercent = Math.round(rawRatio * 100);

  let grade: 'PERFECT' | 'GREAT' | 'GOOD' | 'OFF' = 'OFF';
  let points = 0;
  let feedbackEs = 'Sigue practicando tu timing muscular';

  if (diffMs <= 15) {
    grade = 'PERFECT';
    points = 100;
    feedbackEs = '¡Nivel Atleta Pro! Reflejos sobrehumanos.';
  } else if (diffMs <= 60) {
    grade = 'GREAT';
    points = 80;
    feedbackEs = '¡Excelente precisión y coordinación motora!';
  } else if (diffMs <= 200) {
    grade = 'GOOD';
    points = 50;
    feedbackEs = 'Buen intento. Muy cerca del objetivo.';
  } else {
    grade = 'OFF';
    points = Math.max(5, Math.round(25 * rawRatio));
    feedbackEs = diffMs > 0 && signedDiff > 0 ? 'Te pasaste del tiempo' : 'Te frenaste antes de tiempo';
  }

  return {
    diffMs,
    signedDiffMs: signedDiff,
    accuracyPercent,
    grade,
    points,
    feedbackEs,
  };
}

/**
 * High-precision calculation for interval training (e.g. Tabata, EMOM)
 */
export function calculateIntervalState(
  elapsedMs: number,
  workMs: number,
  restMs: number,
  totalRounds: number
): IntervalState {
  const roundDuration = workMs + restMs;
  if (roundDuration <= 0) {
    return {
      currentRound: 1,
      totalRounds,
      phase: 'WORK',
      phaseTimeRemainingMs: 0,
      phaseProgressPercent: 0,
    };
  }

  const totalWorkoutMs = roundDuration * totalRounds;
  if (elapsedMs >= totalWorkoutMs) {
    return {
      currentRound: totalRounds,
      totalRounds,
      phase: 'COMPLETED',
      phaseTimeRemainingMs: 0,
      phaseProgressPercent: 100,
    };
  }

  const currentRoundIndex = Math.floor(elapsedMs / roundDuration);
  const currentRound = currentRoundIndex + 1;
  const timeIntoCurrentRound = elapsedMs % roundDuration;

  if (timeIntoCurrentRound < workMs) {
    const remaining = workMs - timeIntoCurrentRound;
    const progress = (timeIntoCurrentRound / workMs) * 100;
    return {
      currentRound,
      totalRounds,
      phase: 'WORK',
      phaseTimeRemainingMs: remaining,
      phaseProgressPercent: Math.min(100, Math.max(0, progress)),
    };
  } else {
    const timeIntoRest = timeIntoCurrentRound - workMs;
    const remaining = restMs - timeIntoRest;
    const progress = (timeIntoRest / restMs) * 100;
    return {
      currentRound,
      totalRounds,
      phase: 'REST',
      phaseTimeRemainingMs: remaining,
      phaseProgressPercent: Math.min(100, Math.max(0, progress)),
    };
  }
}
