"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FadeInSection } from "@/components/ui/fade-in-section";
import {
  Scissors,
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  BookOpen,
  Users,
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de login
    console.log({ email, password, rememberMe });
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Lado Esquerdo - Imagem */}
        <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-pink-500 to-red-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <img
            src="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=800&h=1200&fit=crop&auto=format&q=80"
            alt="Costura"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-12 text-white">
            <div className="max-w-md text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8">
                <Scissors className="w-10 h-10" />
              </div>
              <h1 className="text-4xl font-bold mb-6">Bem-vinda de volta!</h1>
              <p className="text-xl mb-8">
                Entre na sua conta para continuar sua jornada de aprendizado em
                costura e acessar todos os seus cursos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <p className="text-left text-sm">
                    Acesse mais de 50 cursos completos de costura, do básico ao
                    avançado
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <p className="text-left text-sm">
                    Participe da nossa comunidade de mais de 10.000 estudantes
                    de costura
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Formulário */}
        <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 flex flex-col">
          {/* Header */}
          <div className="p-6">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                  <Scissors className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                  Kátia Costura
                </span>
              </Link>
              <Button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs"
                type="button"
              >
                {darkMode ? "Modo Claro" : "Modo Escuro"}
              </Button>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 flex items-center gap-2 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar ao início</span>
              </Link>
            </div>
          </div>

          {/* Formulário */}
          <div className="flex-1 flex items-center justify-center p-6">
            <FadeInSection className="w-full max-w-md">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Entrar
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Bem-vinda de volta! Entre com seus dados para acessar sua
                  conta.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password">Senha</Label>
                    <Link
                      href="/auth/forgot-password"
                      className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
                  >
                    Lembrar de mim
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-6"
                >
                  Entrar
                </Button>

                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                  Não tem uma conta?{" "}
                  <Link
                    href="/auth/register"
                    className="text-pink-600 dark:text-pink-400 font-medium hover:underline"
                  >
                    Criar conta
                  </Link>
                </div>
              </form>
            </FadeInSection>
          </div>

          {/* Footer */}
          <footer className="p-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
            &copy; {new Date().getFullYear()} Kátia Costura. Todos os direitos
            reservados.
          </footer>
        </div>
      </div>
    </div>
  );
}
