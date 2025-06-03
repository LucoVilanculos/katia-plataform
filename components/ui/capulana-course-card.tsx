"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Play, Users, Crown, Clock, Heart } from "lucide-react"

interface CapulanaCourseCardProps {
  curso: {
    id: number
    titulo: string
    instrutor: string
    nivel: "Iniciante" | "Intermediário" | "Avançado"
    duracao: string
    rating: number
    alunos: number
    preco: number
    thumbnail: string
    premium: boolean
    descricao?: string
    tradicional?: boolean
    regiao?: string
  }
  index?: number
  onCourseClick?: (id: number) => void
}

export default function CapulanaCourseCard({ curso, index = 0, onCourseClick }: CapulanaCourseCardProps) {
  const nivelCores = {
    Iniciante: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-300",
    Intermediário: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-300",
    Avançado: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border-red-300",
  }

  return (
    <Card
      className="group hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.03] border-2 border-orange-200 dark:border-gray-700 overflow-hidden cursor-pointer relative bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900"
      style={{
        animationDelay: `${index * 0.15}s`,
        boxShadow: "0 0 20px rgba(249, 115, 22, 0.1)",
      }}
      onClick={() => onCourseClick?.(curso.id)}
    >
      {/* Padrão de Capulana no Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fillOpacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative overflow-hidden">
        <img
          src={curso.thumbnail || "/placeholder.svg?height=200&width=300"}
          alt={curso.titulo}
          className="w-full h-48 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay com Play Button */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-500 shadow-2xl animate-pulse">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <Badge className={`${nivelCores[curso.nivel]} border font-semibold`} variant="secondary">
              {curso.nivel}
            </Badge>

            {curso.tradicional && (
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold border border-yellow-500">
                🏺 Tradicional
              </Badge>
            )}
          </div>

          {curso.premium && (
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold border border-purple-400">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          )}
        </div>

        {/* Rating e Região */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          <div className="bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-white text-xs font-medium">{curso.rating}</span>
          </div>

          {curso.regiao && (
            <div className="bg-gradient-to-r from-orange-500/80 to-red-500/80 backdrop-blur-sm rounded-full px-2 py-1">
              <span className="text-white text-xs font-medium">📍 {curso.regiao}</span>
            </div>
          )}
        </div>
      </div>

      <CardHeader className="pb-3 relative">
        <CardTitle className="text-lg group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 font-bold">
          {curso.titulo}
        </CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
          <span>por</span>
          <span className="font-semibold text-orange-600">{curso.instrutor}</span>
          <Heart className="w-3 h-3 text-red-500 animate-pulse" />
        </p>
      </CardHeader>

      <CardContent className="pt-0 relative">
        {/* Descrição */}
        {curso.descricao && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
            {curso.descricao}
          </p>
        )}

        {/* Estatísticas */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 hover:text-orange-600 transition-colors">
              <Clock className="w-4 h-4" />
              {curso.duracao}
            </span>
            <span className="flex items-center gap-1 hover:text-orange-600 transition-colors">
              <Users className="w-4 h-4" />
              {curso.alunos.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Preço e Ação */}
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            {curso.preco === 0 ? (
              <span className="text-green-600 flex items-center gap-1">
                GRÁTIS
                <span className="text-lg">🎁</span>
              </span>
            ) : (
              <span className="text-orange-600 flex items-center gap-1">
                {curso.preco.toFixed(0)} MT
                <span className="text-sm font-normal text-gray-500">({(curso.preco / 65).toFixed(1)}$)</span>
              </span>
            )}
          </div>

          <Button
            className="bg-gradient-to-r from-orange-500 via-red-500 to-green-500 hover:from-orange-600 hover:via-red-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 font-bold shadow-lg"
            size="sm"
          >
            {curso.preco === 0 ? "Começar 🚀" : "Comprar 💳"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
