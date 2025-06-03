"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Scissors, Heart, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ProfessionalFooter() {
  const [emailNewsletter, setEmailNewsletter] = useState("")

  const inscreverNewsletter = () => {
    if (emailNewsletter) {
      alert(`Obrigada ${emailNewsletter}! Você receberá nossas novidades!`)
      setEmailNewsletter("")
    }
  }

  const linksCursos = [
    { nome: "Costura Básica", href: "/courses" },
    { nome: "Bordados Artesanais", href: "/courses" },
    { nome: "Design de Moda", href: "/courses" },
    { nome: "Patchwork", href: "/courses" },
    { nome: "Roupas Infantis", href: "/courses" },
    { nome: "Alfaiataria", href: "/courses" },
  ]

  const linksSuporte = [
    { nome: "Central de Ajuda", href: "/help" },
    { nome: "Como Funciona", href: "/how-it-works" },
    { nome: "Contato", href: "/contact" },
    { nome: "Comunidade", href: "/community" },
    { nome: "Blog", href: "/blog" },
    { nome: "FAQ", href: "/faq" },
  ]

  const linksLegal = [
    { nome: "Termos de Uso", href: "/terms" },
    { nome: "Política de Privacidade", href: "/privacy" },
    { nome: "Política de Cookies", href: "/cookies" },
    { nome: "Política de Reembolso", href: "/refund" },
  ]

  const redesSociais = [
    { nome: "Instagram", icon: Instagram, href: "#", cor: "hover:text-pink-500" },
    { nome: "YouTube", icon: Youtube, href: "#", cor: "hover:text-red-500" },
    { nome: "Facebook", icon: Facebook, href: "#", cor: "hover:text-blue-500" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Fique por Dentro das Novidades!
            </h2>
            <p className="text-lg md:text-xl text-orange-100 mb-8">
              Receba dicas exclusivas, novos cursos e promoções especiais direto no seu email
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Seu melhor email"
                value={emailNewsletter}
                onChange={(e) => setEmailNewsletter(e.target.value)}
                className="bg-white/90 border-0 text-gray-800 placeholder:text-gray-500 flex-1"
              />
              <Button
                onClick={inscreverNewsletter}
                className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-6 whitespace-nowrap transform hover:scale-105 transition-all duration-300"
              >
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 xl:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Scissors className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Kátia Costura
                  </h3>
                  <p className="text-orange-300 text-sm">Tradição que Veste o Futuro</p>
                </div>
              </Link>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Transformando vidas através da arte da costura há mais de 6 anos. Junte-se à nossa comunidade de mais de
                2.500 alunas apaixonadas por criar!
              </p>

              {/* Contato */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">contato@katiacostura.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">São Paulo, Brasil</span>
                </div>
              </div>

              {/* Redes Sociais */}
              <div>
                <h4 className="font-semibold mb-4 text-white">Siga-nos nas Redes</h4>
                <div className="flex gap-4">
                  {redesSociais.map((rede) => (
                    <a
                      key={rede.nome}
                      href={rede.href}
                      className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 transform ${rede.cor} shadow-lg hover:shadow-xl`}
                      aria-label={rede.nome}
                    >
                      <rede.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Cursos */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Cursos Populares</h4>
              <ul className="space-y-3">
                {linksCursos.map((link) => (
                  <li key={link.nome}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm block py-1 transform hover:translate-x-1 duration-300"
                    >
                      {link.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Suporte</h4>
              <ul className="space-y-3">
                {linksSuporte.map((link) => (
                  <li key={link.nome}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm block py-1 transform hover:translate-x-1 duration-300"
                    >
                      {link.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Legal</h4>
              <ul className="space-y-3 mb-6">
                {linksLegal.map((link) => (
                  <li key={link.nome}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm block py-1 transform hover:translate-x-1 duration-300"
                    >
                      {link.nome}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Certificações */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span>Site Seguro SSL</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                  <span>Pagamentos Seguros</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">&copy; 2024 Kátia Costura. Todos os direitos reservados.</p>
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                Feito com <Heart className="w-3 h-3 inline text-red-500 animate-pulse" /> para quem ama costurar.
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span>Versão 2.1.0</span>
              <span>•</span>
              <span>Última atualização: Dezembro 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
