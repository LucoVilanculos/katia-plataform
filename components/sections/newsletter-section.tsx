"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  const [emailNewsletter, setEmailNewsletter] = useState("")

  const inscreverNewsletter = () => {
    if (emailNewsletter) {
      alert(`Obrigada ${emailNewsletter}! Você receberá nossas novidades em breve! 💕`)
      setEmailNewsletter("")
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Fique por Dentro das Novidades! 📧</h2>
        <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
          Receba dicas exclusivas, novos cursos e promoções especiais direto no seu email
        </p>

        <div className="max-w-md mx-auto flex gap-3">
          <Input
            placeholder="Seu melhor email"
            value={emailNewsletter}
            onChange={(e) => setEmailNewsletter(e.target.value)}
            className="bg-white/90 border-0 text-gray-800 placeholder:text-gray-500"
          />
          <Button onClick={inscreverNewsletter} className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-6">
            Inscrever
          </Button>
        </div>
      </div>
    </section>
  )
}
