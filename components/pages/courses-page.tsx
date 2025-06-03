"use client"

import { useState, useEffect, useRef } from "react"
import ProfessionalHeader from "../layout/professional-header"
import ProfessionalFooter from "../layout/professional-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from "@/components/ui/fade-in-section"
import { Search, BookOpen, Award, Crown, Grid, List, Bot, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
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
  tags?: string[]
}

export default function CoursesPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedLevel, setSelectedLevel] = useState("Todos")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const [user] = useState<Usuario>({
    nome: "Maria Silva",
    tipo: "aluno",
    avatar: "/placeholder.svg?height=32&width=32",
    premium: true,
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const todosCursos: Curso[] = [
    {
      id: 1,
      titulo: "Costura Básica para Iniciantes",
      instrutor: "Kátia IA",
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
      tags: ["Iniciante", "Fundamentos", "Máquina de Costura"],
    },
    {
      id: 2,
      titulo: "Bordados Artesanais Avançados",
      instrutor: "Kátia IA",
      nivel: "Avançado",
      duracao: "12h 45min",
      rating: 4.8,
      alunos: 890,
      preco: 199.9,
      thumbnail: "https://images.unsplash.com/photo-1590244443979-0c5b2a2383f9?w=400&h=250&fit=crop",
      premium: true,
      descricao: "Domine técnicas avançadas de bordado artesanal",
      tradicional: true,
      regiao: "Nordeste",
      categoria: "Bordado",
      tags: ["Avançado", "Bordado", "Artesanal"],
    },
    {
      id: 3,
      titulo: "Design de Moda Contemporânea",
      instrutor: "Kátia IA",
      nivel: "Intermediário",
      duracao: "8h 20min",
      rating: 4.7,
      alunos: 567,
      preco: 149.9,
      thumbnail: "https://images.unsplash.com/photo-1572627338982-1272a8bf3e91?w=400&h=250&fit=crop",
      premium: true,
      descricao: "Crie peças modernas com inspiração tradicional",
      tradicional: false,
      regiao: "Sudeste",
      categoria: "Design",
      tags: ["Moda", "Design", "Contemporâneo"],
    },
    {
      id: 4,
      titulo: "Patchwork e Quilting",
      instrutor: "Kátia IA",
      nivel: "Intermediário",
      duracao: "10h 15min",
      rating: 4.6,
      alunos: 423,
      preco: 89.9,
      thumbnail: "https://images.unsplash.com/photo-1528709024086-98a7b7ee2bb2?w=400&h=250&fit=crop",
      premium: true,
      descricao: "Arte de criar colchas e peças decorativas únicas",
      tradicional: true,
      regiao: "Sul",
      categoria: "Patchwork",
      tags: ["Colchas", "Decoração", "Retalhos"],
    },
    {
      id: 5,
      titulo: "Costura de Roupas Infantis",
      instrutor: "Kátia IA",
      nivel: "Iniciante",
      duracao: "7h 30min",
      rating: 4.8,
      alunos: 678,
      preco: 0,
      thumbnail: "https://images.unsplash.com/photo-1596458598955-b0e00f416c3f?w=400&h=250&fit=crop",
      premium: false,
      descricao: "Crie roupinhas especiais para os pequenos",
      tradicional: false,
      regiao: "Nacional",
      categoria: "Roupas Infantis",
      tags: ["Infantil", "Roupas", "Crianças"],
    },
    {
      id: 6,
      titulo: "Alfaiataria Profissional",
      instrutor: "Kátia IA",
      nivel: "Avançado",
      duracao: "15h 45min",
      rating: 4.9,
      alunos: 234,
      preco: 299.9,
      thumbnail: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=250&fit=crop",
      premium: true,
      descricao: "Técnicas profissionais para criar roupas sob medida",
      tradicional: false,
      regiao: "Sudeste",
      categoria: "Alfaiataria",
      tags: ["Profissional", "Sob Medida", "Técnicas Avançadas"],
    },
  ]

  const categorias = ["Todos", "Costura Básica", "Bordado", "Design", "Patchwork", "Roupas Infantis", "Alfaiataria"]
  const niveis = ["Todos", "Iniciante", "Intermediário", "Avançado"]

  const cursosFiltrados = todosCursos.filter((curso) => {
    const matchSearch =
      curso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      curso.instrutor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      curso.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      false
    const matchCategory = selectedCategory === "Todos" || curso.categoria === selectedCategory
    const matchLevel = selectedLevel === "Todos" || curso.nivel === selectedLevel

    return matchSearch && matchCategory && matchLevel
  })

  const handleCourseClick = (id: number) => {
    console.log(`Curso ${id} clicado!`)
  }

  // Sugestões de pesquisa inteligentes
  const searchSuggestions = [
    "Costura para iniciantes",
    "Técnicas de bordado",
    "Vestidos",
    "Alfaiataria",
    "Roupas infantis",
    "Máquina de costura",
  ].filter((suggestion) => suggestion.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm.length > 0)

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
        <ProfessionalHeader darkMode={darkMode} setDarkMode={setDarkMode} user={user} />

        {/* HEADER DA PÁGINA */}
        <section className="py-12 lg:py-16 bg-gradient-to-r from-pink-500 to-red-500">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center text-white">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">Tutoriais & Cursos</h1>
                <p className="text-lg lg:text-xl text-pink-100 max-w-2xl mx-auto">
                  Aprenda com a Kátia IA através de tutoriais interativos e cursos estruturados
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* FILTROS E BUSCA */}
        <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Busca */}
              <FadeInSection direction="left">
                <div className="relative flex-1 max-w-md w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="O que você quer aprender hoje?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    ref={searchRef}
                    className="pl-10 border-pink-200 focus:border-pink-400 transition-all duration-300"
                  />

                  {/* Sugestões de pesquisa */}
                  <AnimatePresence>
                    {isSearchFocused && searchSuggestions.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-10 left-0 right-0 mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-pink-200 dark:border-gray-700 overflow-hidden"
                      >
                        <ul>
                          {searchSuggestions.map((suggestion, index) => (
                            <li key={index}>
                              <button
                                className="w-full text-left px-4 py-2 hover:bg-pink-50 dark:hover:bg-gray-700 flex items-center gap-2"
                                onClick={() => {
                                  setSearchTerm(suggestion)
                                  if (searchRef.current) searchRef.current.focus()
                                }}
                              >
                                <Search className="w-4 h-4 text-pink-500" />
                                {suggestion}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInSection>

              {/* Filtros */}
              <FadeInSection direction="right">
                <div className="flex flex-wrap gap-4 items-center">
                  {/* Categoria */}
                  <div className="flex flex-wrap gap-2">
                    {categorias.map((categoria) => (
                      <Badge
                        key={categoria}
                        variant={selectedCategory === categoria ? "default" : "outline"}
                        className={`cursor-pointer transition-all duration-300 ${
                          selectedCategory === categoria
                            ? "bg-pink-500 text-white hover:bg-pink-600"
                            : "hover:bg-pink-50 hover:border-pink-300"
                        }`}
                        onClick={() => setSelectedCategory(categoria)}
                      >
                        {categoria}
                      </Badge>
                    ))}
                  </div>

                  {/* Nível */}
                  <div className="flex gap-2">
                    {niveis.map((nivel) => (
                      <Badge
                        key={nivel}
                        variant={selectedLevel === nivel ? "default" : "outline"}
                        className={`cursor-pointer transition-all duration-300 ${
                          selectedLevel === nivel
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "hover:bg-red-50 hover:border-red-300"
                        }`}
                        onClick={() => setSelectedLevel(nivel)}
                      >
                        {nivel}
                      </Badge>
                    ))}
                  </div>

                  {/* Modo de Visualização */}
                  <div className="flex gap-2 border border-gray-300 rounded-lg p-1">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className={viewMode === "grid" ? "bg-pink-500 hover:bg-pink-600" : ""}
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className={viewMode === "list" ? "bg-pink-500 hover:bg-pink-600" : ""}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Estatísticas dos Resultados */}
            <FadeInSection delay={200}>
              <div className="mt-6 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>
                  Mostrando {cursosFiltrados.length} de {todosCursos.length} cursos
                </span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {cursosFiltrados.filter((c) => c.preco === 0).length} gratuitos
                  </span>
                  <span className="flex items-center gap-1">
                    <Crown className="w-4 h-4" />
                    {cursosFiltrados.filter((c) => c.premium).length} premium
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    {cursosFiltrados.filter((c) => c.tradicional).length} tradicionais
                  </span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* LISTA DE CURSOS */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            {cursosFiltrados.length === 0 ? (
              <FadeInSection>
                <div className="text-center py-16">
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    Nenhum curso encontrado
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500 mb-6">Tente ajustar os filtros ou termos de busca</p>
                  <Button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("Todos")
                      setSelectedLevel("Todos")
                    }}
                    className="bg-pink-500 hover:bg-pink-600"
                  >
                    Limpar Filtros
                  </Button>
                </div>
              </FadeInSection>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cursosFiltrados.map((curso, index) => (
                  <FadeInSection key={curso.id} delay={index * 100}>
                    <CourseCard
                      curso={curso}
                      onHover={setHoveredCourse}
                      isHovered={hoveredCourse === curso.id}
                      onClick={() => handleCourseClick(curso.id)}
                    />
                  </FadeInSection>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {cursosFiltrados.map((curso, index) => (
                  <FadeInSection key={curso.id} delay={index * 100}>
                    <CourseListItem
                      curso={curso}
                      onHover={setHoveredCourse}
                      isHovered={hoveredCourse === curso.id}
                      onClick={() => handleCourseClick(curso.id)}
                    />
                  </FadeInSection>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ASSISTENTE VIRTUAL */}
        <section className="py-12 bg-gradient-to-r from-pink-500/10 to-red-500/10 dark:from-pink-900/20 dark:to-red-900/20">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-pink-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                    <Bot className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                      Não encontrou o que procura?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      A Kátia IA pode criar um tutorial personalizado para você! Basta descrever o que você quer
                      aprender.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
                        asChild
                      >
                        <Link href="/chat">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Conversar com a Kátia IA
                        </Link>
                      </Button>
                      <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50" asChild>
                        <Link href="/videos">Ver Vídeos Tutoriais</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <ProfessionalFooter />
      </div>
    </div>
  )
}

interface CourseCardProps {
  curso: Curso
  onHover: (id: number | null) => void
  isHovered: boolean
  onClick: () => void
}

function CourseCard({ curso, onHover, isHovered, onClick }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
      onMouseEnter={() => onHover(curso.id)}
      onMouseLeave={() => onHover(null)}
    >
      <Card
        className={`overflow-hidden border border-pink-100 dark:border-gray-700 h-full transition-all duration-300 ${
          isHovered ? "shadow-xl" : "shadow-md"
        }`}
        onClick={onClick}
      >
        <div className="relative">
          <img
            src={curso.thumbnail || "/placeholder.svg"}
            alt={curso.titulo}
            className="w-full h-48 object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          {curso.premium && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <Crown className="w-3 h-3 mr-1" />
              PREMIUM
            </div>
          )}
          {curso.preco === 0 && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              GRATUITO
            </div>
          )}
        </div>

        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-lg text-gray-800 dark:text-white line-clamp-2">{curso.titulo}</h3>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              <Bot className="w-4 h-4 text-pink-500 mr-1" />
              \
