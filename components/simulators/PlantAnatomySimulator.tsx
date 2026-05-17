"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type PlantPart = {
  id: string;
  name: string;
  description: string;
  color: string;
  hoverColor: string;
};

const PLANT_PARTS: Record<string, PlantPart> = {
  leaf: {
    id: "leaf",
    name: "Leaf (Stomata & Chlorophyll)",
    description: "The site of photosynthesis. Stomata are tiny pores that allow CO₂ to enter and O₂ to exit.",
    color: "#22c55e",
    hoverColor: "#16a34a"
  },
  stem: {
    id: "stem",
    name: "Stem",
    description: "Supports the leaves and flowers. It houses the vascular tissues (xylem and phloem).",
    color: "#65a30d",
    hoverColor: "#4d7c0f"
  },
  xylem: {
    id: "xylem",
    name: "Xylem",
    description: "Vascular tissue that transports water and dissolved minerals upward from roots to leaves.",
    color: "#3b82f6",
    hoverColor: "#2563eb"
  },
  phloem: {
    id: "phloem",
    name: "Phloem",
    description: "Vascular tissue that transports sugars (food) produced in leaves to all other parts of the plant.",
    color: "#eab308",
    hoverColor: "#ca8a04"
  },
  roots: {
    id: "roots",
    name: "Roots",
    description: "Anchor the plant in the soil and absorb water and essential minerals.",
    color: "#8b5cf6",
    hoverColor: "#7c3aed"
  }
};

export function PlantAnatomySimulator() {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => setHoveredPart(id);
  const handleMouseLeave = () => setHoveredPart(null);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left: Interactive SVG Diagram */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 flex justify-center border border-border relative">
          <svg viewBox="0 0 200 300" className="w-full max-w-[250px] h-auto drop-shadow-md">
            
            {/* Roots */}
            <g 
              onMouseEnter={() => handleMouseEnter("roots")} 
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer transition-colors duration-300"
              fill={hoveredPart === "roots" ? PLANT_PARTS.roots.hoverColor : PLANT_PARTS.roots.color}
            >
              <path d="M90,250 Q80,280 70,290" stroke="currentColor" strokeWidth="4" fill="none" />
              <path d="M100,250 Q105,290 110,295" stroke="currentColor" strokeWidth="5" fill="none" />
              <path d="M110,250 Q120,270 130,280" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M95,260 Q85,270 80,275" stroke="currentColor" strokeWidth="2" fill="none" />
            </g>

            {/* Stem Outer */}
            <rect 
              x="90" y="100" width="20" height="150" rx="2"
              onMouseEnter={() => handleMouseEnter("stem")} 
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer transition-colors duration-300"
              fill={hoveredPart === "stem" ? PLANT_PARTS.stem.hoverColor : PLANT_PARTS.stem.color}
            />

            {/* Xylem (Inner left) */}
            <rect 
              x="94" y="100" width="4" height="150"
              onMouseEnter={() => handleMouseEnter("xylem")} 
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer transition-colors duration-300"
              fill={hoveredPart === "xylem" ? PLANT_PARTS.xylem.hoverColor : PLANT_PARTS.xylem.color}
            />

            {/* Phloem (Inner right) */}
            <rect 
              x="102" y="100" width="4" height="150"
              onMouseEnter={() => handleMouseEnter("phloem")} 
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer transition-colors duration-300"
              fill={hoveredPart === "phloem" ? PLANT_PARTS.phloem.hoverColor : PLANT_PARTS.phloem.color}
            />

            {/* Leaves */}
            <g 
              onMouseEnter={() => handleMouseEnter("leaf")} 
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer transition-colors duration-300"
              fill={hoveredPart === "leaf" ? PLANT_PARTS.leaf.hoverColor : PLANT_PARTS.leaf.color}
            >
              {/* Left Leaf */}
              <path d="M90,140 Q40,110 30,150 Q70,170 90,150" />
              {/* Right Leaf */}
              <path d="M110,120 Q160,90 170,130 Q130,150 110,130" />
              {/* Top Leaf */}
              <path d="M100,100 Q70,50 100,20 Q130,50 100,100" />
            </g>

          </svg>
          
          <div className="absolute top-4 left-4 text-xs font-medium text-foreground/50 bg-background/80 px-2 py-1 rounded backdrop-blur-sm border border-border">
            Hover over plant parts
          </div>
        </div>

        {/* Right: Info Panel */}
        <div className="h-full flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <Info size={20} className="text-primary-500" />
            <h3 className="font-bold text-lg text-foreground">Anatomy Inspector</h3>
          </div>
          
          <div className="bg-secondary-50 dark:bg-slate-800 rounded-xl p-6 border border-border min-h-[200px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {hoveredPart && PLANT_PARTS[hoveredPart] ? (
                <motion.div
                  key={hoveredPart}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-4 h-4 rounded-full shadow-inner"
                      style={{ backgroundColor: PLANT_PARTS[hoveredPart].color }}
                    />
                    <h4 className="text-xl font-bold">{PLANT_PARTS[hoveredPart].name}</h4>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {PLANT_PARTS[hoveredPart].description}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-foreground/50 text-center text-lg italic"
                >
                  Hover over any part of the diagram to inspect its physiological function.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
