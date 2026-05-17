"use client";

import { Chapter } from "@/lib/curriculumData";
import Link from "next/link";
import { CheckCircle, Lock, PlayCircle, Beaker, Leaf, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface ChapterCardProps {
  chapter: Chapter;
  isCompleted: boolean;
  isLocked: boolean;
  score: number;
}

const SubjectIcon = ({ subject }: { subject: Chapter["subject"] }) => {
  switch (subject) {
    case "Biology":
      return <Leaf className="text-emerald-500" />;
    case "Chemistry":
      return <Beaker className="text-purple-500" />;
    case "Physics":
      return <Zap className="text-amber-500" />;
    default:
      return null;
  }
};

export function ChapterCard({ chapter, isCompleted, isLocked, score }: ChapterCardProps) {
  return (
    <motion.div
      whileHover={!isLocked ? { scale: 1.02, y: -4 } : {}}
      whileTap={!isLocked ? { scale: 0.98 } : {}}
      className={`relative overflow-hidden rounded-2xl border ${
        isLocked
          ? "bg-secondary-50/50 border-border opacity-70 grayscale dark:bg-slate-800/50"
          : "bg-card border-border shadow-sm hover:shadow-md dark:bg-slate-800"
      } transition-all duration-200`}
    >
      {isLocked && (
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px] z-10 flex items-center justify-center">
          <div className="bg-background/80 p-3 rounded-full shadow-sm text-foreground/50">
            <Lock size={24} />
          </div>
        </div>
      )}

      <div className="p-5 h-full flex flex-col relative z-0">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-primary-50 dark:bg-primary-900/30 p-2 rounded-lg">
            <SubjectIcon subject={chapter.subject} />
          </div>
          {isCompleted && (
            <div className="text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 p-1 rounded-full">
              <CheckCircle size={20} />
            </div>
          )}
        </div>

        <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">
          Chapter {chapter.id}
        </div>
        <h3 className="text-lg font-bold mb-2 line-clamp-2 leading-tight">
          {chapter.title}
        </h3>
        <p className="text-sm text-foreground/70 mb-6 line-clamp-2 flex-grow">
          {chapter.description}
        </p>

        <div className="mt-auto">
          {!isLocked && (
            <div className="flex items-center justify-between">
              {score > 0 ? (
                <div className="flex flex-col w-full mr-4">
                  <div className="flex justify-between text-xs mb-1 text-foreground/60">
                    <span>Quiz Score</span>
                    <span className="font-semibold text-foreground">{score}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-secondary-50 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="text-xs font-medium text-foreground/50">
                  Not started
                </div>
              )}
              
              <Link
                href={`/chapters/${chapter.id}`}
                className="flex-shrink-0 bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-full transition-colors"
                aria-label={`Start chapter ${chapter.id}`}
              >
                <PlayCircle size={20} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
