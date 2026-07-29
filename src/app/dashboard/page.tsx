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
  Clock,
  Cpu
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

  // Dynamic User-Uploaded & Created Data Repositories State
  const [dataRepositories, setDataRepositories] = useState([
    {
      id: 'repo-1',
      name: 'PowerGen_Turbine_Vibration_2024.parquet',
      assetType: 'Single Asset',
      size: '4.2 GB',
      uploadDate: '2026-07-28 14:32',
      status: 'NOMINAL',
      statusColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-400 border-emerald-500/30',
      integrity: 99.8,
      records: '14,250,000 logs',
      hash: 'sha256:8f92a1...e72b',
      fileName: 'turbine_vib_raw.parquet',
      author: 'Abis Syed (User Upload)'
    },
    {
      id: 'repo-2',
      name: 'Substation_A_Harmonics_Stream.db',
      assetType: 'Group Assets',
      size: '1.8 GB',
      uploadDate: '2026-07-27 09:15',
      status: 'WARN: INGESTION',
      statusColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-400 border-rose-500/40',
      integrity: 88.4,
      records: '6,120,000 logs',
      hash: 'sha256:3c14d9...f401',
      fileName: 'substation_grid_logs.db',
      author: 'Abis Syed (User Upload)'
    },
    {
      id: 'repo-3',
      name: 'Chemical_Reactor_Batch_Logs.csv',
      assetType: 'Single Asset',
      size: '850 MB',
      uploadDate: '2026-07-29 08:45',
      status: 'OPTIMAL',
      statusColor: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950/80 dark:text-cyan-400 border-cyan-500/30',
      integrity: 100,
      records: '3,890,000 logs',
      hash: 'sha256:9d82b4...a112',
      fileName: 'reactor_batch_stream.csv',
      author: 'Abis Syed (User Upload)'
    },
    {
      id: 'repo-4',
      name: 'CNC_Spindle_Acoustic_Audit.h5',
      assetType: 'Group Assets',
      size: '2.1 GB',
      uploadDate: '2026-07-29 11:20',
      status: 'ACTIVE SYNC',
      statusColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-400 border-purple-500/30',
      integrity: 96.5,
      records: '9,400,000 logs',
      hash: 'sha256:7b55e1...d904',
      fileName: 'spindle_acoustic_matrix.h5',
      author: 'Abis Syed (User Upload)'
    }
  ]);

  // Upload/Create Repository Modal State
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [newRepoName, setNewRepoName] = useState('');
  const [assetType, setAssetType] = useState<'Single Asset' | 'Group Assets'>('Single Asset');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleCreateRepository = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRepoName) return;

    const uploadedFileName = selectedFile ? selectedFile.name : `${newRepoName.toLowerCase().replace(/\s+/g, '_')}_data.parquet`;
    const fileSizeMB = selectedFile ? (selectedFile.size / (1024 * 1024)).toFixed(1) + ' MB' : '1.2 GB';

    const newRepo = {
      id: `repo-${Date.now()}`,
      name: newRepoName,
      assetType: assetType,
      size: fileSizeMB,
      uploadDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'OPTIMAL',
      statusColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-400 border-emerald-500/30',
      integrity: 100,
      records: `${Math.floor(Math.random() * 8 + 1)},200,000 logs`,
      hash: `sha256:${Math.random().toString(36).substring(2, 10)}...${Math.random().toString(36).substring(2, 6)}`,
      fileName: uploadedFileName,
      author: 'Abis Syed (User Upload)'
    };

    setDataRepositories([newRepo, ...dataRepositories]);
    setIsUploadModalOpen(false);
    setNewRepoName('');
    setSelectedFile(null);
    setAssetType('Single Asset');
  };

  const handleDeleteRepository = (id: string) => {
    setDataRepositories(dataRepositories.filter(repo => repo.id !== id));
  };

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

  // EXACT 3 PAGES AS REQUESTED BY USER: Home, Asset Vault, Support
  const sidebarItems = [
    { label: 'Home', icon: Home, href: '/' },
    { label: 'Asset Vault', icon: Database },
    { label: 'AI Asset Management', icon: Cpu, href: '/ai-asset-management' },
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

  const filteredRepositories = dataRepositories.filter(repo => 
    repo.name.toLowerCase().includes(commandInput.toLowerCase()) ||
    repo.assetType.toLowerCase().includes(commandInput.toLowerCase()) ||
    repo.fileName.toLowerCase().includes(commandInput.toLowerCase())
  );

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
              <Link 
                href="/ai-asset-management" 
                className="hover:text-slate-900 dark:hover:text-white transition-colors py-2 flex items-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5 text-[#25e2cc]" />
                <span>AI Asset Mgmt</span>
              </Link>
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
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-2">
                  User Uploaded Data Repositories & Encrypted Storage Nodes
                </p>
              </div>

              {/* Command Search Input Bar */}
              <div className="max-w-4xl mx-auto">
                <div className="relative flex items-center bg-white dark:bg-[#0c1015] border border-slate-300 dark:border-slate-800/90 rounded-xl p-2 pl-4 shadow-lg dark:shadow-xl focus-within:border-[#25e2cc] transition-colors">
                  <Terminal className="w-4 h-4 text-slate-400 mr-3 flex-shrink-0" />
                  <input
                    type="text"
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    placeholder="Search user uploaded repositories by format, sector, or filename..."
                    className="w-full bg-transparent text-xs font-mono text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
                  />
                  <div className="flex items-center gap-2 pl-2">
                    <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-[#131922] text-[10px] font-mono text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-800">
                      CMD + K
                    </span>
                    <button 
                      onClick={() => setIsUploadModalOpen(true)}
                      className="px-4 py-2 rounded-lg bg-[#25e2cc] hover:bg-[#1fd1bd] text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-md shadow-[#25e2cc]/20 cursor-pointer"
                    >
                      <span>+ Upload Data Repo</span>
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

              {/* USER-UPLOADED DATA REPOSITORIES SECTION */}
              <div className="max-w-6xl mx-auto space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight font-sans flex items-center gap-2">
                      <Database className="w-6 h-6 text-[#25e2cc]" />
                      <span>User Data Repositories</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-[#25e2cc]/10 text-[#25e2cc] border border-[#25e2cc]/30">
                        {filteredRepositories.length} Repositories
                      </span>
                    </h2>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5">
                      Uploaded data files, industrial sensor logs, and active vault storage nodes created by user.
                    </p>
                  </div>

                  <button 
                    onClick={() => setIsUploadModalOpen(true)}
                    className="px-4 py-2.5 rounded-xl bg-[#25e2cc] hover:bg-[#1fd1bd] text-slate-950 font-mono font-bold text-xs flex items-center gap-2 shadow-md shadow-[#25e2cc]/20 cursor-pointer self-start sm:self-auto"
                  >
                    <span>+ Upload / Create Repository</span>
                  </button>
                </div>

                {/* User Repositories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  {filteredRepositories.map((repo) => (
                    <div 
                      key={repo.id}
                      className="p-6 rounded-2xl bg-white dark:bg-[#0a0d12]/90 border border-slate-200 dark:border-slate-800 hover:border-[#25e2cc]/60 transition-all flex flex-col justify-between space-y-6 shadow-sm dark:shadow-none relative group"
                    >
                      <div>
                        {/* Header: Title + Status Badge */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#25e2cc]/10 text-[#25e2cc] border border-[#25e2cc]/30 uppercase">
                              {repo.assetType}
                            </span>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white font-mono truncate max-w-[200px] mt-1.5" title={repo.name}>
                              {repo.name}
                            </h3>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border flex-shrink-0 ${repo.statusColor}`}>
                            {repo.status}
                          </span>
                        </div>
                        
                        {/* File Name + Size */}
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-mono mb-4 flex items-center justify-between">
                          <span className="truncate max-w-[150px] text-slate-500" title={repo.fileName}>{repo.fileName}</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">{repo.size}</span>
                        </div>

                        {/* Integrity Progress Bar */}
                        <div className="space-y-1.5 mb-5">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-slate-500 dark:text-slate-400">VAULT INTEGRITY</span>
                            <span className="text-[#25e2cc] font-bold">{repo.integrity}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#25e2cc] rounded-full transition-all duration-500"
                              style={{ width: `${repo.integrity}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* 2 Metadata Metric Boxes */}
                        <div className="grid grid-cols-2 gap-2.5 font-sans">
                          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#0e131b] border border-slate-200 dark:border-slate-800">
                            <div className="text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">RECORDS</div>
                            <div className="text-xs font-bold font-mono text-slate-800 dark:text-slate-200 mt-0.5">
                              {repo.records}
                            </div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#0e131b] border border-slate-200 dark:border-slate-800">
                            <div className="text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">UPLOAD TIME</div>
                            <div className="text-[10px] font-mono text-slate-700 dark:text-slate-300 mt-0.5">
                              {repo.uploadDate}
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                          <span>{repo.hash}</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">AES-256</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button 
                          onClick={() => alert(`Querying data repository node: ${repo.name}`)}
                          className="flex-1 py-2 rounded-xl bg-slate-100 dark:bg-[#111720] hover:bg-slate-200 dark:hover:bg-[#16202c] text-xs font-mono font-bold text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 hover:border-[#25e2cc] transition-all cursor-pointer"
                        >
                          Query Repository
                        </button>
                        <button 
                          onClick={() => handleDeleteRepository(repo.id)}
                          title="Delete Repository"
                          className="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/50 text-xs font-mono font-bold transition-all cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* UPLOAD DATA REPOSITORY MODAL */}
              {isUploadModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                  <div 
                    onClick={() => setIsUploadModalOpen(false)}
                    className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
                  />

                  <div className="relative z-10 w-full max-w-lg bg-white dark:bg-[#0c1015] border border-slate-300 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 font-sans">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                      <div className="flex items-center gap-2">
                        <Database className="w-5 h-5 text-[#25e2cc]" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          Upload / Create Data Repository
                        </h3>
                      </div>
                      <button 
                        onClick={() => setIsUploadModalOpen(false)}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
                      >
                        ✕
                      </button>
                    </div>

                    <form onSubmit={handleCreateRepository} className="space-y-5">
                      {/* Repository Name Input */}
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase">
                          REPOSITORY NAME
                        </label>
                        <input 
                          type="text"
                          required
                          placeholder="e.g. Substation_alpha_telemetry_hub"
                          value={newRepoName}
                          onChange={(e) => setNewRepoName(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-[#12161c] border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-[#25e2cc]"
                        />
                      </div>

                      {/* Asset Scope Selection (Single Asset vs Group Assets) */}
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase">
                          ASSET TYPE / SCOPE
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setAssetType('Single Asset')}
                            className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                              assetType === 'Single Asset'
                                ? 'bg-[#25e2cc]/10 border-[#25e2cc] text-slate-900 dark:text-white'
                                : 'bg-slate-50 dark:bg-[#12161c] border-slate-300 dark:border-slate-800 text-slate-500'
                            }`}
                          >
                            <Zap className={`w-4 h-4 ${assetType === 'Single Asset' ? 'text-[#25e2cc]' : 'text-slate-400'}`} />
                            <div>
                              <div className="text-xs font-bold font-sans">Single Asset</div>
                              <div className="text-[10px] font-mono text-slate-400">One machine/motor</div>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => setAssetType('Group Assets')}
                            className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                              assetType === 'Group Assets'
                                ? 'bg-[#25e2cc]/10 border-[#25e2cc] text-slate-900 dark:text-white'
                                : 'bg-slate-50 dark:bg-[#12161c] border-slate-300 dark:border-slate-800 text-slate-500'
                            }`}
                          >
                            <Database className={`w-4 h-4 ${assetType === 'Group Assets' ? 'text-[#25e2cc]' : 'text-slate-400'}`} />
                            <div>
                              <div className="text-xs font-bold font-sans">Group Assets</div>
                              <div className="text-[10px] font-mono text-slate-400">Plant fleet / network</div>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* File Upload Dropzone Option */}
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase">
                          DATA LOGS / FILE UPLOAD
                        </label>
                        <div 
                          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                          onDragLeave={() => setIsDragging(false)}
                          onDrop={(e) => {
                            e.preventDefault();
                            setIsDragging(false);
                            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                              setSelectedFile(e.dataTransfer.files[0]);
                            }
                          }}
                          className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer ${
                            isDragging 
                              ? 'border-[#25e2cc] bg-[#25e2cc]/10' 
                              : 'border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-[#12161c] hover:border-slate-400'
                          }`}
                        >
                          <input 
                            type="file" 
                            id="file-upload-input" 
                            className="hidden" 
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                setSelectedFile(e.target.files[0]);
                              }
                            }}
                          />
                          <label htmlFor="file-upload-input" className="cursor-pointer space-y-2 block">
                            <Download className="w-6 h-6 text-[#25e2cc] mx-auto" />
                            {selectedFile ? (
                              <div>
                                <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                                  Selected File: {selectedFile.name}
                                </div>
                                <div className="text-[10px] text-slate-400 font-mono">
                                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                                  Click to select telemetry log file or drag & drop
                                </div>
                                <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                                  Supports .parquet, .db, .csv, .h5, .json logs (Up to 50 GB)
                                </div>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => { setIsUploadModalOpen(false); setSelectedFile(null); }}
                          className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 rounded-xl bg-[#25e2cc] hover:bg-[#1fd1bd] text-slate-950 font-mono font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md shadow-[#25e2cc]/20"
                        >
                          <span>Confirm Upload & Ingest</span>
                          <Zap className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
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
