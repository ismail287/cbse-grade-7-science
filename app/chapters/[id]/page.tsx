import { curriculumData } from "@/lib/curriculumData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, FlaskConical, Target } from "lucide-react";
import { AcidsBasesSimulator } from "@/components/simulators/AcidsBasesSimulator";
import { MotionSimulator } from "@/components/simulators/MotionSimulator";
import { PlantAnatomySimulator } from "@/components/simulators/PlantAnatomySimulator";
import { Quiz } from "@/components/Quiz";

interface ChapterPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return curriculumData.map((chapter) => ({
    id: chapter.id,
  }));
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { id } = await params;
  const chapter = curriculumData.find((c) => c.id === id);

  if (!chapter) {
    notFound();
  }

  const renderSimulator = () => {
    switch (chapter.simulatorType) {
      case "acids-bases":
        return <AcidsBasesSimulator />;
      case "motion":
        return <MotionSimulator />;
      case "plant-anatomy":
        return <PlantAnatomySimulator />;
      default:
        return (
          <div className="bg-secondary-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-border text-center text-foreground/60 italic">
            No interactive simulator available for this chapter yet. Proceed to the Knowledge Check!
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-16 space-y-12">
      <nav>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </Link>
      </nav>

      <header className="border-b border-border pb-8">
        <div className="text-sm font-bold tracking-wider text-primary-500 uppercase mb-2">
          Chapter {chapter.id} • {chapter.subject}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
          {chapter.title}
        </h1>
        <p className="text-lg text-foreground/70 leading-relaxed">
          {chapter.description}
        </p>
      </header>

      {/* Section 1: Key Concepts (Server rendered) */}
      <section className="scroll-mt-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-xl text-primary-600 dark:text-primary-400">
            <BookOpen size={24} />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Key Concepts</h2>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <ul className="space-y-4">
            {chapter.keyConcepts.map((concept, idx) => {
              const [term, definition] = concept.split(":");
              return (
                <li key={idx} className="flex items-start gap-3">
                  <div className="min-w-1.5 min-h-1.5 mt-2.5 rounded-full bg-primary-500" />
                  <div>
                    {definition ? (
                      <>
                        <strong className="text-foreground">{term}:</strong>
                        <span className="text-foreground/80">{definition}</span>
                      </>
                    ) : (
                      <span className="text-foreground/80">{concept}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Section 2: Interactive Simulator (Client Component) */}
      <section className="scroll-mt-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-accent-100 dark:bg-accent-900/50 p-2 rounded-xl text-accent-600 dark:text-accent-400">
            <FlaskConical size={24} />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Interactive Lab</h2>
        </div>
        {renderSimulator()}
      </section>

      {/* Section 3: Knowledge Check Quiz (Client Component) */}
      <section className="scroll-mt-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-xl text-emerald-600 dark:text-emerald-400">
            <Target size={24} />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Knowledge Check</h2>
        </div>
        {chapter.quiz && chapter.quiz.length > 0 ? (
          <Quiz chapterId={chapter.id} questions={chapter.quiz} />
        ) : (
          <div className="bg-secondary-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-border text-center text-foreground/60 italic">
            Quiz coming soon.
          </div>
        )}
      </section>
    </div>
  );
}
