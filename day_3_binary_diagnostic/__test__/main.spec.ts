import { getPowerConsumption } from '../src/main';
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
