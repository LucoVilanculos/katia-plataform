"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Scissors, Moon, Sun, Menu } from "lucide-react"

interface Usuario {
  nome: string
  tipo: "visitante" | "aluno" | "formador"
  avatar?: string
  premium?: boolean
}

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
  user?: Usuario
}

export default function Header({ darkMode, setDarkMode, user }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-pink-100 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
            <Scissors className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Kátia Costura
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Menu principal">
          <a href="#cursos" className="text-gray-700 dark:text-gray-300 hover:text-pink-600 transition-colors">
            Cursos
          </a>
          <a href="#premium" className="text-gray-700 dark:text-gray-300 hover:text-pink-600 transition-colors">
            Premium
          </a>
          <a href="#formadores" className="text-gray-700 dark:text-gray-300 hover:text-pink-600 transition-colors">
            Ensinar
          </a>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDarkMode(!darkMode)}
            className="border-pink-200 hover:bg-pink-50 dark:border-gray-600 dark:hover:bg-gray-700"
            aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>

          {user ? (
            <div className="flex items-center gap-2">
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={`Avatar de ${user.nome}`}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Olá, {user.nome}</span>
            </div>
          ) : (
            <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
              Entrar
            </Button>
          )}
        </nav>

        <Button variant="outline" size="sm" className="md:hidden" aria-label="Abrir menu">
          <Menu className="w-4 h-4" />
        </Button>
      </div>
    </header>
  )
}
