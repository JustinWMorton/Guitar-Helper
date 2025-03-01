import { Scale, Note, Interval, Mode } from '@shared/interfaces/Scale';
import { notes, scales } from '@constants/Scales';


export const getAllScales = (): Scale[] => {
  return scales;
};

export const getScaleByName = (scaleName: string, modeName: string, rootNote: string): Mode | undefined => {
  const scale = scales.find((s) => s.name === scaleName);
  if (!scale) return undefined;

  const mode = scale.modes.find((m) => m.name === modeName);
  if (!mode) return undefined;

  const rootNoteIndex = findNoteIndex(rootNote);
  if (rootNoteIndex === -1) return undefined;

  mode.notes = calculateNotes(rootNoteIndex, mode.intervals);

  return {
    ...mode,
    notes: calculateNotes(rootNoteIndex, mode.intervals)
  };
};

export const getScaleByMode = (modeName: string): Scale | undefined => {
  return scales.find((scale) => scale.modes.some((mode) => mode.name === modeName));
};

const findNoteIndex = (noteName: string): number => {
  return notes.findIndex((note) => note.name === noteName.charAt(0).toUpperCase() && 
    (
      noteName.length === 1
      ? note.accidental === null
      : noteName.charAt(1) === '#'
      ? note.accidental === 's'
      : (noteName.charAt(1) === 'b' || noteName.charAt(1) === '♭')
      ? note.accidental === 'f'
      : false
    )
  );
};

export const isNoteInScale = (mode: Mode, note?: Note): boolean => {
  if (!note) { return false; } 
  const compareNote = typeof note === 'string' ? parseNoteString(note) : note;
  return mode.notes.some((n) => n.name === compareNote.name && n.accidental === compareNote.accidental);
}

const parseNoteString = (noteString: string): Note => {
  const name = noteString.charAt(0).toUpperCase();
  let accidental: 's' | 'f' | null = null;

  if (noteString.length > 1) {
    if (noteString.charAt(1) === '#') accidental = 's';
    else if (noteString.charAt(1) === 'b' || noteString.charAt(1) === '♭') accidental = 'f';
  }

  return { name, accidental, value: notes.find(n => n.name === name && n.accidental === accidental)?.value || 0 };
}

const calculateNotes = (rootIndex: number, intervals: Interval[]): Note[] => {
  return intervals.map((interval) => {
    const noteValue = (notes[rootIndex].value + interval.semitones) % 12;
    return notes.find(note => note.value === noteValue) || notes[0];
  });
};

export const formatNote = (note: Note): string => {
  return `${note.name}${note.accidental === 's' ? '#' : note.accidental === 'f' ? '♭' : ''}`;
};