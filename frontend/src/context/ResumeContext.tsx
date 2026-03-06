import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Resume } from '../types';

const STORAGE_KEY = 'resume-builder-data';

interface ResumeContextType {
  resume: Resume;
  updateResume: (updates: Partial<Resume>) => void;
  resetResume: () => void;
}

const defaultResume: Resume = {
  id: crypto.randomUUID(),
  contact: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
  },
  summary: '',
  experience: [],
  education: [],
  projects: [],
  skills: [],
  template: 'ats',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [resume, setResume] = useState<Resume>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultResume;
  });

  // Auto-save to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resume));
    }, 500); // Debounce 500ms

    return () => clearTimeout(timer);
  }, [resume]);

  const updateResume = (updates: Partial<Resume>) => {
    setResume(prev => ({
      ...prev,
      ...updates,
      updatedAt: new Date().toISOString(),
    }));
  };

  const resetResume = () => {
    setResume(defaultResume);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ResumeContext.Provider value={{ resume, updateResume, resetResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within ResumeProvider');
  }
  return context;
};
