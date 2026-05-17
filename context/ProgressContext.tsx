"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ProgressState = {
  completedChapters: string[];
  quizScores: Record<string, number>;
};

type ProgressContextType = {
  progress: ProgressState;
  markChapterCompleted: (chapterId: string) => void;
  saveQuizScore: (chapterId: string, score: number) => void;
  isHydrated: boolean;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>({
    completedChapters: [],
    quizScores: {},
  });
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("cbse-science-progress");
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress from local storage", e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("cbse-science-progress", JSON.stringify(progress));
    }
  }, [progress, isHydrated]);

  const markChapterCompleted = (chapterId: string) => {
    setProgress((prev) => ({
      ...prev,
      completedChapters: prev.completedChapters.includes(chapterId)
        ? prev.completedChapters
        : [...prev.completedChapters, chapterId],
    }));
  };

  const saveQuizScore = (chapterId: string, score: number) => {
    setProgress((prev) => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [chapterId]: Math.max(score, prev.quizScores[chapterId] || 0),
      },
    }));
  };

  return (
    <ProgressContext.Provider
      value={{ progress, markChapterCompleted, saveQuizScore, isHydrated }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}
