'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Terminal, RefreshCw, Zap, Factory, Flame, ShieldAlert } from 'lucide-react';

export const InteractiveSimulator: React.FC = () => {
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);
  const [step, setStep] = useState<number>(0);

  const runSimulation = (type: string) => {
    setActiveSimulation(type);
    setStep(1);

    setTimeout(() => setStep(2), 1200);
    setTimeout(() => setStep(3), 2400);
    setTimeout(() => setStep(4), 3600);
  };

  const resetSimulation = () => {
    setActiveSimulation(null);
    setStep(0);
  };

  return (
    <section id="sandbox-section" className="py-20 bg-slate-100 dark:bg-[#060708] border-t border-b border-slate-200 dark:border-white/5 transition-colors duration-300 relative font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#25e2cc]/10 border border-[#25e2cc]/30 text-emerald-600 dark:text-[#25e2cc] text-xs font-mono uppercase tracking-widest mb-3 font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE INDUSTRIAL AI SANDBOX</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 font-sans">
            Test FIXSSET Industrial Predictive AI
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-sans">
            Simulate heavy industrial equipment telemetry anomalies below to test FIXSSET's predictive failure detection and automated maintenance workflows across power, distribution, manufacturing, and chemical plants.
          </p>
        </div>

        <div className="bg-white dark:bg-[#0b0e11] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Industry Simulation Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            
            {/* 1. Power Gen */}
            <button
              id="sim-power-gen-btn"
              onClick={() => runSimulation('Power Gen: Hydro Turbine Shaft Vibration (> 5.8 mm/s)')}
              disabled={activeSimulation !== null && step < 4}
              className={`p-3 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 ${
                activeSimulation === 'Power Gen: Hydro Turbine Shaft Vibration (> 5.8 mm/s)' 
                  ? 'bg-amber-950 text-amber-300 border border-amber-500/50 shadow-md'
                  : 'bg-slate-100 dark:bg-[#12161a] text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700/60 hover:border-[#25e2cc]/50'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span className="truncate">Power Gen: Turbine Vibration</span>
            </button>

            {/* 2. Power Dist */}
            <button
              id="sim-power-dist-btn"
              onClick={() => runSimulation('Power Dist: Transformer DGA Dielectric Temp Spike')}
              disabled={activeSimulation !== null && step < 4}
              className={`p-3 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 ${
                activeSimulation === 'Power Dist: Transformer DGA Dielectric Temp Spike' 
                  ? 'bg-cyan-950 text-cyan-300 border border-[#25e2cc]/50 shadow-md'
                  : 'bg-slate-100 dark:bg-[#12161a] text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700/60 hover:border-[#25e2cc]/50'
              }`}
            >
              <ShieldAlert className="w-4 h-4 text-[#25e2cc] flex-shrink-0" />
              <span className="truncate">Power Dist: Transformer DGA</span>
            </button>

            {/* 3. Manufacturing */}
            <button
              id="sim-mfg-btn"
              onClick={() => runSimulation('Manufacturing: Robotic Motor Current Ripple & Gearbox Wear')}
              disabled={activeSimulation !== null && step < 4}
              className={`p-3 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 ${
                activeSimulation === 'Manufacturing: Robotic Motor Current Ripple & Gearbox Wear' 
                  ? 'bg-purple-950 text-purple-300 border border-purple-500/50 shadow-md'
                  : 'bg-slate-100 dark:bg-[#12161a] text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700/60 hover:border-[#25e2cc]/50'
              }`}
            >
              <Factory className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span className="truncate">Mfg: Robotic Gearbox Wear</span>
            </button>

            {/* 4. Chemical */}
            <button
              id="sim-chemical-btn"
              onClick={() => runSimulation('Chemical: Reactor Differential Pressure Spike (+14.2 PSI)')}
              disabled={activeSimulation !== null && step < 4}
              className={`p-3 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 ${
                activeSimulation === 'Chemical: Reactor Differential Pressure Spike (+14.2 PSI)' 
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/50 shadow-md'
                  : 'bg-slate-100 dark:bg-[#12161a] text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700/60 hover:border-[#25e2cc]/50'
              }`}
            >
              <Flame className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="truncate">Chemical: Reactor Pressure</span>
            </button>
          </div>

          {/* Terminal Console */}
          <div className="bg-slate-900 dark:bg-[#050607] rounded-xl border border-slate-800 p-5 font-mono text-xs text-slate-300 min-h-[230px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25e2cc] inline-block"></span>
                  FIXSSET INDUSTRIAL PREDICTIVE AI ENGINE v4.12
                </span>
                {activeSimulation && (
                  <button 
                    onClick={resetSimulation} 
                    className="hover:text-[#25e2cc] flex items-center gap-1 font-bold"
                  >
                    <RefreshCw className="w-3 h-3" /> Reset
                  </button>
                )}
              </div>

              {!activeSimulation ? (
                <div className="py-12 text-center text-slate-400 font-mono">
                  Select an industrial equipment telemetry scenario above to test the FIXSSET AI simulator...
                </div>
              ) : (
                <div className="space-y-2.5 font-mono">
                  <div className="text-amber-400 flex items-center gap-2">
                    <span className="text-slate-400">[00.00s]</span>
                    <span>EQUIPMENT TELEMETRY FLAGGED: {activeSimulation}</span>
                  </div>

                  {step >= 2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-cyan-400 flex items-center gap-2">
                      <span className="text-slate-400">[00.12s]</span>
                      <span>PREDICTIVE AI DIAGNOSIS: Catastrophic component failure forecasted in 21 days (Confidence 99.8%).</span>
                    </motion.div>
                  )}

                  {step >= 3 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#25e2cc] flex items-center gap-2">
                      <span className="text-slate-400">[00.28s]</span>
                      <span>AUTOMATED WORKORDER DISPATCH: Spare part ordered & maintenance team scheduled for maintenance window.</span>
                    </motion.div>
                  )}

                  {step >= 4 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#25e2cc] font-bold flex items-center gap-2 bg-[#25e2cc]/10 p-2.5 rounded-lg border border-[#25e2cc]/30 mt-2">
                      <CheckCircle className="w-4 h-4 text-[#25e2cc]" />
                      <span>PREVENTIVE WORKORDER CREATED. 0 Hours Unplanned Plant Shutdown.</span>
                    </motion.div>
                  )}
                </div>
              )}
            </div>

            {activeSimulation && step < 4 && (
              <div className="flex items-center gap-2 text-slate-400 text-[11px] pt-4 font-mono">
                <div className="w-4 h-4 border-2 border-[#25e2cc] border-t-transparent rounded-full animate-spin"></div>
                <span>FIXSSET Industrial AI generating failure prediction model...</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
