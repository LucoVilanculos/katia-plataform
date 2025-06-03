"use client"

import { useState } from "react"
import ProfessionalHeader from "@/components/layout/professional-header"
import ProfessionalFooter from "@/components/layout/professional-footer"
import { Button } from "@/components/ui/button"
import { Carousel } from "@/components/ui/carousel"
import { FadeInSection } from "@/components/ui/fade-in-section"
import { Badge } from "@/components/ui/badge"
import ProfessionalCourseCard from "@/components/ui/professional-course-card"
import { ChevronRight, Star, Users, BookOpen, Video, Award, Heart, ArrowRight } from "lucide-react"

// Dados de exemplo
const featuredCourses = [
  {
    id: 1,
    titulo: "Costura Básica para Iniciantes",
    instrutor: "Kátia Moçambique",
    nivel: "Iniciante" as const,
    duracao: "6 horas",
    rating: 4.9,
    alunos: 1245,
    preco: 0,
    thumbnail: "costura-basica.jpg",
    premium: false,
    descricao: "Aprenda os fundamentos da costura à mão e à máquina neste curso completo para iniciantes.",
    categoria: "Fundamentos",
  },
  {
    id: 2,
    titulo: "Capulanas Modernas: Técnicas Avançadas",
    instrutor: "Kátia Moçambique",
    nivel: "Avançado" as const,
    duracao: "12 horas",
    rating: 4.8,
    alunos: 856,
    preco: 149.99,
    thumbnail: "capulanas.jpg",
    premium: true,
    descricao: "Domine técnicas avançadas para criar peças modernas com capulanas tradicionais.",
    tradicional: true,
    regiao: "Maputo",
    categoria: "Capulanas",
  },
  {
    id: 3,
    titulo: "Vestidos de Festa: Do Básico ao Avançado",
    instrutor: "Maria Silva",
    nivel: "Intermediário" as const,
    duracao: "10 horas",
    rating: 4.7,
    alunos: 932,
    preco: 129.99,
    thumbnail: "vestidos.jpg",
    premium: false,
    descricao: "Aprenda a criar vestidos elegantes para ocasiões especiais com técnicas profissionais.",
    categoria: "Vestidos",
  },
  {
    id: 4,
    titulo: "Técnicas de Bordado Tradicional",
    instrutor: "Ana Luísa",
    nivel: "Intermediário" as const,
    duracao: "8 horas",
    rating: 4.9,
    alunos: 745,
    preco: 99.99,
    thumbnail: "bordado.jpg",
    premium: true,
    descricao: "Explore as técnicas tradicionais de bordado e aplique-as em peças contemporâneas.",
    tradicional: true,
    regiao: "Nampula",
    categoria: "Bordado",
  },
]

const testimonials = [
  {
    id: 1,
    nome: "Joana Machava",
    foto: "joana.jpg",
    texto:
      "Os cursos da Kátia transformaram minha vida! Agora tenho meu próprio negócio de costura e estou muito feliz com os resultados.",
    curso: "Costura Básica para Iniciantes",
    rating: 5,
  },
  {
    id: 2,
    nome: "Carlos Tembe",
    foto: "carlos.jpg",
    texto:
      "Nunca pensei que poderia aprender a costurar online, mas a metodologia da Kátia é incrível. Recomendo a todos!",
    curso: "Capulanas Modernas",
    rating: 5,
  },
  {
    id: 3,
    nome: "Fátima Nhamposse",
    foto: "fatima.jpg",
    texto:
      "A qualidade dos vídeos e o suporte da comunidade fizeram toda a diferença no meu aprendizado. Obrigada, Kátia!",
    curso: "Vestidos de Festa",
    rating: 4,
  },
]

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=1200&h=600&fit=crop&auto=format&q=80",
    alt: "Máquina de costura profissional",
    title: "Domine a Arte da Costura",
    subtitle: "Aprenda com os melhores profissionais do mercado",
  },
  {
    url: "https://images.unsplash.com/photo-1528401635478-4f51cfc89c9d?w=1200&h=600&fit=crop&auto=format&q=80",
    alt: "Tecidos coloridos de capulana",
    title: "Capulanas Tradicionais",
    subtitle: "Descubra como transformar tecidos tradicionais em peças modernas",
  },
  {
    url: "https://images.unsplash.com/photo-1584661156681-540e80a161d3?w=1200&h=600&fit=crop&auto=format&q=80",
    alt: "Costura à mão detalhada",
    title: "Técnicas Artesanais",
    subtitle: "Aprenda métodos tradicionais que valorizam suas criações",
  },
  {
    url: "https://images.unsplash.com/photo-1594913415728-b26fef7377f6?w=1200&h=600&fit=crop&auto=format&q=80",
    alt: "Vestido elegante de capulana",
    title: "Moda Contemporânea",
    subtitle: "Crie peças únicas que combinam tradição e modernidade",
  },
]

export default function PublicHomePage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ProfessionalHeader darkMode={darkMode} setDarkMode={setDarkMode} />

        <main>
          {/* Hero Carousel */}
          <section className="group relative">
            <Carousel autoPlay={true} interval={5000} className="w-full h-[60vh] md:h-[70vh]">
              {carouselImages.map((image, index) => (
                <div key={index} className="relative w-full h-full">
                  <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                    <div className="container mx-auto px-4">
                      <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
                          {image.title}
                        </h1>
                        <p
                          className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up"
                          style={{ animationDelay: "0.2s" }}
                        >
                          {image.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                            asChild
                          >
                            <a href="/courses">
                              Explorar Cursos
                              <ChevronRight className="ml-2 h-5 w-5" />
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                            asChild
                          >
                            <a href="/auth/register">Começar Grátis</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </section>

          {/* Features Section */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
              <FadeInSection>
                <div className="text-center mb-16">
                  <Badge className="mb-4 px-3 py-1 bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 rounded-full">
                    Por que escolher a Kátia Costura
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Aprenda costura com quem entende do assunto
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Nossa plataforma oferece cursos de alta qualidade, com instrutores experientes e conteúdo prático
                    para todos os níveis.
                  </p>
                </div>
              </FadeInSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FadeInSection delay={100}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 dark:border-gray-700 text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cursos Completos</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Mais de 50 cursos detalhados, do básico ao avançado, para você aprender no seu ritmo.
                    </p>
                  </div>
                </FadeInSection>

                <FadeInSection delay={200}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 dark:border-gray-700 text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Vídeos HD</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Aulas em alta definição com múltiplos ângulos para você não perder nenhum detalhe.
                    </p>
                  </div>
                </FadeInSection>

                <FadeInSection delay={300}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 dark:border-gray-700 text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Comunidade Ativa</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Compartilhe suas criações, tire dúvidas e conecte-se com outros estudantes.
                    </p>
                  </div>
                </FadeInSection>

                <FadeInSection delay={400}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 dark:border-gray-700 text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Certificados</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Receba certificados reconhecidos ao concluir nossos cursos e módulos.
                    </p>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </section>

          {/* Featured Courses */}
          <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <FadeInSection>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                  <div>
                    <Badge className="mb-4 px-3 py-1 bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 rounded-full">
                      Cursos em Destaque
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      Comece sua jornada na costura
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 max-w-2xl">
                      Cursos selecionados para você começar ou aprimorar suas habilidades em costura.
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 mt-4 md:mt-0"
                    asChild
                  >
                    <a href="/courses" className="flex items-center">
                      Ver todos os cursos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </FadeInSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredCourses.map((curso, index) => (
                  <FadeInSection key={curso.id} delay={index * 100}>
                    <ProfessionalCourseCard curso={curso} index={index} />
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-pink-50 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
              <FadeInSection>
                <div className="text-center mb-16">
                  <Badge className="mb-4 px-3 py-1 bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 rounded-full">
                    Depoimentos
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    O que nossos alunos dizem
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Histórias reais de pessoas que transformaram suas vidas através da costura.
                  </p>
                </div>
              </FadeInSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <FadeInSection key={testimonial.id} delay={index * 100}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 dark:border-gray-700 relative">
                      <div className="absolute -top-5 -right-5 w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src={`/placeholder.svg?height=60&width=60&text=${testimonial.nome.charAt(0)}`}
                          alt={testimonial.nome}
                          className="w-12 h-12 rounded-full object-cover border-2 border-pink-300"
                        />
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.nome}</h4>
                          <p className="text-sm text-pink-600 dark:text-pink-400">{testimonial.curso}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.texto}"</p>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-pink-600 to-red-600 dark:from-pink-900 dark:to-red-900 text-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <FadeInSection className="lg:w-1/2 mb-8 lg:mb-0">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronta para começar sua jornada na costura?</h2>
                  <p className="text-lg text-white/90 max-w-xl">
                    Junte-se a milhares de alunos e transforme sua paixão por costura em habilidade profissional. Comece
                    hoje mesmo!
                  </p>
                </FadeInSection>
                <FadeInSection className="lg:w-1/3" delay={200}>
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                    <h3 className="text-2xl font-bold mb-6 text-center">Comece Gratuitamente</h3>
                    <div className="space-y-4">
                      <Button
                        className="w-full bg-white text-pink-600 hover:bg-gray-100 font-semibold text-lg py-6"
                        asChild
                      >
                        <a href="/auth/register">Criar Conta</a>
                      </Button>
                      <div className="text-center text-sm">
                        Já tem uma conta?{" "}
                        <a href="/auth/login" className="text-white font-medium underline">
                          Entrar
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </section>
        </main>

        <ProfessionalFooter />
      </div>
    </div>
  )
}
