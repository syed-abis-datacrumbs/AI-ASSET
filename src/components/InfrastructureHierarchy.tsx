'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  ShieldAlert, 
  HeartPulse, 
  BarChart3, 
  BrainCircuit, 
  Search, 
  GraduationCap, 
  FileText,
  Layers
} from 'lucide-react';

const modules = [
  {
    num: 'MODULE 01',
    title: 'Asset Status',
    icon: Activity,
    description: 'Real-time operational state, active load capacity, running hours, and telemetry connectivity across turbines, transformers, and reactors.'
  },
  {
    num: 'MODULE 02',
    title: 'Asset Criticality',
    icon: ShieldAlert,
    description: 'Dynamic risk matrix scoring (Tier-1 to Tier-3) prioritizing high-impact plant machinery based on financial outage severity and safety protocols.'
  },
  {
    num: 'MODULE 03',
    title: 'Asset Health',
    icon: HeartPulse,
    description: 'Composite 0-100% health index calculation continuously aggregating thermal imaging, vibration FFT spectra, and DGA oil gas metrics.'
  },
  {
    num: 'MODULE 04',
    title: 'Asset Reliability',
    icon: BarChart3,
    description: 'Mean Time Between Failures (MTBF) tracking, component degradation curves, and historical reliability modeling for power & chemical plants.'
  },
  {
    num: 'MODULE 05',
    title: 'Prediction',
    icon: BrainCircuit,
    description: 'Deep learning AI failure forecasting detecting micro-anomalies up to 21 days before catastrophic breakdown or unscheduled outage.'
  },
  {
    num: 'MODULE 06',
    title: 'Root Cause Analysis',
    icon: Search,
    description: 'Automated fault origin pinpointing, thermal anomaly isolation, and harmonic FFT breakdown to guide targeted maintenance teams.'
  },
  {
    num: 'MODULE 07',
    title: 'Training & Awareness',
    icon: GraduationCap,
    description: 'Interactive operator training simulations, safety compliance modules, and AI-guided standard operating procedure (SOP) playbooks.'
  },
  {
    num: 'MODULE 08',
    title: 'Reports',
    icon: FileText,
    description: 'Automated executive downtime audits, ISO 27001 compliance logs, maintenance history exports, and regulatory reporting.'
  }
];

export const InfrastructureHierarchy: React.FC = () => {
  return (
    <section id="hierarchy-section" className="py-24 bg-slate-50 dark:bg-[#07090b] transition-colors duration-300 relative font-sans border-t border-slate-200 dark:border-white/5 overflow-hidden">
      
      {/* Techy Transparent Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 226, 204, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 226, 204, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Subtle Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#25e2cc]/5 blur-[140px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25e2cc]/10 border border-[#25e2cc]/30 text-emerald-600 dark:text-[#25e2cc] text-xs font-mono uppercase tracking-widest mb-3 font-bold">
            <Layers className="w-3.5 h-3.5 text-[#25e2cc]" />
            <span>8-MODULE INDUSTRIAL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 font-sans">
            Industrial Platform Modules & Hierarchy
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            The multi-layered operational framework ensuring absolute data security, equipment reliability, and zero unplanned plant downtime.
          </p>
        </div>

        {/* 8-Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative p-6 rounded-2xl bg-white/80 dark:bg-[#0c0e11]/90 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-[#25e2cc]/60 transition-all duration-300 shadow-lg hover:shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-[#25e2cc] bg-[#25e2cc]/10 px-2.5 py-1 rounded-md border border-[#25e2cc]/30">
                      {item.num}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-[#13171c] text-[#25e2cc] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-sans group-hover:text-[#25e2cc] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>FIXSSET Core</span>
                  <span className="text-[#25e2cc] font-semibold">Active Module</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
