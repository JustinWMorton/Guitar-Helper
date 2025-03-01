"use client";

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Fretboard from '@components/Fretboard';
import { getScaleByName, getScaleByMode } from '@services/ScaleService';
import { Mode } from '@shared/interfaces/Scale';
import ScalesModal from '@components/modals/ScalesModal';
import RootModal from '@components/modals/RootModal';
import './scales.css';

const Scales: NextPage = () => {
  const [rootNote, setRootNote] = useState<string>('E');
  const [mode, setMode] = useState<Mode | undefined>(getScaleByName('Pentatonic', 'Minor Pentatonic', rootNote));
  const [isScalesModalOpen, setIsScalesModalOpen] = useState(false);
  const [isRootModalOpen, setIsRootModalOpen] = useState(false);

  const openScalesModal = () => setIsScalesModalOpen(true);
  const closeScalesModal = () => setIsScalesModalOpen(false);

  const openRootModal = () => setIsRootModalOpen(true);
  const closeRootModal = () => setIsRootModalOpen(false);

  useEffect(() => {
    if (mode) {
      const scale = getScaleByMode(mode.name);
      if (scale) {
        const newMode = getScaleByName(scale.name, mode.name, rootNote);
        setMode(newMode);
      }
    }
  }, [rootNote]); //eslint-disable-line

  const handleRootNoteChange = (event: React.ChangeEvent<HTMLSelectElement>) => { //eslint-disable-line
    setRootNote(event.target.value);
  };

  return (
    <div className="scales-page">
      <div className="content-wrapper @container">
        <div className="menu-wrapper">
          <h1>Guitar Scales</h1>
          <hr />
          <div className="select-wrapper">
            <button onClick={openRootModal} className='dropdown-button'>
              {rootNote} <span className="dropdown-arrow">▼</span>
            </button>
            <button onClick={openScalesModal} className='dropdown-button'>
              {mode ? `${mode.name} scale` : 'Select a scale'} <span className="dropdown-arrow">▼</span>
            </button>
          </div>
          <ScalesModal isOpen={isScalesModalOpen} onClose={closeScalesModal} rootNote={rootNote} setMode={setMode} />
          <RootModal isOpen={isRootModalOpen} onClose={closeRootModal} rootNote={rootNote} setRootNote={setRootNote} />
        </div>
        <div className="fretboard-wrapper">
          {mode && <Fretboard mode={mode} rootNote={rootNote} />}
        </div>
      </div>
    </div>
  );
}

export default Scales;