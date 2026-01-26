import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Bell, HeartHandshake, Flag, Wind, Star } from "lucide-react";
import logo from "@/assets/logo.jpg"; 

interface TimeLockProps {
  timeLeft: string;
  isUnlocked: boolean;
  onAnimationComplete: () => void;
}

// --- Visual Helpers ---

// A spinning Ashoka Chakra simulation
const AshokaChakra = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="absolute opacity-10 pointer-events-none"
  >
    <div className="w-[600px] h-[600px] border-4 border-[#000080] rounded-full flex items-center justify-center relative">
      <div className="absolute w-[580px] h-[580px] border border-[#000080]/30 rounded-full" />
      {[...Array(24)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-[2px] bg-[#000080]"
          style={{ transform: `rotate(${i * 15}deg)` }}
        />
      ))}
    </div>
  </motion.div>
);

const OrbitalRing = ({ delay, duration, radius, color, width = "1px" }: { delay: number; duration: number; radius: number; color: string, width?: string }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: delay }}
    className="absolute rounded-full pointer-events-none"
    style={{
      width: radius,
      height: radius,
      borderColor: color,
      borderWidth: width,
      borderStyle: 'dashed',
      opacity: 0.3,
      boxShadow: `0 0 15px ${color}`
    }}
  />
);

const TricolorParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(30)].map((_, i) => {
      // Randomly assign Saffron, White, or Green
      const colors = ["#FF9933", "#FFFFFF", "#138808"];
      const color = colors[i % 3];
      return (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -150],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
        />
      );
    })}
  </div>
);

// --- Main Component ---

export const TimeLock = ({ timeLeft, isUnlocked, onAnimationComplete }: TimeLockProps) => {
  const [animationPhase, setAnimationPhase] = useState<'counting' | 'imploding' | 'exploding' | 'finished'>('counting');

  useEffect(() => {
    if (isUnlocked && animationPhase === 'counting') {
      setAnimationPhase('imploding');
      // Sequence: Implode (1s) -> Explode (0.8s) -> Finish
      setTimeout(() => setAnimationPhase('exploding'), 1000);
      setTimeout(() => {
        setAnimationPhase('finished');
        onAnimationComplete();
      }, 1800);
    }
  }, [isUnlocked, animationPhase, onAnimationComplete]);

  const smoothEase = [0.43, 0.13, 0.23, 0.96];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#000010] text-white selection:bg-[#FF9933]/30 font-sans">
      
      {/* 1. Dynamic Background Layer */}
      {/* Deep Navy Blue Gradient representing the Chakra and Night Sky */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#000030] via-[#000015] to-black" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150" />
      
      {/* Ambient Tricolor Glows */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-[#FF9933]/10 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-[#138808]/10 rounded-full blur-[120px]" 
      />
       <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" 
      />

      <TricolorParticles />

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
                rotate: -180, // Counter rotation for implosion effect
                opacity: 0,
                filter: "blur(20px)"
              } : { 
                scale: 1, 
                rotate: 0, 
                opacity: 1,
                filter: "blur(0px)" 
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1, ease: smoothEase }}
            >
              {/* Spinning Orbitals - TRICOLOR */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AshokaChakra />
                {/* Saffron Ring */}
                <OrbitalRing radius={450} duration={25} delay={0} color="#FF9933" width="2px" />
                {/* White Ring */}
                <OrbitalRing radius={350} duration={20} delay={5} color="#FFFFFF" width="1px" />
                {/* Green Ring */}
                <OrbitalRing radius={250} duration={15} delay={2} color="#138808" width="2px" />
              </div>

              {/* Logo Pre-reveal */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mb-12 relative group"
              >
                <div className="absolute inset-0 bg-white blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <img src={logo} alt="Logo" className="w-24 h-24 rounded-full border-4 border-[#FF9933] relative z-10 shadow-2xl" />
              </motion.div>

              {/* The Timer - Tricolor Gradient */}
              <div className="relative text-center">
                <h1 className="text-7xl sm:text-9xl font-bold font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FF9933] via-white to-[#138808] drop-shadow-lg">
                  {timeLeft}
                </h1>
                
                {/* Glitch Overlay Effect */}
                <motion.div 
                  className="absolute inset-0 text-7xl sm:text-9xl font-bold font-mono tracking-tighter text-[#000080]/30 mix-blend-overlay"
                  animate={{ x: [-2, 2, -2], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {timeLeft}
                </motion.div>
              </div>

              <motion.p 
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mt-8 text-white/80 uppercase tracking-[0.4em] text-sm font-medium border-b border-[#FF9933] pb-2"
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
                  className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
                >
                  <span className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent">
                    Celebrating 77th Republic Day
                  </span>
                </motion.h2>
              </motion.div>
            </motion.div>
          )}

          {/* --- PHASE 2: THE EXPLOSION (Tricolor Shockwave) --- */}
          {animationPhase === 'exploding' && (
            <motion.div
              key="explosion"
              className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
            >
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-white"
              />
              
              {/* Saffron Wave */}
              <motion.div
                initial={{ scale: 0, opacity: 1, borderWidth: '80px' }}
                animate={{ scale: 3, opacity: 0, borderWidth: '0px' }}
                transition={{ duration: 1.2, ease: smoothEase }}
                className="w-[80vw] h-[80vw] rounded-full border-[#FF9933] absolute"
              />
               {/* White Wave (Slight delay) */}
               <motion.div
                initial={{ scale: 0, opacity: 1, borderWidth: '80px' }}
                animate={{ scale: 2.5, opacity: 0, borderWidth: '0px' }}
                transition={{ duration: 1.2, delay: 0.1, ease: smoothEase }}
                className="w-[80vw] h-[80vw] rounded-full border-white absolute"
              />
               {/* Green Wave (More delay) */}
               <motion.div
                initial={{ scale: 0, opacity: 1, borderWidth: '80px' }}
                animate={{ scale: 2, opacity: 0, borderWidth: '0px' }}
                transition={{ duration: 1.2, delay: 0.2, ease: smoothEase }}
                className="w-[80vw] h-[80vw] rounded-full border-[#138808] absolute"
              />
            </motion.div>
          )}

          {/* --- PHASE 3: THE REVEAL (Final Content) --- */}
          {animationPhase === 'finished' && (
            <motion.div
              key="content"
              className="w-full max-w-6xl mx-auto text-center relative z-40 px-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: smoothEase }}
            >
              {/* Backlight (Navy Blue Chakra Glow) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#000080_100%)] rounded-full blur-3xl opacity-60"
                />
              </div>

              {/* 1. Logo / Brand Name (Top) */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.3 }}
                className="flex flex-col items-center mb-6"
              >
                <div className="w-32 h-32 relative mb-6">
                  {/* Rotating Tricolor Border */}
                  <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-[#FF9933] via-white to-[#138808] animate-spin-slow blur-sm" />
                  <img 
                    src={logo} 
                    alt="Vidhya Swaroop Foundation" 
                    className="w-full h-full object-cover rounded-full border-4 border-[#000080] relative z-10 shadow-[0_0_50px_rgba(255,153,51,0.3)]"
                  />
                </div>
                
                {/* Brand Name Text */}
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-white font-medium tracking-widest uppercase text-sm border border-white/20 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md"
                >
                  Vidhya Swaroop Foundation
                </motion.span>
              </motion.div>

              {/* 2. Main Headline: Independence Day Theme */}
              <motion.div 
                initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.6, duration: 1, ease: smoothEase }}
                className="mb-8"
              >
                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2">
                  <span className="text-[#FF9933] drop-shadow-[0_0_15px_rgba(255,153,51,0.5)]">77</span>
                  <span className="text-white mx-4">Years of</span>
                  <span className="text-[#138808] drop-shadow-[0_0_15px_rgba(19,136,8,0.5)]">Glory</span>
                 </h1>
                 <p className="text-2xl text-blue-200 tracking-[0.5em] font-light uppercase">Independence Day</p>
              </motion.div>

              {/* 3. The Quote */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 1, ease: smoothEase }}
                className="relative max-w-3xl mx-auto mb-12"
              >
                <Sparkles className="absolute -top-6 -left-6 text-[#FF9933] w-8 h-8 animate-pulse" />
                <p className="text-xl md:text-2xl text-slate-300 italic font-serif leading-relaxed">
                  "At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom."
                </p>
                <div className="mt-4 text-[#FF9933] font-bold">— Pt. Jawaharlal Nehru</div>
                <Sparkles className="absolute -bottom-6 -right-6 text-[#138808] w-8 h-8 animate-pulse" />
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: smoothEase }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                {/* Saffron Button */}
                <button className="px-10 py-4 bg-gradient-to-r from-[#FF9933] to-[#FF8000] text-white rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 group shadow-[0_0_30px_rgba(255,153,51,0.4)]">
                  <Flag className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                  Join the Parade
                </button>
                {/* Green Border Button */}
                <button className="px-10 py-4 bg-transparent border border-[#138808] text-[#138808] hover:bg-[#138808]/10 rounded-full font-bold text-lg transition-colors backdrop-blur-sm flex items-center gap-2 shadow-[0_0_15px_rgba(19,136,8,0.2)]">
                  <HeartHandshake className="w-5 h-5" />
                  Our Contribution
                </button>
              </motion.div>
              
              {/* Floating Icons (Decorations) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
                 {[Wind, Star, Flag].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{ 
                        scale: 1, 
                        x: (i - 1) * 350, 
                        y: -250 
                      }}
                      transition={{ 
                        delay: 1.4 + (i * 0.2), 
                        type: "spring",
                        stiffness: 80, 
                        damping: 20 
                      }}
                      className="absolute top-1/2 left-1/2 text-white/10"
                    >
                      <Icon className="w-20 h-20" />
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