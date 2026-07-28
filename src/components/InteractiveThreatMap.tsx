'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, HardDrive, Wrench, ShieldCheck, Zap, Factory, Flame } from 'lucide-react';

interface AssetTelemetryLog {
  id: string;
  timestamp: string;
  sector: 'Power Gen' | 'Power Dist' | 'Manufacturing' | 'Chemical';
  assetName: string;
  metric: string;
  healthState: 'Predictive Warning' | 'Optimal' | 'Maintenance Due';
  actionTaken: string;
  assetId: string;
}

export const InteractiveThreatMap: React.FC = () => {
  const [logs, setLogs] = useState<AssetTelemetryLog[]>([
    { id: '1', timestamp: '20:07:01', sector: 'Power Gen', assetName: 'Hydro-Turbine Unit #04 (Rotor B)', metric: 'Shaft Vibration Harmonic (> 5.8 mm/s)', healthState: 'Predictive Warning', actionTaken: 'Workorder: Adjust Lube Flow & Schedule Bearing Swap', assetId: 'AST-PWR-8820' },
    { id: '2', timestamp: '20:06:55', sector: 'Power Dist', assetName: 'Substation TX-09 (400kV Transformer)', metric: 'DGA Gas Ratio & Dielectric Temp Anomaly', healthState: 'Maintenance Due', actionTaken: 'Workorder: Auto Load Shift & Substation Maintenance', assetId: 'AST-DIS-4019' },
    { id: '3', timestamp: '20:06:48', sector: 'Manufacturing', assetName: 'Robotic Assembly Cell #14 (Line 3)', metric: 'Servomotor Current Ripple & Gearbox Wear', healthState: 'Predictive Warning', actionTaken: 'Workorder: Gearbox Lubrication & Calibrate Arm', assetId: 'AST-[#0092]' },
    { id: '4', timestamp: '20:06:40', sector: 'Chemical', assetName: 'Catalytic Reactor Vessel #02 (Plant B)', metric: 'Pressure Relief Differential (+14.2 PSI Spike)', healthState: 'Optimal', actionTaken: 'Workorder: Seal Integrity Inspection Scheduled', assetId: 'AST-CHM-3301' },
    { id: '5', timestamp: '20:06:32', sector: 'Power Gen', assetName: 'Gas Turbine Generator #01', metric: 'Exhaust Gas Temperature Spread (EGT Delta)', healthState: 'Optimal', actionTaken: 'Workorder: Fuel Nozzle Inspection Dispatched', assetId: 'AST-PWR-1104' },
  ]);

  const [monitoredAssetsCount, setMonitoredAssetsCount] = useState(184920);

  useEffect(() => {
    const interval = setInterval(() => {
      setMonitoredAssetsCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
      
      const industrialLogs: Omit<AssetTelemetryLog, 'id' | 'timestamp'>[] = [
        { sector: 'Power Gen', assetName: 'Steam Turbine Condenser Unit #02', metric: 'Boiler Feedwater Differential Pressure', healthState: 'Predictive Warning', actionTaken: 'Workorder: Valve Actuator Replacement Dispatched', assetId: 'AST-PWR-9921' },
        { sector: 'Power Dist', assetName: 'High Voltage Circuit Breaker CB-14', metric: 'SF6 Gas Pressure Loss Rate', healthState: 'Maintenance Due', actionTaken: 'Workorder: Substation Tech Team Alerted', assetId: 'AST-DIS-1104' },
        { sector: 'Manufacturing', assetName: 'CNC High-Speed Spindle Motor #08', metric: 'Acoustic Emission Frequency Peak', healthState: 'Predictive Warning', actionTaken: 'Workorder: Spindle Bearing Order Auto-Created', assetId: 'AST-MFG-7728' },
        { sector: 'Chemical', assetName: 'Acid Exchanger Recirculation Pump', metric: 'Mechanical Seal Flush Flow Drop (-12%)', healthState: 'Optimal', actionTaken: 'Workorder: Secondary Seal Flush Engaged', assetId: 'AST-CHM-9041' },
      ];
      
      const randomItem = industrialLogs[Math.floor(Math.random() * industrialLogs.length)];
      const randomLog: AssetTelemetryLog = {
        ...randomItem,
        id: Date.now().toString(),
        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
      };

      setLogs((prevLogs) => [randomLog, ...prevLogs.slice(0, 4)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getSectorBadge = (sector: string) => {
    switch(sector) {
      case 'Power Gen': return <span className="px-2 py-0.5 rounded text-[10px] bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-500/30 font-mono font-bold flex items-center gap-1"><Zap className="w-3 h-3 text-amber-500" /> Power Gen</span>;
      case 'Power Dist': return <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 font-mono font-bold flex items-center gap-1"><Zap className="w-3 h-3 text-[#25e2cc]" /> Power Dist</span>;
      case 'Manufacturing': return <span className="px-2 py-0.5 rounded text-[10px] bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border border-purple-500/30 font-mono font-bold flex items-center gap-1"><Factory className="w-3 h-3 text-purple-400" /> Mfg</span>;
      case 'Chemical': return <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 font-mono font-bold flex items-center gap-1"><Flame className="w-3 h-3 text-emerald-400" /> Chemical</span>;
      default: return null;
    }
  };

  return (
    <section id="telemetry-section" className="py-20 bg-slate-100 dark:bg-[#060708] border-t border-b border-slate-200 dark:border-white/5 transition-colors duration-300 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-[#25e2cc] font-mono text-xs uppercase tracking-widest mb-2 font-bold">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>REAL-TIME INDUSTRIAL MONITORING & PREDICTIVE FAILURE MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans">
              Power, Distribution, Manufacturing & Chemical Asset Stream
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4 bg-white dark:bg-[#0e1114] px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-md">
            <div className="text-right">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider font-semibold">MONITORED INDUSTRIAL ASSETS</div>
              <div className="text-2xl font-black text-slate-900 dark:text-[#25e2cc] font-mono tracking-tight">
                {monitoredAssetsCount.toLocaleString()}
              </div>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#25e2cc] animate-ping"></div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Live Asset Stream */}
          <div className="lg:col-span-2 bg-white dark:bg-[#0a0c0e] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xl relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
                <HardDrive className="w-4 h-4 text-[#25e2cc]" />
                <span>SECURE PLANT MONITORING LOGS</span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-[#25e2cc] px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25e2cc] animate-pulse"></span>
                AI MONITORING LIVE
              </span>
            </div>

            {/* Log Stream */}
            <div className="space-y-3 font-mono text-xs">
              {logs.map((log) => (
                <motion.div 
                  key={log.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-[#111418] border border-slate-200 dark:border-slate-800/80 hover:border-[#25e2cc]/50 transition-all gap-2"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-slate-400 text-[11px] font-mono">{log.timestamp}</span>
                      {getSectorBadge(log.sector)}
                      <span className="px-2 py-0.5 rounded text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono font-bold">
                        {log.assetId}
                      </span>
                      <span className="text-slate-900 dark:text-slate-100 font-sans font-bold text-sm">{log.assetName}</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-[11px] font-sans">
                      Metric: <span className="text-slate-800 dark:text-slate-300 font-mono font-semibold">{log.metric}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-slate-500 text-[11px] flex-shrink-0">
                    <span className="px-3 py-1 rounded-lg text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-[#25e2cc] border border-emerald-500/30 font-mono font-bold flex items-center gap-1.5">
                      <Wrench className="w-3 h-3 text-[#25e2cc]" />
                      {log.actionTaken}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Health / Status Stats */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#0a0c0e] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex items-center justify-between shadow-lg">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider mb-1 font-semibold">AI PREDICTIVE LEAD TIME</p>
                <div className="text-3xl font-black text-slate-900 dark:text-white font-sans tracking-tight">21 Days</div>
                <p className="text-[11px] text-emerald-600 dark:text-[#25e2cc] mt-1 flex items-center gap-1 font-sans font-semibold">
                  <Zap className="w-3.5 h-3.5" />
                  Pre-Failure Warning Horizon
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#25e2cc]/10 border border-[#25e2cc]/30 text-[#25e2cc]">
                <Wrench className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white dark:bg-[#0a0c0e] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex items-center justify-between shadow-lg">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider mb-1 font-semibold">UNPLANNED PLANT DOWNTIME AVOIDED</p>
                <div className="text-3xl font-black text-slate-900 dark:text-white font-sans tracking-tight">99.92%</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-sans">Across Monitored Industrial Equipment</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#25e2cc]/10 border border-[#25e2cc]/30 text-[#25e2cc]">
                <Activity className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white dark:bg-[#0a0c0e] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex items-center justify-between shadow-lg">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider mb-1 font-semibold">ASSET VAULT SECURITY</p>
                <div className="text-3xl font-black text-emerald-600 dark:text-[#25e2cc] font-mono tracking-tight">AES-256</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-sans">ISO 27001 Industrial Client Data Vault</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#25e2cc]/10 border border-[#25e2cc]/30 text-[#25e2cc]">
                <ShieldCheck className="w-6 h-6" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
