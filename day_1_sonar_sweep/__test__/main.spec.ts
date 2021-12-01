import * as inputData from '../src/input.json';
import { countIncrease, createWindows } from '../src/main';

describe('Count number of increase in depth measures', () => {
  it('should count 0 increases', () => {
    const input = [0];

    const res = countIncrease(input);
    expect(res).toBe(0);
  });

  it('should count 1 increase', () => {
    const input = [0, 10];

    const res = countIncrease(input);
    expect(res).toBe(1);
  });

  it('should count 2 increases', () => {
    const input = [0, 10, 8, 11];

    const res = countIncrease(input);
    expect(res).toBe(2);
  });

  it('should count 3 increases', () => {
    const input = [0, 10, 8, 11, 14];

    const res = countIncrease(input);
    expect(res).toBe(3);
  });

  it('should count nb of increases', () => {
    const input: number[] = inputData.data;
    const res = countIncrease(input);
    console.log(res);
    expect(res).toBeDefined();
  });
});

describe('Create windows of measurements', () => {
  it('should create one window = 6 ', () => {
    const input = [1, 2, 3];
    const expectedOutput = [6];
    const res = createWindows(input);

    expect(res).toEqual(expectedOutput);
  });

  it('should create Two windows = [6,6] ', () => {
    const input = [1, 2, 3, 1];
    const expectedOutput = [6, 6];
    const res = createWindows(input);

    expect(res).toEqual(expectedOutput);
  });

  it('should create Five windows = [6,6,12,12,15] ', () => {
    const input = [1, 2, 3, 1, 8, 3, 4];
    const expectedOutput = [6, 6, 12, 12, 15];
    const res = createWindows(input);

    expect(res).toEqual(expectedOutput);
  });
});

describe('Create windows of measurements and count increments', () => {
  it('should create one window = 6 with 0 increment', () => {
    const input = [1, 2, 3];
    const windows = createWindows(input);
    const res = countIncrease(windows);

    expect(res).toEqual(0);
  });

  it('should create Two windows = [6,6] with 0 increment', () => {
    const input = [1, 2, 3, 1];
    const windows = createWindows(input);
    const res = countIncrease(windows);

    expect(res).toEqual(0);
  });

  it('should create Five windows = [6,6,12,12,15] with 2 increments ', () => {
    const input = [1, 2, 3, 1, 8, 3, 4];
    const windows = createWindows(input);
    const res = countIncrease(windows);

    expect(res).toEqual(2);
  });

  it('should create Five windows = [6,6,12,12,15] with 2 increments ', () => {
    const input = inputData.data;
    const windows = createWindows(input);
    const res = countIncrease(windows);
    console.log(res);
    expect(res).toBeDefined;
  });
});
