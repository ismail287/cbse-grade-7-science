"use client";

import { useState } from "react";
import { QuizQuestion } from "@/lib/curriculumData";
import { useProgress } from "@/context/ProgressContext";
import { CheckCircle2, XCircle, ArrowRight, RefreshCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface QuizProps {
  chapterId: string;
  questions: QuizQuestion[];
}

export function Quiz({ chapterId, questions }: QuizProps) {
  const { markChapterCompleted, saveQuizScore } = useProgress();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      const finalScore = score + (selectedOption === currentQuestion.correctAnswerIndex ? 1 : 0);
      const percentage = Math.round((finalScore / questions.length) * 100);
      
      saveQuizScore(chapterId, percentage);
      if (percentage >= 50) { // Passing score
        markChapterCompleted(chapterId);
      }
      setShowResults(true);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 50;

    return (
      <div className="bg-card border border-border rounded-2xl p-8 shadow-sm text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <div className={`p-6 rounded-full ${passed ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30" : "bg-amber-100 text-amber-600 dark:bg-amber-900/30"}`}>
            {passed ? <CheckCircle2 size={64} /> : <RefreshCcw size={64} />}
          </div>
          
          <h3 className="text-3xl font-extrabold text-foreground">
            {passed ? "Chapter Completed!" : "Keep Trying!"}
          </h3>
          
          <p className="text-xl text-foreground/70">
            You scored <span className="font-bold text-foreground">{score}</span> out of <span className="font-bold text-foreground">{questions.length}</span> ({percentage}%)
          </p>

          <div className="flex gap-4 pt-4">
            <button
              onClick={handleRetry}
              className="px-6 py-3 rounded-xl border border-border font-medium hover:bg-secondary-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              <RefreshCcw size={20} />
              Retry Quiz
            </button>
            {passed && (
              <Link
                href="/"
                className="px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors flex items-center gap-2"
              >
                Return to Dashboard
                <ArrowRight size={20} />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="bg-secondary-50 dark:bg-slate-800/50 px-6 py-4 border-b border-border flex justify-between items-center">
        <span className="font-semibold text-primary-600 dark:text-primary-400">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span className="text-sm font-medium text-foreground/60">
          Score: {score}
        </span>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground leading-snug">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQuestion.correctAnswerIndex;
            
            let btnClass = "border-border hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30";
            if (isAnswered) {
              if (isCorrect) {
                btnClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100";
              } else if (isSelected && !isCorrect) {
                btnClass = "border-red-500 bg-red-50 dark:bg-red-900/30 text-red-900 dark:text-red-100";
              } else {
                btnClass = "border-border opacity-50";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${btnClass}`}
              >
                <span className="font-medium text-lg">{option}</span>
                {isAnswered && isCorrect && <CheckCircle2 className="text-emerald-500" />}
                {isAnswered && isSelected && !isCorrect && <XCircle className="text-red-500" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 overflow-hidden"
            >
              <div className="p-4 rounded-xl bg-accent-50 dark:bg-accent-900/20 border border-accent-100 dark:border-accent-900/30 text-accent-800 dark:text-accent-200">
                <span className="font-bold mr-2">Explanation:</span>
                {currentQuestion.explanation}
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium flex items-center gap-2 transition-colors shadow-sm"
                >
                  {currentIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
