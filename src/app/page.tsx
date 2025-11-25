import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/features/home/HeroSection';
import { AIFeature } from '@/features/learning/AIFeature';
import { LibrarySection } from '@/features/library/LibrarySection';
import { TimetableWidget } from '@/features/schedule/TimetableWidget';
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      
      {/* Sections assembled */}
      <HeroSection />
      
      {/* Visual Separator Gradient */}
      <div className="h-24 bg-gradient-to-b from-transparent to-slate-900/50" />
      
      <AIFeature />
      <LibrarySection />
      <TimetableWidget />
      
      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 bg-slate-950 text-center text-slate-500 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} EduFlow Academy. All rights reserved.</p>
      </footer>
    </main>
  );
}