export type Subject = "Biology" | "Chemistry" | "Physics";

export interface ContentBlock {
  type: "text" | "definition" | "formula" | "diagram" | "important" | "example";
  content: string;
  diagramUrl?: string; // Optional URL or placeholder name for SVG/Images
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Topic {
  id: string; // e.g. "1.1"
  title: string;
  contentBlocks: ContentBlock[];
  simulatorType?: "acids-bases" | "motion" | "circulatory-system" | "plant-anatomy" | "none";
  quiz: QuizQuestion[];
}

export interface Chapter {
  id: string; // "1", "2", etc.
  title: string;
  subject: Subject;
  description: string;
  topics: Topic[];
}

// Import individual chapters
import { chapter1 } from "./data/chapter1";
import { chapter2 } from "./data/chapter2";
import { chapter3 } from "./data/chapter3";
import { chapter4 } from "./data/chapter4";
import { chapter5 } from "./data/chapter5";
import { chapter6 } from "./data/chapter6";
import { chapter7 } from "./data/chapter7";
import { chapter8 } from "./data/chapter8";
import { chapter9 } from "./data/chapter9";
import { chapter10 } from "./data/chapter10";
import { chapter11 } from "./data/chapter11";
import { chapter12 } from "./data/chapter12";
import { chapter13 } from "./data/chapter13";

export const curriculumData: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  chapter8,
  chapter9,
  chapter10,
  chapter11,
  chapter12,
  chapter13,
];
