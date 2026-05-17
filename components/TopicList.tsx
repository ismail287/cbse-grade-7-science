"use client";

import { Chapter, Topic } from "@/lib/curriculumData";
import { useProgress } from "@/context/ProgressContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, PlayCircle, Lock, BookOpen } from "lucide-react";

interface TopicListProps {
  chapter: Chapter;
}

export function TopicList({ chapter }: TopicListProps) {
  const { progress, isHydrated } = useProgress();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isHydrated) {
    return (
      <div className="space-y-4">
        {chapter.topics.map((t) => (
          <div key={t.id} className="h-24 rounded-xl border border-border bg-card/50 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {chapter.topics.map((topic, index) => {
        const isCompleted = progress.completedTopics.includes(topic.id);
        
        // Topic unlocking logic: first topic always unlocked.
        // Subsequent topics unlocked if previous topic is completed.
        const previousTopic = index > 0 ? chapter.topics[index - 1] : null;
        const isLocked = previousTopic ? !progress.completedTopics.includes(previousTopic.id) : false;
        
        const score = progress.topicQuizScores[topic.id] || 0;
        
        return (
          <motion.div
            key={topic.id}
            whileHover={!isLocked ? { scale: 1.01, x: 4 } : {}}
            className={`relative overflow-hidden rounded-xl border ${
              isLocked
                ? "bg-secondary-50/50 border-border opacity-70 grayscale dark:bg-slate-800/50"
                : isCompleted 
                  ? "bg-emerald-50/30 border-emerald-100 dark:bg-emerald-900/10 dark:border-emerald-900/30 shadow-sm" 
                  : "bg-card border-border shadow-sm hover:shadow-md dark:bg-slate-800"
            } transition-all duration-200 flex items-stretch`}
          >
            {isLocked && (
              <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px] z-10 flex items-center justify-center">
                <div className="bg-background/80 p-2 rounded-full shadow-sm text-foreground/50">
                  <Lock size={20} />
                </div>
              </div>
            )}
            
            {/* Status Indicator Bar */}
            <div className={`w-2 flex-shrink-0 ${isCompleted ? 'bg-emerald-500' : isLocked ? 'bg-slate-300 dark:bg-slate-700' : 'bg-primary-500'}`} />

            <div className="p-4 flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                    Topic {topic.id}
                  </span>
                  {isCompleted && (
                    <CheckCircle size={16} className="text-emerald-500" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {topic.title}
                </h3>
              </div>
              
              {!isLocked && (
                <div className="flex items-center gap-4 md:min-w-48 justify-end">
                  {score > 0 && (
                    <div className="flex flex-col items-end text-xs">
                      <span className="text-foreground/60">Quiz Score</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{score}%</span>
                    </div>
                  )}
                  
                  <Link
                    href={`/chapters/${chapter.id}/topics/${topic.id}`}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      isCompleted 
                        ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-400"
                        : "bg-primary-500 text-white hover:bg-primary-600"
                    }`}
                  >
                    {isCompleted ? "Review" : "Start Learning"}
                    <PlayCircle size={16} />
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
