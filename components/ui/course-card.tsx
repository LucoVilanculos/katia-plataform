"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Play, Crown, BookOpen, Users } from "lucide-react"

interface Curso {
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
}

interface CourseCardProps {
  curso: Curso
  index: number
  onCourseClick: (id: number) => void
}

export default function CourseCard({ curso, index, onCourseClick }: CourseCardProps) {
  return (
    <article
      className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-pink-100 dark:border-gray-700 overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="h-full">
        <header className="relative">
          <Image
            src={curso.thumbnail || "/placeholder.svg"}
            alt={`Thumbnail do curso ${curso.titulo}`}
            width={300}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {curso.premium && (
            <Badge className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          )}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Play className="w-12 h-12 text-white" />
          </div>
        </header>

        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <Badge variant="outline" className="text-xs">
              {curso.nivel}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{curso.rating}</span>
            </div>
          </div>
          <CardTitle className="text-lg group-hover:text-pink-600 transition-colors">{curso.titulo}</CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">por {curso.instrutor}</p>
          {curso.descricao && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{curso.descricao}</p>}
        </CardHeader>

        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {curso.duracao}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {curso.alunos}
              </span>
            </div>
          </div>

          <footer className="flex justify-between items-center">
            <div className="text-2xl font-bold text-pink-600">
              {curso.preco === 0 ? "GRÁTIS" : `R$ ${curso.preco.toFixed(2)}`}
            </div>
            <Button
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
              size="sm"
              onClick={() => onCourseClick(curso.id)}
            >
              {curso.preco === 0 ? "Começar" : "Comprar"}
            </Button>
          </footer>
        </CardContent>
      </Card>
    </article>
  )
}
