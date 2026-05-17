"use client";

import { useState } from "react";
import { Droplet, TestTube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Liquid = { id: string; name: string; type: "acid" | "base" | "neutral"; color: string };
type Paper = { id: "red" | "blue"; name: string; baseColor: string };

const LIQUIDS: Liquid[] = [
  { id: "lemon", name: "Lemon Juice", type: "acid", color: "bg-yellow-400" },
  { id: "soap", name: "Soap Water", type: "base", color: "bg-teal-300" },
  { id: "water", name: "Distilled Water", type: "neutral", color: "bg-sky-200" },
];

const PAPERS: Paper[] = [
  { id: "red", name: "Red Litmus", baseColor: "bg-red-400" },
  { id: "blue", name: "Blue Litmus", baseColor: "bg-blue-400" },
];

export function AcidsBasesSimulator() {
  const [selectedLiquid, setSelectedLiquid] = useState<Liquid | null>(null);
  const [testedPaper, setTestedPaper] = useState<{ id: string; resultColor: string } | null>(null);

  const testLitmus = (paper: Paper) => {
    if (!selectedLiquid) return;

    let resultColor = paper.baseColor;
    if (selectedLiquid.type === "acid" && paper.id === "blue") {
      resultColor = "bg-red-400"; // Blue turns red
    } else if (selectedLiquid.type === "base" && paper.id === "red") {
      resultColor = "bg-blue-400"; // Red turns blue
    }

    setTestedPaper({ id: paper.id, resultColor });
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Controls */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Droplet size={20} className="text-primary-500" />
              1. Choose a Liquid
            </h3>
            <div className="flex flex-wrap gap-3">
              {LIQUIDS.map((liquid) => (
                <button
                  key={liquid.id}
                  onClick={() => {
                    setSelectedLiquid(liquid);
                    setTestedPaper(null); // Reset test
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all ${
                    selectedLiquid?.id === liquid.id
                      ? "border-primary-500 bg-primary-50 dark:bg-primary-900/30"
                      : "border-transparent bg-secondary-50 dark:bg-slate-800 hover:border-border"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full ${liquid.color} shadow-inner`} />
                  <span className="font-medium">{liquid.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={`${!selectedLiquid ? 'opacity-50 pointer-events-none' : ''} transition-opacity`}>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <TestTube size={20} className="text-accent-500" />
              2. Test with Litmus Paper
            </h3>
            <div className="flex gap-4">
              {PAPERS.map((paper) => (
                <button
                  key={paper.id}
                  onClick={() => testLitmus(paper)}
                  className="flex-1 p-4 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3"
                >
                  <div className={`w-8 h-16 rounded-sm ${paper.baseColor} shadow-inner transform -rotate-6`} />
                  <span className="font-medium">{paper.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Result Area */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border flex flex-col items-center justify-center p-8 min-h-[300px]">
          <AnimatePresence mode="wait">
            {!selectedLiquid ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-foreground/50 font-medium text-center"
              >
                Select a liquid to begin the experiment.
              </motion.p>
            ) : !testedPaper ? (
              <motion.div
                key="liquid-ready"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
              >
                <div className={`w-24 h-24 mx-auto rounded-full ${selectedLiquid.color} mb-4 shadow-lg flex items-center justify-center`}>
                  <Droplet size={32} className="text-black/20" />
                </div>
                <p className="font-semibold text-lg">{selectedLiquid.name} ready.</p>
                <p className="text-foreground/60 text-sm">Now, dip a litmus paper!</p>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center flex flex-col items-center"
              >
                <div className="relative w-24 h-32 mb-6">
                  {/* The Liquid Container */}
                  <div className={`absolute bottom-0 w-full h-1/2 rounded-b-xl ${selectedLiquid.color} shadow-lg opacity-80`} />
                  {/* The Litmus Paper */}
                  <motion.div 
                    initial={{ y: -40 }}
                    animate={{ y: 0 }}
                    className={`absolute left-1/2 -translate-x-1/2 w-8 h-24 rounded-sm ${testedPaper.resultColor} shadow-md z-10 transition-colors duration-1000`} 
                  />
                  {/* Container Outline */}
                  <div className="absolute inset-0 border-4 border-white/40 dark:border-slate-700 rounded-xl" />
                </div>
                
                <h4 className="text-xl font-bold mb-2">Observation</h4>
                <p className="text-foreground/80">
                  The {PAPERS.find(p => p.id === testedPaper.id)?.name} {
                    testedPaper.resultColor === PAPERS.find(p => p.id === testedPaper.id)?.baseColor
                      ? <span className="font-semibold text-foreground">remained unchanged</span>
                      : <span className="font-semibold text-foreground">turned {testedPaper.id === "blue" ? "red" : "blue"}</span>
                  }.
                </p>
                <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 font-semibold text-sm">
                  Conclusion: {selectedLiquid.name} is {selectedLiquid.type}.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
}
