"use client"

import type React from "react"

import { useState, useEffect } from "react"
import ProfessionalHeader from "../layout/professional-header"
import ProfessionalFooter from "../layout/professional-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Target,
  BookOpen,
  Star,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Bot,
  Zap,
  Clock,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { FadeInSection } from "@/components/ui/fade-in-section"
import { motion } from "framer-motion"

interface Usuario {
  nome: string
  tipo: "visitante" | "aluno" | "formador"
  avatar?: string
  premium?: boolean
}

export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  const [user] = useState<Usuario>({
    nome: "Maria Silva",
    tipo: "visitante",
    avatar: "/placeholder.svg?height=32&width=32",
    premium: false,
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Auto-rotate features every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const valores = [
    {
      icon: Bot,
      titulo: "IA Especializada",
      descricao: "Algoritmos avançados que entendem suas necessidades e personalizam o aprendizado.",
    },
    {
      icon: Users,
      titulo: "Comunidade Forte",
      descricao: "Conecte-se com outros aprendizes e compartilhe suas criações e dúvidas.",
    },
    {
      icon: Clock,
      titulo: "Disponível 24/7",
      descricao: "Aprenda no seu ritmo, quando e onde quiser, sem limitações de horário.",
    },
    {
      icon: Sparkles,
      titulo: "Evolução Contínua",
      descricao: "Sistema que aprende e melhora constantemente com base no feedback dos usuários.",
    },
  ]

  const features = [
    {
      title: "Assistência Personalizada",
      description: "A Kátia IA analisa seu estilo de aprendizado e adapta as instruções para maximizar seu progresso.",
      icon: Target,
    },
    {
      title: "Respostas Instantâneas",
      description: "Tire dúvidas a qualquer momento e receba respostas claras e precisas imediatamente.",
      icon: Zap,
    },
    {
      title: "Tutoriais Interativos",
      description: "Aprenda com tutoriais passo a passo que se adaptam ao seu nível de habilidade.",
      icon: BookOpen,
    },
    {
      title: "Feedback em Tempo Real",
      description: "Envie fotos dos seus projetos e receba sugestões de melhoria instantaneamente.",
      icon: Star,
    },
  ]

  const timeline = [
    {
      ano: "2022",
      titulo: "Concepção",
      descricao: "A ideia da Kátia IA nasceu da necessidade de democratizar o ensino de costura.",
    },
    {
      ano: "2023",
      titulo: "Desenvolvimento",
      descricao: "Treinamento do modelo de IA com milhares de técnicas e padrões de costura.",
    },
    {
      ano: "2024",
      titulo: "Lançamento Beta",
      descricao: "Primeiros usuários testam a plataforma e ajudam a refinar o sistema.",
    },
    {
      ano: "2024",
      titulo: "Versão 1.0",
      descricao: "Lançamento oficial com suporte a múltiplos idiomas e técnicas avançadas.",
    },
    {
      ano: "2025",
      titulo: "Expansão",
      descricao: "Adição de novos módulos e integração com ferramentas de design digital.",
    },
    {
      ano: "Futuro",
      titulo: "Visão",
      descricao: "Tornar-se a principal plataforma de aprendizado de costura assistida por IA no mundo.",
    },
  ]

  const estatisticas = [
    { numero: "24/7", label: "Disponibilidade", icon: Clock },
    { numero: "150+", label: "Técnicas Ensinadas", icon: BookOpen },
    { numero: "4.9", label: "Avaliação Média", icon: Star },
    { numero: "98%", label: "Taxa de Resolução", icon: TrendingUp },
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
        <ProfessionalHeader darkMode={darkMode} setDarkMode={setDarkMode} user={user} />

        {/* HERO SECTION */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-pink-500 to-red-500">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="max-w-4xl mx-auto text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Conheça a Kátia IA</h1>
                <p className="text-xl text-pink-100 leading-relaxed">
                  Sua assistente virtual de costura, disponível 24 horas por dia para ajudar em sua jornada criativa
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* SOBRE A KÁTIA IA */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeInSection direction="left">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                      O que é a Kátia IA?
                    </h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      <p>
                        Kátia IA é uma assistente virtual especializada em costura, desenvolvida com tecnologia de ponta
                        para oferecer orientação personalizada, responder dúvidas e ajudar em projetos de costura de
                        todos os níveis.
                      </p>
                      <p>
                        Diferente de tutoriais estáticos, a Kátia IA interage com você, entende suas necessidades
                        específicas e adapta suas instruções para seu nível de habilidade, tornando o aprendizado mais
                        eficiente e agradável.
                      </p>
                      <p>
                        Disponível 24 horas por dia, 7 dias por semana, Kátia está sempre pronta para ajudar quando a
                        inspiração bater ou quando você precisar de assistência com um projeto desafiador.
                      </p>
                    </div>
                    <div className="mt-8">
                      <Link href="/auth/register">
                        <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600">
                          Começar Agora
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </FadeInSection>

                <FadeInSection direction="right" delay={200}>
                  <div className="relative">
                    <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-pink-200 to-red-200 dark:from-pink-900 dark:to-red-900 rounded-2xl blur-3xl opacity-30"></div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-pink-100 dark:border-pink-900">
                      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-pink-100 dark:border-gray-700">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-white">Kátia IA</h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Assistente de Costura</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-pink-50 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none">
                          <p className="text-gray-700 dark:text-gray-200">
                            Olá! Sou a Kátia, sua assistente virtual de costura. Como posso ajudar você hoje?
                          </p>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                          <p className="text-gray-700 dark:text-gray-200">
                            Quero aprender a fazer um vestido simples. Por onde devo começar?
                          </p>
                        </div>

                        <div className="bg-pink-50 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none">
                          <p className="text-gray-700 dark:text-gray-200">
                            Ótima escolha! Para um vestido simples, vamos começar com as medidas. Você já tem um molde
                            ou gostaria de aprender a criar um do zero?
                          </p>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                          <p className="text-gray-700 dark:text-gray-200">Gostaria de aprender a criar do zero.</p>
                        </div>

                        <div className="bg-pink-50 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none">
                          <p className="text-gray-700 dark:text-gray-200">
                            Perfeito! Vou te guiar passo a passo. Primeiro, você vai precisar das seguintes medidas:
                            busto, cintura, quadril e comprimento desejado. Tem uma fita métrica em mãos?
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-pink-100 dark:border-gray-700">
                        <div className="relative">
                          <Input
                            placeholder="Digite sua pergunta sobre costura..."
                            className="pr-20 border-pink-200 focus:border-pink-400"
                          />
                          <Button
                            size="sm"
                            className="absolute right-1 top-1 h-8 bg-gradient-to-r from-pink-500 to-red-500"
                          >
                            Enviar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>

        {/* RECURSOS INTERATIVOS */}
        <section className="py-16 lg:py-20 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                  Recursos Inteligentes
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Descubra como a Kátia IA revoluciona seu aprendizado em costura
                </p>
              </div>
            </FadeInSection>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeInSection direction="left">
                  <div className="bg-gradient-to-br from-pink-100 to-red-100 dark:from-pink-900/30 dark:to-red-900/30 p-8 rounded-2xl">
                    <div className="relative h-[400px] overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg">
                      {features.map((feature, index) => (
                        <motion.div
                          key={feature.title}
                          className="absolute inset-0 p-6 flex flex-col"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: activeFeature === index ? 1 : 0,
                            y: activeFeature === index ? 0 : 20,
                            zIndex: activeFeature === index ? 10 : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                          <div className="flex-grow"></div>
                          <div className="flex justify-center space-x-2 mt-8">
                            {features.map((_, i) => (
                              <button
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  activeFeature === i
                                    ? "bg-pink-500 w-8 transition-all duration-300"
                                    : "bg-gray-300 dark:bg-gray-600"
                                }`}
                                onClick={() => setActiveFeature(i)}
                              ></button>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeInSection>

                <FadeInSection direction="right" delay={200}>
                  <div className="space-y-8">
                    {valores.map((valor, index) => (
                      <motion.div
                        key={valor.titulo}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="flex gap-4"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <valor.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{valor.titulo}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{valor.descricao}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Nossa Evolução</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  A jornada da Kátia IA desde sua concepção até o futuro
                </p>
              </div>
            </FadeInSection>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Linha do tempo */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 to-red-500 rounded-full"></div>

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <FadeInSection key={item.ano} delay={index * 100}>
                      <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                        <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                          <Card className="hover:shadow-lg transition-all duration-300 border border-pink-200 dark:border-gray-700 hover:border-pink-300">
                            <CardHeader>
                              <div
                                className={`flex items-center gap-2 ${
                                  index % 2 === 0 ? "justify-end" : "justify-start"
                                }`}
                              >
                                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                  {item.ano === "Futuro" ? "∞" : item.ano.slice(-2)}
                                </div>
                                <CardTitle className="text-lg text-gray-800 dark:text-white">{item.titulo}</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {item.descricao}
                              </p>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Ponto na linha do tempo */}
                        <div className="relative z-10">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                            className="w-4 h-4 bg-white border-4 border-pink-500 rounded-full"
                          ></motion.div>
                        </div>

                        <div className="w-1/2"></div>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ESTATÍSTICAS */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-pink-500 to-red-500">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Kátia IA em Números</h2>
                <p className="text-xl text-pink-100">O impacto da nossa assistente virtual</p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {estatisticas.map((stat, index) => (
                <FadeInSection key={stat.label} delay={index * 100}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <stat.icon className="w-8 h-8 text-white mr-2" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.numero}</div>
                    <div className="text-pink-100 font-medium">{stat.label}</div>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                  Comece sua Jornada com a Kátia IA
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Tenha uma assistente virtual de costura disponível 24 horas por dia, pronta para ajudar em seus
                  projetos e responder todas as suas dúvidas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 font-semibold px-8 py-6 text-lg"
                    asChild
                  >
                    <Link href="/auth/register">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Criar Conta Gratuita
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-pink-400 text-pink-600 hover:bg-pink-50 font-semibold px-8 py-6 text-lg"
                    asChild
                  >
                    <Link href="/courses">Ver Tutoriais</Link>
                  </Button>
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

// Componente Input para o exemplo de chat
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 ${
        props.className || ""
      }`}
    />
  )
}
