"use client"

import React, { useState, useEffect } from "react"
import { motion, useAnimation, Variants } from "framer-motion"

interface TypingAnimationProps {
  text: string
  className?: string
}

const cursorVariants: Variants = {
  blink: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatDelay: 0,
    },
  },
}

export function TypingAnimation({ text, className = "" }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const controls = useAnimation()

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= text.length; i++) {
        setDisplayedText(text.slice(0, i))
        await new Promise((resolve) => setTimeout(resolve, Math.random() * 50 + 30)) // Random delay between 30-80ms
        if (i % 3 === 0) {
          await new Promise((resolve) => setTimeout(resolve, Math.random() * 200)) // Occasional longer pause
        }
      }
      controls.start("blink")
    }

    typeText()
  }, [text, controls])

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        variants={cursorVariants}
        animate={controls}
        className="inline-block w-0.5 h-5 bg-current align-middle"
      />
    </span>
  )
}
