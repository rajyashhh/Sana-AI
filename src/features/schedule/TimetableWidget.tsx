"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { SCHEDULE } from '@/constants/data';
import { GlassCard } from '@/components/ui/GlassCard';

export const TimetableWidget = () => {
  return (
    <section id="schedule" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-brand-primary to-blue-900 rounded-3xl p-8 md:p-16 relative overflow-hidden">
        {/* Decor Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Never Miss a Class
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Your dynamic timetable automatically updates with room changes, 
              live links for remote sessions, and assignment deadlines.
            </p>
            <div className="flex gap-4">
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-brand-accent">03</div>
                <div className="text-xs text-blue-200 uppercase mt-1">Classes Today</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-xs text-blue-200 uppercase mt-1">Attendance</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {SCHEDULE.map((item, index) => (
              <GlassCard key={index} delay={index * 0.1} className="flex items-center justify-between p-4 group hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-950 flex flex-col items-center justify-center text-white border border-white/10">
                    <span className="text-xs text-slate-400">{item.time.split(' ')[1]}</span>
                    <span className="font-bold">{item.time.split(' ')[0]}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{item.subject}</h4>
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                      <span className="flex items-center gap-1"><Clock size={12} /> {item.type}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> Room 302</span>
                    </div>
                  </div>
                </div>
                
                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  item.status === 'Live' 
                    ? 'bg-red-500/10 text-red-400 border-red-500/20' 
                    : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                }`}>
                  {item.status}
                </div>
              </GlassCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};