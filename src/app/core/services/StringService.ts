import { notes } from '@shared/constants';
import { Note } from '@shared/interfaces';

export const getNote = (stringIndex: number, fret: number): Note => {
    const openStrings: Note[]= [
        {name: 'E', accidental: null},
        {name: 'A', accidental: null},
        {name: 'D', accidental: null},
        {name: 'G', accidental: null},
        {name: 'B', accidental: null},
        {name: 'E', accidental: null}
    ].reverse() as Note[];
    const openNote = openStrings[stringIndex];
    const openStringIndex = notes.findIndex(
        (note) => note.name === openNote.name && note.accidental === openNote.accidental
      );
    
    const noteIndex = (openStringIndex + fret) % notes.length;
    return notes[noteIndex];
};