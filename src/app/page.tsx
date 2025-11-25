import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/features/home/HeroSection';
import { AIFeature } from '@/features/learning/AIFeature';
import { LibrarySection } from '@/features/library/LibrarySection';
import { TimetableWidget } from '@/features/schedule/TimetableWidget';
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark selection:bg-brand-primary selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* Main Sections */}
      <HeroSection />
      
      <div className="relative">
        {/* Soft Background Gradient Separator */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-brand-dark to-slate-900/50 pointer-events-none" />
        
        <AIFeature />
        <LibrarySection />
        <TimetableWidget />
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-slate-950 text-center relative z-10">
        <div className="flex flex-col items-center justify-center gap-4">
           <span className="text-2xl font-bold tracking-tight text-white/20">
              Sana-AI
            </span>
          <div className="flex gap-8 text-slate-500 text-sm">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Support</a>
          </div>
          <p className="text-slate-600 text-xs mt-4">&copy; {new Date().getFullYear()} Sana Learning Systems. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}