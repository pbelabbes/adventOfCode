import dataInput from '../src/input.json';
import dataCheuCheuInput from '../src/inputCheuCheu.json';
import dataSyltechInput from '../src/inputSyltech.json';
import {
  countIncrease,
  countIncreaseSlidingWindow,
  lowerThan,
} from '../src/main';

describe('Count number of increase in depth measures', () => {
  it('should return true if A < B', () => {
    const progression = lowerThan(3, 5);
    expect(progression).toBeTruthy();
  });

  it('should count increase of a list', () => {
    const list = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const increaseCount = countIncrease(list);
    expect(increaseCount).toBe(7);
  });

  it('should be the answer of Advent Of Code Part 1', () => {
    console.log({ Pierre: countIncrease(dataInput.data) });
    console.log({ CheuCheu: countIncrease(dataCheuCheuInput.data) });
    console.log({ Syltech: countIncrease(dataSyltechInput.data) });
    expect(true).toBe(true);
  });
});

describe('Partie 2', () => {
  it('should count increase of a list', () => {
    const list = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const increaseCount = countIncreaseSlidingWindow(list);
    expect(increaseCount).toBe(5);
  });

  it('should be the answer of Advent Of Code Part 2', () => {
    console.log({ Pierre: countIncreaseSlidingWindow(dataInput.data) });
    console.log({
      CheuCheu: countIncreaseSlidingWindow(dataCheuCheuInput.data),
    });
    console.log({ Syltech: countIncreaseSlidingWindow(dataSyltechInput.data) });
    console.log({ Pierre: countIncreaseSlidingWindow(dataInput.data) });
    console.log({
      CheuCheu: countIncreaseSlidingWindow(dataCheuCheuInput.data),
    });
    console.log({ Syltech: countIncreaseSlidingWindow(dataSyltechInput.data) });
    expect(true).toBe(true);
  });
});
