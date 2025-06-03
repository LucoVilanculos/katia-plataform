"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Crown, Sparkles } from "lucide-react"

interface PricingCardProps {
  plano: {
    nome: string
    preco: number
    periodo: string
    descricao: string
    recursos: string[]
    popular?: boolean
    premium?: boolean
    cor: string
    icone: React.ReactNode
  }
  onSelect?: (plano: string) => void
}

export default function PricingCard({ plano, onSelect }: PricingCardProps) {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
        plano.popular
          ? "border-2 border-pink-300 shadow-lg"
          : "border border-gray-200 dark:border-gray-700 hover:shadow-lg"
      }`}
    >
      {/* Badge Popular */}
      {plano.popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-pink-500 to-rose-500 text-white px-4 py-1 text-sm font-medium">
          Mais Popular ⭐
        </div>
      )}

      {/* Efeito de Brilho para Premium */}
      {plano.premium && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/20 to-transparent animate-pulse" />
      )}

      <CardHeader className="text-center relative z-10">
        <div className="flex justify-center mb-4">
          <div className={`w-16 h-16 ${plano.cor} rounded-full flex items-center justify-center shadow-lg`}>
            {plano.icone}
          </div>
        </div>

        <CardTitle className={`text-2xl ${plano.premium ? "text-yellow-600" : "text-gray-800 dark:text-white"}`}>
          {plano.nome}
        </CardTitle>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{plano.descricao}</p>

        <div className="text-4xl font-bold">
          {plano.preco === 0 ? (
            <span className="text-green-600">GRÁTIS</span>
          ) : (
            <span className={plano.premium ? "text-yellow-600" : "text-pink-600"}>
              R$ {plano.preco.toFixed(2)}
              <span className="text-lg font-normal text-gray-500">/{plano.periodo}</span>
            </span>
          )}
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        {/* Lista de Recursos */}
        <ul className="space-y-3 mb-6">
          {plano.recursos.map((recurso, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{recurso}</span>
            </li>
          ))}
        </ul>

        {/* Botão de Ação */}
        <Button
          onClick={() => onSelect?.(plano.nome)}
          className={`w-full transition-all duration-300 ${
            plano.premium
              ? "bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-semibold"
              : plano.popular
                ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                : ""
          }`}
          variant={plano.popular || plano.premium ? "default" : "outline"}
          size="lg"
        >
          {plano.premium && <Crown className="w-4 h-4 mr-2" />}
          {plano.preco === 0 ? "Começar Grátis" : "Assinar Agora"}
          {plano.premium && <Sparkles className="w-4 h-4 ml-2" />}
        </Button>

        {/* Garantia */}
        {plano.preco > 0 && (
          <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
            💰 Garantia de 7 dias ou seu dinheiro de volta
          </p>
        )}
      </CardContent>
    </Card>
  )
}
