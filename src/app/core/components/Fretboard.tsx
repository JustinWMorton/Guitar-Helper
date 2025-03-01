"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import { Mode } from '@shared/interfaces/Scale';
import { getNote } from '@services/StringService';
import { formatNote, isNoteInScale } from '@services/ScaleService';
import { useSettings } from '@contexts/SettingsContext';

interface FretboardProps {
  rootNote: string;
  mode: Mode;
}

const Fretboard: React.FC<FretboardProps> = ({ mode, rootNote }) => {
  const { viewMode } = useSettings();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const findRootNoteFrets = (rootNote: string): number[] => {
    const frets: number[] = [];
    const checkMultiplePositions = ['E', 'F', 'G'].includes(rootNote);
  
    for (let stringIndex = 0; stringIndex < 6; stringIndex++) {
      for (let fret = 0; fret < 18; fret++) {
        if (formatNote(getNote(stringIndex, fret)) === rootNote) {
          frets.push(fret);
          if (!checkMultiplePositions || frets.length === 2) return frets;
        }
      }
    }
    return frets;
  };
  
  const isInPrimaryPosition = useCallback((fret: number) => {
    const rootNoteFrets = findRootNoteFrets(rootNote);
    const fretSpan = mode.positions[0].fretSpan;
    
    return rootNoteFrets.some(rootFret => {
      const startFret = rootFret;
      const endFret = startFret + fretSpan;
      return fret >= startFret && fret < endFret;
    });
  }, [mode, rootNote]);
  
    

  const setFillColorWithOpacity = (color: string, opacity: number) => {
    // Check if the color is in hex format
    if (color.startsWith('#')) {
      // Convert hex to RGB
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    
    // If it's already in RGB format
    const rgb = color.match(/\d+/g);
    return rgb ? `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})` : color;
  };
  

  const drawFretboard = useCallback((ctx: CanvasRenderingContext2D, mode: Mode, rootNote: string) => {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const numFrets = 18;
    const numStrings = 6;
    const fretWidth = width / numFrets;
    const stringHeight = (height - 150) / (numStrings - 1); // Adjusted to place strings at edges
    const xOffset = 20; 

    const styles = getComputedStyle(document.documentElement);
    const textColor = styles.getPropertyValue('--text-color');
    // const noteTextColor = styles.getPropertyValue('--note-text-color');
    const highlightedNoteTextColor = styles.getPropertyValue('--highlighted-note-text-color');
    const rootNoteColor = styles.getPropertyValue('--root-note-color');
    const rootNoteTextColor = styles.getPropertyValue('--root-note-text-color');
    const nutColor = styles.getPropertyValue('--nut-color');
    const highlightedNoteColor = styles.getPropertyValue('--highlighted-note-color');
    // const noteColor = styles.getPropertyValue('--note-color');
    const fretColor = styles.getPropertyValue('--fret-color');
    const stringColor = styles.getPropertyValue('--string-color');
    const shadowColor = styles.getPropertyValue('--shadow-color');

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Draw nut
    ctx.fillStyle = nutColor;
    ctx.fillRect(xOffset-2, 30, 33, height - 150);

    // Draw frets
    ctx.strokeStyle = fretColor;
    ctx.lineWidth = 4;
    for (let i = 1; i <= numFrets; i++) {
      const x = i * fretWidth + 30 + xOffset; // Adjust for nut width
      ctx.beginPath();
      ctx.moveTo(x, 30);
      ctx.lineTo(x, height - 120);
      ctx.stroke();
    }

    // Draw circles between 3rd and 4th strings starting at fret 3 and every 2 frets
    ctx.fillStyle = nutColor;
    for (let i = 2; i <= numFrets; i += 2) {
      if (i !== 10 && i !== 12) {
        const x = i * fretWidth + fretWidth / 2 + 30 + xOffset; // Adjust for nut width
        const y = (3 + 0.5) * stringHeight - 30; // Between 3rd and 4th strings
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    // Draw two circles on the 11th fret under the 2nd and 5th strings
    const x11thFret = 11 * fretWidth + fretWidth / 2 + 30 + xOffset; // Adjust for nut width
    const y2ndString = 1 * stringHeight + 30;
    const y5thString = 4 * stringHeight + 30;
    ctx.beginPath();
    ctx.arc(x11thFret, y2ndString, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x11thFret, y5thString, 10, 0, 2 * Math.PI);
    ctx.fill();

    // Draw strings
    ctx.lineWidth = 4;
    ctx.strokeStyle = stringColor;
    for (let i = 0; i < numStrings; i++) {
      const y = i * stringHeight + 30;
      ctx.beginPath();
      if (i === 0 || i === 5) {
        ctx.moveTo(xOffset, y);
      } else {
        ctx.moveTo(xOffset-2, y);
      }
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw notes
    for (let stringIndex = 0; stringIndex < numStrings; stringIndex++) {
      for (let fret = 0; fret < numFrets; fret++) {
        const note = getNote(stringIndex, fret);
        if (isNoteInScale(mode, note)) {
          let x = fret * fretWidth + 8; // Adjust for nut width
          if (fret === 0) {
            x = xOffset + 15; // Adjust for nut width
          }
          const y = stringIndex * stringHeight + 30;
          const isPrimaryPosition = isInPrimaryPosition(fret);
          const opacity = isPrimaryPosition ? 1 : 0.3;
          const noteColor = formatNote(note) === rootNote ? rootNoteColor : highlightedNoteColor;
          if (isPrimaryPosition) {
            ctx.fillStyle = noteColor;
          } else {
            ctx.fillStyle = setFillColorWithOpacity(noteColor, opacity);
          }

          ctx.strokeStyle = 'transparent'; 
          ctx.shadowBlur = 5; 
          ctx.shadowColor = shadowColor; 
          ctx.shadowOffsetX = 2; 
          ctx.shadowOffsetY = 2; 
          ctx.save(); // Save the current state
          ctx.beginPath();
          ctx.arc(x, y, 20, 0, 2 * Math.PI);
          ctx.clip(); // Clip to the note circle
          // Draw the note circle
          ctx.fill();
          ctx.stroke();
          ctx.shadowBlur = 0; 
          ctx.shadowColor = 'transparent'; 
          // Draw the note text
          ctx.fillStyle = formatNote(note) === rootNote ? rootNoteTextColor : highlightedNoteTextColor;
          ctx.font = 'bold 20px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(formatNote(note), x, y);
          ctx.restore(); // Restore the previous state
        }
      }
    }

    // Draw fret numbers
    ctx.fillStyle = textColor;
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    for (let i = 2; i <= numFrets; i += 2) {
      if (i !== 10 && i !== 12 && i !== 18) {
        const x = i * fretWidth + fretWidth / 2 + 30 + xOffset; // Adjust for nut width
        const y = height - 70; // Position below the fretboard
        const display = i + 1;
        ctx.fillText(display.toString(), x, y);
      }
    }
    ctx.fillText('12', x11thFret, height - 70); // Position below the fretboard
  }, [mode, rootNote, viewMode]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        drawFretboard(ctx, mode, rootNote);
      }
    }

    const handleThemeChange = () => {
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          drawFretboard(ctx, mode, rootNote);
        }
      }
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      observer.disconnect();
    };
  }, [mode, rootNote, drawFretboard, viewMode]);

  return (
    <div className="fretboard-container">
      <div className="fretboard">
        <canvas ref={canvasRef} width={1500} height={450} className="canvas" />
      </div>
    </div>
  );
};

export default Fretboard;