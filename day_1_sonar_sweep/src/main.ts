export function countIncrease(measures: number[]): number {
  let increaseCount = 0;
  for (let i = 1; i < measures.length; i++) {
    if (measures[i - 1] < measures[i]) {
      increaseCount++;
    }
  }
  return increaseCount;
}
