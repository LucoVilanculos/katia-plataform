"use client"

import { useState, useEffect } from "react"
import ProfessionalHeader from "../layout/professional-header"
import ProfessionalFooter from "../layout/professional-footer"
import ProfessionalCourseCard from "../ui/professional-course-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sparkles,
  Play,
  Award,
  Users,
  BookOpen,
  Star,
  Scissors,
  ArrowRight,
  CheckCircle,
  Heart,
  Target,
  Zap,
} from "lucide-react"
import Link from "next/link"

interface Usuario {
  nome: string
  tipo: "visitante" | "aluno" | "formador"
  avatar?: string
  premium?: boolean
}

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
  tradicional?: boolean
  regiao?: string
  categoria: string
}

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Simulação de usuário
  const [user] = useState<Usuario>({
    nome: "Maria Silva",
    tipo: "visitante", // Mude para testar diferentes tipos
    avatar: "/placeholder.svg?height=32&width=32",
    premium: false,
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Cursos em destaque
  const cursosDestaque: Curso[] = [
    {
      id: 1,
      titulo: "Costura Básica para Iniciantes",
      instrutor: "Kátia Silva",
      nivel: "Iniciante",
      duracao: "6h 30min",
      rating: 4.9,
      alunos: 1850,
      preco: 0,
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      premium: false,
      descricao: "Aprenda os fundamentos da costura com técnicas tradicionais e modernas",
      tradicional: true,
      regiao: "Nacional",
      categoria: "Costura Básica",
    },
    {
      id: 2,
      titulo: "Bordados Artesanais Avançados",
      instrutor: "Ana Costa",
      nivel: "Avançado",
      duracao: "12h 45min",
      rating: 4.8,
      alunos: 890,
      preco: 199.9,
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      premium: true,
      descricao: "Domine técnicas avançadas de bordado artesanal",
      tradicional: true,
      regiao: "Nordeste",
      categoria: "Bordado",
    },
    {
      id: 3,
      titulo: "Design de Moda Contemporânea",
      instrutor: "Carlos Mendes",
      nivel: "Intermediário",
      duracao: "8h 20min",
      rating: 4.7,
      alunos: 567,
      preco: 149.9,
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      premium: true,
      descricao: "Crie peças modernas com inspiração tradicional",
      tradicional: false,
      regiao: "Sudeste",
      categoria: "Design",
    },
  ]

  const handleCourseClick = (id: number) => {
    console.log(`Curso ${id} clicado!`)
  }

  const estatisticas = [
    { numero: "2.5k+", label: "Estudantes Ativas", icon: Users },
    { numero: "150+", label: "Cursos Disponíveis", icon: BookOpen },
    { numero: "4.9", label: "Avaliação Média", icon: Star },
    { numero: "98%", label: "Taxa de Satisfação", icon: Heart },
  ]

  const beneficios = [
    {
      icon: Target,
      titulo: "Aprendizado Direcionado",
      descricao: "Cursos estruturados do básico ao avançado com metodologia comprovada",
    },
    {
      icon: Users,
      titulo: "Comunidade Ativa",
      descricao: "Conecte-se com outras costureiras e compartilhe experiências",
    },
    {
      icon: Award,
      titulo: "Certificação Reconhecida",
      descricao: "Receba certificados válidos para comprovar suas habilidades",
    },
    {
      icon: Zap,
      titulo: "Suporte Especializado",
      descricao: "Tire dúvidas diretamente com instrutoras experientes",
    },
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
        <ProfessionalHeader darkMode={darkMode} setDarkMode={setDarkMode} user={user} />

        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              {/* Logo Hero */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <Scissors className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-orange-600" />
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
                Transforme sua Paixão
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">em Profissão</span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Aprenda costura com as melhores instrutoras do país.
                <br />
                <strong className="text-orange-600">Do básico ao profissional, no seu ritmo.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Começar Gratuitamente
                </Button>
                <Link href="/courses">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-2 border-orange-400 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-900/20 text-lg px-8 py-6 rounded-full font-semibold"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Explorar Cursos
                  </Button>
                </Link>
              </div>

              {/* Estatísticas */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {estatisticas.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 dark:border-gray-600 transform hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-orange-600 mr-2" />
                      <div className="text-2xl lg:text-3xl font-bold text-orange-600">{stat.numero}</div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CURSOS EM DESTAQUE */}
        <section className="py-16 lg:py-20 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Cursos em Destaque</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Selecionados especialmente para você começar sua jornada na costura
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {cursosDestaque.map((curso, index) => (
                <ProfessionalCourseCard key={curso.id} curso={curso} index={index} onCourseClick={handleCourseClick} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/courses">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 font-semibold"
                >
                  Ver Todos os Cursos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                Por que Escolher a Kátia Costura?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Mais de 2.500 alunas já transformaram suas vidas conosco
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {beneficios.map((beneficio, index) => (
                <Card
                  key={beneficio.titulo}
                  className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-orange-200 dark:border-gray-700"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <beneficio.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-800 dark:text-white">{beneficio.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{beneficio.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Pronta para Começar sua Jornada?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de mulheres que já descobriram o poder da costura
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Criar Conta Gratuita
              </Button>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
                >
                  Conhecer Nossa História
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <ProfessionalFooter />
      </div>
    </div>
  )
}
