import React, { useState, useEffect, useCallback } from 'react';
import styles from './RootModal.module.css';

interface RootModalProps {
  isOpen: boolean;
  onClose: () => void;
  rootNote: string;
  setRootNote: (rootNote: string) => void;
}

const RootModal: React.FC<RootModalProps> = ({ isOpen, onClose, rootNote, setRootNote }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [selectedRootNote, setSelectedRootNote] = useState<string>(rootNote);

  const handleRootNoteClick = (note: string) => {
    setSelectedRootNote(note);
  };

  const handleApply = () => {
    setRootNote(selectedRootNote);
    onClose();
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    setIsVisible(isOpen);
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isVisible) return null;

  const rootNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Select a key</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className={styles.modalBody}>
          {rootNotes.map((note) => (
            <button
              key={note}
              className={`${styles.rootNoteButton} ${selectedRootNote === note ? styles.selectedRootNote : ''}`}
              onClick={() => handleRootNoteClick(note)}
            >
              {note}
            </button>
          ))}
        </div>
        <div className={styles.modalFooter}>
          <button onClick={handleApply} className={styles.applyButton}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default RootModal;
