'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Database, Server, Key, HardDrive } from 'lucide-react';

export const GlobalTelemetryFabric: React.FC = () => {
  return (
    <section id="storage-fabric-section" className="py-24 bg-white dark:bg-[#07090b] transition-colors duration-300 relative font-sans border-t border-slate-200 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content: Data Storage & Security Focus */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#25e2cc]/10 border border-[#25e2cc]/30 text-emerald-600 dark:text-[#25e2cc] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
                <Lock className="w-3.5 h-3.5 text-[#25e2cc]" />
                <span>SECURE INDUSTRIAL DATA VAULT & STORAGE FABRIC</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight font-sans">
                Zero-Trust Industrial Data Vault & Encrypted Storage
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
              Store your critical power generation, electrical distribution, manufacturing, and chemical asset data in air-gapped, end-to-end encrypted client vaults. FIXSSET guarantees 100% data sovereignty, full ISO 27001 compliance, and tamper-proof telemetry storage.
            </p>

            {/* 4 Data Storage & Security Stat Metrics Grid */}
            <div className="grid grid-cols-2 gap-8 pt-4 font-sans">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-[#25e2cc] font-mono tracking-tight">
                  AES-256
                </div>
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1 font-semibold">
                  ENCRYPTION AT REST & TRANSIT
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                  ISO 27001
                </div>
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1 font-semibold">
                  INDUSTRIAL COMPLIANCE VAULT
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-[#25e2cc] font-mono tracking-tight">
                  100%
                </div>
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1 font-semibold">
                  CLIENT DATA SOVEREIGNTY
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                  &lt;1ms
                </div>
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1 font-semibold">
                  ENCRYPTED VAULT LOOKUP
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Encrypted Vault Visual Shield Container */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-square rounded-3xl bg-slate-900 dark:bg-[#0c0f13] border border-slate-800 p-8 flex items-center justify-center shadow-2xl overflow-hidden">
              
              {/* Concentric Security Shielding Rings */}
              <div className="absolute w-[360px] h-[360px] rounded-full border border-slate-800/80"></div>
              <div className="absolute w-[260px] h-[260px] rounded-full border border-slate-700/60"></div>
              <div className="absolute w-[160px] h-[160px] rounded-full border border-[#25e2cc]/30"></div>

              {/* Central Vault Lock Icon */}
              <div className="relative z-10 p-7 rounded-full bg-[#25e2cc]/10 border border-[#25e2cc]/50 text-[#25e2cc] shadow-[0_0_35px_rgba(37,226,204,0.35)]">
                <Lock className="w-12 h-12" />
              </div>

              {/* Orbiting Vault Security Nodes */}
              <div className="absolute top-1/4 left-1/4 p-2 rounded-lg bg-slate-800/90 border border-[#25e2cc]/40 text-[10px] font-mono text-[#25e2cc] flex items-center gap-1.5 shadow-lg">
                <Database className="w-3 h-3 text-[#25e2cc]" /> Power Vault
              </div>

              <div className="absolute bottom-1/3 right-1/4 p-2 rounded-lg bg-slate-800/90 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
                <Server className="w-3 h-3 text-cyan-400" /> Dist Grid Vault
              </div>

              <div className="absolute top-1/3 right-1/3 p-2 rounded-lg bg-slate-800/90 border border-purple-500/40 text-[10px] font-mono text-purple-300 flex items-center gap-1.5 shadow-lg">
                <HardDrive className="w-3 h-3 text-purple-400" /> Mfg Asset Vault
              </div>

              <div className="absolute bottom-1/4 left-1/3 p-2 rounded-lg bg-slate-800/90 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 flex items-center gap-1.5 shadow-lg">
                <Key className="w-3 h-3 text-emerald-400" /> Chemical Vault
              </div>

              {/* Floating Status Badge */}
              <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded-lg bg-black/90 border border-slate-800 text-[10px] font-mono text-slate-300 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#25e2cc] animate-pulse"></span>
                <span>VAULT_SECURITY: <span className="text-[#25e2cc] font-bold">AIR-GAPPED & SECURE</span></span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
