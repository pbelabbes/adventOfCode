export interface PowerConsumption {
  gamma: number;
  epsilon: number;
}

function binaryToNumb(binary: string): number {
  return binary
    .split('')
    .map(b => +b)
    .reverse()
    .reduce((acc, curr, i) => {
      acc += curr ? Math.pow(2, i) : 0;
      return acc;
    }, 0);
}

export function getPowerConsumption(input: string[]): PowerConsumption {
  const computeBinary = input.reduce((acc: number[], curr: string) => {
    const binLine = curr.split('').map(b => +b);
    for (let i = 0; i < binLine.length; i++) {
      acc[i] = acc[i] ? acc[i] + +binLine[i] : +binLine[i];
    }
    return acc;
  }, []);

  const gamma = binaryToNumb(
    computeBinary.map(b => (b > input.length / 2 ? '1' : '0')).join(''),
  );
  const epsilon = binaryToNumb(
    computeBinary.map(b => (b > input.length / 2 ? '0' : '1')).join(''),
  );
  return { gamma, epsilon };
}
