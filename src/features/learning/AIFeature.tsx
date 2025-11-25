"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

export const AIFeature = () => {
  return (
    <section id="ai-tutor" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-brand-accent mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-wider">AI Powered Tutor</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Smarter Interactions that <span className="text-blue-500">Think, Act, and Resolve.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Stuck on a calculus problem? Need a history essay summary? 
              Our AI agent "Athena" is integrated directly into your curriculum, 
              providing instant, context-aware help 24/7.
            </p>
            <ul className="space-y-4 mb-8">
              {['Personalized Study Plans', 'Instant Homework Assistance', 'Language Translation'].map((item) => (
                <li key={item} className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Interactive Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/20 filter blur-3xl rounded-full" />
            <GlassCard className="relative border-none bg-slate-900/80">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <Brain size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Athena AI</h3>
                    <p className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Online
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                 {/* Chat Bubbles Animation */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 p-3 rounded-lg rounded-tl-none w-3/4 mr-auto text-sm text-slate-200"
                >
                  Can you explain the theory of relativity?
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-blue-600/20 border border-blue-500/30 p-3 rounded-lg rounded-tr-none w-3/4 ml-auto text-sm text-blue-100"
                >
                  Absolutely! It explains how space and time are linked for objects moving at a consistent speed...
                </motion.div>

                 <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="flex gap-2 mt-4"
                >
                  <div className="h-8 flex-1 bg-white/5 rounded animate-pulse" />
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <MessageCircle size={16} />
                  </div>
                </motion.div>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};

// Helper for icon inside the component
import { Brain } from 'lucide-react';