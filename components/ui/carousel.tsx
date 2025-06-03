"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselProps = {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  showArrows?: boolean
  showDots?: boolean
  className?: string
  slideClassName?: string
}

export function Carousel({
  children,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className,
  slideClassName,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isHovering, setIsHovering] = React.useState(false)
  const slides = React.Children.toArray(children)
  const totalSlides = slides.length

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  React.useEffect(() => {
    if (autoPlay && !isHovering) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, nextSlide, isHovering])

  return (
    <div
      className={cn("relative overflow-hidden rounded-xl", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={cn("min-w-full flex-shrink-0", slideClassName)}>
            {slide}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={prevSlide}
          >
            <ArrowLeft className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={nextSlide}
          >
            <ArrowRight className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <span className="sr-only">Next slide</span>
          </Button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-pink-600 w-6" : "bg-white/60 hover:bg-white",
              )}
              onClick={() => goToSlide(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
