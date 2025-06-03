"use client"

import type React from "react"

import PricingCard from "../ui/pricing-card"
import { Crown, BookOpen, Sparkles } from "lucide-react"

interface Plano {
  nome: string
  preco: number
  periodo: string
  descricao: string
  recursos: string[]
  popular: boolean
  premium: boolean
  cor: string
  icone: React.ReactNode
}

interface PricingSectionProps {
  onPlanSelect: (plano: string) => void
}

export default function PricingSection({ onPlanSelect }: PricingSectionProps) {
  const planos: Plano[] = [
    {
      nome: "Plano Gratuito",
      preco: 0,
      periodo: "sempre",
      descricao: "Perfeito para começar sua jornada na costura",
      recursos: [
        "5 cursos básicos completos",
        "Acesso à comunidade",
        "Certificado de conclusão",
        "Suporte por email",
        "Materiais para download",
      ],
      popular: false,
      premium: false,
      cor: "bg-gradient-to-r from-green-500 to-emerald-500",
      icone: <BookOpen className="w-8 h-8 text-white" />,
    },
    {
      nome: "Plano Premium",
      preco: 29.9,
      periodo: "mês",
      descricao: "Acesso completo a toda plataforma",
      recursos: [
        "Todos os cursos (50+)",
        "Novos cursos toda semana",
        "Suporte direto com a Kátia",
        "Downloads para offline",
        "Grupo VIP no WhatsApp",
        "Lives exclusivas mensais",
        "Desconto em materiais",
      ],
      popular: true,
      premium: false,
      cor: "bg-gradient-to-r from-pink-500 to-rose-500",
      icone: <Crown className="w-8 h-8 text-white" />,
    },
    {
      nome: "Plano Vitalício",
      preco: 497,
      periodo: "única vez",
      descricao: "Acesso para toda vida + bônus exclusivos",
      recursos: [
        "Tudo do Premium",
        "Acesso vitalício",
        "Kit de materiais grátis",
        "Mentoria individual (2h)",
        "Acesso a cursos futuros",
        "Certificado especial",
        "Grupo exclusivo de vitalícias",
        "Desconto de 50% em workshops",
      ],
      popular: false,
      premium: true,
      cor: "bg-gradient-to-r from-yellow-400 to-orange-400",
      icone: <Sparkles className="w-8 h-8 text-black" />,
    },
  ]

  return (
    <section
      id="premium"
      className="py-12 lg:py-20 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Escolha seu Plano 💎</h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comece grátis ou acelere seu aprendizado com nossos planos premium
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {planos.map((plano) => (
            <PricingCard key={plano.nome} plano={plano} onSelect={onPlanSelect} />
          ))}
        </div>
      </div>
    </section>
  )
}
