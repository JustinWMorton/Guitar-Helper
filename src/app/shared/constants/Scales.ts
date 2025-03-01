import { Scale, Note } from '@shared/interfaces/Scale';

export const notes: Note[] = [
  { name: 'C', accidental: null, value: 0 },
  { name: 'C', accidental: 's', value: 1 },
  { name: 'D', accidental: null, value: 2 },
  { name: 'D', accidental: 's', value: 3 },
  { name: 'E', accidental: null, value: 4 },
  { name: 'F', accidental: null, value: 5 },
  { name: 'F', accidental: 's', value: 6 },
  { name: 'G', accidental: null, value: 7 },
  { name: 'G', accidental: 's', value: 8 },
  { name: 'A', accidental: null, value: 9 },
  { name: 'A', accidental: 's', value: 10 },
  { name: 'B', accidental: null, value: 11 },
];
  
export const scales: Scale[] = [
  // PENTATONIC
  {
    name: 'Pentatonic',
    modes: [
      {
        name: 'Minor Pentatonic',
        intervals: [
          { semitones: 0 },
          { semitones: 3 },
          { semitones: 5 },
          { semitones: 7 },
          { semitones: 10 },
        ],
        notes: [],
        positions: [
          {name: 'Primary', fretSpan: 4},
        ],
      },
      {
        name: 'Major Pentatonic',
        intervals: [
          { semitones: 0 },
          { semitones: 2 },
          { semitones: 4 },
          { semitones: 7 },
          { semitones: 9 },
        ],
        notes: [],
        positions: [
          {name: 'Primary', fretSpan: 4},
        ],
      },
    ],
  },
  // BLUES
  {
    name: 'Blues',
    modes: [
      {
        name: 'Blues Minor',
        intervals: [
          { semitones: 0 },
          { semitones: 3 },
          { semitones: 5 },
          { semitones: 6 },
          { semitones: 7 },
          { semitones: 10 },
        ],
        notes: [],
        positions: [
          {name: 'Primary', fretSpan: 4},
        ],
      },
      {
        name: 'Minor Blues 3',
        intervals: [
          { semitones: 0 },
          { semitones: 3 },
          { semitones: 4 },
          { semitones: 5 },
          { semitones: 7 },
          { semitones: 10 },
        ],
        notes: [],
        positions: [
          { name: 'Primary', fretSpan: 4 },
        ],
      },
      {
        name: 'Blues Major',
        intervals: [
          { semitones: 0 },
          { semitones: 2 },
          { semitones: 3 },
          { semitones: 4 },
          { semitones: 7 },
          { semitones: 9 },
        ],
        notes: [],
        positions: [
          { name: 'Primary', fretSpan: 4 },
        ],
      },
      {
        name: 'Mixoblues',
        intervals: [
          { semitones: 0 },
          { semitones: 2 },
          { semitones: 3 },
          { semitones: 4 },
          { semitones: 7 },
          { semitones: 9 },
          { semitones: 10 },
        ],
        notes: [],
        positions: [
          { name: 'Primary', fretSpan: 4 },
        ],
      },
      {
        name: 'Blues Nonatonic',
        intervals: [
          { semitones: 0 },
          { semitones: 2 },
          { semitones: 3 },
          { semitones: 4 },
          { semitones: 5 },
          { semitones: 7 },
          { semitones: 9 },
          { semitones: 10 },
          { semitones: 11 },
        ],
        notes: [],
        positions: [
          { name: 'Primary', fretSpan: 4 },
        ],
      },
      {
        name: 'Minor Blues 7',
        intervals: [
          { semitones: 0 },
          { semitones: 2 },
          { semitones: 3 },
          { semitones: 5 },
          { semitones: 6 },
          { semitones: 7 },
          { semitones: 10 },
        ],
        notes: [],
        positions: [
          { name: 'Primary', fretSpan: 4 },
        ],
      },
      {
        name: 'Voodoo Blues',
        intervals: [
          { semitones: 0 },  
          { semitones: 3 },  
          { semitones: 5 },  
          { semitones: 6 },  
          { semitones: 7 },  
          { semitones: 9 },  
        ],
        notes: [],
        positions: [
          { name: 'Primary', fretSpan: 4 },
        ],
      },
    ],
  },
  // MAJOR
  {
    name: 'Major',
    modes: [
      {
        name: 'Ionian',
        intervals: [
          { semitones: 0 },
          { semitones: 2 },
          { semitones: 4 },
          { semitones: 5 },
          { semitones: 7 },
          { semitones: 9 },
          { semitones: 11 }
        ],
        notes: [],
        positions: [
          {name: 'Primary', fretSpan: 3},
        ],
      },
      {
        name: 'Dorian',
        intervals: [
          { semitones: 0 },
          { semitones: 2 },
          { semitones: 3 },
          { semitones: 5 },
          { semitones: 7 },
          { semitones: 9 },
          { semitones: 10 }
        ],
        notes: [],
        positions: [
          {name: 'Primary', fretSpan: 4},
        ],
      },
      {
        name: 'Phrygian',
        intervals: [
          { semitones: 0 },
          { semitones: 1 },
          { semitones: 3 },
          { semitones: 5 },
          { semitones: 7 },
          { semitones: 8 },
          { semitones: 10 }
        ],
        notes: [],
        positions: [
          {name: 'Primary', fretSpan: 4},
        ],
      },
      {
        name: 'Lydian',
        intervals: [
          { semitones: 0 },
          { semitones: 2 },
          { semitones: 4 },
          { semitones: 6 },
          { semitones: 7 },
          { semitones: 9 },
          { semitones: 11 }
        ],
        notes: [],
        positions: [
          {name: 'Primary', fretSpan: 4},
        ],
      },
      {
        name: 'Mixolydian',
        intervals: [
          { semitones: 0 },
          { semitones: 2 },
          { semitones: 4 },
          { semitones: 5 },
          { semitones: 7 },
          { semitones: 9 },
          { semitones: 10 }
        ],
        notes: [],
        positions: [
          {name: 'Primary', fretSpan: 4},
        ],
      },
      {
        name: 'Aeolian',
        intervals: [
          { semitones: 0 },
          { semitones: 2 },
          { semitones: 3 },
          { semitones: 5 },
          { semitones: 7 },
          { semitones: 8 },
          { semitones: 10 }
        ],
        notes: [],
        positions: [
          {name: 'Primary', fretSpan: 4},
        ],
      },
      {
        name: 'Locrian',
        intervals: [
          { semitones: 0 },
          { semitones: 1 },
          { semitones: 3 },
          { semitones: 5 },
          { semitones: 6 },
          { semitones: 8 },
          { semitones: 10 }
        ],
        notes: [],
        positions: [
          {name: 'Primary', fretSpan: 4},
        ],
      }
    ]
  },
  // Add other scales here
  
];