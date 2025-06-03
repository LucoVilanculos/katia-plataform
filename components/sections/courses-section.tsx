"use client"

import { Button } from "@/components/ui/button"
import CourseCard from "../ui/course-card"
import { TrendingUp } from "lucide-react"

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

interface CoursesSectionProps {
  cursos: Curso[]
  onCourseClick: (id: number) => void
}

export default function CoursesSection({ cursos, onCourseClick }: CoursesSectionProps) {
  return (
    <section id="cursos" className="py-12 lg:py-20 bg-white/50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Cursos Mais Amados 💕</h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Escolhidos especialmente pela Kátia para você começar sua jornada na costura
          </p>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cursos.map((curso, index) => (
            <CourseCard key={curso.id} curso={curso} index={index} onCourseClick={onCourseClick} />
          ))}
        </main>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 dark:border-pink-400 dark:text-pink-400"
          >
            Ver Todos os Cursos
            <TrendingUp className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
