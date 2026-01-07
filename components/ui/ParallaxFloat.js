"use client"
import { useEffect, useRef } from "react"

export default function ParallaxFloat({ children, strength = 20 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * strength
      const y = (e.clientY / innerHeight - 0.5) * strength
      el.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [strength])

  return (
    <div
      ref={ref}
      className="transition-transform duration-200 ease-out"
    >
      {children}
    </div>
  )
}
