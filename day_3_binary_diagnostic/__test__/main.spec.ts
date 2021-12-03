import {
  getLifeSupportingRating,
  getPowerConsumption,
  LifeSupportRating,
} from '../src/main';
import { parseFile } from '../src/read_file';

describe('Compute Gamma and epsilon rate', () => {
  it('should return a gamma:22 and epsilon:9', () => {
    const input: string[] = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010',
    ];
    const output = getPowerConsumption(input);
    expect(output.gamma).toEqual(22);
    expect(output.epsilon).toEqual(9);
  });

  it('should return the part1 result', async () => {
    const input: string[] = await parseFile('./src/inputData');
    const output = getPowerConsumption(input);
    console.log(`gamma : ${output.gamma}`);
    console.log(`epsilon : ${output.epsilon}`);
    console.log(`epsilon * gamma : ${output.epsilon * output.gamma}`);
    expect(true).toBeTruthy();
  });
});

describe('Compute oxygen generator rating & C02 scrubber ration', () => {
  it('should return Oxy : 23 & C02 : 10', () => {
    const input: string[] = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010',
    ];
    const output = getLifeSupportingRating(input);
    expect(output.oxygen).toEqual(23);
    expect(output.co2).toEqual(10);
  });

  it('should return the part2 result', async () => {
    const input: string[] = await parseFile('./src/inputData');
    const output: LifeSupportRating = getLifeSupportingRating(input);
    console.log(`oxygen : ${output.oxygen}`);
    console.log(`co2 : ${output.co2}`);
    console.log(`co2 * oxygen : ${output.co2 * output.oxygen}`);
    expect(true).toBeTruthy();
  });
});
