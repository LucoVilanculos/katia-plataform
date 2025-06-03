"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Scissors, Heart, Instagram, Youtube, Facebook, Mail, Phone, MapPin, Star } from "lucide-react"
import { useState } from "react"

export default function MozFooter() {
  const [emailNewsletter, setEmailNewsletter] = useState("")

  const inscreverNewsletter = () => {
    if (emailNewsletter) {
      alert(`Kanimambo ${emailNewsletter}! Receberás as nossas novidades! 🇲🇿💕`)
      setEmailNewsletter("")
    }
  }

  const linksCursos = [
    { nome: "Costura de Capulanas", href: "#", emoji: "🌺" },
    { nome: "Bordados Tradicionais", href: "#", emoji: "🧵" },
    { nome: "Roupas Moçambicanas", href: "#", emoji: "👗" },
    { nome: "Arte Makonde", href: "#", emoji: "🎨" },
    { nome: "Cestaria", href: "#", emoji: "🧺" },
    { nome: "Joalheria Africana", href: "#", emoji: "💎" },
  ]

  const linksSuporte = [
    { nome: "Centro de Ajuda", href: "#", emoji: "🆘" },
    { nome: "Como Funciona", href: "#", emoji: "❓" },
    { nome: "Contacto", href: "#", emoji: "📞" },
    { nome: "Comunidade", href: "#", emoji: "🤝" },
    { nome: "Blog", href: "#", emoji: "📝" },
    { nome: "FAQ", href: "#", emoji: "💬" },
  ]

  const linksLegal = [
    { nome: "Termos de Uso", href: "#" },
    { nome: "Política de Privacidade", href: "#" },
    { nome: "Política de Cookies", href: "#" },
    { nome: "Política de Reembolso", href: "#" },
  ]

  const redesSociais = [
    { nome: "Instagram", icon: Instagram, href: "#", cor: "hover:text-pink-500" },
    { nome: "YouTube", icon: Youtube, href: "#", cor: "hover:text-red-500" },
    { nome: "Facebook", icon: Facebook, href: "#", cor: "hover:text-blue-500" },
  ]

  const provincias = [
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
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
      {/* Padrão de Capulana no Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f97316' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='0' cy='30' r='4'/%3E%3Ccircle cx='60' cy='30' r='4'/%3E%3Ccircle cx='30' cy='0' r='4'/%3E%3Ccircle cx='30' cy='60' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Newsletter Section */}
      <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-green-500 py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 text-2xl lg:text-3xl">
                <span className="animate-bounce">🇲🇿</span>
                <span className="animate-pulse">💌</span>
                <span className="animate-bounce">🌺</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Fica por Dentro das Novidades da Nossa Tradição!
            </h2>
            <p className="text-lg md:text-xl text-orange-100 mb-8">
              Recebe dicas exclusivas, novos cursos e promoções especiais directamente no teu email
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="O teu melhor email"
                value={emailNewsletter}
                onChange={(e) => setEmailNewsletter(e.target.value)}
                className="bg-white/90 border-0 text-gray-800 placeholder:text-gray-500 flex-1"
              />
              <Button
                onClick={inscreverNewsletter}
                className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-6 whitespace-nowrap transform hover:scale-105 transition-all duration-300"
              >
                Inscrever-me 🚀
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 xl:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-red-500 to-green-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                    <Scissors className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                    <Star className="w-2 h-2 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-green-400 bg-clip-text text-transparent">
                    Kátia Capulana
                  </h3>
                  <p className="text-orange-300 text-sm">🇲🇿 Tradição que Veste o Futuro</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Preservando e ensinando as tradições moçambicanas através da arte da costura. Junta-te à nossa família
                de mais de 1.200 artesãs orgulhosas da nossa cultura! 🇲🇿💕
              </p>

              {/* Contacto */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">katia@capulana.co.mz</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">+258 84 123 4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">Maputo, Moçambique 🇲🇿</span>
                </div>
              </div>

              {/* Redes Sociais */}
              <div>
                <h4 className="font-semibold mb-4 text-white">Segue-nos nas Redes</h4>
                <div className="flex gap-4">
                  {redesSociais.map((rede) => (
                    <a
                      key={rede.nome}
                      href={rede.href}
                      className={`w-10 h-10 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 transform ${rede.cor} shadow-lg`}
                      aria-label={rede.nome}
                    >
                      <rede.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Cursos Tradicionais */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg flex items-center gap-2">
                <span className="text-xl">🎨</span>
                Artes Tradicionais
              </h4>
              <ul className="space-y-3">
                {linksCursos.map((link) => (
                  <li key={link.nome}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm py-1 transform hover:scale-105 hover:translate-x-1 duration-300"
                    >
                      <span>{link.emoji}</span>
                      <span>{link.nome}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg flex items-center gap-2">
                <span className="text-xl">🤝</span>
                Suporte
              </h4>
              <ul className="space-y-3">
                {linksSuporte.map((link) => (
                  <li key={link.nome}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm py-1 transform hover:scale-105 hover:translate-x-1 duration-300"
                    >
                      <span>{link.emoji}</span>
                      <span>{link.nome}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal + Províncias */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Legal</h4>
              <ul className="space-y-3 mb-6">
                {linksLegal.map((link) => (
                  <li key={link.nome}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm block py-1 transform hover:scale-105 hover:translate-x-1 duration-300"
                    >
                      {link.nome}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Províncias de Moçambique */}
              <div>
                <h5 className="font-semibold mb-3 text-orange-300 text-sm flex items-center gap-1">
                  <span>🇲🇿</span>
                  <span>Estamos em Todo Moçambique</span>
                </h5>
                <div className="grid grid-cols-2 gap-1 text-xs text-gray-500">
                  {provincias.map((provincia) => (
                    <span key={provincia} className="hover:text-orange-400 transition-colors cursor-pointer">
                      {provincia}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificações */}
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span>Site Seguro SSL</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <span>Pagamentos M-Pesa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-orange-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">&copy; 2024 Kátia Capulana. Todos os direitos reservados.</p>
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                Feito com <Heart className="w-3 h-3 inline text-red-500 animate-pulse" /> para preservar a nossa cultura
                moçambicana 🇲🇿
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span>Versão 2.1.0</span>
              <span>•</span>
              <span>Última actualização: Dezembro 2024</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span>🇲🇿</span>
                <span>Orgulhosamente Moçambicano</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
