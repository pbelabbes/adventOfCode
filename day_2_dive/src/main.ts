export enum DIRECTION {
  down = 'down',
  up = 'up',
  forward = 'forward',
}

export interface Move {
  direction: string;
  value: number;
}

export interface Position {
  horizontal: number;
  depth: number;
}

export function getSubmarinePosition(input: Move[]): Position {
  const position: Position = input.reduce(
    (acc, current) => {
      if (current.direction === DIRECTION.down) {
        acc.depth += current.value;
      } else if (current.direction === DIRECTION.up) {
        acc.depth -= current.value;
      } else {
        acc.horizontal += current.value;
      }
      return acc;
    },
    { horizontal: 0, depth: 0 },
  );
  return position;
}
