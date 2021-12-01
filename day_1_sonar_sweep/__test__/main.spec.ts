import * as inputData from '../src/input.json';
import { countIncrease } from '../src/main';

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
