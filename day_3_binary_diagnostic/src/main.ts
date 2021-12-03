export interface PowerConsumption {
  gamma: number;
  epsilon: number;
}

export interface LifeSupportRating {
  oxygen: number;
  co2: number;
}

// Part1
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

// part 2
export function getLifeSupportingRating(input: string[]): LifeSupportRating {
  const oxygen = binaryToNumb(
    computeLifeSupportingParam(input, getMostCommonBit),
  );
  const co2 = binaryToNumb(
    computeLifeSupportingParam(input, getLeastCommonBit),
  );
  return { oxygen, co2 };
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

function getNbActiveBits(bWords: string[], index: number): number {
  const focusedBits = bWords.map(bWord => +bWord.split('')[index]);
  return focusedBits.reduce((acc, curr) => acc + curr, 0);
}

function getMostCommonBit(bWords: string[], index: number): number {
  return getNbActiveBits(bWords, index) >= bWords.length / 2 ? 1 : 0;
}

function getLeastCommonBit(bWords: string[], index: number): number {
  return getNbActiveBits(bWords, index) < bWords.length / 2 ? 1 : 0;
}

function computeLifeSupportingParam(
  bWords: string[],
  getCommonBit: (bWords: string[], index: number) => number,
  index = 0,
): string {
  if (bWords.length === 1) {
    return bWords[0];
  }

  const commonBit = getCommonBit(bWords, index);
  const bWordsToCompute = bWords.filter(
    bWord => +bWord.split('')[index] === commonBit,
  );

  return computeLifeSupportingParam(bWordsToCompute, getCommonBit, index + 1);
}
