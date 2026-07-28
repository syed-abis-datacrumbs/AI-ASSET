'use client';

import React, { useState } from 'react';
import { Calculator, Wrench, TrendingUp, ShieldCheck, Zap, Factory } from 'lucide-react';

export const LiveSecurityAuditCalculator: React.FC = () => {
  const [monitoredAssets, setMonitoredAssets] = useState<number>(350);
  const [downtimeCostPerHour, setDowntimeCostPerHour] = useState<number>(45000);

  const estimatedDowntimeSavings = Math.round(monitoredAssets * (downtimeCostPerHour * 0.65));
  const maintenanceHoursSaved = Math.round(monitoredAssets * 1.4);
  const uptimeGuaranteePct = 99.92;

  return (
    <section id="roi-section" className="py-20 bg-slate-50 dark:bg-[#08090a] transition-colors duration-300 relative font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white dark:bg-[#0d1013] rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-[#25e2cc] font-bold">
                <Calculator className="w-4 h-4" />
                <span>Industrial Plant Downtime Savings Calculator</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans">
                Calculate Plant Downtime Cost Savings
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-sans">
                Adjust your plant asset count and hourly outage costs to estimate annual financial savings with FIXSSET Predictive AI.
              </p>

              <div className="space-y-2 pt-4">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-700 dark:text-slate-300">Monitored Plant Assets (Turbines, Transformers, Production Lines):</span>
                  <span className="text-emerald-600 dark:text-[#25e2cc] font-bold">{monitoredAssets.toLocaleString()} Industrial Assets</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="2000"
                  step="20"
                  value={monitoredAssets}
                  onChange={(e) => setMonitoredAssets(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#25e2cc]"
                />
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-700 dark:text-slate-300">Estimated Hourly Plant Outage Cost:</span>
                  <span className="text-emerald-600 dark:text-[#25e2cc] font-bold">${downtimeCostPerHour.toLocaleString()} / hr</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="250000"
                  step="5000"
                  value={downtimeCostPerHour}
                  onChange={(e) => setDowntimeCostPerHour(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#25e2cc]"
                />
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 dark:bg-[#12161b] rounded-2xl border border-[#25e2cc]/40 p-6 space-y-6 shadow-md font-sans">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">Estimated Annual Outage Savings</div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-[#25e2cc] font-mono mt-1 tracking-tight">
                  ${estimatedDowntimeSavings.toLocaleString()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-[#0a0d0f] p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">Maintenance Hours Saved</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white font-mono mt-1 flex items-center gap-1">
                    <Wrench className="w-4 h-4 text-[#25e2cc]" />
                    {maintenanceHoursSaved.toLocaleString()}h / yr
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0a0d0f] p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">Equipment Lifespan Gain</div>
                  <div className="text-xl font-bold text-emerald-600 dark:text-[#25e2cc] font-mono mt-1 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-[#25e2cc]" />
                    +35%
                  </div>
                </div>
              </div>

              <button
                id="audit-schedule-demo-btn"
                onClick={() => {
                  const el = document.getElementById('email-signup-input');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    el.focus();
                  }
                }}
                className="w-full py-3 rounded-xl bg-[#25e2cc] hover:bg-[#1fd1bd] text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#25e2cc]/20 cursor-pointer"
              >
                Request Industrial Asset Demo
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
