"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Heart } from "lucide-react"

interface MozTestimonialCardProps {
  depoimento: {
    id: number
    nome: string
    avatar: string
    texto: string
    rating: number
    curso: string
    cargo?: string
    cidade?: string
    provincia?: string
  }
  index?: number
}

export default function MozTestimonialCard({ depoimento, index = 0 }: MozTestimonialCardProps) {
  return (
    <Card
      className="hover:shadow-2xl transition-all duration-500 border-2 border-orange-200 dark:border-gray-700 relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 transform hover:scale-105"
      style={{
        animationDelay: `${index * 0.1}s`,
        boxShadow: "0 0 15px rgba(249, 115, 22, 0.1)",
      }}
    >
      {/* Padrão de Capulana no Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fillOpacity='0.3'%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3Ccircle cx='0' cy='15' r='3'/%3E%3Ccircle cx='30' cy='15' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-20">
        <Quote className="w-8 h-8 text-orange-500" />
      </div>

      <CardContent className="pt-6 relative">
        {/* Header com Avatar e Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <img
              src={depoimento.avatar || "/placeholder.svg?height=48&width=48"}
              alt={depoimento.nome}
              className="w-12 h-12 rounded-full object-cover border-3 border-orange-300 dark:border-orange-600 shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-pulse">
              <Star className="w-3 h-3 text-white fill-current" />
            </div>
          </div>

          <div className="flex-1">
            <h4 className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
              {depoimento.nome}
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            </h4>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1">
                {[...Array(depoimento.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              {depoimento.cidade && depoimento.provincia && (
                <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                  📍 {depoimento.cidade}, {depoimento.provincia}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Depoimento */}
        <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic leading-relaxed font-medium border-l-4 border-orange-400 pl-4 bg-white/50 dark:bg-gray-800/50 rounded-r-lg py-2">
          "{depoimento.texto}"
        </blockquote>

        {/* Footer */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Badge
            variant="outline"
            className="text-xs border-orange-300 text-orange-700 bg-orange-50 dark:border-orange-600 dark:text-orange-300 dark:bg-orange-900/20"
          >
            🎨 {depoimento.curso}
          </Badge>

          {depoimento.cargo && (
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
              {depoimento.cargo}
            </span>
          )}
        </div>

        {/* Bandeira de Moçambique */}
        <div className="absolute bottom-2 right-2 text-lg opacity-30">🇲🇿</div>
      </CardContent>
    </Card>
  )
}
