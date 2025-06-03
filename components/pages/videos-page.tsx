"use client"

import { useState, useEffect } from "react"
import { Play, Users, Star, Search, Heart, ArrowUp, Sparkles, Loader2, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useInView } from "react-intersection-observer"

// Vídeos de exemplo (sem API)
const videosExemplo = [
  {
    id: "1",
    titulo: "Primeiros Passos na Costura",
    descricao: "Aprenda os fundamentos básicos da costura com a Kátia AI",
    duracao: "15:30",
    nivel: "Iniciante" as const,
    categoria: "Básico",
    thumbnail: "/placeholder.svg?height=200&width=300",
    visualizacoes: 1250,
    rating: 4.8,
    premium: false,
    instrutor: "Kátia AI",
    url: "#",
  },
  {
    id: "2",
    titulo: "Como Usar a Máquina de Costura",
    descricao: "Tutorial completo sobre máquinas de costura para iniciantes",
    duracao: "22:45",
    nivel: "Iniciante" as const,
    categoria: "Máquinas",
    thumbnail: "/placeholder.svg?height=200&width=300",
    visualizacoes: 980,
    rating: 4.9,
    premium: false,
    instrutor: "Kátia AI",
    url: "#",
  },
  {
    id: "3",
    titulo: "Costura de Roupas Infantis",
    descricao: "Técnicas especiais para costurar roupinhas de bebê",
    duracao: "35:20",
    nivel: "Intermediário" as const,
    categoria: "Roupas",
    thumbnail: "/placeholder.svg?height=200&width=300",
    visualizacoes: 756,
    rating: 4.7,
    premium: true,
    instrutor: "Kátia AI",
    url: "#",
  },
  {
    id: "4",
    titulo: "Bordado à Mão Tradicional",
    descricao: "Aprenda técnicas tradicionais de bordado moçambicano",
    duracao: "28:15",
    nivel: "Intermediário" as const,
    categoria: "Bordado",
    thumbnail: "/placeholder.svg?height=200&width=300",
    visualizacoes: 642,
    rating: 4.6,
    premium: true,
    instrutor: "Kátia AI",
    url: "#",
  },
  {
    id: "5",
    titulo: "Capulanas: História e Técnicas",
    descricao: "Tudo sobre capulanas e como trabalhar com elas",
    duracao: "40:30",
    nivel: "Avançado" as const,
    categoria: "Capulanas",
    thumbnail: "/placeholder.svg?height=200&width=300",
    visualizacoes: 523,
    rating: 4.9,
    premium: true,
    instrutor: "Kátia AI",
    url: "#",
  },
  {
    id: "6",
    titulo: "Consertos e Ajustes Básicos",
    descricao: "Como fazer consertos simples em roupas",
    duracao: "18:45",
    nivel: "Iniciante" as const,
    categoria: "Consertos",
    thumbnail: "/placeholder.svg?height=200&width=300",
    visualizacoes: 834,
    rating: 4.5,
    premium: false,
    instrutor: "Kátia AI",
    url: "#",
  },
]

export default function VideosPage() {
  const [videos] = useState(videosExemplo)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedLevel, setSelectedLevel] = useState("Todos")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)

  // Detectar scroll para botão "voltar ao topo"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Simular carregamento inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleSearch = () => {
    setSearchLoading(true)
    // Simular busca
    setTimeout(() => {
      setSearchLoading(false)
    }, 500)
  }

  // Hooks de animação com triggerOnce: false para animar sempre
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  })

  const { ref: filtersRef, inView: filtersInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
    rootMargin: "-30px 0px",
  })

  const { ref: videosRef, inView: videosInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-20px 0px",
  })

  const categorias = ["Todos", "Básico", "Máquinas", "Roupas", "Bordado", "Capulanas", "Consertos"]
  const niveis = ["Todos", "Iniciante", "Intermediário", "Avançado"]

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || video.categoria === selectedCategory
    const matchesLevel = selectedLevel === "Todos" || video.nivel === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  const getLevelColor = (nivel: string) => {
    switch (nivel) {
      case "Iniciante":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Intermediário":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Avançado":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const openVideo = (video: any) => {
    if (video.url && video.url !== "#") {
      window.open(video.url, "_blank")
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section com animações bidirecionais */}
      <div
        ref={heroRef}
        className={`relative py-20 px-4 text-center transition-all duration-1000 ease-out ${
          heroInView ? "opacity-100 translate-y-0 scale-100 rotate-0" : "opacity-0 translate-y-8 scale-95 rotate-1"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Badge animado */}
          <div
            className={`inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-800 ${
              heroInView ? "opacity-100 scale-100 rotate-0 translate-x-0" : "opacity-0 scale-75 rotate-12 translate-x-4"
            }`}
          >
            <Play className="w-4 h-4 animate-pulse" />
            Vídeo Aulas Interativas
            <Sparkles className="w-4 h-4 animate-bounce" />
          </div>

          {/* Título com efeito de escrita */}
          <h1
            className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-600 bg-clip-text text-transparent mb-6 transition-all duration-1200 ${
              heroInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90"
            }`}
          >
            Aprenda Costura com Vídeos
          </h1>

          {/* Descrição com delay */}
          <p
            className={`text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              heroInView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"
            }`}
          >
            Vídeos de exemplo da Kátia AI! Aprenda costura passo a passo! ✨
          </p>

          {/* Estatísticas com animação escalonada */}
          <div
            className={`flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 transition-all duration-1000 delay-500 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { icon: Play, text: "6 Vídeos", delay: "delay-[600ms]" },
              { icon: Users, text: "Para Todos", delay: "delay-[700ms]" },
              { icon: Star, text: "Alta Qualidade", delay: "delay-[800ms]" },
            ].map(({ icon: Icon, text, delay }, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 hover:scale-110 transition-all duration-300 ${delay} ${
                  heroInView ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-3 rotate-6"
                }`}
              >
                <Icon className="w-4 h-4 text-purple-500" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filtros com animação de slide */}
      <div
        ref={filtersRef}
        className={`max-w-7xl mx-auto px-4 mb-12 transition-all duration-800 ${
          filtersInView ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-8 scale-95"
        }`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Busca com animação de foco */}
            <div className="md:col-span-2">
              <div className="relative group">
                <Search
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-all duration-300 ${
                    filtersInView ? "opacity-100 rotate-0" : "opacity-0 rotate-45"
                  }`}
                />
                <Input
                  placeholder="Buscar nos vídeos de exemplo..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className={`pl-10 h-12 hover:border-purple-300 focus:border-purple-500 transition-all duration-300 ${
                    filtersInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                />
              </div>
            </div>

            {/* Botão de busca com pulse */}
            <div>
              <Button
                onClick={handleSearch}
                disabled={searchLoading}
                className={`w-full h-12 bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 ${
                  filtersInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                } ${searchLoading ? "animate-pulse" : ""}`}
              >
                {searchLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <Search className="w-4 h-4 mr-2" />
                )}
                Buscar
              </Button>
            </div>

            {/* Selects com animação de entrada */}
            {[
              { value: selectedCategory, onChange: setSelectedCategory, options: categorias },
              { value: selectedLevel, onChange: setSelectedLevel, options: niveis },
            ].map((select, index) => (
              <div key={index}>
                <select
                  value={select.value}
                  onChange={(e) => select.onChange(e.target.value)}
                  className={`w-full h-12 px-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:border-purple-300 focus:border-purple-500 transition-all duration-300 ${
                    filtersInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  {select.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loading com skeleton animado */}
      {loading && (
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-full h-48 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700"></div>
                <div className="p-6">
                  <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Grid de Vídeos com animações complexas */}
      {!loading && (
        <div
          ref={videosRef}
          className={`max-w-7xl mx-auto px-4 pb-20 transition-all duration-1000 ${
            videosInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-3 hover:rotate-1 transform group cursor-pointer ${
                  videosInView
                    ? "opacity-100 translate-y-0 rotate-0 scale-100"
                    : "opacity-0 translate-y-8 rotate-2 scale-95"
                }`}
                style={{
                  transitionDelay: videosInView ? `${index * 150}ms` : "0ms",
                }}
                onClick={() => openVideo(video)}
              >
                {/* Thumbnail com efeitos avançados */}
                <div className="relative group/video overflow-hidden">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.titulo}
                    className="w-full h-48 object-cover group-hover/video:scale-125 group-hover/video:rotate-2 transition-all duration-1000"
                  />

                  {/* Overlay com gradiente animado */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover/video:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <Button className="bg-purple-600/90 backdrop-blur-sm border border-white/30 text-white hover:bg-purple-700/90 transform scale-75 group-hover/video:scale-100 transition-all duration-300 animate-bounce">
                      <Play className="w-6 h-6 mr-2" />
                      Vídeo de Exemplo
                    </Button>
                  </div>

                  {/* Badge com animação */}
                  <div className="absolute top-3 left-3 transform group-hover/video:scale-110 group-hover/video:rotate-12 transition-all duration-300">
                    <Badge className="bg-gray-600 text-white animate-pulse">
                      <XCircle className="w-3 h-3 mr-1" />
                      Exemplo
                    </Badge>
                  </div>

                  {/* Duração com efeito neon */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm backdrop-blur-sm group-hover/video:shadow-lg group-hover/video:shadow-purple-500/50 transition-all duration-300">
                    {video.duracao}
                  </div>
                </div>

                {/* Conteúdo com micro-animações */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      className={`${getLevelColor(video.nivel)} hover:scale-110 hover:rotate-3 transition-all duration-300`}
                    >
                      {video.nivel}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs hover:scale-110 hover:-rotate-3 transition-all duration-300"
                    >
                      {video.categoria}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-purple-600 transition-all duration-300">
                    {video.titulo}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {video.descricao}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1 hover:text-purple-500 hover:scale-105 transition-all duration-300">
                      <Users className="w-4 h-4" />
                      <span>{video.visualizacoes.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center gap-1 hover:text-yellow-500 hover:scale-105 transition-all duration-300">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{video.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors duration-300">
                      Por {video.instrutor}
                    </span>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 hover:text-purple-700 hover:scale-125 hover:rotate-12 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Adicionar aos favoritos
                      }}
                    >
                      <Heart className="w-4 h-4 mr-1" />
                      Salvar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensagem quando não há resultados */}
          {filteredVideos.length === 0 && !loading && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <Search className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Nenhum vídeo encontrado</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Tente ajustar os filtros ou buscar por outros termos
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white hover:scale-105 transition-all duration-300">
                <Play className="w-4 h-4 mr-2" />
                Ver Todos os Vídeos
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Botão Voltar ao Topo com animação especial */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-125 hover:rotate-12 transition-all duration-300 z-50 animate-bounce"
          size="sm"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}
