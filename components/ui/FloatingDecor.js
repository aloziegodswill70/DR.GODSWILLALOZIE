"use client"
import { motion } from "framer-motion"

export default function FloatingDecor({
  src,
  className = "",
  delay = 0,
  duration = 6,
}) {
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`pointer-events-none absolute opacity-20 ${className}`}
    />
  )
}
