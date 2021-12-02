export function lowerThan(a: number, b: number) {
  return a < b;
}

export function countIncrease(list: number[]): number {
  let increaseCounter = 0;

  list.forEach((elem: number, index: number) => {
    if (index < list.length) {
      if (lowerThan(elem, list[index + 1])) {
        increaseCounter++;
      }
    }
  });
  return increaseCounter;
}

export function countIncreaseSlidingWindow(list: number[]): number {
  let increaseCounter = 0;

  for (let i = 0; i < list.length - 3; i++) {
    let windows1 = list[i] + list[i + 1] + list[i + 2];
    let windows2 = list[i + 1] + list[i + 2] + list[i + 3];

    if (lowerThan(windows1, windows2)) {
      increaseCounter++;
    }
  }

  return increaseCounter;
}
