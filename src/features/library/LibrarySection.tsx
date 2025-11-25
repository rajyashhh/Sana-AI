"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BOOKS } from '@/constants/data';
import { Book } from 'lucide-react';

export const LibrarySection = () => {
  return (
    <section id="library" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Digital Library Access</h2>
          <p className="text-slate-400">Instantly borrow from over 10,000 resources.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOOKS.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              {/* Background Color representing cover */}
              <div className={`absolute inset-0 ${book.color} transition-transform duration-500 group-hover:scale-110`} />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <div className="w-10 h-10 mb-4 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Book className="text-white w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{book.title}</h3>
                <p className="text-slate-300 text-sm">{book.author}</p>
                
                <div className="h-0 group-hover:h-10 transition-all duration-300 overflow-hidden mt-0 group-hover:mt-4">
                  <button className="text-xs font-bold uppercase tracking-wider text-white border-b border-white pb-1">Read Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};