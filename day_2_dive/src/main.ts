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
  aim: number;
}

export function getSubmarinePosition(input: Move[]): Position {
  const position: Position = input.reduce(
    (acc, current) => {
      if (current.direction === DIRECTION.forward) {
        acc.horizontal += current.value;
        acc.depth += current.value * acc.aim;
      } else {
        acc.aim +=
          (current.direction === DIRECTION.down ? 1 : -1) * current.value;
      }
      return acc;
    },
    { horizontal: 0, depth: 0, aim: 0 },
  );
  return position;
}
