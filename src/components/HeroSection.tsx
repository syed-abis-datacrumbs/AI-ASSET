'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Factory, Flame, ShieldAlert } from 'lucide-react';
import { useAuthModal } from '@/context/AuthModalContext';

export const HeroSection: React.FC = () => {
  const { openModal } = useAuthModal();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <section className="relative min-h-[88vh] pt-16 pb-20 overflow-hidden flex flex-col items-center justify-start circuit-grid bg-slate-50 dark:bg-[#090b0e] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      
      {/* Background Subtle Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[360px] bg-[#25e2cc]/10 blur-[150px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-2">
        
        {/* Centered Industrial Sector Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-[#12161c] border border-slate-300 dark:border-slate-800/90 text-slate-700 dark:text-slate-300 text-xs font-mono tracking-widest uppercase mb-8 shadow-sm"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-[#25e2cc]" />
          <span>POWER • DISTRIBUTION • MANUFACTURING • CHEMICAL</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.12] mb-6 text-slate-900 dark:text-white font-sans"
        >
          Next-Gen Industrial Infrastructure <br />
          <span className="text-[#25e2cc] font-extrabold">Autonomously</span> Managed.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed mb-10 font-sans"
        >
          Secure client portal for power generation, electrical distribution, advanced manufacturing, and chemical processing plants to store critical asset data and predict equipment failure before catastrophic downtime occurs.
        </motion.p>

        {/* Industry Sector Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10 text-xs font-mono text-slate-700 dark:text-slate-300"
        >
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white dark:bg-[#101317] border border-slate-200 dark:border-slate-800 shadow-sm">
            <Zap className="w-4 h-4 text-[#25e2cc]" />
            <span>Power Generation</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white dark:bg-[#101317] border border-slate-200 dark:border-slate-800 shadow-sm">
            <ShieldAlert className="w-4 h-4 text-[#25e2cc]" />
            <span>Power Distribution</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white dark:bg-[#101317] border border-slate-200 dark:border-slate-800 shadow-sm">
            <Factory className="w-4 h-4 text-[#25e2cc]" />
            <span>Manufacturing</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white dark:bg-[#101317] border border-slate-200 dark:border-slate-800 shadow-sm">
            <Flame className="w-4 h-4 text-[#25e2cc]" />
            <span>Chemical Processing</span>
          </div>
        </motion.div>

        {/* Email Signup Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-xl mx-auto mb-16"
        >
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
            <div className="relative w-full">
              <input
                type="email"
                id="email-signup-input"
                placeholder="Enter plant administrative email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white dark:bg-[#12161c] border border-slate-300 dark:border-slate-800/90 focus:border-[#25e2cc] px-4 py-3 rounded-lg text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-500 font-mono focus:outline-none transition-colors shadow-inner"
              />
            </div>
            <button
              type="submit"
              id="hero-access-vault-btn"
              className="w-full sm:w-auto flex-shrink-0 px-7 py-3 rounded-lg bg-[#25e2cc] hover:bg-[#1fd1bd] text-slate-950 font-mono font-bold text-sm tracking-wide transition-all duration-200 shadow-md shadow-[#25e2cc]/20 cursor-pointer"
            >
              Access Vault
            </button>
          </form>
        </motion.div>

        {/* Central Asset Display */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={openModal}
          className="relative max-w-lg mx-auto flex flex-col items-center group cursor-pointer"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-b from-[#25e2cc]/20 to-transparent blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          {/* User's Server/Asset Image Container */}
          <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
            <Image
              src="/Server.png"
              alt="FIXSSET Industrial Asset Monitoring Server"
              width={420}
              height={420}
              priority
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)] transform group-hover:scale-105 transition-transform duration-700 ease-out rounded-2xl"
            />
          </div>

          {/* Floor Reflection Glow */}
          <div className="w-2/3 h-5 bg-[#25e2cc]/25 blur-xl rounded-full -mt-4 pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};
