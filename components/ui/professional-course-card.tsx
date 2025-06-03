"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Play, Users, Crown, Clock, MapPin, Award } from "lucide-react"

interface ProfessionalCourseCardProps {
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
    categoria: string
  }
  index?: number
  onCourseClick?: (id: number) => void
}

export default function ProfessionalCourseCard({ curso, index = 0, onCourseClick }: ProfessionalCourseCardProps) {
  const nivelCores = {
    Iniciante:
      "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
    Intermediário:
      "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800",
    Avançado: "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800",
  }

  return (
    <Card
      className="group hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer bg-white dark:bg-gray-800"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
      onClick={() => onCourseClick?.(curso.id)}
    >
      <div className="relative overflow-hidden">
        <img
          src={`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&auto=format&q=80`}
          alt={curso.titulo}
          className="w-full h-48 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay com Play Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
            <Play className="w-8 h-8 text-orange-600 ml-1" />
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <Badge className={`${nivelCores[curso.nivel]} border font-medium`} variant="secondary">
              {curso.nivel}
            </Badge>

            {curso.tradicional && (
              <Badge className="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800 font-medium">
                <Award className="w-3 h-3 mr-1" />
                Tradicional
              </Badge>
            )}
          </div>

          {curso.premium && (
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium border-0">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          )}
        </div>

        {/* Rating e Região */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-white text-xs font-medium">{curso.rating}</span>
          </div>

          {curso.regiao && (
            <div className="bg-orange-500/80 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-medium">{curso.regiao}</span>
            </div>
          )}
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs font-medium">
            {curso.categoria}
          </Badge>
        </div>
        <CardTitle className="text-lg group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 font-semibold">
          {curso.titulo}
        </CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          por <span className="font-medium text-orange-600">{curso.instrutor}</span>
        </p>
      </CardHeader>

      <CardContent className="pt-0">
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
              <span className="text-green-600 flex items-center gap-1">GRÁTIS</span>
            ) : (
              <span className="text-orange-600">R$ {curso.preco.toFixed(2)}</span>
            )}
          </div>

          <Button
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg"
            size="sm"
          >
            {curso.preco === 0 ? "Começar" : "Comprar"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
