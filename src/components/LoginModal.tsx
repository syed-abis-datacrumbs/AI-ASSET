'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ShieldCheck, Building2, User, KeyRound, ArrowRight, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuthModal } from '@/context/AuthModalContext';

export const LoginModal: React.FC = () => {
  const { isModalOpen, closeModal } = useAuthModal();
  const router = useRouter();

  const [companyId, setCompanyId] = useState('CMP-8849-PWR');
  const [username, setUsername] = useState('abis@fixsset.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyId || !username || !password) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAuthenticated(true);
      setTimeout(() => {
        setAuthenticated(false);
        closeModal();
        router.push('/dashboard');
      }, 1000);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* Backdrop Blur & Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card - Split 2-Column Desktop View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-4xl bg-white dark:bg-[#0b0e11] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 font-sans"
          >
            
            {/* Close Button */}
            <button
              id="close-login-modal-btn"
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: 3D Branding Banner */}
            <div className="lg:col-span-5 bg-slate-900 dark:bg-[#050607] p-8 flex flex-col justify-between relative overflow-hidden text-white border-r border-slate-800">
              
              {/* Background Ambient Lighting */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#25e2cc]/20 via-transparent to-transparent pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <span className="font-extrabold text-2xl font-mono">FIX<span className="text-[#25e2cc]">SSET</span></span>
                </div>

                <div className="relative w-full aspect-square max-w-[240px] mx-auto my-4 flex items-center justify-center">
                  <Image
                    src="/Server.png"
                    alt="FIXSSET Secure Industrial Vault"
                    width={260}
                    height={260}
                    priority
                    className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="relative z-10 space-y-2">
                <h3 className="text-xl font-bold font-sans tracking-tight">
                  Secure Industrial Data Vault
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Zero-trust client portal for power generation, electrical distribution, manufacturing, and chemical processing assets.
                </p>
                <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-[#25e2cc]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>AES-256 / ISO 27001 ENCRYPTED</span>
                </div>
              </div>

            </div>

            {/* Right Column: Login Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between bg-white dark:bg-[#0b0e11] text-slate-900 dark:text-slate-100">
              
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-extrabold tracking-tight font-sans text-slate-900 dark:text-white">
                    Industrial Portal Access
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 font-sans">
                    Please enter your enterprise credentials to access your plant asset vault.
                  </p>
                </div>

                {authenticated ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-600 dark:text-[#25e2cc] text-center space-y-2 my-8">
                    <ShieldCheck className="w-8 h-8 mx-auto text-[#25e2cc] animate-bounce" />
                    <div className="font-mono font-bold text-sm">Authentication Successful</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-sans">Opening secure asset vault...</div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Company ID */}
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        COMPANY ID
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="company-id-input"
                          required
                          placeholder="e.g. CMP-8849-PWR"
                          value={companyId}
                          onChange={(e) => setCompanyId(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-[#12161b] border border-slate-300 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-slate-100 font-mono focus:outline-none focus:border-[#25e2cc] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Username */}
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        USERNAME / PLANT EMAIL
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="username-input"
                          required
                          placeholder="enter your username or email"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-[#12161b] border border-slate-300 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-slate-100 font-mono focus:outline-none focus:border-[#25e2cc] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        PASSWORD
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <KeyRound className="w-4 h-4" />
                        </div>
                        <input
                          type="password"
                          id="password-input"
                          required
                          placeholder="••••••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-[#12161b] border border-slate-300 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-slate-100 font-mono focus:outline-none focus:border-[#25e2cc] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="modal-login-submit-btn"
                      disabled={loading}
                      className="w-full mt-2 py-3 rounded-xl bg-[#25e2cc] hover:bg-[#1fd1bd] text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#25e2cc]/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Authenticating Credentials...</span>
                      ) : (
                        <>
                          <span>Access Vault Portal</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Signup Notice Footer Box */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-[#111419] border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1 font-mono text-[10px] uppercase">
                    <Lock className="w-3 h-3 text-[#25e2cc]" />
                    Enterprise Account Registration Notice
                  </span>
                  Signups are strictly restricted to verified industrial clients. To onboard your facility or request account credentials, please contact your account administrator or email <a href="mailto:fixsset@email.com" className="text-[#25e2cc] font-semibold underline">fixsset@email.com</a>.
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
