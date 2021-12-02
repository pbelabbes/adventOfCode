import dataInput from '../src/input_data.json';
import { getSubmarinePosition, Move, Position } from '../src/main';
describe('Compute position of the submarine', () => {
  it('should return h:1 d:0', () => {
    const input: Move[] = [
      {
        direction: 'forward',
        value: 1,
      },
    ];

    const output: Position = getSubmarinePosition(input);

    expect(output.horizontal).toEqual(1);
    expect(output.depth).toEqual(0);
  });

  it('should return h:0 d:1', () => {
    const input: Move[] = [
      {
        direction: 'down',
        value: 1,
      },
    ];

    const output: Position = getSubmarinePosition(input);

    expect(output.depth).toEqual(1);
    expect(output.horizontal).toEqual(0);
  });

  it('should return h:0 d:-1', () => {
    const input: Move[] = [
      {
        direction: 'up',
        value: 1,
      },
    ];

    const output: Position = getSubmarinePosition(input);

    expect(output.depth).toEqual(-1);
    expect(output.horizontal).toEqual(0);
  });

  it('should return h:15 d:8', () => {
    const input: Move[] = [
      {
        direction: 'up',
        value: 1,
      },
      {
        direction: 'forward',
        value: 3,
      },
      {
        direction: 'down',
        value: 4,
      },
      {
        direction: 'down',
        value: 10,
      },
      {
        direction: 'forward',
        value: 5,
      },
      {
        direction: 'up',
        value: 5,
      },
      {
        direction: 'forward',
        value: 7,
      },
    ];

    const output: Position = getSubmarinePosition(input);

    expect(output.depth).toEqual(8);
    expect(output.horizontal).toEqual(15);
  });

  it('should give me the part1 solution', () => {
    const input: Move[] = dataInput.data;

    const output: Position = getSubmarinePosition(input);

    console.log(`depth : ${output.depth}`);
    console.log(`horizontal : ${output.horizontal}`);
    console.log(`depth * horizontal : ${output.horizontal * output.depth}`);
    expect(true).toBeTruthy();
  });
});
