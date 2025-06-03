"use client"

import { useState, useEffect } from "react"
import MozHeader from "../layout/moz-header"
import MozFooter from "../layout/moz-footer"
import CapulanaCourseCard from "../ui/capulana-course-card"
import MozTestimonialCard from "../ui/moz-testimonial-card"
import MozPricingCard from "../ui/moz-pricing-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Play, TrendingUp, Award, Users, MessageCircle, Crown, BookOpen, Star, Scissors } from "lucide-react"

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
  tradicional?: boolean
  regiao?: string
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
  provincia?: string
}

export default function KatiaMozLandingPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [emailFormador, setEmailFormador] = useState("")
  const [mensagemFormador, setMensagemFormador] = useState("")
  const [scrollY, setScrollY] = useState(0)
  const [heroAnimation, setHeroAnimation] = useState(false)

  // Simulação de usuário moçambicano
  const [user] = useState<Usuario>({
    nome: "Esperança Macamo",
    tipo: "aluno",
    avatar: "/placeholder.svg?height=32&width=32",
    premium: true,
  })

  // Animações e efeitos
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Animação do hero
    const timer = setTimeout(() => setHeroAnimation(true), 500)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Dados dos cursos moçambicanos
  const cursosCapulana: Curso[] = [
    {
      id: 1,
      titulo: "Costura de Capulanas Tradicionais",
      instrutor: "Mama Kátia Macamo",
      nivel: "Iniciante",
      duracao: "6h 30min",
      rating: 4.9,
      alunos: 1850,
      preco: 0,
      thumbnail: "/placeholder.svg?height=200&width=300",
      premium: false,
      descricao: "Aprende a costurar capulanas tradicionais moçambicanas com técnicas ancestrais",
      tradicional: true,
      regiao: "Maputo",
    },
    {
      id: 2,
      titulo: "Bordados Makonde Modernos",
      instrutor: "Mestra Fátima Muianga",
      nivel: "Intermediário",
      duracao: "8h 45min",
      rating: 4.8,
      alunos: 1240,
      preco: 1950, // ~30 USD
      thumbnail: "/placeholder.svg?height=200&width=300",
      premium: true,
      descricao: "Combina a arte tradicional Makonde com técnicas modernas de bordado",
      tradicional: true,
      regiao: "Cabo Delgado",
    },
    {
      id: 3,
      titulo: "Roupas Moçambicanas Contemporâneas",
      instrutor: "Designer Celma Ribeiro",
      nivel: "Avançado",
      duracao: "12h 20min",
      rating: 4.9,
      alunos: 890,
      preco: 3250, // ~50 USD
      thumbnail: "/placeholder.svg?height=200&width=300",
      premium: true,
      descricao: "Cria roupas modernas inspiradas na tradição moçambicana",
      tradicional: false,
      regiao: "Maputo",
    },
    {
      id: 4,
      titulo: "Cestaria de Inhambane",
      instrutor: "Mama Rosa Chissano",
      nivel: "Iniciante",
      duracao: "4h 15min",
      rating: 4.7,
      alunos: 567,
      preco: 1300, // ~20 USD
      thumbnail: "/placeholder.svg?height=200&width=300",
      premium: true,
      descricao: "Arte tradicional de cestaria da província de Inhambane",
      tradicional: true,
      regiao: "Inhambane",
    },
    {
      id: 5,
      titulo: "Joalheria Africana Contemporânea",
      instrutor: "Artista Benedita Sitoe",
      nivel: "Intermediário",
      duracao: "7h 30min",
      rating: 4.8,
      alunos: 423,
      preco: 0,
      thumbnail: "/placeholder.svg?height=200&width=300",
      premium: false,
      descricao: "Cria jóias únicas inspiradas na cultura africana",
      tradicional: false,
      regiao: "Beira",
    },
    {
      id: 6,
      titulo: "Marrabenta Fashion Design",
      instrutor: "Designer Paulo Chibanga",
      nivel: "Avançado",
      duracao: "15h 45min",
      rating: 4.9,
      alunos: 234,
      preco: 4550, // ~70 USD
      thumbnail: "/placeholder.svg?height=200&width=300",
      premium: true,
      descricao: "Design de moda inspirado no ritmo e cultura da Marrabenta",
      tradicional: false,
      regiao: "Maputo",
    },
  ]

  // Depoimentos moçambicanos
  const depoimentosMoz: Depoimento[] = [
    {
      id: 1,
      nome: "Esperança Macamo",
      avatar: "/placeholder.svg?height=60&width=60",
      texto:
        "A Mama Kátia mudou a minha vida! Aprendi a costurar capulanas e hoje tenho o meu próprio negócio. Kanimambo!",
      rating: 5,
      curso: "Costura de Capulanas Tradicionais",
      cargo: "Empresária",
      cidade: "Maputo",
      provincia: "Maputo",
    },
    {
      id: 2,
      nome: "João Sitoe",
      avatar: "/placeholder.svg?height=60&width=60",
      texto:
        "Nunca pensei que um homem pudesse aprender estas artes tradicionais. A plataforma é muito acolhedora e respeitosa!",
      rating: 5,
      curso: "Bordados Makonde",
      cargo: "Professor",
      cidade: "Pemba",
      provincia: "Cabo Delgado",
    },
    {
      id: 3,
      nome: "Celma Ribeiro",
      avatar: "/placeholder.svg?height=60&width=60",
      texto:
        "Os cursos premium valem cada metical! Aprendi técnicas que não encontro em lugar nenhum. Recomendo muito!",
      rating: 5,
      curso: "Roupas Contemporâneas",
      cargo: "Designer",
      cidade: "Beira",
      provincia: "Sofala",
    },
    {
      id: 4,
      nome: "Rosa Chissano",
      avatar: "/placeholder.svg?height=60&width=60",
      texto:
        "Comecei como passatempo e hoje vendo as minhas cestas no mercado! A Kátia deu-me toda a base que precisava.",
      rating: 5,
      curso: "Cestaria de Inhambane",
      cargo: "Artesã",
      cidade: "Inhambane",
      provincia: "Inhambane",
    },
    {
      id: 5,
      nome: "Benedita Sitoe",
      avatar: "/placeholder.svg?height=60&width=60",
      texto:
        "A comunidade é incrível! Sempre tem alguém para ajudar e partilhar experiências. Sinto-me parte de uma família!",
      rating: 5,
      curso: "Joalheria Africana",
      cargo: "Artista",
      cidade: "Nampula",
      provincia: "Nampula",
    },
    {
      id: 6,
      nome: "Paulo Chibanga",
      avatar: "/placeholder.svg?height=60&width=60",
      texto:
        "Os vídeos são de altíssima qualidade e a Kátia explica tudo de forma muito clara. Aprendi mais aqui do que em anos sozinho!",
      rating: 5,
      curso: "Marrabenta Fashion",
      cargo: "Designer",
      cidade: "Matola",
      provincia: "Maputo",
    },
  ]

  // Planos em Meticais
  const planosMoz = [
    {
      nome: "Plano Gratuito",
      preco: 0,
      precoUSD: 0,
      periodo: "sempre",
      descricao: "Perfeito para começar a tua jornada nas artes tradicionais",
      recursos: [
        "🎨 5 cursos tradicionais completos",
        "🤝 Acesso à comunidade moçambicana",
        "📜 Certificado de conclusão",
        "📧 Suporte por email",
        "📥 Materiais para download",
        "🇲🇿 Conteúdo em português moçambicano",
      ],
      popular: false,
      premium: false,
      cor: "bg-gradient-to-r from-green-500 to-emerald-500",
      icone: <BookOpen className="w-8 h-8 text-white" />,
    },
    {
      nome: "Plano Capulana",
      preco: 1950, // ~30 USD
      precoUSD: 30,
      periodo: "mês",
      descricao: "Acesso completo à nossa tradição e cultura",
      recursos: [
        "🌺 Todos os cursos (50+)",
        "✨ Novos cursos toda semana",
        "👩‍🏫 Suporte directo com a Mama Kátia",
        "📱 Downloads para offline",
        "📲 Grupo VIP no WhatsApp",
        "🎥 Lives exclusivas mensais",
        "💰 Desconto em materiais tradicionais",
        "🏺 Acesso a técnicas ancestrais",
        "🇲🇿 Conteúdo exclusivo moçambicano",
      ],
      popular: true,
      premium: false,
      cor: "bg-gradient-to-r from-orange-500 via-red-500 to-green-500",
      icone: <Crown className="w-8 h-8 text-white" />,
    },
    {
      nome: "Plano Ancestral",
      preco: 32500, // ~500 USD
      precoUSD: 500,
      periodo: "vitalício",
      descricao: "Acesso vitalício + preservação da nossa cultura",
      recursos: [
        "🌟 Tudo do Plano Capulana",
        "♾️ Acesso vitalício garantido",
        "🎁 Kit de materiais tradicionais grátis",
        "👥 Mentoria individual (3h)",
        "🔮 Acesso a todos os cursos futuros",
        "🏆 Certificado especial de Mestra",
        "👑 Grupo exclusivo de Mestras Ancestrais",
        "🎪 50% desconto em workshops presenciais",
        "🏛️ Participação em preservação cultural",
        "📚 Acesso à biblioteca de técnicas ancestrais",
      ],
      popular: false,
      premium: true,
      cor: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400",
      icone: <Sparkles className="w-8 h-8 text-black" />,
    },
  ]

  const inscreverFormador = () => {
    if (emailFormador && mensagemFormador) {
      alert(`Kanimambo ${emailFormador}! Entraremos em contacto em breve para discutir a tua parceria! 🇲🇿✨`)
      setEmailFormador("")
      setMensagemFormador("")
    }
  }

  const handleCourseClick = (id: number) => {
    console.log(`Curso ${id} clicado!`)
    // Aqui implementarias a navegação para a página do curso
  }

  const handlePlanSelect = (plano: string) => {
    console.log(`Plano ${plano} selecionado!`)
    // Aqui implementarias a lógica de checkout com M-Pesa
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-orange-50 via-red-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen relative overflow-hidden">
        {/* Padrão de Capulana no Background Global */}
        <div className="fixed inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full bg-repeat animate-pulse"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fillOpacity='0.1'%3E%3Cpath d='M40 40c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm20 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* HEADER */}
        <MozHeader darkMode={darkMode} setDarkMode={setDarkMode} user={user} />

        {/* HERO SECTION MOÇAMBICANO */}
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              backgroundImage: "url('/placeholder.svg?height=1000&width=1400')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div
              className={`max-w-6xl mx-auto transition-all duration-1000 ${heroAnimation ? "animate-fade-in-up" : "opacity-0"}`}
            >
              {/* Bandeira e Símbolos Moçambicanos */}
              <div className="flex justify-center mb-6 lg:mb-8">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-orange-500 via-red-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse">
                    <Scissors className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 lg:w-10 lg:h-10 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 text-orange-600" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 text-2xl lg:text-3xl animate-spin">🇲🇿</div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-green-600 bg-clip-text text-transparent leading-tight">
                Aprende a Costurar
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex items-center justify-center gap-4">
                  com a Mama Kátia!
                  <span className="animate-bounce">🌺</span>
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-700 dark:text-gray-300 mb-6 lg:mb-8 max-w-5xl mx-auto leading-relaxed font-medium">
                Das capulanas tradicionais às técnicas modernas.
                <br />
                <strong className="text-orange-600 flex items-center justify-center gap-2 mt-2">
                  <span>🇲🇿</span>
                  <span>Preserva a Nossa Tradição e Constrói o Teu Futuro!</span>
                  <span>🌟</span>
                </strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-8 lg:mb-12">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 via-red-500 to-green-500 hover:from-orange-600 hover:via-red-600 hover:to-green-600 text-white text-lg lg:text-xl px-8 lg:px-12 py-6 lg:py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 font-bold"
                >
                  <Play className="w-6 h-6 mr-3" />
                  Começar Agora - GRÁTIS 🎁
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-3 border-orange-400 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-900/20 text-lg lg:text-xl px-8 lg:px-12 py-6 lg:py-8 rounded-full font-bold transform hover:scale-105 transition-all duration-300"
                >
                  <Crown className="w-6 h-6 mr-3" />
                  Ver Planos Premium 👑
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div
                  className="animate-fade-in-up bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 dark:border-gray-600"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-orange-600 flex items-center justify-center gap-2">
                    <span>1.8k+</span>
                    <span className="text-2xl">🇲🇿</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm lg:text-base font-medium">
                    Artesãs Moçambicanas
                  </div>
                </div>
                <div
                  className="animate-fade-in-up bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 dark:border-gray-600"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-orange-600 flex items-center justify-center gap-2">
                    <span>50+</span>
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm lg:text-base font-medium">
                    Artes Tradicionais
                  </div>
                </div>
                <div
                  className="animate-fade-in-up bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 dark:border-gray-600"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-orange-600 flex items-center justify-center gap-2">
                    <span>4.9</span>
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm lg:text-base font-medium">
                    Avaliação Média
                  </div>
                </div>
              </div>

              {/* Províncias de Moçambique */}
              <div className="mt-12 lg:mt-16">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  🌍 Presente em todas as províncias de Moçambique
                </p>
                <div className="flex flex-wrap justify-center gap-2 lg:gap-3 max-w-4xl mx-auto">
                  {[
                    "Maputo",
                    "Gaza",
                    "Inhambane",
                    "Sofala",
                    "Manica",
                    "Tete",
                    "Zambézia",
                    "Nampula",
                    "Cabo Delgado",
                    "Niassa",
                  ].map((provincia) => (
                    <span
                      key={provincia}
                      className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-700 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      {provincia}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CURSOS DE CAPULANAS */}
        <section id="cursos" className="py-12 lg:py-20 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-gray-800 dark:text-white flex items-center justify-center gap-4">
                <span className="text-4xl animate-bounce">🌺</span>
                <span>Artes Tradicionais Mais Amadas</span>
                <span className="text-4xl animate-bounce">🎨</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Escolhidas especialmente pela Mama Kátia para preservares e continuares a nossa rica tradição
                moçambicana
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cursosCapulana.map((curso, index) => (
                <CapulanaCourseCard key={curso.id} curso={curso} index={index} onCourseClick={handleCourseClick} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-3 border-orange-400 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 font-bold transform hover:scale-105 transition-all duration-300"
              >
                Ver Todas as Artes Tradicionais
                <TrendingUp className="w-5 h-5 ml-2" />
                <span className="ml-2">🇲🇿</span>
              </Button>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS MOÇAMBICANOS */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-gray-800 dark:text-white flex items-center justify-center gap-4">
                <span className="text-4xl animate-pulse">🗣️</span>
                <span>O que as Nossas Artesãs Dizem</span>
                <span className="text-4xl animate-pulse">💕</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Histórias reais de transformação através das nossas tradições ancestrais
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {depoimentosMoz.map((depoimento, index) => (
                <MozTestimonialCard key={depoimento.id} depoimento={depoimento} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* PRICING MOÇAMBICANO */}
        <section
          id="premium"
          className="py-12 lg:py-20 bg-gradient-to-r from-orange-50 via-red-50 to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-gray-800 dark:text-white flex items-center justify-center gap-4">
                <span className="text-4xl animate-spin">💎</span>
                <span>Escolhe o Teu Plano</span>
                <span className="text-4xl animate-spin">👑</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Começa grátis ou acelera o teu aprendizado com os nossos planos premium
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                <span>💳 Pagamentos via M-Pesa</span>
                <span>•</span>
                <span>🏦 Transferência Bancária</span>
                <span>•</span>
                <span>💰 Dinheiro Mobile</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {planosMoz.map((plano) => (
                <MozPricingCard key={plano.nome} plano={plano} onSelect={handlePlanSelect} />
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO PARA FORMADORES MOÇAMBICANOS */}
        <section id="formadores" className="py-12 lg:py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-800 dark:text-white flex items-center justify-center gap-4">
                <span className="text-4xl animate-bounce">👩‍🏫</span>
                <span>Ensina na Plataforma da Mama Kátia</span>
                <span className="text-4xl animate-bounce">🇲🇿</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                Partilha o teu conhecimento ancestral e ganha dinheiro preservando a nossa cultura moçambicana!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl border border-orange-200 dark:border-gray-600">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 via-red-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl animate-pulse">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Seja Reconhecida</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Constrói a tua marca pessoal e sê reconhecida como mestra das tradições moçambicanas
                  </p>
                </div>

                <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl border border-orange-200 dark:border-gray-600">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 via-red-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl animate-pulse">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Renda Extra</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Ganha até 70% de comissão em cada venda dos teus cursos tradicionais
                  </p>
                </div>

                <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl border border-orange-200 dark:border-gray-600">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 via-red-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl animate-pulse">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Comunidade</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Faz parte de uma comunidade de mestras apaixonadas pela cultura moçambicana
                  </p>
                </div>
              </div>

              <Card className="max-w-3xl mx-auto border-2 border-orange-300 dark:border-gray-600 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
                <CardHeader>
                  <CardTitle className="text-2xl lg:text-3xl text-orange-600 flex items-center justify-center gap-3">
                    <span className="text-3xl">✋</span>
                    <span>Quero Ensinar na Plataforma!</span>
                    <span className="text-3xl">🇲🇿</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="O teu melhor email"
                    value={emailFormador}
                    onChange={(e) => setEmailFormador(e.target.value)}
                    className="border-2 border-orange-300 focus:border-orange-500 text-lg py-6"
                  />
                  <Textarea
                    placeholder="Conta um pouco sobre a tua experiência com artes tradicionais moçambicanas e que tipo de curso gostarias de criar..."
                    value={mensagemFormador}
                    onChange={(e) => setMensagemFormador(e.target.value)}
                    className="border-2 border-orange-300 focus:border-orange-500 min-h-[120px] text-lg"
                  />
                  <Button
                    onClick={inscreverFormador}
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-green-500 hover:from-orange-600 hover:via-red-600 hover:to-green-600 text-white font-bold text-lg py-6 transform hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Quero Ser Mestra Tradicional!
                    <span className="ml-3 text-xl">🌟</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <MozFooter />
      </div>
    </div>
  )
}
