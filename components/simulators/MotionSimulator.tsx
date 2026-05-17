"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Square, Timer, Activity } from "lucide-react";
import { motion } from "framer-motion";

export function MotionSimulator() {
  const [speed, setSpeed] = useState<number>(5); // m/s
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0); // seconds
  const [dataPoints, setDataPoints] = useState<{t: number, d: number}[]>([{t: 0, d: 0}]);
  
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  const maxTime = 10;
  const maxDistance = 100;

  const animate = (timestamp: number) => {
    if (previousTimeRef.current !== null) {
      const deltaTime = (timestamp - previousTimeRef.current) / 1000; // in seconds
      
      setTime(prevTime => {
        const newTime = prevTime + deltaTime;
        if (newTime >= maxTime) {
          setIsPlaying(false);
          return maxTime;
        }
        return newTime;
      });
    }
    previousTimeRef.current = timestamp;
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      previousTimeRef.current = null;
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying]);

  // Update data points based on time and speed
  useEffect(() => {
    if (time === 0) return;
    
    setDataPoints(prev => {
      const distance = speed * time;
      // Only add point if time increased significantly to avoid too many points
      const lastPoint = prev[prev.length - 1];
      if (time - lastPoint.t > 0.1 || time === maxTime) {
        return [...prev, { t: time, d: Math.min(distance, maxDistance) }];
      }
      return prev;
    });
  }, [time, speed]);

  const handleReset = () => {
    setIsPlaying(false);
    setTime(0);
    setDataPoints([{t: 0, d: 0}]);
    previousTimeRef.current = null;
  };

  const currentDistance = Math.min(speed * time, maxDistance);

  // SVG Chart Setup
  const svgWidth = 400;
  const svgHeight = 250;
  const padding = 40;
  
  const getX = (t: number) => padding + (t / maxTime) * (svgWidth - 2 * padding);
  const getY = (d: number) => svgHeight - padding - (d / maxDistance) * (svgHeight - 2 * padding);

  const polylinePoints = dataPoints.map(p => `${getX(p.t)},${getY(p.d)}`).join(" ");

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Animation & Controls */}
        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-border h-32 relative overflow-hidden flex flex-col justify-end">
            {/* The Road */}
            <div className="absolute bottom-4 left-0 w-full h-1 bg-slate-300 dark:bg-slate-700" />
            
            {/* The Car / Object */}
            <motion.div 
              className="absolute bottom-4 left-4 w-12 h-8 bg-primary-500 rounded-t-md rounded-br-md flex items-center justify-center text-white font-bold text-xs"
              style={{
                x: `calc(${Math.min((currentDistance / maxDistance) * 100, 100)}% - ${Math.min((currentDistance / maxDistance) * 48, 48)}px)`
              }}
            >
              🚗
            </motion.div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="font-bold text-foreground">Speed (m/s): <span className="text-primary-600">{speed}</span></label>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="1"
              value={speed}
              disabled={isPlaying}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full h-2 bg-secondary-50 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-500 disabled:opacity-50"
            />
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              disabled={time >= maxTime}
              className="flex-1 flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white py-3 rounded-xl font-medium transition-colors"
            >
              {isPlaying ? <Square size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
              {isPlaying ? "Pause" : "Start"}
            </button>
            <button 
              onClick={handleReset}
              className="flex-1 flex items-center justify-center gap-2 bg-secondary-50 dark:bg-slate-800 hover:bg-secondary-100 dark:hover:bg-slate-700 text-foreground py-3 rounded-xl border border-border font-medium transition-colors"
            >
              <Timer size={20} />
              Reset
            </button>
          </div>
          
          <div className="flex justify-between text-sm font-medium text-foreground/70 bg-secondary-50 dark:bg-slate-800/50 p-3 rounded-lg">
            <span>Time: {time.toFixed(1)} s</span>
            <span>Distance: {currentDistance.toFixed(1)} m</span>
          </div>
        </div>

        {/* Right: Distance-Time Graph */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border flex flex-col items-center justify-center p-4">
          <h3 className="font-bold mb-4 flex items-center gap-2 text-foreground">
            <Activity size={20} className="text-accent-500" />
            Distance-Time Graph
          </h3>
          
          <div className="w-full overflow-hidden flex justify-center">
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto max-w-[400px]">
              {/* Axes */}
              <line x1={padding} y1={svgHeight - padding} x2={svgWidth - padding} y2={svgHeight - padding} stroke="currentColor" className="text-slate-400 dark:text-slate-600" strokeWidth="2" />
              <line x1={padding} y1={padding} x2={padding} y2={svgHeight - padding} stroke="currentColor" className="text-slate-400 dark:text-slate-600" strokeWidth="2" />
              
              {/* Labels */}
              <text x={svgWidth / 2} y={svgHeight - 10} textAnchor="middle" fontSize="12" fill="currentColor" className="text-foreground/70">Time (s)</text>
              <text x={15} y={svgHeight / 2} textAnchor="middle" transform={`rotate(-90 15 ${svgHeight / 2})`} fontSize="12" fill="currentColor" className="text-foreground/70">Distance (m)</text>

              {/* Grid Lines */}
              {[2, 4, 6, 8, 10].map(t => (
                <line key={`xt-${t}`} x1={getX(t)} y1={svgHeight - padding} x2={getX(t)} y2={padding} stroke="currentColor" strokeDasharray="4" className="text-slate-200 dark:text-slate-800" />
              ))}
              {[20, 40, 60, 80, 100].map(d => (
                <line key={`yd-${d}`} x1={padding} y1={getY(d)} x2={svgWidth - padding} y2={getY(d)} stroke="currentColor" strokeDasharray="4" className="text-slate-200 dark:text-slate-800" />
              ))}

              {/* Data Line */}
              <polyline 
                points={polylinePoints} 
                fill="none" 
                stroke="var(--color-primary-500)" 
                strokeWidth="3" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Current Point Indicator */}
              {dataPoints.length > 0 && (
                <circle 
                  cx={getX(time)} 
                  cy={getY(currentDistance)} 
                  r="5" 
                  fill="var(--color-accent-500)" 
                />
              )}
            </svg>
          </div>
        </div>
        
      </div>
    </div>
  );
}
