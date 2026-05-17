"use client";

import { Chapter } from "@/lib/curriculumData";
import { ChapterCard } from "./ChapterCard";
import { useProgress } from "@/context/ProgressContext";
import { useEffect, useState } from "react";

interface ChapterCardWrapperProps {
  chapter: Chapter;
  index: number;
}

export function ChapterCardWrapper({ chapter, index }: ChapterCardWrapperProps) {
  const { progress, isHydrated } = useProgress();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by rendering a skeleton or nothing until hydrated
  if (!mounted || !isHydrated) {
    return (
      <div className="rounded-2xl border border-border bg-card/50 h-64 animate-pulse" />
    );
  }

  const isCompleted = progress.completedChapters.includes(chapter.id);
  const score = progress.quizScores[chapter.id] || 0;
  
  // Logic: Chapter 1 is always unlocked. Others are unlocked if the previous chapter is completed.
  // Actually, to make prototyping easier, let's unlock everything, OR we can implement the lock logic if desired.
  // The user requested "lock/unlock visual states", so let's enforce sequential unlocking.
  const isLocked = index > 0 && !progress.completedChapters.includes(String(index));

  return (
    <ChapterCard 
      chapter={chapter} 
      isCompleted={isCompleted} 
      isLocked={isLocked} 
      score={score} 
    />
  );
}
