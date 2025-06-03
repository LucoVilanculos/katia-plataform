"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Award, TrendingUp, Users, MessageCircle } from "lucide-react"

export default function InstructorSection() {
  const [emailFormador, setEmailFormador] = useState("")
  const [mensagemFormador, setMensagemFormador] = useState("")

  const inscreverFormador = () => {
    if (emailFormador && mensagemFormador) {
      alert(`Obrigada ${emailFormador}! Entraremos em contato em breve para discutir sua parceria! ✨`)
      setEmailFormador("")
      setMensagemFormador("")
    }
  }

  return (
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
              <p className="text-gray-600 dark:text-gray-300">Faça parte de uma comunidade de formadoras apaixonadas</p>
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
  )
}
