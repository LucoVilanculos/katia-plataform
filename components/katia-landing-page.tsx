"use client"

import { useState, useEffect } from 'react';
import HeroSection from "./sections/hero-section"
import CoursesSection from "./sections/courses-section"
import TestimonialsSection from "./sections/testimonials-section"
import PricingSection from "./sections/pricing-section"
import InstructorSection from "./sections/instructor-section"
import NewsletterSection from "./sections/newsletter-section"

import Header from "./layout/header"
import Footer from "./layout/footer"



// Tipos
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
}

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

export default function KatiaLandingPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Simulação de usuário
  const [user] = useState<Usuario>({
    nome: "Maria Silva",
    tipo: "aluno",
    avatar: "/placeholder.svg?height=32&width=32",
    premium: true,
  })

  // Animação de scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Dados dos cursos
  const cursosPopulares: Curso[] = [
    {
      id: 1,
      titulo: "Costura à Mão para Iniciantes",
      instrutor: "Kátia Silva",
      nivel: "Iniciante",
      duracao: "4h 30min",
      rating: 4.9,
      alunos: 1250,
      preco: 0,
      thumbnail: "/placeholder.svg?height=200&width=300",
      premium: false,
      descricao: "Aprenda os pontos básicos e crie suas primeiras peças à mão",
    },
    {
      id: 2,
      titulo: "Máquina de Costura: Do Básico ao Avançado",
      instrutor: "Maria Santos",
      nivel: "Intermediário",
      duracao: "8h 15min",
      rating: 4.8,
      alunos: 890,
      preco: 89.9,
      thumbnail: "/placeholder.svg?height=200&width=300",
      premium: true,
      descricao: "Domine sua máquina e crie peças profissionais",
    },
    {
      id: 3,
      titulo: "Roupas Infantis: Técnicas Especiais",
      instrutor: "Ana Costa",
      nivel: "Avançado",
      duracao: "6h 45min",
      rating: 4.9,
      alunos: 567,
      preco: 129.9,
      thumbnail: "/placeholder.svg?height=200&width=300",
      premium: true,
      descricao: "Crie roupinhas únicas e especiais para os pequenos",
    },
    {
      id: 4,
      titulo: "Bordado Moderno",
      instrutor: "Carla Mendes",
      nivel: "Intermediário",
      duracao: "5h 20min",
      rating: 4.7,
      alunos: 423,
      preco: 79.9,
      thumbnail: "/placeholder.svg?height=200&width=300",
      premium: true,
      descricao: "Técnicas contemporâneas de bordado para personalizar suas peças",
    },
    {
      id: 5,
      titulo: "Patchwork para Iniciantes",
      instrutor: "Lucia Ferreira",
      nivel: "Iniciante",
      duracao: "3h 45min",
      rating: 4.8,
      alunos: 678,
      preco: 0,
      thumbnail: "/placeholder.svg?height=200&width=300",
      premium: false,
      descricao: "Crie lindas colchas e almofadas com a técnica do patchwork",
    },
    {
      id: 6,
      titulo: "Alfaiataria Feminina",
      instrutor: "Roberto Silva",
      nivel: "Avançado",
      duracao: "12h 30min",
      rating: 4.9,
      alunos: 234,
      preco: 199.9,
      thumbnail: "/placeholder.svg?height=200&width=300",
      premium: true,
      descricao: "Técnicas profissionais para criar roupas sob medida",
    },
  ]

  // Dados dos depoimentos
  const depoimentos: Depoimento[] = [
    {
      id: 1,
      nome: "Juliana Oliveira",
      avatar: "/placeholder.svg?height=60&width=60",
      texto:
        "A Kátia mudou minha vida! Aprendi a costurar do zero e hoje faço minhas próprias roupas. Os cursos são incríveis e muito didáticos!",
      rating: 5,
      curso: "Costura à Mão para Iniciantes",
      cargo: "Designer",
      cidade: "São Paulo",
    },
    {
      id: 2,
      nome: "Roberto Silva",
      avatar: "/placeholder.svg?height=60&width=60",
      texto:
        "Nunca pensei que um homem pudesse aprender costura tão facilmente. A plataforma é muito didática e acolhedora!",
      rating: 5,
      curso: "Máquina de Costura Básica",
      cargo: "Engenheiro",
      cidade: "Rio de Janeiro",
    },
    {
      id: 3,
      nome: "Carla Mendes",
      avatar: "/placeholder.svg?height=60&width=60",
      texto: "O curso premium vale cada centavo! Aprendi técnicas que não encontro em lugar nenhum. Recomendo demais!",
      rating: 5,
      curso: "Técnicas Avançadas",
      cargo: "Empreendedora",
      cidade: "Belo Horizonte",
    },
    {
      id: 4,
      nome: "Ana Paula Costa",
      avatar: "/placeholder.svg?height=60&width=60",
      texto:
        "Comecei como hobby e hoje tenho meu próprio ateliê! A Kátia me deu toda a base que precisava para empreender.",
      rating: 5,
      curso: "Roupas Infantis",
      cargo: "Empresária",
      cidade: "Curitiba",
    },
    {
      id: 5,
      nome: "Fernanda Santos",
      avatar: "/placeholder.svg?height=60&width=60",
      texto:
        "A comunidade é incrível! Sempre tem alguém para ajudar e trocar experiências. Me sinto parte de uma família!",
      rating: 5,
      curso: "Bordado Moderno",
      cargo: "Professora",
      cidade: "Salvador",
    },
    {
      id: 6,
      nome: "Mariana Lima",
      avatar: "/placeholder.svg?height=60&width=60",
      texto:
        "Os vídeos são de altíssima qualidade e a Kátia explica tudo de forma muito clara. Aprendi mais aqui do que em anos tentando sozinha!",
      rating: 5,
      curso: "Patchwork",
      cargo: "Artesã",
      cidade: "Fortaleza",
    },
  ]

  const handleCourseClick = (id: number) => {
    console.log(`Curso ${id} clicado!`)
    // Aqui você implementaria a navegação para a página do curso
  }

  const handlePlanSelect = (plano: string) => {
    console.log(`Plano ${plano} selecionado!`)
    // Aqui você implementaria a lógica de checkout
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} />
        <HeroSection scrollY={scrollY} />
        <CoursesSection cursos={cursosPopulares} onCourseClick={handleCourseClick} />
        <TestimonialsSection depoimentos={depoimentos} />
        <PricingSection onPlanSelect={handlePlanSelect} />
        <InstructorSection />
        <NewsletterSection />
        <Footer />
      </div>
    </div>
  )
}
