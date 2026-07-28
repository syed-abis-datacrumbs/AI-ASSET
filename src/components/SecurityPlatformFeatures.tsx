'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Activity, Wrench, BarChart3, Sparkles, ArrowUpRight, Zap, Factory, Flame, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Power Generation Diagnostics',
    description: 'Continuous AI monitoring of hydro, thermal, steam, and wind turbine rotor harmonics, boiler feedwater pressure, and fuel injection nozzle anomalies.',
    tag: 'POWER GEN'
  },
  {
    icon: ShieldCheck,
    title: 'Power Distribution Monitoring',
    description: 'Real-time telemetry tracking for high-voltage transformers, DGA oil gas ratio, feeder breaker trips, and grid substation dielectric temperatures.',
    tag: 'POWER DIST'
  },
  {
    icon: Factory,
    title: 'Smart Manufacturing Maintenance',
    description: 'Vibration FFT spectral analysis for automated assembly robotics, CNC high-speed spindles, hydraulic drive pumps, and conveyor gearboxes.',
    tag: 'MANUFACTURING'
  },
  {
    icon: Flame,
    title: 'Chemical Processing Safety',
    description: 'Predictive leak and differential pressure forecasting for high-pressure catalytic reactors, chemical recirculating pumps, and heat exchanger tubes.',
    tag: 'CHEMICAL PLANTS'
  }
];

export const SecurityPlatformFeatures: React.FC = () => {
  return (
    <section id="capabilities-section" className="py-24 bg-white dark:bg-[#08090a] transition-colors duration-300 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#25e2cc]/10 border border-[#25e2cc]/30 text-emerald-600 dark:text-[#25e2cc] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Sector Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Engineered for Heavy Industrial Infrastructure
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Store heavy asset data securely in FIXSSET Vault and leverage predictive AI algorithms tailored to Power, Distribution, Manufacturing, and Chemical facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl bg-slate-50 dark:bg-[#0c0e10] border border-slate-200 dark:border-slate-800/80 hover:border-[#25e2cc]/50 transition-all duration-300 shadow-xl overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#121619] border border-slate-200 dark:border-slate-700/60 text-[#25e2cc] group-hover:scale-110 transition-transform shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-[#25e2cc] bg-[#25e2cc]/10 border border-[#25e2cc]/30 px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#25e2cc] transition-colors flex items-center gap-2">
                  {item.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#25e2cc]" />
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
