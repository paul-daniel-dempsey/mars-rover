export const ROTATE_COMMANDS = ['L', 'R'] as const;
export type RotateCommand = typeof ROTATE_COMMANDS[number];

export const TRAVEL_COMMANDS = ['M','F', 'B'] as const;
export type TravelCommand = typeof TRAVEL_COMMANDS[number];

export const HEADINGS = ['N', 'E', 'S', 'W'] as const;
export type Heading = typeof HEADINGS[number];

const COMMANDS = ['L', 'R', 'M', 'F', 'B'] as const;
export type Command = typeof COMMANDS[number];