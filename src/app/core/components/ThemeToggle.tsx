"use client";

import React, { useEffect, useState } from 'react';
import { useSettings } from '@contexts/SettingsContext';
import './ThemeToggle.css';

export function ThemeToggle() {
  const { viewMode, setViewMode } = useSettings();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    const newMode = viewMode === 'light' ? 'dark' : 'light';
    setViewMode(newMode);
  };

  if (!isMounted) {
    return null; // Render nothing on the server
  }

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className={`toggle ${viewMode}`}>
        <div className="circle">
          {viewMode === 'light' ? '☀️' : '🌙'}
        </div>
      </div>
    </div>
  );
}