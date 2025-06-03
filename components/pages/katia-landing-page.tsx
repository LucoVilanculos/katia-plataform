"use client"

import { useState, useEffect } from "react"
import Header from "../layout/header"
import Footer from "../layout/footer"
import CourseCard from "../ui/course-card"
import TestimonialCard from "../ui/testimonial-card"
import PricingCard from "../ui/pricing-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Sparkles, Play, TrendingUp, Award, Users, MessageCircle, Crown, BookOpen } from "lucide-react"

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
  const [emailFormador, setEmailFormador] = useState("")
  const [mensagemFormador, setMensagemFormador] = useState("")
  const [scrollY, setScrollY] = useState(0)

  // Simulação de usuário - você pode trocar aqui para testar diferentes tipos
  const [user] = useState<Usuario>({
    nome: "Maria Silva",
    tipo: "aluno", // Mude para "visitante", "aluno" ou "formador" para testar
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

  // Dados dos planos
  const planos = [
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

  const inscreverFormador = () => {
    if (emailFormador && mensagemFormador) {
      alert(`Obrigada ${emailFormador}! Entraremos em contato em breve para discutir sua parceria! ✨`)
      setEmailFormador("")
      setMensagemFormador("")
    }
  }

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
        {/* HEADER */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} />

        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="animate-fade-in-up max-w-5xl mx-auto">
              <div className="flex justify-center mb-6 lg:mb-8">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
                    <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 text-yellow-400 animate-bounce" />
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent leading-tight">
                Aprenda a Costurar
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">com a Kátia! ✨</span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed">
                Da costura à mão até técnicas avançadas de máquina.
                <br />
                <strong className="text-pink-600">Transforme sua paixão em profissão!</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 lg:mb-12">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Começar Agora - GRÁTIS
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-pink-300 text-pink-600 hover:bg-pink-50 dark:border-pink-400 dark:text-pink-400 dark:hover:bg-pink-900/20 text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Ver Planos Premium
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-3xl mx-auto">
                <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <div className="text-2xl lg:text-3xl font-bold text-pink-600">1.2k+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">Alunas Felizes</div>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  <div className="text-2xl lg:text-3xl font-bold text-pink-600">50+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">Cursos Disponíveis</div>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                  <div className="text-2xl lg:text-3xl font-bold text-pink-600">4.9⭐</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">Avaliação Média</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CURSOS POPULARES */}
        <section id="cursos" className="py-12 lg:py-20 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                Cursos Mais Amados 💕
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Escolhidos especialmente pela Kátia para você começar sua jornada na costura
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cursosPopulares.map((curso, index) => (
                <CourseCard key={curso.id} curso={curso} index={index} onCourseClick={handleCourseClick} />
              ))}
            </div>

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

        {/* DEPOIMENTOS */}
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

        {/* PRICING PREMIUM */}
        <section
          id="premium"
          className="py-12 lg:py-20 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-900"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                Escolha seu Plano 💎
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comece grátis ou acelere seu aprendizado com nossos planos premium
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {planos.map((plano) => (
                <PricingCard key={plano.nome} plano={plano} onSelect={handlePlanSelect} />
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO PARA FORMADORES */}
        <section id="formadores" className="py-12 lg:py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                Ensine na Plataforma da Kátia 👩‍🏫
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-12">
                Compartilhe seu conhecimento e ganhe dinheiro ensinando costura!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Seja Reconhecida</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Construa sua marca pessoal e seja reconhecida como especialista
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Renda Extra</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ganhe até 70% de comissão em cada venda dos seus cursos
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Comunidade</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Faça parte de uma comunidade de formadoras apaixonadas
                  </p>
                </div>
              </div>

              <Card className="max-w-2xl mx-auto border-pink-200 dark:border-gray-600">
                <CardHeader>
                  <CardTitle className="text-2xl text-pink-600">Quero Ensinar na Plataforma! ✋</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Seu melhor email"
                    value={emailFormador}
                    onChange={(e) => setEmailFormador(e.target.value)}
                    className="border-pink-200 focus:border-pink-400"
                  />
                  <Textarea
                    placeholder="Conte um pouco sobre sua experiência com costura e que tipo de curso gostaria de criar..."
                    value={mensagemFormador}
                    onChange={(e) => setMensagemFormador(e.target.value)}
                    className="border-pink-200 focus:border-pink-400 min-h-[100px]"
                  />
                  <Button
                    onClick={inscreverFormador}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Quero Ser Formadora!
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  )
}
