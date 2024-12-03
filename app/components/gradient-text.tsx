"use client"

import { motion } from "framer-motion"

interface GradientTextProps {
  text: string
  className?: string
}

export function GradientText({ text, className = "" }: GradientTextProps) {
  return (
    <motion.span
      className={`inline-block bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-transparent bg-clip-text ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85 }}
    >
      {text}
    </motion.span>
  )
}
