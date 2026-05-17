"use client";

import { Chapter, curriculumData } from "@/lib/curriculumData";
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

  if (!mounted || !isHydrated) {
    return (
      <div className="rounded-2xl border border-border bg-card/50 h-64 animate-pulse" />
    );
  }

  const totalTopicsCount = chapter.topics.length;
  const completedTopicsCount = chapter.topics.filter(t => 
    progress.completedTopics.includes(t.id)
  ).length;
  
  const isCompleted = totalTopicsCount > 0 && completedTopicsCount === totalTopicsCount;
  
  // Calculate average quiz score for the chapter
  let totalScore = 0;
  chapter.topics.forEach(t => {
    totalScore += progress.topicQuizScores[t.id] || 0;
  });
  const avgScore = totalTopicsCount > 0 ? Math.round(totalScore / totalTopicsCount) : 0;
  
  // Chapter is unlocked if it's the first chapter or the previous chapter is completed
  const previousChapter = index > 0 ? curriculumData[index - 1] : null;
  const isLocked = previousChapter ? 
    previousChapter.topics.filter(t => progress.completedTopics.includes(t.id)).length !== previousChapter.topics.length 
    : false;

  return (
    <ChapterCard 
      chapter={chapter} 
      isCompleted={isCompleted} 
      isLocked={isLocked} 
      completedTopicsCount={completedTopicsCount}
      totalTopicsCount={totalTopicsCount}
      avgScore={avgScore} 
    />
  );
}
