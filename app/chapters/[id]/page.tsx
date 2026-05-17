import { curriculumData } from "@/lib/curriculumData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Layers } from "lucide-react";
import { TopicList } from "@/components/TopicList";

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

      {/* Topics Table of Contents */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-xl text-primary-600 dark:text-primary-400">
            <Layers size={24} />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Topics in this Chapter</h2>
        </div>
        
        <TopicList chapter={chapter} />
      </section>
    </div>
  );
}
