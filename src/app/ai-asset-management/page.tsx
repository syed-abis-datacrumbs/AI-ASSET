'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Cpu, 
  TrendingUp, 
  AlertTriangle, 
  FileText, 
  ShieldAlert, 
  CheckCircle2, 
  DollarSign, 
  Activity, 
  Sparkles, 
  Sliders, 
  Download, 
  Terminal, 
  ArrowRight, 
  Sun, 
  Moon, 
  Check, 
  Clock, 
  Lock, 
  RotateCw, 
  Calendar, 
  ChevronRight, 
  Users, 
  Database,
  Building,
  Zap,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  BarChart3,
  Layers,
  Wrench,
  Gauge,
  Radio,
  FileCheck,
  LockKeyhole,
  Mail,
  Phone,
  Bot,
  Network
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useAuthModal } from '@/context/AuthModalContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIAssetManagementLandingPage() {
  const { theme, toggleTheme } = useTheme();
  const { openModal } = useAuthModal();

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Interactive Live Demo State
  const [demoTab, setDemoTab] = useState<'Bad Actors' | 'PM Kill-List' | 'AI Prompt Sandbox'>('Bad Actors');
  const [promptInput, setPromptInput] = useState('');
  const [aiOutput, setAiOutput] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Active Case Study Tab State
  const [activeCaseStudy, setActiveCaseStudy] = useState<number>(0);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How fast can we see initial findings and ROI?',
      answer: 'Within 2 to 3 weeks of receiving your initial CMMS export or PM plan. Our AI engine identifies over-maintained bad actors and immediate optimization opportunities in days, which our senior reliability engineers then validate.'
    },
    {
      question: 'Do we need to install software or connect to our OT network to get started?',
      answer: 'No. You can start with a simple one-time data export (CSV/Excel) of your CMMS work orders or PM plans under NDA. Direct API integration with SAP, Maximo, or telemetry networks is optional when you are ready to automate live dispatching.'
    },
    {
      question: 'Is our proprietary operational data safe and kept private?',
      answer: 'Absolutely. Every engagement begins with an NDA. Your OEM manuals, failure logs, and plant data are stored in isolated, client-dedicated environments and are never used to train public AI models.'
    },
    {
      question: 'How does Fixsset handle unique or custom plant equipment with limited OEM data?',
      answer: 'Our engine combines broad industrial physics models with Weibull hazard distribution analysis. Even for custom or legacy assets, Fixsset analyzes historical failure patterns and operational stress parameters to generate custom failure mode profiles.'
    },
    {
      question: 'Can Fixsset export optimized PM tasks back into our existing CMMS (SAP / Maximo / Infor)?',
      answer: 'Yes. Deliverables include CMMS-ready CSV payload files formatted directly for SAP PM, IBM Maximo, or Infor EAM import, ensuring zero manual data entry for your planners.'
    },
    {
      question: 'Who reviews the AI outputs to guarantee zero hallucinations?',
      answer: 'Senior reliability engineers with 20+ years of plant experience review and sign off on every deliverable. AI performs the heavy computational lifting, but human reliability expertise guarantees field safety and compliance.'
    }
  ];

  // 8 FIXSSET PLATFORM MODULES
  const fixssetModules = [
    {
      id: 'MOD-01',
      title: 'Bad Actor Diagnostic',
      category: 'RELIABILITY & COSTING',
      icon: AlertTriangle,
      iconBg: 'bg-rose-500/10 text-rose-500 border-rose-500/30',
      description: 'Automatically ranks, costs, and pinpoints your plant’s top 10 costliest asset failure sources using CMMS work order history.',
      highlight: 'From $7,000 · 3-4 Wk Scope'
    },
    {
      id: 'MOD-02',
      title: 'PM Strategy Optimizer',
      category: 'MAINTENANCE TUNING',
      icon: Sliders,
      iconBg: 'bg-[#25e2cc]/10 text-[#25e2cc] border-[#25e2cc]/30',
      description: 'Generates costed PM kill-lists removing 30-50% redundant inspections using Weibull distribution wear curves.',
      highlight: '30-50% Cost Cut'
    },
    {
      id: 'MOD-03',
      title: 'OEM AI FMECA Generator',
      category: 'COMPLIANCE & RCM',
      icon: FileCheck,
      iconBg: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
      description: 'Parses 1,000+ page OEM manuals in minutes to draft ISO & SAE JA1011 compliant Failure Mode, Effects & Criticality Analysis.',
      highlight: 'ISO Standard Compliant'
    },
    {
      id: 'MOD-04',
      title: 'Asset Telemetry Stream',
      category: 'IOT & SENSORS',
      icon: Radio,
      iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      description: 'Real-time telemetry engine processing vibration spectrums, acoustic emissions, and thermal sensor data.',
      highlight: 'Real-time Sub-Second Ingest'
    },
    {
      id: 'MOD-05',
      title: 'RCA & Incident Post-Mortem',
      category: 'FAILURE ANALYSIS',
      icon: Activity,
      iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      description: 'Automates Root Cause Analysis (5-Why & Fishbone) for unplanned outages to prevent repeat failure patterns.',
      highlight: 'Automated 5-Why Decks'
    },
    {
      id: 'MOD-06',
      title: 'RUL Degradation Predictor',
      category: 'PREDICTIVE ANALYTICS',
      icon: Gauge,
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      description: 'Remaining Useful Life forecasting curves calculating time-to-failure windows for critical rotating machinery.',
      highlight: 'Weibull Beta Curve Fit'
    },
    {
      id: 'MOD-07',
      title: 'CMMS Payload Dispatcher',
      category: 'INTEGRATION & CMMS',
      icon: Wrench,
      iconBg: 'bg-[#25e2cc]/10 text-[#25e2cc] border-[#25e2cc]/30',
      description: 'Direct 1-click export of optimized PM schedules and emergency work order payloads into SAP PM and IBM Maximo.',
      highlight: 'SAP & Maximo Ready'
    },
    {
      id: 'MOD-08',
      title: 'Cyber-Physical OT Security',
      category: 'CYBERSECURITY & OT',
      icon: LockKeyhole,
      iconBg: 'bg-[#25e2cc]/10 text-[#25e2cc] border-[#25e2cc]/30',
      description: 'Monitors Modbus, DNP3, and OPC-UA industrial protocols for malicious packet injections and sensor spoofing.',
      highlight: 'IEC 62443 Aligned'
    }
  ];

  // CASE STUDIES DATA
  const caseStudies = [
    {
      id: 'CS-01',
      client: 'Global Mining & Mineral Processing Facility',
      sector: 'MINING & EXTRACTION',
      stat1: '$420,000',
      label1: 'Annual Maintenance Savings',
      stat2: '45%',
      label2: 'PM Inspection Hours Cut',
      problem: 'The facility was suffering from over-maintained slurry pumps resulting in $1.2M in annual maintenance waste and excessive technician overtime.',
      solution: 'Fixsset deployed the PM Strategy Optimizer to run Weibull hazard analysis across 4,200 work orders. A 38-task PM Kill-List was created, re-tuning frequencies to actual failure probabilities.',
      deliverable: 'Pushed tuned PM frequencies directly into SAP PM in 3 weeks with 0 compliance risk.'
    },
    {
      id: 'CS-02',
      client: '850MW Combined-Cycle Power Generation Site',
      sector: 'POWER & UTILITIES',
      stat1: '78%',
      label1: 'Downtime Reduction',
      stat2: '14.2 hrs',
      label2: 'MTTR Speed Improvement',
      problem: 'Unplanned Gas Turbine bearing spalling failures were costing $140,000 per downtime event with no clear root cause identified.',
      solution: 'Fixsset Bad Actor Diagnostic parsed telemetry and CMMS records, discovering high harmonic vibration alignment issues on Shaft B early.',
      deliverable: 'Automated SAP Work Order payload dispatch prevented 3 catastrophic failures over 12 months.'
    },
    {
      id: 'CS-03',
      client: 'Petrochemical Refining Complex',
      sector: 'CHEMICAL PROCESSING',
      stat1: '600+ hrs',
      label1: 'Engineer Hours Saved',
      stat2: '100%',
      label2: 'OEM Compliance Rate',
      problem: 'A plant expansion required FMECA and maintenance plans for 150+ new pump assets before an upcoming turnaround deadline.',
      solution: 'Fixsset OEM AI FMECA Generator ingested 4,000 pages of OEM manuals in under 48 hours to draft complete ISO 10816 task instructions.',
      deliverable: 'Delivered turnkey Maximo import payload 4 weeks ahead of schedule.'
    }
  ];

  // Sample Bad Actors for Interactive Section
  const badActors = [
    {
      id: 'BA-01',
      rank: 1,
      name: 'Gas Turbine Shaft B - High Harmonic Vibration',
      facility: 'Power Generation - Unit 4',
      annualCost: '$54,200 / yr',
      downtimeHours: '142 hrs',
      failureMode: 'Bearing Spalling & Misalignment',
      action: 'Retune PM to 600h Weibull cycle & re-align laser housing.'
    },
    {
      id: 'BA-02',
      rank: 2,
      name: 'Boiler Feed Pump 02 - Mechanical Seal Cavitation',
      facility: 'Power Generation - Unit 2',
      annualCost: '$38,900 / yr',
      downtimeHours: '98 hrs',
      failureMode: 'Impeller Erosion & Pressure Loss',
      action: 'Install IoT acoustic sensor & push SAP Work Order #4810.'
    },
    {
      id: 'BA-03',
      rank: 3,
      name: 'Substation Transformer #4 - Dissolved Gas Anomaly',
      facility: 'Power Distribution Grid',
      annualCost: '$29,400 / yr',
      downtimeHours: '56 hrs',
      failureMode: 'Cellulose Insulation Thermal Degradation',
      action: 'Schedule automated DGA oil purge cycle & thermal imaging.'
    },
    {
      id: 'BA-04',
      rank: 4,
      name: 'Chemical Reactor Agitator - Lube Starvation',
      facility: 'Chemical Processing - Line C',
      annualCost: '$20,000 / yr',
      downtimeHours: '44 hrs',
      failureMode: 'Overheating Drive Bearing',
      action: 'Increase auto-grease pump pulse frequency by 15%.'
    }
  ];

  // PM Kill-List Sample Data
  const pmOptimizationList = [
    {
      id: 'PM-901',
      taskName: 'Weekly Turbine Bearing Visual Inspection',
      oemFreq: '7 Days',
      weibullFreq: '30 Days (Weibull beta=2.1)',
      recommendation: 'KILL REDUNDANT TASK',
      savings: '$12,400 / yr',
      statusColor: 'bg-rose-500/10 text-rose-500 border-rose-500/30'
    },
    {
      id: 'PM-902',
      taskName: 'Substation Transformer Oil Manual Sampling',
      oemFreq: '14 Days',
      weibullFreq: '90 Days (IoT Stream Active)',
      recommendation: 'RETUNE FREQUENCY',
      savings: '$8,800 / yr',
      statusColor: 'bg-amber-500/10 text-amber-500 border-amber-500/30'
    },
    {
      id: 'PM-903',
      taskName: 'Boiler Feed Pump Alignment Check',
      oemFreq: '30 Days',
      weibullFreq: '60 Days',
      recommendation: 'RETUNE FREQUENCY',
      savings: '$6,200 / yr',
      statusColor: 'bg-[#25e2cc]/10 text-[#25e2cc] border-[#25e2cc]/30'
    },
    {
      id: 'PM-904',
      taskName: 'Agitator Motor Greasing',
      oemFreq: '90 Days',
      weibullFreq: '90 Days',
      recommendation: 'RETAIN CURRENT PLAN',
      savings: '$0 (Optimal)',
      statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
    }
  ];

  const handleRunAiAnalysis = (prompt?: string) => {
    const query = prompt || promptInput || 'Draft FMECA for Turbine Bearing Spalling';
    setIsAnalyzing(true);
    setAiOutput(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      setAiOutput(`[FIXSSET RELIABILITY AI ENGINE - ANALYSIS REPORT]
QUERY: "${query}"
WEIBULL MODEL: Beta = 2.34 (Wear-out pattern confirmed). Failure probability at 500h is 78.4%.
RELIABILITY RECOMMENDATION:
1. Convert 7-day visual checks into 30-day vibration spectrum audits.
2. OEM Compliance: Compliant with ISO 10816-3 Zone C thresholds.
3. SAP Work Order Payload generated: WO_ID #994821 (Priority 1 Dispatch).
ESTIMATED FIELD SAVINGS: $18,500 / year per asset group.`);
    }, 1000);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingEmail) return;
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsBookingOpen(false);
      setBookingEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090c] text-slate-900 dark:text-slate-100 font-sans flex flex-col justify-between transition-colors duration-300 selection:bg-[#25e2cc] selection:text-black relative pb-20">
      
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 dark:bg-[#07090c]/95 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-10">
            <Link href="/" className="font-extrabold text-2xl font-mono tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
              fixsset<span className="text-[#25e2cc] font-light">/</span>reliability
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-xs font-sans tracking-wide text-slate-600 dark:text-slate-300">
              <a href="#modules" className="hover:text-slate-900 dark:hover:text-white transition-colors">8 Modules</a>
              <a href="#why-fixsset" className="hover:text-slate-900 dark:hover:text-white transition-colors">Why Fixsset</a>
              <a href="#case-studies" className="hover:text-slate-900 dark:hover:text-white transition-colors">Case Studies</a>
              <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition-colors">Security</a>
              <Link href="/dashboard" className="hover:text-slate-900 dark:hover:text-white transition-colors font-mono">Monitoring Vault</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={openModal}
              className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-2 py-1 cursor-pointer"
            >
              Sign In
            </button>

            <button
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#12161b] text-slate-700 dark:text-amber-400 border border-slate-300 dark:border-slate-800 hover:scale-105 transition-all shadow-sm cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button 
              onClick={() => setIsBookingOpen(true)}
              className="px-6 py-3 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 font-sans font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <span>Book a call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight leading-[1.08]">
              Improve reliability <br />
              <span className="text-[#25e2cc]">in weeks, not</span> <br />
              months.
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-xl leading-relaxed">
              We help industrial teams <strong className="text-slate-900 dark:text-white font-bold">improve asset performance</strong> and <strong className="text-slate-900 dark:text-white font-bold">reduce maintenance costs</strong>. We transform your data into <strong className="text-slate-900 dark:text-white font-bold">actionable savings</strong> with <strong className="text-slate-900 dark:text-white font-bold">AI</strong>.
            </p>

            <div className="pt-2 space-y-5">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsBookingOpen(true)}
                className="px-8 py-4 rounded-2xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 font-sans font-bold text-sm flex items-center gap-3 transition-all cursor-pointer shadow-xl"
              >
                <span>Book a 30-min call</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <div className="text-[11px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase font-bold">
                AI-POWERED RELIABILITY & INDUSTRIAL MAINTENANCE
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11]"
            >
              <Image 
                src="/hero-engineer.png"
                alt="Fixsset Industrial Reliability Engineer"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <motion.div 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute bottom-5 right-5 px-4 py-2 rounded-full bg-white/95 dark:bg-[#0b0e14]/95 border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-900 dark:text-white shadow-xl flex items-center gap-2 backdrop-blur-md"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
                <span>Fixsset Agent running</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>

        {/* BUILT FOR INFINITE CONTINUOUS MOVING TICKER */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80 overflow-hidden relative w-full flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 dark:from-[#07090c] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 dark:from-[#07090c] to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            className="flex items-center gap-6 whitespace-nowrap text-[11px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase font-bold w-max"
          >
            {/* Set 1 */}
            <span className="text-slate-900 dark:text-slate-200 font-extrabold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800">BUILT FOR</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">MINING</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">CHEMICAL</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">PHARMACEUTICALS</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">PAPER</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">UTILITIES</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">POWER</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">MANUFACTURING</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">STEEL</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">OIL & GAS</span>
            <span>·</span>

            {/* Duplicated Set 2 for Seamless Loop */}
            <span className="text-slate-900 dark:text-slate-200 font-extrabold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800">BUILT FOR</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">MINING</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">CHEMICAL</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">PHARMACEUTICALS</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">PAPER</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">UTILITIES</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">POWER</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">MANUFACTURING</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">STEEL</span>
            <span>·</span>
            <span className="text-slate-700 dark:text-slate-300">OIL & GAS</span>
            <span>·</span>
          </motion.div>
        </div>
      </section>

      {/* 3. DARK STATS BANNER */}
      <section className="bg-slate-900 dark:bg-[#080b0f] text-white py-14 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left"
        >
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-extrabold font-sans text-white">300+</div>
            <div className="text-xs text-slate-400 font-sans">Hours saved per engineer per year</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-extrabold font-sans text-[#25e2cc]">90%</div>
            <div className="text-xs text-slate-400 font-sans">Faster than the manual way</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-extrabold font-sans text-white">100%</div>
            <div className="text-xs text-slate-400 font-sans">OEM & standards compliant</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-extrabold font-sans text-white">20+</div>
            <div className="text-xs text-slate-400 font-sans">Years of reliability expertise behind Fixsset</div>
          </div>
        </motion.div>
      </section>

      {/* 4. NEW SECTION: OUR 8 CORE INDUSTRIAL MODULES */}
      <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-[#25e2cc]/10 text-[#25e2cc] border border-[#25e2cc]/30 font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>THE FIXSSET PLATFORM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight">
            8 AI Modules Built for Industrial Uptime
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
            From root cause diagnostic to 1-click SAP work order dispatching, our modular architecture targets every bottleneck in the maintenance lifecycle.
          </p>
        </div>

        {/* 8 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fixssetModules.map((mod, index) => {
            const Icon = mod.icon;
            return (
              <motion.div 
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800/90 shadow-sm dark:shadow-none flex flex-col justify-between space-y-5 hover:border-[#25e2cc]/60 transition-all cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${mod.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase">{mod.id}</span>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono font-bold text-[#25e2cc] tracking-widest uppercase mb-1">{mod.category}</div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">{mod.title}</h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500 font-medium">{mod.highlight}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#25e2cc]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4.5. AUTONOMOUS AI AGENTS SWARM SECTION */}
      <section id="ai-agents" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-[#25e2cc]/10 text-[#25e2cc] border border-[#25e2cc]/30 font-bold uppercase tracking-wider">
            <Bot className="w-4 h-4 text-[#25e2cc]" />
            <span>AUTONOMOUS MULTI-AGENT ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight leading-tight">
            How we use <span className="text-[#25e2cc]">Autonomous AI Agents.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            Instead of generic chat models, Fixsset deploys a specialized swarm of 4 autonomous industrial agents. Each agent handles a dedicated reliability workflow inside your asset vault 24/7.
          </p>
        </div>

        {/* 4 Specialized Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Agent 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none space-y-6 hover:border-[#25e2cc]/60 transition-all group relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">AGENT 01</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">Bad Actor Sentry Agent</h3>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              Continuously ingests CMMS work order histories to compute Weibull hazard distribution curves. It automatically groups repeat component failures, ranks financial impact, and flags top bad actors before unplanned trips.
            </p>

            <div className="p-4 rounded-2xl bg-[#07090d] border border-slate-800/80 font-mono text-[11px] space-y-2 text-slate-300">
              <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-2">
                <span>Task: Weibull Hazard Fit</span>
                <span className="text-emerald-400">2,450 CMMS Logs/sec</span>
              </div>
              <div className="text-amber-300 font-semibold">
                ▶ Identified Bad Actor: Slurry Pump #3 (Bearing Race Micro-Spall)
              </div>
              <div className="text-slate-400 text-[10px]">
                Calculated Annual Financial Exposure: <span className="text-white font-bold">$142,000/yr</span>
              </div>
            </div>
          </motion.div>

          {/* Agent 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none space-y-6 hover:border-[#25e2cc]/60 transition-all group relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-[#25e2cc] flex items-center justify-center font-bold">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-[#25e2cc] uppercase tracking-widest">AGENT 02</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">PM Kill-List Suppressor</h3>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              Audits static PM maintenance tasks against OEM manuals and actual runtime hours. It suppresses redundant, low-value PM work orders that waste maintenance technician hours without improving equipment reliability.
            </p>

            <div className="p-4 rounded-2xl bg-[#07090d] border border-slate-800/80 font-mono text-[11px] space-y-2 text-slate-300">
              <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-2">
                <span>Task: PM Suppression Audit</span>
                <span className="text-[#25e2cc]">1,420 Hrs Saved</span>
              </div>
              <div className="text-[#25e2cc] font-semibold">
                ▶ Suppressed: Bi-weekly Lube Flush on Sealed Bearing (Task #8841)
              </div>
              <div className="text-slate-400 text-[10px]">
                Reason: OEM spec mandates replacement at 20,000 operating hrs; flush adds zero value.
              </div>
            </div>
          </motion.div>

          {/* Agent 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none space-y-6 hover:border-[#25e2cc]/60 transition-all group relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center font-bold">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest">AGENT 03</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">Telemetry Stream Diagnostic</h3>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              Monitors real-time SCADA, vibration FFT harmonics, and transformer Dissolved Gas Analysis (DGA). It detects micro-deviations from baseline signature curves to trigger predictive maintenance before failure occurs.
            </p>

            <div className="p-4 rounded-2xl bg-[#07090d] border border-slate-800/80 font-mono text-[11px] space-y-2 text-slate-300">
              <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-2">
                <span>Task: FFT Spectrum Peak Filter</span>
                <span className="text-purple-400">0.02ms Latency</span>
              </div>
              <div className="text-purple-300 font-semibold">
                ▶ Anomaly Flagged: 120Hz Harmonics spike on Steam Turbine Bearing #2
              </div>
              <div className="text-slate-400 text-[10px]">
                Recommended Action: Adjust shaft alignment tolerance within 72 hrs.
              </div>
            </div>
          </motion.div>

          {/* Agent 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none space-y-6 hover:border-[#25e2cc]/60 transition-all group relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">AGENT 04</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">SAP & Maximo CMMS Payload Agent</h3>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              Takes validated reliability engineering findings and converts them into production-ready SAP PM work order packages, task lists, and spare part BOMs for direct ERP execution without manual data re-entry.
            </p>

            <div className="p-4 rounded-2xl bg-[#07090d] border border-slate-800/80 font-mono text-[11px] space-y-2 text-slate-300">
              <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-2">
                <span>Task: CMMS Payload Compiler</span>
                <span className="text-emerald-400">Zero Manual Entry</span>
              </div>
              <div className="text-emerald-300 font-semibold">
                ▶ Export Ready: SAP PM Work Order #902148 (Laser Alignment Payload)
              </div>
              <div className="text-slate-400 text-[10px]">
                Payload Status: <span className="text-white font-bold">Validated against ISO 10816 vibration specs</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. WHY FIXSSET SECTION */}
      <section id="why-fixsset" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-[#25e2cc]/10 text-[#25e2cc] border border-[#25e2cc]/30 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#25e2cc]" />
            <span>WHY FIXSSET</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight leading-tight">
            Reliability experts first. <span className="text-[#25e2cc]">AI engineers second.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            We come at this from the plant floor first: reliability engineers with 20+ years on real sites, who then learned to wield AI. That order is what makes the work fit your site – and hold up in production, not just in a demo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#090c10] border border-slate-800 text-white flex flex-col justify-between space-y-8 shadow-2xl relative">
            <div className="space-y-6">
              <div className="text-5xl sm:text-6xl font-extrabold font-sans text-white flex items-center">
                20+<span className="text-[#25e2cc] font-light ml-0.5">/</span>
              </div>
              <div className="space-y-4 text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white font-bold">years of hands-on reliability engineering.</strong> <br />
                  FMECA, RCA, Weibull, RAM, RCM – on LNG, power, mining, oil & gas and heavy industry.
                </p>
                <p>
                  <strong className="text-white font-bold">Combined with</strong> modern AI engineering – the combo that makes our work hold up in production, not just in demos.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#111620] border border-slate-800/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#25e2cc]/10 border border-[#25e2cc]/30 text-[#25e2cc] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white font-sans">Powered by Fixsset Engine</div>
                <div className="text-[11px] text-slate-400 font-mono">Built for industrial uptime · <Link href="/dashboard" className="text-[#25e2cc] hover:underline">Read our story →</Link></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800/90 shadow-sm dark:shadow-none space-y-2 hover:border-[#25e2cc]/60 transition-all flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">We&apos;ve been in your shoes.</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  Reliability workshops, FMECAs from scratch, OEM manuals at 2AM. We automate the pain we&apos;ve felt ourselves.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800/90 shadow-sm dark:shadow-none space-y-2 hover:border-[#25e2cc]/60 transition-all flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">No fluffy AI. Ever.</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  If we&apos;re not 100% convinced it delivers measurable field value, we don&apos;t build it and we don&apos;t sell it.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800/90 shadow-sm dark:shadow-none space-y-2 hover:border-[#25e2cc]/60 transition-all flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">We ship only what works.</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  Every output goes through senior reliability review. Zero hallucinations, zero guesswork, zero compliance risk.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0a0d12] border-l-4 border-l-[#25e2cc] border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm sm:text-base font-serif italic text-slate-800 dark:text-slate-200 leading-relaxed text-center sm:text-left">
            &ldquo;If we can&apos;t prove the ROI on the first call, we won&apos;t take your money. Simple as that.&rdquo;
          </p>
        </div>
      </section>

      {/* 6. NEW SECTION: CASE STUDIES & PROVEN RESULTS */}
      <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-[#25e2cc]/10 text-[#25e2cc] border border-[#25e2cc]/30 font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>REAL FIELD RESULTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight">
            Proven Industrial Case Studies
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
            See how energy, mining, and chemical facilities eliminate waste and prevent catastrophic downtime with Fixsset.
          </p>
        </div>

        {/* Case Studies Selector Tabs */}
        <div className="flex justify-center gap-2 font-mono text-xs overflow-x-auto pb-2">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveCaseStudy(idx)}
              className={`px-5 py-2.5 rounded-2xl transition-all cursor-pointer font-bold flex items-center gap-2 whitespace-nowrap ${
                activeCaseStudy === idx
                  ? 'bg-[#25e2cc] text-slate-950 shadow-md shadow-[#25e2cc]/20'
                  : 'bg-white dark:bg-[#0a0d12] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>{cs.sector}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study Detail Card */}
        <AnimatePresence mode="wait">
          {caseStudies[activeCaseStudy] && (
            <motion.div 
              key={caseStudies[activeCaseStudy].id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 shadow-2xl space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#25e2cc] tracking-widest uppercase">{caseStudies[activeCaseStudy].sector}</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans mt-1">
                    {caseStudies[activeCaseStudy].client}
                  </h3>
                </div>

                {/* Verified Metrics */}
                <div className="flex items-center gap-6 bg-slate-50 dark:bg-[#0e131b] p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-sans text-emerald-500">{caseStudies[activeCaseStudy].stat1}</div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">{caseStudies[activeCaseStudy].label1}</div>
                  </div>
                  <div className="w-px h-10 bg-slate-200 dark:bg-slate-800" />
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-sans text-[#25e2cc]">{caseStudies[activeCaseStudy].stat2}</div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">{caseStudies[activeCaseStudy].label2}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-sans">
                <div className="space-y-2 p-6 rounded-2xl bg-slate-50 dark:bg-[#0e131b] border border-slate-200 dark:border-slate-800/80">
                  <div className="font-mono font-bold text-rose-500 uppercase text-[10px] flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>THE PROBLEM</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {caseStudies[activeCaseStudy].problem}
                  </p>
                </div>

                <div className="space-y-2 p-6 rounded-2xl bg-slate-50 dark:bg-[#0e131b] border border-slate-200 dark:border-slate-800/80">
                  <div className="font-mono font-bold text-[#25e2cc] uppercase text-[10px] flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>FIXSSET AI INTERVENTION</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {caseStudies[activeCaseStudy].solution}
                  </p>
                </div>

                <div className="space-y-2 p-6 rounded-2xl bg-slate-50 dark:bg-[#0e131b] border border-slate-200 dark:border-slate-800/80">
                  <div className="font-mono font-bold text-emerald-500 uppercase text-[10px] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>FIELD DELIVERABLE</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {caseStudies[activeCaseStudy].deliverable}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 7. INTERACTIVE DEMO ENGINE */}
      <section id="demo" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 space-y-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono bg-[#25e2cc]/10 text-[#25e2cc] border border-[#25e2cc]/30 font-bold mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>INTERACTIVE DEMO ENGINE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans">
                Experience Fixsset AI Engine Live
              </h2>
            </div>

            <div className="flex gap-2 font-mono text-xs overflow-x-auto">
              {(['Bad Actors', 'PM Kill-List', 'AI Prompt Sandbox'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setDemoTab(tab)}
                  className={`px-4 py-2 rounded-xl transition-all cursor-pointer font-bold ${
                    demoTab === tab
                      ? 'bg-[#25e2cc] text-slate-950 shadow-md shadow-[#25e2cc]/20'
                      : 'bg-slate-100 dark:bg-[#121720] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {demoTab === 'Bad Actors' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {badActors.map((actor) => (
                <div key={actor.id} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0e131b] border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-rose-500/10 text-rose-500 font-mono font-bold text-xs flex items-center justify-center border border-rose-500/30">
                        #{actor.rank}
                      </span>
                      <div>
                        <div className="text-[10px] font-mono text-slate-400">{actor.facility}</div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white font-sans">{actor.name}</h4>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-rose-500/10 text-rose-500 border border-rose-500/30">
                      {actor.annualCost}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#080b0f] border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <div className="text-[9px] text-[#25e2cc] font-bold uppercase mb-0.5">AI RCM Action:</div>
                    {actor.action}
                  </div>
                </div>
              ))}
            </div>
          )}

          {demoTab === 'PM Kill-List' && (
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left border-collapse font-sans text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-500 uppercase bg-slate-100 dark:bg-[#0e131b]">
                    <th className="p-3.5">PM TASK NAME</th>
                    <th className="p-3.5">CURRENT OEM FREQ</th>
                    <th className="p-3.5">WEIBULL OPTIMIZED FREQ</th>
                    <th className="p-3.5">RECOMMENDATION</th>
                    <th className="p-3.5">SAVINGS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800/80">
                  {pmOptimizationList.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-[#0e131b]">
                      <td className="p-3.5 font-bold font-mono text-slate-900 dark:text-white">{item.taskName}</td>
                      <td className="p-3.5 font-mono text-slate-500">{item.oemFreq}</td>
                      <td className="p-3.5 font-mono text-[#25e2cc] font-bold">{item.weibullFreq}</td>
                      <td className="p-3.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${item.statusColor}`}>
                          {item.recommendation}
                        </span>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-emerald-500">{item.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {demoTab === 'AI Prompt Sandbox' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <button 
                  onClick={() => handleRunAiAnalysis('Draft FMECA for High-Pressure Steam Valve failure modes')}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#121720] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-[#25e2cc] cursor-pointer"
                >
                  + Draft FMECA Steam Valve
                </button>
                <button 
                  onClick={() => handleRunAiAnalysis('Generate SAP PM work order payload for Turbine Shaft Alignment')}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#121720] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-[#25e2cc] cursor-pointer"
                >
                  + Generate SAP Work Order
                </button>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  placeholder="Type custom prompt (e.g. Run Weibull hazard calculation for Boiler Feed Pump)..."
                  className="flex-1 bg-slate-50 dark:bg-[#11151c] border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-[#25e2cc]"
                />
                <button
                  onClick={() => handleRunAiAnalysis()}
                  disabled={isAnalyzing}
                  className="px-6 py-3 rounded-xl bg-[#25e2cc] hover:bg-[#1fd1bd] text-slate-950 font-mono font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md shadow-[#25e2cc]/20"
                >
                  <span>{isAnalyzing ? 'Analyzing...' : 'Execute'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {aiOutput && (
                <div className="p-4 rounded-xl bg-[#090c10] border border-[#25e2cc]/40 font-mono text-xs text-[#25e2cc] whitespace-pre-line leading-relaxed">
                  {aiOutput}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 8. HOW AN ENGAGEMENT ACTUALLY WORKS (EXACT SCREENSHOT LAYOUT) */}
      <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">
        
        {/* Header with 3D Isometric Industrial Plant Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-[#25e2cc]/10 text-[#25e2cc] border border-[#25e2cc]/30 font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#25e2cc]" />
              <span>HOW WE WORK</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight leading-tight">
              How an engagement <span className="text-[#25e2cc]">actually works.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-xl">
              From first call to delivered studies. Four clear stages – no surprises, no vaporware.
            </p>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Image
                src="/isometric-plant.png"
                alt="Fixsset 3D Isometric Industrial Facility"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>

        {/* Vertical Center Line Timeline with Alternating Cards */}
        <div className="relative max-w-4xl mx-auto pt-4">
          
          {/* Animated Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block overflow-hidden rounded-full">
            {/* Track Background */}
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800" />
            
            {/* Scroll-Revealed Glowing Fill Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 bg-[#25e2cc]/30 origin-top"
            />

            {/* Continuous Travelling Energy Pulse / Laser Beam */}
            <motion.div 
              animate={{ y: ['-100%', '800%'] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
              className="w-full h-36 bg-gradient-to-b from-transparent via-[#25e2cc] to-transparent shadow-[0_0_15px_#25e2cc]"
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            
            {/* Stage 1 (Left Card) */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-[45%] md:text-right"
              >
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none space-y-2 hover:border-[#25e2cc]/60 transition-all">
                  <span className="text-[10px] font-mono font-bold text-[#25e2cc] uppercase tracking-widest">WEEK 1</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">Scoping call (30 min)</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                    We map your situation and tell you which solution pays off first – or that none does. NDA signed.
                  </p>
                </div>
              </motion.div>

              {/* Center Node 1 (Highlighted) */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="z-10 w-12 h-12 rounded-full bg-[#07090c] text-white border-2 border-[#25e2cc] shadow-lg shadow-[#25e2cc]/40 flex items-center justify-center font-mono font-bold text-sm flex-shrink-0"
              >
                1
              </motion.div>

              <div className="w-full md:w-[45%] hidden md:block" />
            </div>

            {/* Stage 2 (Right Card) */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-[45%] hidden md:block" />

              {/* Center Node 2 */}
              <motion.div 
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.75, ease: 'easeInOut' }}
                className="z-10 w-12 h-12 rounded-full bg-white dark:bg-[#0e131b] text-slate-900 dark:text-white border-2 border-[#25e2cc]/80 shadow-md shadow-[#25e2cc]/20 flex items-center justify-center font-mono font-bold text-sm flex-shrink-0"
              >
                2
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-[45%] text-left"
              >
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none space-y-2 hover:border-[#25e2cc]/60 transition-all">
                  <span className="text-[10px] font-mono font-bold text-[#25e2cc] uppercase tracking-widest">WEEK 1</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">You send one export</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                    CMMS history, PM plan or OEM manuals – any format, even messy. That&apos;s all we need to start.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Stage 3 (Left Card) */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-[45%] md:text-right"
              >
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none space-y-2 hover:border-[#25e2cc]/60 transition-all">
                  <span className="text-[10px] font-mono font-bold text-[#25e2cc] uppercase tracking-widest">WEEK 2–3</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">AI-augmented analysis</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                    AI does the heavy lifting; senior reliability engineers validate every finding against your standards and OEM references.
                  </p>
                </div>
              </motion.div>

              {/* Center Node 3 */}
              <motion.div 
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.5, ease: 'easeInOut' }}
                className="z-10 w-12 h-12 rounded-full bg-white dark:bg-[#0e131b] text-slate-900 dark:text-white border-2 border-[#25e2cc]/80 shadow-md shadow-[#25e2cc]/20 flex items-center justify-center font-mono font-bold text-sm flex-shrink-0"
              >
                3
              </motion.div>

              <div className="w-full md:w-[45%] hidden md:block" />
            </div>

            {/* Stage 4 (Right Card) */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-[45%] hidden md:block" />

              {/* Center Node 4 */}
              <motion.div 
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 3, delay: 2.25, ease: 'easeInOut' }}
                className="z-10 w-12 h-12 rounded-full bg-white dark:bg-[#0e131b] text-slate-900 dark:text-white border-2 border-[#25e2cc]/80 shadow-md shadow-[#25e2cc]/20 flex items-center justify-center font-mono font-bold text-sm flex-shrink-0"
              >
                4
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-[45%] text-left"
              >
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none space-y-2 hover:border-[#25e2cc]/60 transition-all">
                  <span className="text-[10px] font-mono font-bold text-[#25e2cc] uppercase tracking-widest">WEEK 3–4</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">Deliverables in your hands</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                    Findings call, costed action plan, CMMS-ready files. You review – we iterate until it matches your standards.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>

        </div>

      </section>

      {/* 9. SECURITY & PRIVACY */}
      <section id="security" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono text-[#25e2cc] uppercase font-bold tracking-widest">ENTERPRISE DATA PRIVACY</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans">
            Your data stays yours. Period.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 space-y-3">
            <ShieldAlert className="w-8 h-8 text-[#25e2cc]" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">NDA-First, Private & Isolated</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              NDA signed before the first document moves. Your data is siloed per client and deleted after the engagement.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 space-y-3">
            <Lock className="w-8 h-8 text-cyan-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">Never Trains Public Models</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              Your OEM manuals and maintenance records are never fed back into general-purpose public LLMs. Ever.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-[#0a0d12] border border-slate-200 dark:border-slate-800 space-y-3">
            <Building className="w-8 h-8 text-amber-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">Your Cloud, Your Call</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              Azure, AWS, or on-prem if your security policy requires it. Fully GDPR and ISO-27001 aligned.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-[#25e2cc]/10 text-[#25e2cc] border border-[#25e2cc]/30 font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans">
            Got questions? We&apos;ve got <span className="text-[#25e2cc]">clear answers.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans max-w-xl mx-auto">
            Everything you need to know about our data security, deployment timelines, and AI reliability engine.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen 
                    ? 'bg-white dark:bg-[#0a0d12] border-[#25e2cc]/60 shadow-lg shadow-[#25e2cc]/5' 
                    : 'bg-white/60 dark:bg-[#080b0f]/60 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-sans font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer select-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#25e2cc] font-extrabold">0{idx + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#25e2cc]' : 'text-slate-400'}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm font-sans text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. BOTTOM CALL-TO-ACTION BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="p-10 sm:p-14 rounded-3xl bg-slate-950 text-white border border-slate-800 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans tracking-tight">
              Ready to find what your worst assets cost you?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              30 minutes. Bring a CMMS export — we&apos;ll tell you what&apos;s costing you most. No pitch, no obligation.
            </p>
            <div className="pt-4 flex justify-center">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="px-8 py-4 rounded-full bg-[#25e2cc] hover:bg-[#1fd1bd] text-slate-950 font-sans font-extrabold text-sm flex items-center gap-2 cursor-pointer shadow-xl transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book your 30-min call</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING STICKY BOTTOM CALLOUT PILL */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-xl w-[92%] sm:w-auto">
        <div className="px-5 py-3 rounded-full bg-slate-950/95 dark:bg-slate-900/95 border border-slate-800 text-white shadow-2xl backdrop-blur-md flex items-center justify-between gap-4">
          <span className="text-xs font-sans text-slate-200 font-medium truncate">
            Find what&apos;s costing you most. Book a 30-min call.
          </span>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="px-4 py-1.5 rounded-full bg-[#25e2cc] hover:bg-[#1fd1bd] text-slate-950 font-sans font-bold text-xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-md"
          >
            <span>Book</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* BOOKING MODAL */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setIsBookingOpen(false)}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
          />

          <div className="relative z-10 w-full max-w-md bg-white dark:bg-[#0c1015] border border-slate-300 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 font-sans">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#25e2cc]" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">
                  Book 30-Min Reliability Audit
                </h3>
              </div>
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            {bookingSuccess ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono space-y-2 text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <div className="font-bold">Audit Call Reserved!</div>
                <div>Our Senior Reliability Engineer will email you calendar slots shortly.</div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase">
                    PLANT EMAIL ADDRESS
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="engineer@plant-facility.com"
                    value={bookingEmail}
                    onChange={(e) => setBookingEmail(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-[#12161c] border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-[#25e2cc]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#25e2cc] hover:bg-[#1fd1bd] text-slate-950 font-sans font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Confirm Calendar Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* FOOTER (EXACT SCREENSHOT MATCH) */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-[#f4f7f9] dark:bg-[#06080c] py-16 px-4 sm:px-8 font-sans text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
            
            {/* Column 1: FIXSSET Branding & Contact */}
            <div className="lg:col-span-4 space-y-5">
              <div className="font-extrabold text-2xl font-sans tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                FIX<span className="text-[#25e2cc]">SSET</span>
              </div>
              
              <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed max-w-sm">
                Industrial Predictive Maintenance & Secure Asset Vault. Engineered for Power Generation, Electrical Distribution, Advanced Manufacturing, and Chemical Processing facilities.
              </p>

              <div className="space-y-2 pt-1 font-sans text-xs font-semibold">
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-[#25e2cc]" />
                  <a href="mailto:fixsset@gmail.com" className="hover:text-[#25e2cc] transition-colors">fixsset@gmail.com</a>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <Phone className="w-4 h-4 text-[#25e2cc]" />
                  <a href="tel:+177827637" className="hover:text-[#25e2cc] transition-colors">(+1) 7782 7637</a>
                </div>
              </div>
            </div>

            {/* Column 2: INDUSTRIES */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono font-extrabold tracking-widest text-slate-900 dark:text-white uppercase">
                INDUSTRIES
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-sans">
                <li><a href="#case-studies" className="hover:text-slate-900 dark:hover:text-white transition-colors">Power Generation Plants</a></li>
                <li><a href="#case-studies" className="hover:text-slate-900 dark:hover:text-white transition-colors">Power Distribution & Grids</a></li>
                <li><a href="#case-studies" className="hover:text-slate-900 dark:hover:text-white transition-colors">Automated Manufacturing</a></li>
                <li><a href="#case-studies" className="hover:text-slate-900 dark:hover:text-white transition-colors">Chemical Processing Plants</a></li>
                <li><a href="#case-studies" className="hover:text-slate-900 dark:hover:text-white transition-colors">Heavy Industrial IoT</a></li>
              </ul>
            </div>

            {/* Column 3: RESOURCES */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-mono font-extrabold tracking-widest text-slate-900 dark:text-white uppercase">
                RESOURCES
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-sans">
                <li><a href="#security" className="hover:text-slate-900 dark:hover:text-white transition-colors">Industrial Telemetry Protocol</a></li>
                <li><a href="#security" className="hover:text-slate-900 dark:hover:text-white transition-colors">ISO 27001 Asset Vault Specs</a></li>
                <li><a href="#modules" className="hover:text-slate-900 dark:hover:text-white transition-colors">Turbine Vibration Diagnostics</a></li>
                <li><a href="#modules" className="hover:text-slate-900 dark:hover:text-white transition-colors">Transformer DGA AI Whitepaper</a></li>
                <li><a href="#security" className="hover:text-slate-900 dark:hover:text-white transition-colors">Plant Network Status</a></li>
              </ul>
            </div>

            {/* Column 4: PLANT VAULT STATUS Card */}
            <div className="lg:col-span-3">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1017] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-[#25e2cc] font-mono font-bold text-[11px] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#25e2cc]" />
                  <span>PLANT VAULT STATUS</span>
                </div>
                <p className="text-xs text-slate-800 dark:text-slate-200 font-sans leading-relaxed font-semibold">
                  Client Industrial Vault Active. 184,000+ Industrial Assets Monitored.
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  Protected by Quantum-Resilient TLS 1.3
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500">
            <div>
              © 2026 FIXSSET Industrial Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
              <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
              <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition-colors">Industrial Data Security</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
