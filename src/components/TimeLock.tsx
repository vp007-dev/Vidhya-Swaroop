import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Sparkles, Zap, ChevronRight, Bell, HeartHandshake } from "lucide-react";
import logo from "@/assets/logo.jpg"; // Keep your import path

interface TimeLockProps {
  timeLeft: string;
  isUnlocked: boolean;
  onAnimationComplete: () => void;
}

// --- Visual Helpers ---

const OrbitalRing = ({ delay, duration, radius, color }: { delay: number; duration: number; radius: number; color: string }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: delay }}
    className="absolute border border-dashed rounded-full pointer-events-none opacity-20"
    style={{
      width: radius,
      height: radius,
      borderColor: color,
      borderWidth: '1px',
    }}
  />
);

const ParticleField = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        initial={{
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          opacity: 0,
        }}
        animate={{
          y: [null, Math.random() * -100],
          opacity: [0, 0.8, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeInOut",
        }}
        className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"
      />
    ))}
  </div>
);

// --- Main Component ---

export const TimeLock = ({ timeLeft, isUnlocked, onAnimationComplete }: TimeLockProps) => {
  const [animationPhase, setAnimationPhase] = useState<'counting' | 'imploding' | 'exploding' | 'finished'>('counting');

  // Orchestrate the animation sequence
  useEffect(() => {
    if (isUnlocked && animationPhase === 'counting') {
      setAnimationPhase('imploding');
      
      // Sequence: Implode (1s) -> Explode (0.5s) -> Finish
      setTimeout(() => setAnimationPhase('exploding'), 1200);
      setTimeout(() => {
        setAnimationPhase('finished');
        onAnimationComplete();
      }, 2000);
    }
  }, [isUnlocked, animationPhase, onAnimationComplete]);

  // Smoother easing curve for entrance animations
  const smoothEase = [0.43, 0.13, 0.23, 0.96];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white selection:bg-purple-500/30 font-sans">
      
      {/* 1. Dynamic Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#050505] to-black" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      
      {/* Background Glows - Slowed down for smoother ambiance */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, delay: 2, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" 
      />

      <ParticleField />

      {/* 2. THE STAGE */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <AnimatePresence mode="wait">
          
          {/* --- PHASE 1: COUNTDOWN TIMER --- */}
          {(animationPhase === 'counting' || animationPhase === 'imploding') && (
            <motion.div
              key="timer"
              className="relative flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={animationPhase === 'imploding' ? {
                scale: 0,
                rotate: 180,
                opacity: 0,
                filter: "blur(20px)"
              } : { 
                scale: 1, 
                rotate: 0, 
                opacity: 1,
                filter: "blur(0px)" 
              }}
              exit={{ scale: 0, opacity: 0, transition: { duration: 0.8, ease: "anticipate" }}}
              transition={{ duration: 1, ease: smoothEase }}
            >
              {/* Spinning Orbitals */}
              <div className="absolute inset-0 flex items-center justify-center">
                <OrbitalRing radius={350} duration={20} delay={0} color="rgba(168, 85, 247, 0.2)" />
                <OrbitalRing radius={500} duration={35} delay={5} color="rgba(59, 130, 246, 0.1)" />
                <OrbitalRing radius={280} duration={15} delay={2} color="rgba(236, 72, 153, 0.1)" />
              </div>

              {/* Logo Pre-reveal */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mb-12 relative group"
              >
                <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <img src={logo} alt="Logo" className="w-20 h-20 rounded-full border-2 border-white/10 relative z-10 shadow-2xl" />
              </motion.div>

              {/* The Timer */}
              <div className="relative">
                <h1 className="text-7xl sm:text-9xl font-bold font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-2xl">
                  {timeLeft}
                </h1>
                
                {/* Glitch Overlay Effect */}
                <motion.div 
                  className="absolute inset-0 text-7xl sm:text-9xl font-bold font-mono tracking-tighter text-purple-500/50 mix-blend-screen"
                  animate={{ x: [-2, 2, -2], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {timeLeft}
                </motion.div>
              </div>

              <motion.p 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mt-8 text-blue-200/60 uppercase tracking-[0.5em] text-sm font-medium"
              >
                Vidhya Swaroop Foundation
              </motion.p>
              
              {/* Main Message During Countdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-12 max-w-2xl mx-auto text-center"
              >
                <motion.h2 
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
                >
                  <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                    Something great
                  </span>
                  <br />
                  <span className="text-white">is coming</span>
                </motion.h2>
                
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <Sparkles className="absolute -top-4 -left-4 text-yellow-400/40 w-6 h-6 animate-pulse" />
                  <p className="text-lg md:text-xl text-slate-300 italic font-serif leading-relaxed">
                    "Even the darkest night will end and the sun will rise."
                  </p>
                  <Sparkles className="absolute -bottom-4 -right-4 text-yellow-400/40 w-6 h-6 animate-pulse" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* --- PHASE 2: THE EXPLOSION (Shockwave) --- */}
          {animationPhase === 'exploding' && (
            <motion.div
              key="explosion"
              className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
            >
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 bg-white"
              />
              <motion.div
                initial={{ scale: 0, opacity: 1, borderWidth: '100px' }}
                animate={{ scale: 4, opacity: 0, borderWidth: '0px' }}
                transition={{ duration: 1.5, ease: smoothEase }}
                className="w-[100vw] h-[100vw] rounded-full border-white absolute"
              />
            </motion.div>
          )}

          {/* --- PHASE 3: THE REVEAL (Final Content) --- */}
          {animationPhase === 'finished' && (
            <motion.div
              key="content"
              className="w-full max-w-5xl mx-auto text-center relative z-40 px-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: smoothEase }}
            >
              {/* Backlight */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#7c3aed30_100%)] rounded-full blur-3xl opacity-50"
                />
              </div>

              {/* 1. Logo / Brand Name (Top) */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.3 }}
                className="flex flex-col items-center mb-8"
              >
                <div className="w-28 h-28 relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full animate-pulse blur-xl" />
                  <img 
                    src={logo} 
                    alt="Vidhya Swaroop Foundation" 
                    className="w-full h-full object-cover rounded-full border-4 border-white/90 relative z-10 shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                  />
                </div>
                
                {/* Brand Name Text */}
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-purple-300 font-medium tracking-widest uppercase text-sm border border-purple-500/30 px-4 py-1 rounded-full bg-purple-500/10 backdrop-blur-md"
                >
                  Vidhya Swaroop Foundation
                </motion.span>
              </motion.div>

              {/* 2. Main Headline: "Something great is coming" */}
              <motion.h1 
                initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.6, duration: 1, ease: smoothEase }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight"
              >
                <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                  Something great
                </span>
                <br />
                <span className="text-white">is coming</span>
              </motion.h1>

              {/* 3. The Quote */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 1, ease: smoothEase }}
                className="relative max-w-2xl mx-auto mb-12"
              >
                <Sparkles className="absolute -top-6 -left-6 text-yellow-400/40 w-6 h-6 animate-pulse" />
                <p className="text-xl md:text-2xl text-slate-300 italic font-serif leading-relaxed">
                  "Even the darkest night will end and the sun will rise."
                </p>
                <Sparkles className="absolute -bottom-6 -right-6 text-yellow-400/40 w-6 h-6 animate-pulse" />
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: smoothEase }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 group shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <Bell className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Notify Me
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5" />
                  Our Mission
                </button>
              </motion.div>
              
              {/* Floating Icons */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
                 {[Rocket, Zap, ChevronRight].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{ 
                        scale: 1, 
                        x: (i - 1) * 300, 
                        y: -200 
                      }}
                      transition={{ 
                        delay: 1.4 + (i * 0.2), 
                        type: "spring",
                        stiffness: 100, // Smoother spring
                        damping: 20 
                      }}
                      className="absolute top-1/2 left-1/2 text-purple-400/20"
                    >
                      <Icon className="w-16 h-16" />
                    </motion.div>
                 ))}
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};