import React, { useState, useEffect, useCallback } from 'react';
import { getAllScales, getScaleByName } from '@services/ScaleService';
import { Scale, Mode } from '@shared/interfaces/Scale';
// import '../../../globals.css';
import styles from './ScalesModal.module.css';

interface ScalesModalProps {
  isOpen: boolean;
  onClose: () => void;
  rootNote: string;
  setMode: (mode: Mode | undefined) => void;
}

const ScalesModal: React.FC<ScalesModalProps> = ({ isOpen, onClose, rootNote, setMode }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [scales, setScales] = useState<Scale[]>([]);
  const [selectedScale, setSelectedScale] = useState<string>('');
  const [selectedMode, setSelectedMode] = useState<string>('');

  const handleModeClick = (scaleName: string, modeName: string) => {
    setSelectedScale(scaleName);
    setSelectedMode(modeName);
  };

  const handleApply = () => {
    if (selectedScale && selectedMode) {
      const mode = getScaleByName(selectedScale, selectedMode, rootNote);
      setMode(mode);
      onClose();
    }
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    setIsVisible(isOpen);
    if (isOpen) {
      const allScales = getAllScales();
      setScales(allScales);
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isVisible) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Select a scale</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className={styles.modalBody}>
          {scales.map((scale) => (
            <div key={scale.name} className={styles.scaleSection}>
              <h3 className={styles.scaleTitle}>{scale.name}</h3>
              <div className={styles.modesContainer}>
                {scale.modes.map((mode) => (
                  <button
                    key={mode.name}
                    className={`${styles.modeButton} ${selectedScale === scale.name && selectedMode === mode.name ? styles.selectedMode : ''}`}
                    onClick={() => handleModeClick(scale.name, mode.name)}
                  >
                    {mode.name}
                  </button>
                ))}
              </div>
            </div>
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

export default ScalesModal;
