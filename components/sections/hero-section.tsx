"use client"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Play, Crown } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  scrollY: number
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/placeholder.svg"
          alt="Background pattern"
          fill
          className="object-cover"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          priority
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <main className="animate-fade-in-up max-w-5xl mx-auto">
          <header className="flex justify-center mb-6 lg:mb-8">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 text-yellow-400 animate-bounce" />
            </div>
          </header>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent leading-tight">
            Aprenda a Costurar
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">com a Kátia! ✨</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed">
            Da costura à mão até técnicas avançadas de máquina.
            <br />
            <strong className="text-pink-600">Transforme sua paixão em profissão!</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 lg:mb-12">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Começar Agora - GRÁTIS
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-pink-300 text-pink-600 hover:bg-pink-50 dark:border-pink-400 dark:text-pink-400 dark:hover:bg-pink-900/20 text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full"
            >
              <Crown className="w-5 h-5 mr-2" />
              Ver Planos Premium
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-3xl mx-auto">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-2xl lg:text-3xl font-bold text-pink-600">1.2k+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">Alunas Felizes</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-2xl lg:text-3xl font-bold text-pink-600">50+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">Cursos Disponíveis</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="text-2xl lg:text-3xl font-bold text-pink-600">4.9⭐</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">Avaliação Média</div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
