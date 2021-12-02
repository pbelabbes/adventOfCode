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

  it('should return h:1 d:1', () => {
    const input: Move[] = [
      {
        direction: 'down',
        value: 1,
      },
      {
        direction: 'forward',
        value: 1,
      },
    ];

    const output: Position = getSubmarinePosition(input);

    expect(output.depth).toEqual(1);
    expect(output.horizontal).toEqual(1);
  });

  it('should return h:2 d:2', () => {
    const input: Move[] = [
      {
        direction: 'up',
        value: 1,
      },
      {
        direction: 'down',
        value: 2,
      },
      {
        direction: 'forward',
        value: 2,
      },
    ];

    const output: Position = getSubmarinePosition(input);

    expect(output.depth).toEqual(2);
    expect(output.horizontal).toEqual(2);
  });

  it('should return h:15 d:8', () => {
    const input: Move[] = [
      {
        direction: 'forward',
        value: 5,
      },
      {
        direction: 'down',
        value: 5,
      },
      {
        direction: 'forward',
        value: 8,
      },
      {
        direction: 'up',
        value: 3,
      },
      {
        direction: 'down',
        value: 8,
      },
      {
        direction: 'forward',
        value: 2,
      },
    ];

    const output: Position = getSubmarinePosition(input);

    expect(output.horizontal).toEqual(15);
    expect(output.depth).toEqual(60);
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
