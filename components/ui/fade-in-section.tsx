"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FadeInSectionProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  threshold?: number
  once?: boolean
}

export function FadeInSection({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.1,
  once = true,
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once && domRef.current) {
              observer.unobserve(domRef.current)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { threshold },
    )

    const currentRef = domRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const directionClasses = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
  }

  return (
    <div
      ref={domRef}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 transform-none" : `opacity-0 ${directionClasses[direction]}`,
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
