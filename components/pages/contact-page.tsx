"use client"

import type React from "react"
import { useState } from "react"
import { Send, Bot, Zap, Clock, Shield, MessageCircle, Sparkles } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, message })
    setSubmitted(true)
    setName("")
    setEmail("")
    setMessage("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            Kátia AI - Sistema Inteligente
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Fale com a Kátia AI
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sua assistente virtual de costura está sempre disponível! Envie sua mensagem e receba uma resposta
            personalizada. ✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Informações do Sistema AI */}
          <div
            ref={infoRef}
            className={`transform transition-all duration-700 ${
              infoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-pink-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Kátia AI</h2>
                  <p className="text-pink-600 dark:text-pink-400 font-medium">Sistema Inteligente de Ensino</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Disponível 24/7</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Sistema sempre ativo, sem horários de funcionamento. Resposta automática e inteligente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Resposta Instantânea</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Processamento em tempo real com inteligência artificial avançada.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">100% Seguro</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Dados protegidos com criptografia avançada e sistema anti-hacker.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Personalizado</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Respostas adaptadas ao seu nível e necessidades específicas de costura.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg border border-pink-200 dark:border-pink-800">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <span className="font-medium text-gray-900 dark:text-white">Tipos de Ajuda</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Dúvidas Técnicas
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Suporte Cursos
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Sugestões
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Problemas Técnicos
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div
            ref={formRef}
            className={`transform transition-all duration-700 ${
              formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-pink-100 dark:border-gray-700">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                    <Bot className="w-8 h-8 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Mensagem Recebida! ✨</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A Kátia AI processou sua mensagem e enviará uma resposta personalizada em breve.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-pink-600 dark:text-pink-400">
                    <Zap className="w-4 h-4" />
                    <span>Processamento em andamento...</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Envie sua Mensagem</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      A Kátia AI analisará sua mensagem e fornecerá uma resposta detalhada.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Seu Nome
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Como você gostaria de ser chamada?"
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="seu.email@exemplo.com"
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Sua Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder="Descreva sua dúvida, sugestão ou problema. A Kátia AI está aqui para ajudar! ✨"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:text-white resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar para Kátia AI
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
                      💡 <strong>Dica:</strong> Seja específica em sua pergunta para receber uma resposta mais precisa
                      da Kátia AI!
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
