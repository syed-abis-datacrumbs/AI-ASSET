'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Home, 
  Database, 
  HelpCircle,
  Terminal, 
  Zap, 
  ArrowUpRight, 
  LogOut, 
  Bot,
  ArrowRight,
  RotateCw,
  Lock,
  Download,
  Sun,
  Moon,
  Headphones,
  Mail,
  ShieldAlert,
  Send,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useAuthModal } from '@/context/AuthModalContext';

export default function DashboardPage() {
  const { theme, toggleTheme } = useTheme();
  const { openModal } = useAuthModal();
  const [activeTab, setActiveTab] = useState('Asset Vault');
  const [commandInput, setCommandInput] = useState('');

  // Support Form state
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  // EXACT 3 PAGES AS REQUESTED BY USER: Home, Asset Vault, Support
  const sidebarItems = [
    { label: 'Home', icon: Home, href: '/' },
    { label: 'Asset Vault', icon: Database },
    { label: 'Support', icon: HelpCircle },
  ];

  const storageProtocols = [
    {
      title: 'Secure Log Archiving',
      icon: Download,
      description: 'Immutable storage for historical telemetry streams.',
      color: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      title: 'Real-time Ingestion',
      icon: RotateCw,
      description: 'High-throughput pipeline for live sensor data.',
      color: 'text-cyan-600 dark:text-cyan-400',
    },
    {
      title: 'Redundant Backup',
      icon: Headphones,
      description: 'Multi-node replication for zero-loss recovery.',
      color: 'text-amber-600 dark:text-amber-400',
    },
    {
      title: 'Encrypted Data Transport',
      icon: Lock,
      description: 'AES-256 tunneling for all inbound telemetry.',
      color: 'text-purple-600 dark:text-purple-400',
    }
  ];

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketMessage) return;
    setTicketSubmitted(true);
    setTimeout(() => {
      setTicketSubmitted(false);
      setTicketSubject('');
      setTicketMessage('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090c] text-slate-900 dark:text-slate-100 font-sans flex flex-col justify-between transition-colors duration-300 selection:bg-[#25e2cc] selection:text-black">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#080a0e]/95 border-b border-slate-200 dark:border-slate-800/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Top Nav */}
          <div className="flex items-center gap-10">
            <Link href="/" className="font-extrabold text-xl font-mono tracking-wider text-slate-900 dark:text-white">
              FIX<span className="text-[#25e2cc]">SSET</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-slate-600 dark:text-slate-400">
              <button 
                onClick={() => setActiveTab('Asset Vault')}
                className={`relative py-2 transition-colors ${
                  activeTab === 'Asset Vault' 
                    ? 'text-slate-900 dark:text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#25e2cc]'
                    : 'hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Monitoring
              </button>
              <button 
                onClick={() => setActiveTab('Support')}
                className={`relative py-2 transition-colors ${
                  activeTab === 'Support' 
                    ? 'text-slate-900 dark:text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#25e2cc]'
                    : 'hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Support
              </button>
              <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Home Landing</Link>
            </nav>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={openModal}
              className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-2 py-1 cursor-pointer"
            >
              Login
            </button>
            
            <button
              onClick={toggleTheme}
              id="dashboard-theme-toggle-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#12161c] text-slate-700 dark:text-amber-400 border border-slate-300 dark:border-slate-800 hover:scale-105 transition-all shadow-sm cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button 
              onClick={openModal}
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold text-slate-950 bg-[#25e2cc] hover:bg-[#1fd1bd] transition-all shadow-md shadow-[#25e2cc]/20 cursor-pointer"
            >
              Access Vault
            </button>
          </div>

        </div>
      </header>

      {/* Main Layout Grid */}
      <div className="flex-1 flex max-w-[1700px] w-full mx-auto">
        
        {/* Left Sidebar - STRICTLY 3 PAGES ONLY: Home, Asset Vault, Support */}
        <aside className="w-64 border-r border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#090b0f] p-4 flex flex-col justify-between hidden md:flex transition-colors duration-300">
          <div className="space-y-6">
            
            <div className="px-2 pt-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">
              NAVIGATION PORTAL
            </div>

            {/* Sidebar Navigation */}
            <nav className="space-y-2 font-mono text-xs">
              {sidebarItems.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = activeTab === item.label;
                
                if (item.href) {
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all"
                    >
                      <Icon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      <span>{item.label}</span>
                    </Link>
                  );
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(item.label)}
                    className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#25e2cc]/15 dark:bg-[#0f1d1c] text-slate-900 dark:text-[#25e2cc] border border-[#25e2cc]/60 dark:border-[#25e2cc]/40 font-bold shadow-md'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/60'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#25e2cc]' : 'text-slate-500 dark:text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

          </div>

          {/* Sidebar Bottom Widgets */}
          <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
            
            {/* System Status Box */}
            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-[#0c1015] border border-slate-200 dark:border-slate-800/90 text-xs">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>System Status</span>
              </div>
              <div className="text-slate-900 dark:text-slate-200 font-sans text-xs mb-2 font-semibold">All Systems Online</div>
              <div className="flex gap-1.5">
                <div className="h-1.5 flex-1 rounded-full bg-[#25e2cc]"></div>
                <div className="h-1.5 flex-1 rounded-full bg-[#25e2cc]/50"></div>
              </div>
            </div>

            {/* User Profile Badge */}
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#0c1015] border border-slate-200 dark:border-slate-800/90 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-[#0f2421] border border-emerald-500/30 dark:border-[#25e2cc]/40 text-emerald-800 dark:text-[#25e2cc] font-mono font-bold text-xs flex items-center justify-center">
                  AS
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white font-sans">Abis Syed</div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 tracking-wider">ROOT ADMIN</div>
                </div>
              </div>
              
              <Link 
                href="/" 
                title="Logout to main portal"
                className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </aside>

        {/* Main Dynamic View Content */}
        <main className="flex-1 p-6 md:p-10 space-y-10 bg-slate-50 dark:bg-[#07090c] circuit-grid relative overflow-hidden transition-colors duration-300">
          
          {activeTab === 'Asset Vault' ? (
            <>
              {/* Main Title */}
              <div className="text-center pt-2">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
                  Technical Data Vault
                </h1>
              </div>

              {/* Command Search Input Bar */}
              <div className="max-w-4xl mx-auto">
                <div className="relative flex items-center bg-white dark:bg-[#0c1015] border border-slate-300 dark:border-slate-800/90 rounded-xl p-2 pl-4 shadow-lg dark:shadow-xl focus-within:border-[#25e2cc] transition-colors">
                  <Terminal className="w-4 h-4 text-slate-400 mr-3 flex-shrink-0" />
                  <input
                    type="text"
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    placeholder="Enter data node source or upload telemetry batch..."
                    className="w-full bg-transparent text-xs font-mono text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
                  />
                  <div className="flex items-center gap-2 pl-2">
                    <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-[#131922] text-[10px] font-mono text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-800">
                      CMD + K
                    </span>
                    <button className="px-4 py-2 rounded-lg bg-[#25e2cc] hover:bg-[#1fd1bd] text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-md shadow-[#25e2cc]/20 cursor-pointer">
                      <span>Flash</span>
                      <Zap className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>
                </div>
              </div>

              {/* STORAGE PROTOCOLS SECTION */}
              <div className="max-w-6xl mx-auto space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
                  <span className="w-1 h-3.5 bg-[#25e2cc] rounded-full"></span>
                  <span>STORAGE PROTOCOLS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {storageProtocols.map((protocol, idx) => {
                    const Icon = protocol.icon;
                    return (
                      <div 
                        key={idx}
                        className="p-5 rounded-2xl bg-white dark:bg-[#0a0d12]/90 border border-slate-200 dark:border-slate-800/80 hover:border-[#25e2cc]/60 transition-all group flex flex-col justify-between min-h-[150px] shadow-sm dark:shadow-none"
                      >
                        <div>
                          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#111720] border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Icon className={`w-4 h-4 ${protocol.color}`} />
                          </div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 font-sans">
                            {protocol.title}
                          </h3>
                          <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                            {protocol.description}
                          </p>
                        </div>

                        <div className="flex justify-end pt-3">
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#25e2cc] transition-colors" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ASSET VAULT CARDS SECTION */}
              <div className="max-w-6xl mx-auto space-y-4">
                
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight font-sans">
                      Asset Vault
                    </h2>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5">
                      Storage node health and cryptographic integrity verification.
                    </p>
                  </div>

                  <button className="text-xs font-mono text-[#25e2cc] hover:underline flex items-center gap-1 font-semibold">
                    <span>Open Node Editor</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 3 Main Asset Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  
                  {/* Card 1: HV Transformer */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0d12]/90 border border-slate-200 dark:border-slate-800 hover:border-[#25e2cc]/60 transition-all flex flex-col justify-between space-y-6 shadow-sm dark:shadow-none">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">HV Transformer</h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-400 border border-emerald-500/30">
                          NOMINAL
                        </span>
                      </div>
                      
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mb-4">
                        Storage node health and cryptographic integrity verification.
                      </p>

                      <div className="space-y-1.5 mb-6">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-500 dark:text-slate-400">EFFICIENCY</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">98%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="w-[98%] h-full bg-[#25e2cc] rounded-full"></div>
                        </div>
                      </div>

                      {/* 2 Metric Boxes */}
                      <div className="grid grid-cols-2 gap-3 font-sans">
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0e131b] border border-slate-200 dark:border-slate-800">
                          <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">LOAD (kVA)</div>
                          <div className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                            Storage node health and cryptographic integrity verification.
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0e131b] border border-slate-200 dark:border-slate-800">
                          <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">TEMP (C)</div>
                          <div className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                            Storage node health and cryptographic integrity verification.
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-[#111720] hover:bg-slate-200 dark:hover:bg-[#16202c] text-xs font-mono font-bold text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 hover:border-[#25e2cc] transition-all cursor-pointer">
                      Analyze Monitoring
                    </button>
                  </div>

                  {/* Card 2: CNC Spindle Motor */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0d12]/90 border border-slate-200 dark:border-slate-800 hover:border-rose-500/60 transition-all flex flex-col justify-between space-y-6 shadow-sm dark:shadow-none">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">CNC Spindle Motor</h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-400 border border-rose-500/40">
                          WARN: VIB
                        </span>
                      </div>
                      
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mb-4">
                        Storage node health and cryptographic integrity verification.
                      </p>

                      <div className="space-y-1.5 mb-6">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-500 dark:text-slate-400">HEALTH SCORE</span>
                          <span className="text-rose-600 dark:text-rose-400 font-bold">64%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="w-[64%] h-full bg-rose-500 rounded-full"></div>
                        </div>
                      </div>

                      {/* 2 Metric Boxes */}
                      <div className="grid grid-cols-2 gap-3 font-sans">
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0e131b] border border-slate-200 dark:border-slate-800">
                          <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">RPM (ACTUAL)</div>
                          <div className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                            Storage node health and cryptographic integrity verification.
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0e131b] border border-slate-200 dark:border-slate-800">
                          <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">AMPS</div>
                          <div className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                            Storage node health and cryptographic integrity verification.
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-2.5 rounded-xl bg-rose-50 dark:bg-[#111720] hover:bg-rose-100 dark:hover:bg-[#1c1216] text-xs font-mono font-bold text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/30 hover:border-rose-500 transition-all cursor-pointer">
                      Emergency Diagnostic
                    </button>
                  </div>

                  {/* Card 3: Industrial Boiler */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0d12]/90 border border-slate-200 dark:border-slate-800 hover:border-[#25e2cc]/60 transition-all flex flex-col justify-between space-y-6 shadow-sm dark:shadow-none">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">Industrial Boiler</h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-100 text-cyan-800 dark:bg-cyan-950/80 dark:text-cyan-400 border border-cyan-500/30">
                          OPTIMAL
                        </span>
                      </div>
                      
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mb-4">
                        Storage node health and cryptographic integrity verification.
                      </p>

                      <div className="space-y-1.5 mb-6">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-500 dark:text-slate-400">PRESSURE STABILITY</span>
                          <span className="text-cyan-600 dark:text-cyan-400 font-bold">92%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="w-[92%] h-full bg-[#25e2cc] rounded-full"></div>
                        </div>
                      </div>

                      {/* 2 Metric Boxes */}
                      <div className="grid grid-cols-2 gap-3 font-sans">
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0e131b] border border-slate-200 dark:border-slate-800">
                          <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">PSI</div>
                          <div className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                            Storage node health and cryptographic integrity verification.
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0e131b] border border-slate-200 dark:border-slate-800">
                          <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">FLOW (m³/h)</div>
                          <div className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                            Storage node health and cryptographic integrity verification.
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-[#111720] hover:bg-slate-200 dark:hover:bg-[#16202c] text-xs font-mono font-bold text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 hover:border-[#25e2cc] transition-all cursor-pointer">
                      Analyze Monitoring
                    </button>
                  </div>

                </div>

              </div>
            </>
          ) : (
            /* SUPPORT PAGE VIEW */
            <div className="max-w-5xl mx-auto space-y-8 py-4">
              <div className="text-center space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-100 dark:bg-[#25e2cc]/10 text-emerald-800 dark:text-[#25e2cc] border border-emerald-500/30 dark:border-[#25e2cc]/30 inline-flex items-center gap-1.5 font-bold">
                  <Headphones className="w-3.5 h-3.5" />
                  24/7 PLANT SUPPORT & ENTERPRISE HELPDESK
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight">
                  Industrial Client Support Portal
                </h1>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-sans">
                  Direct line of communication for plant operations, asset vault assistance, and emergency diagnostic support across Power, Generation, Distribution, Manufacturing, and Chemical facilities.
                </p>
              </div>

              {/* Support Channel Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 hover:border-[#25e2cc]/60 transition-all space-y-3 shadow-sm dark:shadow-none">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white font-sans">Priority Plant Emergency</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                    Immediate dispatch for critical turbine failure warnings or substation anomalies.
                  </p>
                  <div className="text-xs font-mono text-amber-700 dark:text-amber-400 font-bold pt-2">
                    HOTLINE: +1 (800) 555-FIXS
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 hover:border-[#25e2cc]/60 transition-all space-y-3 shadow-sm dark:shadow-none">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-[#25e2cc] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white font-sans">Vault Admin & Onboarding</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                    Account credentials, plant node key rotation, and AES-256 vault data ingestion.
                  </p>
                  <div className="text-xs font-mono text-emerald-700 dark:text-[#25e2cc] font-bold pt-2">
                    EMAIL: fixsset@email.com
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 hover:border-[#25e2cc]/60 transition-all space-y-3 shadow-sm dark:shadow-none">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white font-sans">SLA & Response Target</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                    Guaranteed sub-15 minute response time for critical equipment diagnostics.
                  </p>
                  <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold pt-2">
                    STATUS: 99.99% UP TIME
                  </div>
                </div>
              </div>

              {/* Submit Ticket Form */}
              <div className="p-8 rounded-2xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 relative overflow-hidden shadow-md dark:shadow-none">
                <div className="mb-6">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white font-sans">Submit Support Ticket</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans">Direct dispatch to FIXSSET Industrial Reliability Engineers.</p>
                </div>

                {ticketSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 mx-auto text-[#25e2cc] animate-bounce" />
                    <div className="font-mono font-bold text-sm">Ticket Dispatched Successfully</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">An industrial systems specialist has been assigned to your ticket.</div>
                  </div>
                ) : (
                  <form onSubmit={handleTicketSubmit} className="space-y-4 font-sans">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">ISSUE / ASSET ID</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. AST-PWR-8820 - Shaft Vibration Harmonic"
                        value={ticketSubject}
                        onChange={(e) => setTicketSubject(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-[#11151c] border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-[#25e2cc]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">DETAILED LOG DISPATCH</label>
                      <textarea 
                        rows={4}
                        required
                        placeholder="Describe telemetry anomaly, temperature spike, or vault storage request..."
                        value={ticketMessage}
                        onChange={(e) => setTicketMessage(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-[#11151c] border border-slate-300 dark:border-slate-800 rounded-xl p-4 text-xs text-slate-900 dark:text-white font-sans focus:outline-none focus:border-[#25e2cc]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-[#25e2cc] hover:bg-[#1fd1bd] text-slate-950 font-mono font-bold text-xs flex items-center gap-2 cursor-pointer transition-all shadow-md shadow-[#25e2cc]/20"
                    >
                      <span>Dispatch Support Ticket</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* Floating Assistant Widget Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <button className="w-12 h-12 rounded-full bg-[#25e2cc] text-slate-950 flex items-center justify-center shadow-lg shadow-[#25e2cc]/30 hover:scale-110 transition-transform cursor-pointer">
              <Bot className="w-6 h-6" />
            </button>
          </div>

        </main>

      </div>

      {/* Dashboard Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#06080b] py-6 px-4 sm:px-8 font-mono text-xs text-slate-600 dark:text-slate-500 transition-colors duration-300">
        <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-bold text-slate-800 dark:text-slate-300">
            FIXSSET INFRASTRUCTURE
          </div>
          
          <div className="text-[11px] text-center max-w-2xl leading-relaxed">
            © 2024 FIXSSET INFRASTRUCTURE. ALL RIGHTS RESERVED. SECURE TERMINAL ACCESS ONLY. UNAUTHORIZED ACCESS PROHIBITED UNDER PROTOCOL 7.
          </div>

          <div className="flex items-center gap-6 text-[11px] text-slate-600 dark:text-slate-400">
            <button onClick={() => setActiveTab('Support')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Documentation</button>
            <button onClick={() => setActiveTab('Support')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">System Status</button>
            <button onClick={() => setActiveTab('Support')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Security Audit</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
