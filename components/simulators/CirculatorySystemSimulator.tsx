"use client";

import { useState, useEffect } from "react";
import { Heart, Activity, Wind, Droplet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CirculatorySystemSimulator() {
  const [heartRate, setHeartRate] = useState<number>(72); // BPM
  const [isPumping, setIsPumping] = useState(true);
  const [bloodOxygen, setBloodOxygen] = useState<number>(98); // %

  // Calculate animation duration based on heart rate (BPM)
  // Duration of one beat in seconds = 60 / BPM
  const beatDuration = 60 / heartRate;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Controls & Stats */}
        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-border">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
              <Activity size={20} className="text-rose-500" />
              Vital Signs Control
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="font-semibold text-foreground/80 flex items-center gap-2">
                    <Heart size={16} className="text-rose-500" /> Heart Rate
                  </label>
                  <span className="text-rose-600 dark:text-rose-400 font-bold bg-rose-100 dark:bg-rose-900/30 px-3 py-1 rounded-full text-sm">
                    {heartRate} BPM
                  </span>
                </div>
                <input 
                  type="range" 
                  min="40" 
                  max="180" 
                  step="1"
                  value={heartRate}
                  onChange={(e) => setHeartRate(Number(e.target.value))}
                  className="w-full h-2 bg-secondary-50 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
                <div className="flex justify-between text-xs text-foreground/50">
                  <span>Resting (40)</span>
                  <span>Exercise (180)</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="font-semibold text-foreground/80 flex items-center gap-2">
                    <Wind size={16} className="text-sky-500" /> Blood Oxygen
                  </label>
                  <span className="text-sky-600 dark:text-sky-400 font-bold bg-sky-100 dark:bg-sky-900/30 px-3 py-1 rounded-full text-sm">
                    {bloodOxygen}% SpO2
                  </span>
                </div>
                <input 
                  type="range" 
                  min="85" 
                  max="100" 
                  step="1"
                  value={bloodOxygen}
                  onChange={(e) => setBloodOxygen(Number(e.target.value))}
                  className="w-full h-2 bg-secondary-50 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => setIsPumping(!isPumping)}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-colors ${
                  isPumping 
                    ? "bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-400" 
                    : "bg-rose-500 text-white hover:bg-rose-600"
                }`}
              >
                <Heart size={20} className={isPumping ? "animate-pulse" : ""} fill={isPumping ? "currentColor" : "none"} />
                {isPumping ? "Pause Heart" : "Start Heart"}
              </button>
            </div>
          </div>
          
          <div className="bg-secondary-50 dark:bg-slate-800/50 p-4 rounded-xl text-sm text-foreground/70 leading-relaxed border border-border">
            <strong className="text-foreground block mb-2">Observation Notes:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li>Notice how the <span className="text-rose-500 font-medium">red (oxygenated)</span> blood travels from the lungs to the heart, then to the body.</li>
              <li>The <span className="text-blue-500 font-medium">blue (deoxygenated)</span> blood travels from the body back to the heart, then to the lungs.</li>
              <li>Higher heart rates circulate blood faster during exercise.</li>
            </ul>
          </div>
        </div>

        {/* Right: Circulatory System Visualization */}
        <div className="bg-slate-900 rounded-2xl border border-border flex flex-col items-center justify-center p-8 relative overflow-hidden min-h-[400px]">
          {/* Lungs */}
          <div className="absolute top-12 flex flex-col items-center">
            <div className="flex gap-4">
              <div className="w-16 h-20 bg-sky-200/20 rounded-t-full rounded-b-3xl border border-sky-400/30 flex items-center justify-center backdrop-blur-sm">
                <Wind className="text-sky-300 opacity-50" />
              </div>
              <div className="w-16 h-20 bg-sky-200/20 rounded-t-full rounded-b-3xl border border-sky-400/30 flex items-center justify-center backdrop-blur-sm">
                <Wind className="text-sky-300 opacity-50" />
              </div>
            </div>
            <span className="text-sky-300/70 text-xs font-semibold mt-2 tracking-widest uppercase">Lungs</span>
          </div>

          {/* Body */}
          <div className="absolute bottom-12 flex flex-col items-center">
            <span className="text-emerald-300/70 text-xs font-semibold mb-2 tracking-widest uppercase">Body Tissues</span>
            <div className="w-32 h-12 bg-emerald-200/20 rounded-full border border-emerald-400/30 flex gap-2 items-center justify-center backdrop-blur-sm px-4">
              <div className="w-full h-1 bg-gradient-to-r from-rose-500 to-blue-500 rounded-full opacity-50" />
            </div>
          </div>

          {/* The Heart */}
          <motion.div
            animate={isPumping ? {
              scale: [1, 1.15, 1],
            } : { scale: 1 }}
            transition={{
              duration: beatDuration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="relative">
              <Heart size={80} className="text-rose-600 drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]" fill="currentColor" />
              {/* Four chambers visual hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-0.5 h-12 bg-black/50 absolute" />
                <div className="w-12 h-0.5 bg-black/50 absolute" />
              </div>
            </div>
          </motion.div>

          {/* Blood Flow Paths (Simplified SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* Pulmonary Artery (Heart -> Lungs) BLUE */}
            <path d="M 50% 50% Q 40% 30% 45% 20%" stroke="var(--color-blue-500)" strokeWidth="4" fill="none" strokeDasharray="6 6" className="opacity-50" />
            {/* Pulmonary Vein (Lungs -> Heart) RED */}
            <path d="M 55% 20% Q 60% 30% 50% 50%" stroke="var(--color-rose-500)" strokeWidth="4" fill="none" strokeDasharray="6 6" className="opacity-50" />
            
            {/* Aorta (Heart -> Body) RED */}
            <path d="M 50% 50% Q 60% 70% 55% 80%" stroke="var(--color-rose-500)" strokeWidth="6" fill="none" strokeDasharray="8 8" className="opacity-50" />
            {/* Vena Cava (Body -> Heart) BLUE */}
            <path d="M 45% 80% Q 40% 70% 50% 50%" stroke="var(--color-blue-500)" strokeWidth="6" fill="none" strokeDasharray="8 8" className="opacity-50" />
          </svg>

          {/* Animated Blood Particles */}
          <AnimatePresence>
            {isPumping && (
              <>
                {/* Lungs to Heart (Oxygenated - Red) */}
                <motion.div
                  className="absolute w-3 h-3 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(225,29,72,0.8)] z-20"
                  animate={{
                    top: ["20%", "30%", "50%"],
                    left: ["55%", "60%", "50%"],
                    scale: [1, 1.2, 0]
                  }}
                  transition={{ duration: beatDuration * 1.5, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Heart to Body (Oxygenated - Red) */}
                <motion.div
                  className="absolute w-4 h-4 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(225,29,72,0.8)] z-20"
                  animate={{
                    top: ["50%", "70%", "80%"],
                    left: ["50%", "60%", "55%"],
                    scale: [0, 1.2, 1]
                  }}
                  transition={{ duration: beatDuration * 1.5, repeat: Infinity, ease: "linear", delay: beatDuration * 0.5 }}
                />

                {/* Body to Heart (Deoxygenated - Blue) */}
                <motion.div
                  className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] z-20"
                  animate={{
                    top: ["80%", "70%", "50%"],
                    left: ["45%", "40%", "50%"],
                    scale: [1, 1.2, 0]
                  }}
                  transition={{ duration: beatDuration * 1.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Heart to Lungs (Deoxygenated - Blue) */}
                <motion.div
                  className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)] z-20"
                  animate={{
                    top: ["50%", "30%", "20%"],
                    left: ["50%", "40%", "45%"],
                    scale: [0, 1.2, 1]
                  }}
                  transition={{ duration: beatDuration * 1.5, repeat: Infinity, ease: "linear", delay: beatDuration * 0.5 }}
                />
              </>
            )}
          </AnimatePresence>

          {/* O2 Status Overlay */}
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2">
            <Droplet size={14} className={bloodOxygen > 95 ? "text-rose-400" : bloodOxygen > 90 ? "text-purple-400" : "text-blue-400"} />
            <span className="text-white/90 text-xs font-mono font-bold">{bloodOxygen}% O2</span>
          </div>

        </div>
      </div>
    </div>
  );
}
