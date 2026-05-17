import { curriculumData } from "@/lib/curriculumData";
import { ChapterCardWrapper } from "@/components/ChapterCardWrapper";
import { Sparkles, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-primary-900 to-primary-700 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-10 w-40 h-40 bg-accent-500 opacity-20 rounded-full blur-2xl transform -translate-y-1/2"></div>
        
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-2">
            <GraduationCap size={16} />
            <span>CBSE Grade 7 Science</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Master the Sciences
          </h1>
          <p className="text-primary-100 max-w-xl text-lg">
            Unlock the mysteries of the universe, from the smallest cells to the fastest moving objects. Complete chapters to unlock your next adventure!
          </p>
        </div>
        
        {/* Progress Summary will be rendered by a client component here if needed */}
      </header>

      <section>
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="text-accent-500" />
          <h2 className="text-2xl font-bold">Your Curriculum Journey</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {curriculumData.map((chapter, index) => (
            <ChapterCardWrapper 
              key={chapter.id} 
              chapter={chapter} 
              index={index} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}
