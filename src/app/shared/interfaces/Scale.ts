export interface Scale {
    name: string;
    modes: Mode[];
}

export interface Mode {
    name: string;
    intervals: Interval[];
    notes: Note[];
    positions: Position[];
}

export interface Interval {
    semitones: number;
}

export interface Note {
    name: string;
    accidental: 's' | 'f' | null;
    value: number;
}

export interface Position {
    name: string;
    fretSpan: number;
}