import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatMilliseconds,
  formatMillisecondsShort,
  evaluateTargetStop,
  calculateIntervalState,
} from './timerLogic';

test('formatMilliseconds formats correctly', () => {
  assert.equal(formatMilliseconds(0), '00:00.000');
  assert.equal(formatMilliseconds(1234), '00:01.234');
  assert.equal(formatMilliseconds(65432), '01:05.432');
  assert.equal(formatMilliseconds(600000), '10:00.000');
});

test('formatMillisecondsShort formats SS.mmm correctly', () => {
  assert.equal(formatMillisecondsShort(5000), '05.000');
  assert.equal(formatMillisecondsShort(10450), '10.450');
});

test('evaluateTargetStop detects PERFECT stops within 15ms', () => {
  const result = evaluateTargetStop(5008, 5000);
  assert.equal(result.diffMs, 8);
  assert.equal(result.grade, 'PERFECT');
  assert.equal(result.points, 100);
  assert.equal(result.signedDiffMs, 8);
});

test('evaluateTargetStop detects GREAT stops within 60ms', () => {
  const result = evaluateTargetStop(4960, 5000);
  assert.equal(result.diffMs, 40);
  assert.equal(result.grade, 'GREAT');
  assert.equal(result.points, 80);
});

test('evaluateTargetStop detects GOOD stops within 200ms', () => {
  const result = evaluateTargetStop(5150, 5000);
  assert.equal(result.diffMs, 150);
  assert.equal(result.grade, 'GOOD');
  assert.equal(result.points, 50);
});

test('evaluateTargetStop handles OFF stops over 200ms', () => {
  const result = evaluateTargetStop(5400, 5000);
  assert.equal(result.diffMs, 400);
  assert.equal(result.grade, 'OFF');
});

test('calculateIntervalState computes work and rest phases accurately', () => {
  // 20s work, 10s rest, 4 rounds
  const workMs = 20000;
  const restMs = 10000;
  const rounds = 4;

  // At 5 seconds: Round 1, WORK
  const state1 = calculateIntervalState(5000, workMs, restMs, rounds);
  assert.equal(state1.currentRound, 1);
  assert.equal(state1.phase, 'WORK');
  assert.equal(state1.phaseTimeRemainingMs, 15000);

  // At 25 seconds: Round 1, REST
  const state2 = calculateIntervalState(25000, workMs, restMs, rounds);
  assert.equal(state2.currentRound, 1);
  assert.equal(state2.phase, 'REST');
  assert.equal(state2.phaseTimeRemainingMs, 5000);

  // At 31 seconds: Round 2, WORK
  const state3 = calculateIntervalState(31000, workMs, restMs, rounds);
  assert.equal(state3.currentRound, 2);
  assert.equal(state3.phase, 'WORK');

  // Past total duration (120s): COMPLETED
  const stateDone = calculateIntervalState(125000, workMs, restMs, rounds);
  assert.equal(stateDone.phase, 'COMPLETED');
});
