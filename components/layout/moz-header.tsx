"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Scissors, Menu, Sun, Moon, Crown, Bell, Search, Star } from "lucide-react"
import { Input } from "@/components/ui/input"

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
  user?: {
    nome: string
    tipo: "visitante" | "aluno" | "formador"
    avatar?: string
    premium?: boolean
  }
}

export default function MozHeader({ darkMode, setDarkMode, user }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [headerGlow, setHeaderGlow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setHeaderGlow(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Cursos", href: "#cursos", emoji: "🧵" },
    { label: "Capulanas", href: "#capulanas", emoji: "🌺" },
    { label: "Comunidade", href: "#comunidade", emoji: "🤝" },
    { label: "Tradição", href: "#tradicao", emoji: "🏺" },
  ]

  const renderUserSection = () => {
    if (!user || user.tipo === "visitante") {
      return (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:flex text-orange-600 hover:text-orange-700">
            Entrar
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-orange-500 via-red-500 to-green-500 hover:from-orange-600 hover:via-red-600 hover:to-green-600 text-white font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span className="hidden sm:inline">Juntar-se à Família</span>
            <span className="sm:hidden">Entrar</span>
          </Button>
        </div>
      )
    }

    return (
      <div className="flex items-center gap-3">
        {/* Busca - Desktop */}
        <div className="hidden lg:flex relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-400" />
          <Input
            placeholder="Buscar tradições..."
            className="pl-10 w-64 h-9 border-orange-200 focus:border-orange-400"
          />
        </div>

        {/* Notificações */}
        <Button variant="ghost" size="sm" className="relative hover:bg-orange-50">
          <Bell className="w-5 h-5 text-orange-600" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs bg-red-500 animate-pulse">3</Badge>
        </Button>

        {/* Avatar e Info do Usuário */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <img
              src={user.avatar || "/placeholder.svg?height=32&width=32"}
              alt={user.nome}
              className="w-8 h-8 rounded-full object-cover border-2 border-orange-300 shadow-md"
            />
            {user.premium && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <Crown className="w-2 h-2 text-white" />
              </div>
            )}
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{user.nome}</span>
              <Badge
                variant={user.tipo === "formador" ? "default" : "secondary"}
                className={
                  user.tipo === "formador"
                    ? "bg-gradient-to-r from-purple-500 to-orange-500 text-white"
                    : user.premium
                      ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black"
                      : "bg-orange-100 text-orange-800"
                }
              >
                {user.tipo === "formador" ? "👩‍🏫 Mestra" : user.premium ? "👑 Premium" : "🎓 Aprendiz"}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? `bg-gradient-to-r from-orange-50/95 via-red-50/95 to-green-50/95 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-900/95 backdrop-blur-xl shadow-2xl border-b-2 ${
              headerGlow ? "border-orange-400 shadow-orange-200/50" : "border-orange-200"
            }`
          : "bg-gradient-to-r from-orange-50/80 via-red-50/80 to-green-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 backdrop-blur-md border-b border-orange-100"
      } ${headerGlow ? "animate-pulse" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Moçambicano */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-500 via-red-500 to-green-500 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse">
                <Scissors className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Star className="w-2 h-2 text-orange-600" />
              </div>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-green-600 bg-clip-text text-transparent">
                Kátia Capulana
              </h1>
              <p className="text-xs text-orange-600 dark:text-orange-400 hidden sm:block font-medium">
                🇲🇿 Tradição que Veste o Futuro
              </p>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 font-medium transform hover:scale-105"
              >
                <span className="text-lg group-hover:animate-bounce">{item.emoji}</span>
                <span className="group-hover:font-bold">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Ações do Header */}
          <div className="flex items-center gap-3">
            {/* Toggle Dark Mode */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 p-0 hover:bg-orange-100 dark:hover:bg-gray-700 transform hover:scale-110 transition-all duration-300"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-yellow-500 animate-spin" />
              ) : (
                <Moon className="w-4 h-4 text-orange-600" />
              )}
            </Button>

            {/* Seção do Usuário */}
            <div className="hidden md:flex">{renderUserSection()}</div>

            {/* Menu Mobile */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden w-9 h-9 p-0 hover:bg-orange-100 transform hover:scale-110 transition-all duration-300"
                >
                  <Menu className="w-5 h-5 text-orange-600" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 p-0 bg-gradient-to-b from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800"
              >
                <div className="flex flex-col h-full">
                  {/* Header do Menu Mobile */}
                  <div className="p-6 border-b border-orange-200 dark:border-gray-700 bg-gradient-to-r from-orange-100 to-red-100 dark:from-gray-800 dark:to-gray-700">
                    {user && user.tipo !== "visitante" ? (
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar || "/placeholder.svg?height=40&width=40"}
                          alt={user.nome}
                          className="w-10 h-10 rounded-full object-cover border-2 border-orange-300"
                        />
                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">{user.nome}</p>
                          <Badge
                            variant={user.tipo === "formador" ? "default" : "secondary"}
                            className={
                              user.tipo === "formador"
                                ? "bg-gradient-to-r from-purple-500 to-orange-500 text-white"
                                : user.premium
                                  ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black"
                                  : "bg-orange-100 text-orange-800"
                            }
                          >
                            {user.tipo === "formador" ? "👩‍🏫 Mestra" : user.premium ? "👑 Premium" : "🎓 Aprendiz"}
                          </Badge>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                          Bem-vinda à Família! 🇲🇿💕
                        </h3>
                        <div className="space-y-2">
                          <Button className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-green-500 hover:from-orange-600 hover:via-red-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300">
                            Juntar-se à Tradição
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
                          >
                            Entrar
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Busca Mobile */}
                  <div className="p-4 border-b border-orange-200 dark:border-gray-700">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-400" />
                      <Input
                        placeholder="Buscar tradições..."
                        className="pl-10 border-orange-200 focus:border-orange-400"
                      />
                    </div>
                  </div>

                  {/* Navegação Mobile */}
                  <nav className="flex-1 p-4">
                    <div className="space-y-4">
                      {navItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-3 py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 font-medium transform hover:scale-105"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-xl">{item.emoji}</span>
                          <span>{item.label}</span>
                        </a>
                      ))}

                      {user && user.tipo !== "visitante" && (
                        <>
                          <div className="border-t border-orange-200 dark:border-gray-700 my-4"></div>
                          <a
                            href="#dashboard"
                            className="flex items-center gap-3 py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 font-medium"
                          >
                            <span className="text-xl">📊</span>
                            <span>Meu Espaço</span>
                          </a>
                          <a
                            href="#perfil"
                            className="flex items-center gap-3 py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 font-medium"
                          >
                            <span className="text-xl">👤</span>
                            <span>Meu Perfil</span>
                          </a>
                        </>
                      )}
                    </div>
                  </nav>

                  {/* Footer do Menu Mobile */}
                  {user && user.tipo !== "visitante" && (
                    <div className="p-4 border-t border-orange-200 dark:border-gray-700">
                      <Button variant="ghost" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
                        Sair
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
