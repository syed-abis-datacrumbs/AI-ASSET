import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { InteractiveThreatMap } from '@/components/InteractiveThreatMap';
import { SecurityPlatformFeatures } from '@/components/SecurityPlatformFeatures';
import { InfrastructureHierarchy } from '@/components/InfrastructureHierarchy';
import { GlobalTelemetryFabric } from '@/components/GlobalTelemetryFabric';
import { InteractiveSimulator } from '@/components/InteractiveSimulator';
import { LiveSecurityAuditCalculator } from '@/components/LiveSecurityAuditCalculator';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#08090a] text-slate-900 dark:text-slate-100 selection:bg-[#25e2cc] selection:text-black transition-colors duration-300 relative">
      <Header />
      <HeroSection />
      <InteractiveThreatMap />
      <SecurityPlatformFeatures />
      <InfrastructureHierarchy />
      <GlobalTelemetryFabric />
      <InteractiveSimulator />
      <LiveSecurityAuditCalculator />
      <Footer />
    </main>
  );
}
