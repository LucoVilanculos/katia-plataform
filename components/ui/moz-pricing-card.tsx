"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Crown, Sparkles, Star, Heart } from "lucide-react"

interface MozPricingCardProps {
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
    precoUSD?: number
  }
  onSelect?: (plano: string) => void
}

export default function MozPricingCard({ plano, onSelect }: MozPricingCardProps) {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-500 hover:scale-105 transform ${
        plano.popular
          ? "border-3 border-orange-400 shadow-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
          : "border-2 border-orange-200 dark:border-gray-700 hover:shadow-xl bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-900"
      }`}
      style={{
        boxShadow: plano.popular ? "0 0 30px rgba(249, 115, 22, 0.3)" : "0 0 15px rgba(249, 115, 22, 0.1)",
      }}
    >
      {/* Padrão de Capulana no Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fillOpacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Badge Popular */}
      {plano.popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 via-red-500 to-green-500 text-white px-4 py-1 text-sm font-bold flex items-center gap-1 animate-pulse">
          <Star className="w-3 h-3" />
          Mais Popular
          <span className="text-lg">🇲🇿</span>
        </div>
      )}

      {/* Efeito de Brilho para Premium */}
      {plano.premium && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/20 to-transparent animate-pulse" />
      )}

      <CardHeader className="text-center relative z-10">
        <div className="flex justify-center mb-4">
          <div
            className={`w-16 h-16 ${plano.cor} rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300 ${plano.popular ? "animate-bounce" : ""}`}
          >
            {plano.icone}
          </div>
        </div>

        <CardTitle
          className={`text-2xl ${plano.premium ? "text-yellow-600" : plano.popular ? "text-orange-600" : "text-gray-800 dark:text-white"} flex items-center justify-center gap-2`}
        >
          {plano.nome}
          {plano.popular && <Heart className="w-5 h-5 text-red-500 animate-pulse" />}
        </CardTitle>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{plano.descricao}</p>

        <div className="text-4xl font-bold">
          {plano.preco === 0 ? (
            <span className="text-green-600 flex items-center justify-center gap-2">
              GRÁTIS
              <span className="text-2xl">🎁</span>
            </span>
          ) : (
            <div className="flex flex-col items-center">
              <span
                className={plano.premium ? "text-yellow-600" : plano.popular ? "text-orange-600" : "text-orange-600"}
              >
                {plano.preco.toFixed(0)} MT
                <span className="text-lg font-normal text-gray-500">/{plano.periodo}</span>
              </span>
              {plano.precoUSD && <span className="text-sm text-gray-500 mt-1">(~${plano.precoUSD} USD)</span>}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        {/* Lista de Recursos */}
        <ul className="space-y-3 mb-6">
          {plano.recursos.map((recurso, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{recurso}</span>
            </li>
          ))}
        </ul>

        {/* Botão de Ação */}
        <Button
          onClick={() => onSelect?.(plano.nome)}
          className={`w-full transition-all duration-300 font-bold text-lg py-6 ${
            plano.premium
              ? "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-black shadow-xl"
              : plano.popular
                ? "bg-gradient-to-r from-orange-500 via-red-500 to-green-500 hover:from-orange-600 hover:via-red-600 hover:to-green-600 text-white shadow-xl"
                : "bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white"
          } transform hover:scale-105`}
          size="lg"
        >
          {plano.premium && <Crown className="w-4 h-4 mr-2" />}
          {plano.preco === 0 ? "Começar Grátis 🚀" : "Assinar Agora 💳"}
          {plano.premium && <Sparkles className="w-4 h-4 ml-2" />}
          {plano.popular && !plano.premium && <span className="ml-2">🇲🇿</span>}
        </Button>

        {/* Garantia */}
        {plano.preco > 0 && (
          <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3 flex items-center justify-center gap-1">
            <span>💰</span>
            <span>Garantia de 7 dias ou teu dinheiro de volta</span>
            <span>🤝</span>
          </p>
        )}

        {/* Bandeira de Moçambique */}
        <div className="absolute bottom-2 right-2 text-2xl opacity-20">🇲🇿</div>
      </CardContent>
    </Card>
  )
}
