"use client"

import TestimonialCard from "../ui/testimonial-card"

interface Depoimento {
  id: number
  nome: string
  avatar: string
  texto: string
  rating: number
  curso: string
  cargo?: string
  cidade?: string
}

interface TestimonialsSectionProps {
  depoimentos: Depoimento[]
}

export default function TestimonialsSection({ depoimentos }: TestimonialsSectionProps) {
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            O que nossas alunas dizem 🗣️
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Histórias reais de transformação através da costura
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {depoimentos.map((depoimento, index) => (
            <TestimonialCard key={depoimento.id} depoimento={depoimento} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
