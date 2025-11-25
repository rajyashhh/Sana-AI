"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs (Fractal.ai vibe) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            New Term Starts Soon
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Unlock your potential with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-accent">
              Next-Gen Learning
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            A unified platform for students to access resources, manage schedules, 
            and learn faster with our integrated AI tutor.
          </p>
        </motion.div>

        <motion.div 
          className="mt-10 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Button variant="primary">
            Start Learning <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline">
            View Campus
          </Button>
        </motion.div>

        {/* Floating Feature Icons */}
        <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
          <FloatingIcon icon={<BookOpen size={30} />} top="20%" left="15%" delay={0} />
          <FloatingIcon icon={<Brain size={30} />} top="30%" right="15%" delay={1} />
          <FloatingIcon icon={<Clock size={30} />} bottom="20%" left="20%" delay={2} />
        </div>
      </div>
    </section>
  );
};

const FloatingIcon = ({ icon, top, left, right, bottom, delay }: any) => (
  <motion.div
    className="absolute text-slate-500/30"
    style={{ top, left, right, bottom }}
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      ease: "easeInOut", 
      delay: delay 
    }}
  >
    {icon}
  </motion.div>
);