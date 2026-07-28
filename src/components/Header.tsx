'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useAuthModal } from '@/context/AuthModalContext';

const navItems = [
  { label: 'Monitoring', targetId: 'telemetry-section' },
  { label: 'Solutions', targetId: 'capabilities-section' },
  { label: 'Modules', targetId: 'hierarchy-section' },
  { label: 'Data Security', targetId: 'storage-fabric-section' },
  { label: 'AI Simulator', targetId: 'sandbox-section' },
  { label: 'ROI Calculator', targetId: 'roi-section' },
];

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { openModal } = useAuthModal();
  const [activeSection, setActiveSection] = useState('telemetry-section');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.targetId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-[#090b0e]/90 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-8">
          <a href="#" className="font-extrabold text-2xl font-mono tracking-wider text-slate-900 dark:text-white">
            FIX<span className="text-[#25e2cc]">SSET</span>
          </a>

          {/* Center Navigation Links for All Key Page Sections */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-wider text-slate-600 dark:text-slate-300">
            {navItems.map((item) => (
              <button
                key={item.targetId}
                onClick={() => scrollToSection(item.targetId)}
                className={`relative py-1.5 transition-colors cursor-pointer ${
                  activeSection === item.targetId
                    ? 'text-slate-900 dark:text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#25e2cc]'
                    : 'hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right: Login, Theme Switcher & Access Vault CTA */}
        <div className="flex items-center gap-3 sm:gap-5">
          
          {/* Login Button */}
          <button 
            id="header-login-btn"
            onClick={openModal}
            className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-2 py-1 cursor-pointer"
          >
            Login
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            className="p-2 rounded-lg bg-slate-100 dark:bg-[#12161b] text-slate-700 dark:text-amber-400 border border-slate-300 dark:border-slate-800 hover:scale-105 transition-all shadow-sm cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Filled Cyan Access Vault CTA */}
          <button 
            id="header-access-vault-btn"
            onClick={openModal}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs font-mono font-bold text-slate-950 bg-[#25e2cc] hover:bg-[#1fd1bd] transition-all duration-200 shadow-md shadow-[#25e2cc]/20 cursor-pointer whitespace-nowrap"
          >
            Access Vault
          </button>
        </div>

      </div>
    </header>
  );
};
