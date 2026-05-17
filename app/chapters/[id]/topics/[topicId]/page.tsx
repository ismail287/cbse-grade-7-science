import { curriculumData } from "@/lib/curriculumData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, FlaskConical, Target, CheckCircle2 } from "lucide-react";
import { AcidsBasesSimulator } from "@/components/simulators/AcidsBasesSimulator";
import { MotionSimulator } from "@/components/simulators/MotionSimulator";
import { PlantAnatomySimulator } from "@/components/simulators/PlantAnatomySimulator";
import { CirculatorySystemSimulator } from "@/components/simulators/CirculatorySystemSimulator";
import { Quiz } from "@/components/Quiz";

interface TopicPageProps {
  params: Promise<{ id: string; topicId: string }>;
}

export async function generateStaticParams() {
  const params: { id: string; topicId: string }[] = [];
  for (const chapter of curriculumData) {
    for (const topic of chapter.topics) {
      params.push({
        id: chapter.id,
        topicId: topic.id,
      });
    }
  }
  return params;
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { id, topicId } = await params;
  const chapter = curriculumData.find((c) => c.id === id);

  if (!chapter) {
    notFound();
  }

  const topic = chapter.topics.find((t) => t.id === topicId);

  if (!topic) {
    notFound();
  }

  const renderSimulator = () => {
    switch (topic.simulatorType) {
      case "acids-bases":
        return <AcidsBasesSimulator />;
      case "motion":
        return <MotionSimulator />;
      case "plant-anatomy":
        return <PlantAnatomySimulator />;
      case "circulatory-system":
        return <CirculatorySystemSimulator />;
      default:
        return (
          <div className="bg-secondary-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-border text-center text-foreground/60 italic">
            No interactive simulator available for this topic yet. Proceed to the Knowledge Check!
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-16 space-y-12">
      <nav>
        <Link 
          href={`/chapters/${chapter.id}`}
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Chapter {chapter.id}
        </Link>
      </nav>

      <header className="border-b border-border pb-8">
        <div className="text-sm font-bold tracking-wider text-primary-500 uppercase mb-2">
          Topic {topic.id}
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
          {topic.title}
        </h1>
      </header>

      {/* Section 1: Content Blocks (Server rendered) */}
      <section className="scroll-mt-20 space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-xl text-primary-600 dark:text-primary-400">
            <BookOpen size={24} />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Learning Material</h2>
        </div>

        <div className="space-y-6">
          {topic.contentBlocks.map((block, idx) => {
            if (block.type === 'text') {
              return (
                <p key={idx} className="text-lg text-foreground/80 leading-relaxed">
                  {block.content}
                </p>
              );
            }
            if (block.type === 'definition') {
              return (
                <div key={idx} className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-6 rounded-r-xl my-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-accent-700 dark:text-accent-400 font-bold">
                    <CheckCircle2 size={20} />
                    <span>Key Definition</span>
                  </div>
                  <p className="text-lg text-foreground/90 font-medium italic">
                    "{block.content}"
                  </p>
                </div>
              );
            }
            if (block.type === 'formula') {
              return (
                <div key={idx} className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl my-6 text-center shadow-inner font-mono text-xl text-primary-700 dark:text-primary-300 tracking-wider">
                  {block.content}
                </div>
              );
            }
            if (block.type === 'diagram') {
              return (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-border p-8 rounded-2xl my-8 flex flex-col items-center shadow-sm">
                  <div className="w-full max-w-lg aspect-video bg-secondary-100 dark:bg-secondary-800/50 rounded-lg flex items-center justify-center text-foreground/50 italic mb-4">
                    [Diagram: {block.content}]
                  </div>
                  <p className="text-sm text-foreground/60 text-center">
                    Figure {idx + 1}: {block.content}
                  </p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>

      {/* Section 2: Interactive Simulator (Client Component) */}
      {topic.simulatorType && (
        <section className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-accent-100 dark:bg-accent-900/50 p-2 rounded-xl text-accent-600 dark:text-accent-400">
              <FlaskConical size={24} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Interactive Lab</h2>
          </div>
          {renderSimulator()}
        </section>
      )}

      {/* Section 3: Knowledge Check Quiz (Client Component) */}
      <section className="scroll-mt-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-xl text-emerald-600 dark:text-emerald-400">
            <Target size={24} />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Topic Knowledge Check</h2>
        </div>
        {topic.quiz && topic.quiz.length > 0 ? (
          <Quiz chapterId={chapter.id} topicId={topic.id} questions={topic.quiz} />
        ) : (
          <div className="bg-secondary-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-border text-center text-foreground/60 italic">
            Quiz coming soon for this topic.
          </div>
        )}
      </section>
    </div>
  );
}
