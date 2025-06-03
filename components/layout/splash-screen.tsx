"use client"

import { useState, useEffect } from "react"
import { Scissors, Sparkles, Heart, Star } from "lucide-react"

export default function SplashScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-repeat animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fillOpacity='0.3'%3E%3Cpath d='M30 30c0-8-6-14-14-14s-14 6-14 14 6 14 14 14 14-6 14-14zm14 0c0-8-6-14-14-14s-14 6-14 14 6 14 14 14 14-6 14-14z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="text-center relative z-10">
        {/* Logo Animado */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <Scissors className="w-12 h-12 text-white animate-spin" style={{ animationDuration: "3s" }} />
          </div>

          {/* Elementos Flutuantes */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
            <Star className="w-3 h-3 text-orange-600" />
          </div>
          <div
            className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <Heart className="w-3 h-3 text-white" />
          </div>
          <div
            className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <Sparkles className="w-2 h-2 text-white" />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Kátia Costura
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Tradição que Veste o Futuro</p>

        {/* Barra de Progresso */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Carregando experiência... {progress}%</p>
        </div>

        {/* Mensagens de Loading */}
        <div className="mt-6 h-6">
          {progress < 30 && (
            <p className="text-sm text-gray-600 dark:text-gray-400 animate-fade-in-up">Preparando tecidos...</p>
          )}
          {progress >= 30 && progress < 60 && (
            <p className="text-sm text-gray-600 dark:text-gray-400 animate-fade-in-up">Organizando cursos...</p>
          )}
          {progress >= 60 && progress < 90 && (
            <p className="text-sm text-gray-600 dark:text-gray-400 animate-fade-in-up">Conectando comunidade...</p>
          )}
          {progress >= 90 && (
            <p className="text-sm text-gray-600 dark:text-gray-400 animate-fade-in-up">Quase pronto!</p>
          )}
        </div>
      </div>
    </div>
  )
}
