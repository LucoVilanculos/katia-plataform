"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Scissors,
  Menu,
  Sun,
  Moon,
  Crown,
  Bell,
  Search,
  BookOpen,
  Users,
  Phone,
  Info,
  Home,
  User,
  Settings,
  Video,
  Globe,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { LanguageSwitcher } from "@/components/ui/language-switcher"

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

export default function ProfessionalHeader({ darkMode, setDarkMode, user }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("PT")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Início", href: "/", icon: Home },
    { label: "Cursos", href: "/courses", icon: BookOpen },
    { label: "Vídeos", href: "/videos", icon: Video },
    { label: "Sobre", href: "/about", icon: Info },
    { label: "Contacto", href: "/contact", icon: Phone },
  ]

  const getDashboardLink = () => {
    if (!user || user.tipo === "visitante") return "/"
    return user.tipo === "formador" ? "/private/dashboard/instructor" : "/private/dashboard/student"
  }

  const renderUserSection = () => {
    if (!user || user.tipo === "visitante") {
      return (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:flex text-pink-600 hover:text-pink-700" asChild>
            <Link href="/auth/login">Entrar</Link>
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link href="/auth/register">
              <span className="hidden sm:inline">Criar Conta</span>
              <span className="sm:hidden">Entrar</span>
            </Link>
          </Button>
        </div>
      )
    }

    return (
      <div className="flex items-center gap-3">
        {/* Busca - Desktop */}
        <div className="hidden lg:flex relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-400" />
          <Input placeholder="Buscar cursos..." className="pl-10 w-64 h-9 border-pink-200 focus:border-pink-400" />
        </div>

        {/* Notificações */}
        <Button variant="ghost" size="sm" className="relative hover:bg-pink-50">
          <Bell className="w-5 h-5 text-pink-600" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs bg-red-500 animate-pulse">3</Badge>
        </Button>

        {/* Avatar e Info do Usuário */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <img
              src={user.avatar || "/placeholder.svg?height=32&width=32"}
              alt={user.nome}
              className="w-8 h-8 rounded-full object-cover border-2 border-pink-300 shadow-md"
            />
            {user.premium && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full flex items-center justify-center">
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
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : user.premium
                      ? "bg-gradient-to-r from-yellow-400 to-pink-400 text-black"
                      : "bg-pink-100 text-pink-800"
                }
              >
                {user.tipo === "formador" ? (
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>Instrutora</span>
                  </div>
                ) : user.premium ? (
                  <div className="flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    <span>Premium</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>Estudante</span>
                  </div>
                )}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Mobile menu that appears as a dropdown (without Sheet component)
  const renderMobileMenu = () => {
    if (!mobileMenuOpen) return null

    return (
      <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl border-t border-pink-200 dark:border-gray-700 z-50 lg:hidden">
        <div className="container mx-auto px-4 py-4">
          {/* User Section for Mobile */}
          {user && user.tipo !== "visitante" ? (
            <div className="flex items-center gap-3 p-4 border-b border-pink-200 dark:border-gray-700">
              <img
                src={user.avatar || "/placeholder.svg?height=40&width=40"}
                alt={user.nome}
                className="w-10 h-10 rounded-full object-cover border-2 border-pink-300"
              />
              <div>
                <p className="font-medium text-gray-800 dark:text-white">{user.nome}</p>
                <Badge
                  variant={user.tipo === "formador" ? "default" : "secondary"}
                  className={
                    user.tipo === "formador"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : user.premium
                        ? "bg-gradient-to-r from-yellow-400 to-pink-400 text-black"
                        : "bg-pink-100 text-pink-800"
                  }
                >
                  {user.tipo === "formador" ? (
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>Instrutora</span>
                    </div>
                  ) : user.premium ? (
                    <div className="flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      <span>Premium</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      <span>Estudante</span>
                    </div>
                  )}
                </Badge>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center p-4 border-b border-pink-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <Scissors className="w-5 h-5 text-pink-600" />
                <span>Bem-vinda!</span>
              </h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50" asChild>
                  <Link href="/auth/login">Entrar</Link>
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
                  asChild
                >
                  <Link href="/auth/register">Registrar</Link>
                </Button>
              </div>
            </div>
          )}

          {/* Search for Mobile */}
          <div className="p-4 border-b border-pink-200 dark:border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-400" />
              <Input placeholder="Buscar cursos..." className="pl-10 border-pink-200 focus:border-pink-400" />
            </div>
          </div>

          {/* Navigation for Mobile */}
          <nav className="py-2">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}

              {user && user.tipo !== "visitante" && (
                <>
                  <div className="border-t border-pink-200 dark:border-gray-700 my-2"></div>
                  <Link
                    href={getDashboardLink()}
                    className="flex items-center gap-3 py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="w-5 h-5" />
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center gap-3 py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Settings className="w-5 h-5" />
                    <span>Configurações</span>
                  </Link>
                </>
              )}
            </div>
          </nav>

          {/* Language Switcher for Mobile */}
          <div className="p-4 border-t border-pink-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-pink-600" />
              <LanguageSwitcher currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
            </div>
          </div>

          {/* Logout for Mobile */}
          {user && user.tipo !== "visitante" && (
            <div className="p-4 border-t border-pink-200 dark:border-gray-700">
              <Button variant="ghost" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
                Sair
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-pink-200 dark:border-gray-700"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-pink-100 dark:border-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Profissional */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Scissors className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                Kátia Costura
              </h1>
              <p className="text-xs text-pink-600 dark:text-pink-400 hidden sm:block font-medium">
                Tradição que Veste o Futuro
              </p>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 font-medium"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:font-semibold">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Ações do Header */}
          <div className="flex items-center gap-3">
            {/* Language Switcher - Desktop */}
            <div className="hidden lg:flex">
              <LanguageSwitcher currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
            </div>

            {/* Toggle Dark Mode */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 p-0 hover:bg-pink-100 dark:hover:bg-gray-700 transform hover:scale-110 transition-all duration-300"
            >
              {darkMode ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-pink-600" />}
            </Button>

            {/* Seção do Usuário */}
            <div className="hidden md:flex">{renderUserSection()}</div>

            {/* Menu Mobile Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden w-9 h-9 p-0 hover:bg-pink-100 transform hover:scale-110 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5 text-pink-600" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {renderMobileMenu()}
      </div>
    </header>
  )
}
