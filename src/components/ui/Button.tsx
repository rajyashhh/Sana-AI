"use client";
import React from 'react';
import { clsx } from 'clsx';
import { motion, HTMLMotionProps } from 'framer-motion';

// Fix: Extend HTMLMotionProps instead of React.ButtonHTMLAttributes
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'accent';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, children, ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 justify-center";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30",
    accent: "bg-brand-accent text-white hover:bg-violet-500 shadow-lg shadow-violet-500/30",
    outline: "border border-slate-600 text-slate-300 hover:border-white hover:text-white backdrop-blur-sm",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};