export function countIncrease(measures: number[]): number {
  let increaseCount = 0;
  for (let i = 1; i < measures.length; i++) {
    if (measures[i - 1] < measures[i]) {
      increaseCount++;
    }
  }
  return increaseCount;
}

export function createWindows(measures: number[]): number[] {
  const windows: number[] = [];

  const nbLoops = measures.length - 2;
  for (let i = 0; i < nbLoops; i++) {
    windows.push(measures[i] + measures[i + 1] + measures[i + 2]);
  }

  return windows;
}
