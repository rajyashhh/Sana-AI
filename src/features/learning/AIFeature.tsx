"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, User } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export const AIFeature = () => {
  return (
    <section id="ai-tutor" className="py-32 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Chat Interface */}
          <Reveal width="100%">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-glow rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-brand-dark border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center shadow-lg shadow-brand-primary/20">
                      <Bot size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Sana-AI</h3>
                      <p className="text-xs text-brand-primary flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" /> 
                        Always Active
                      </p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                      <User size={14} className="text-slate-300" />
                    </div>
                    <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none text-slate-200 text-sm">
                      Hey Sana, can you summarize the key events of the French Revolution?
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 flex-row-reverse"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                      <Bot size={14} className="text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 border border-brand-primary/30 p-4 rounded-2xl rounded-tr-none text-blue-100 text-sm">
                      <p className="mb-2">Of course! Here are the 3 main phases:</p>
                      <ul className="list-disc pl-4 space-y-1 opacity-90">
                        <li>1789-1791: National Assembly & Tennis Court Oath</li>
                        <li>1792-1794: Reign of Terror (Robespierre)</li>
                        <li>1795-1799: The Directory & Rise of Napoleon</li>
                      </ul>
                      <div className="mt-3 flex gap-2">
                        <span className="text-[10px] bg-brand-primary/40 px-2 py-1 rounded text-white">History</span>
                        <span className="text-[10px] bg-brand-primary/40 px-2 py-1 rounded text-white">Summary</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Input Simulation */}
                <div className="mt-6 relative">
                  <div className="h-12 bg-white/5 rounded-full border border-white/10 flex items-center px-4 text-slate-500 text-sm">
                    Ask Sana anything...
                  </div>
                  <div className="absolute right-2 top-2 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                    <Sparkles size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text Content */}
          <div className="relative">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20 text-sm font-semibold">
                <Sparkles size={14} />
                <span>Meet Your New Tutor</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-brand-glow">Sana-AI</span> doesn't just answer.<br/>It teaches.
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Unlike generic chatbots, Sana is aware of your specific school curriculum. 
                She helps you prepare for upcoming exams, explains complex topics in 
                simple terms, and manages your study schedule.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Context-aware homework help",
                  "24/7 Availability",
                  "Generates quizzes from your notes"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * idx }}
                    className="flex items-center text-slate-200"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};