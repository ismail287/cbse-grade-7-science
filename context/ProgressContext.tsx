"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ProgressState = {
  completedTopics: string[]; // e.g., ["1.1", "1.2", "4.1"]
  topicQuizScores: Record<string, number>; // Keyed by topicId, e.g., "1.1": 100
};

type ProgressContextType = {
  progress: ProgressState;
  markTopicCompleted: (topicId: string) => void;
  saveTopicQuizScore: (topicId: string, score: number) => void;
  isHydrated: boolean;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>({
    completedTopics: [],
    topicQuizScores: {},
  });
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("cbse-science-progress-topics");
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse topic progress from local storage", e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("cbse-science-progress-topics", JSON.stringify(progress));
    }
  }, [progress, isHydrated]);

  const markTopicCompleted = (topicId: string) => {
    setProgress((prev) => ({
      ...prev,
      completedTopics: prev.completedTopics.includes(topicId)
        ? prev.completedTopics
        : [...prev.completedTopics, topicId],
    }));
  };

  const saveTopicQuizScore = (topicId: string, score: number) => {
    setProgress((prev) => ({
      ...prev,
      topicQuizScores: {
        ...prev.topicQuizScores,
        [topicId]: Math.max(score, prev.topicQuizScores[topicId] || 0),
      },
    }));
  };

  return (
    <ProgressContext.Provider
      value={{ progress, markTopicCompleted, saveTopicQuizScore, isHydrated }}
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
