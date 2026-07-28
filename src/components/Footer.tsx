'use client';

import React from 'react';
import { Mail, Phone, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-[#050607] border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 text-slate-600 dark:text-slate-400 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl font-mono text-slate-900 dark:text-white">FIX<span className="text-[#25e2cc]">SSET</span></span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              Industrial Predictive Maintenance & Secure Asset Vault. Engineered for Power Generation, Electrical Distribution, Advanced Manufacturing, and Chemical Processing facilities.
            </p>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#25e2cc]" />
                <span>fixsset@email.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#25e2cc]" />
                <span>(+1) 7282 7632</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><a href="#" className="hover:text-[#25e2cc] transition-colors">Power Generation Plants</a></li>
              <li><a href="#" className="hover:text-[#25e2cc] transition-colors">Power Distribution & Grids</a></li>
              <li><a href="#" className="hover:text-[#25e2cc] transition-colors">Automated Manufacturing</a></li>
              <li><a href="#" className="hover:text-[#25e2cc] transition-colors">Chemical Processing Plants</a></li>
              <li><a href="#" className="hover:text-[#25e2cc] transition-colors">Heavy Industrial IoT</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><a href="#" className="hover:text-[#25e2cc] transition-colors">Industrial Telemetry Protocol</a></li>
              <li><a href="#" className="hover:text-[#25e2cc] transition-colors">ISO 27001 Asset Vault Specs</a></li>
              <li><a href="#" className="hover:text-[#25e2cc] transition-colors">Turbine Vibration Diagnostics</a></li>
              <li><a href="#" className="hover:text-[#25e2cc] transition-colors">Transformer DGA AI Whitepaper</a></li>
              <li><a href="#" className="hover:text-[#25e2cc] transition-colors">Plant Network Status</a></li>
            </ul>
          </div>

          <div className="space-y-4 bg-white dark:bg-[#0a0c0e] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm font-sans">
            <div className="flex items-center gap-2 text-xs font-mono text-[#25e2cc] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>PLANT VAULT STATUS</span>
            </div>
            <div className="text-xs text-slate-700 dark:text-slate-300">
              Client Industrial Vault Active. 184,000+ Industrial Assets Monitored.
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              Protected by Quantum-Resilient TLS 1.3
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-sans">
          <div>
            &copy; {new Date().getFullYear()} FIXSSET Industrial Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Industrial Data Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
