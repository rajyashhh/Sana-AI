"use client";
import React from 'react';
import { clsx } from 'clsx';
import { motion, HTMLMotionProps } from 'framer-motion';

// Union type allowing button props OR anchor props
type ButtonProps = {
  variant?: 'primary' | 'outline' | 'accent';
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  className?: string;
} & (HTMLMotionProps<"button"> | HTMLMotionProps<"a">);

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className,
  children,
  as = 'button',
  href,
  ...props
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 justify-center";
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30",
    accent: "bg-brand-accent text-white hover:bg-violet-500 shadow-lg shadow-violet-500/30",
    outline: "border border-slate-600 text-slate-300 hover:border-white hover:text-white backdrop-blur-sm",
  };

  // If passed 'as="a"' and an href, render an actual anchor tag
  if (as === "a" && href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(baseStyles, variants[variant], className)}
        {...(props as HTMLMotionProps<"a">)}
      >
        {children}
      </motion.a>
    );
  }

  // Default: render a button
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(baseStyles, variants[variant], className)}
      {...(props as HTMLMotionProps<"button">)}
    >
      {children}
    </motion.button>
  );
};