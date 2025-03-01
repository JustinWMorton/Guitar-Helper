"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SettingsContextProps {
  viewMode: string;
  setViewMode: (mode: string) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [viewMode, setViewMode] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('viewMode') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('viewMode', viewMode);
    if (viewMode === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [viewMode]);

  return (
    <SettingsContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
