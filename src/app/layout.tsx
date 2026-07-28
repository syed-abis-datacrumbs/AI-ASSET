import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { AuthModalProvider } from '@/context/AuthModalContext';
import { LoginModal } from '@/components/LoginModal';

export const metadata: Metadata = {
  title: 'FIXSSET | Predictive Maintenance & Asset Vault for Industrial Infrastructure',
  description: 'FIXSSET provides a secure client portal for power generation, power distribution, manufacturing, and chemical industries to store heavy asset data and predict equipment failures before downtime occurs.',
  keywords: [
    'FIXSSET', 
    'Predictive Maintenance', 
    'Power Generation Monitoring', 
    'Power Distribution Asset Vault', 
    'Smart Manufacturing Maintenance', 
    'Chemical Plant Asset Portal', 
    'Industrial AI Diagnostics', 
    'Turbine Vibration Monitoring', 
    'Transformer Health'
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen transition-colors duration-300 font-sans selection:bg-[#25e2cc] selection:text-black antialiased">
        <ThemeProvider>
          <AuthModalProvider>
            {children}
            <LoginModal />
          </AuthModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
