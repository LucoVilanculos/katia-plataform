"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Scissors,
  CheckCircle2,
  Loader2,
  BookOpen,
  Users,
} from "lucide-react";
import Link from "next/link";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    receiveUpdates: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de registro
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setFormStep(3); // Sucesso
  };

  const nextStep = () => {
    setFormStep(formStep + 1);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Criar sua conta
              </CardTitle>
              <CardDescription className="text-center">
                Comece sua jornada de aprendizado em costura hoje mesmo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Digite seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Senha</Label>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Crie uma senha segura"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full space-y-4">
                <Button
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
                  onClick={nextStep}
                >
                  Continuar
                </Button>
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Já tem uma conta?{" "}
                  <Link
                    href="/auth/login"
                    className="text-pink-600 hover:text-pink-700 font-medium"
                  >
                    Entrar
                  </Link>
                </div>
              </div>
            </CardFooter>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Quase lá!
              </CardTitle>
              <CardDescription className="text-center">
                Confirme sua senha e preferências para finalizar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirme sua senha</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha novamente"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        acceptTerms: checked as boolean,
                      })
                    }
                    required
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Aceito os{" "}
                    <Link
                      href="/terms"
                      className="text-pink-600 hover:text-pink-700"
                    >
                      termos de uso
                    </Link>{" "}
                    e{" "}
                    <Link
                      href="/privacy"
                      className="text-pink-600 hover:text-pink-700"
                    >
                      política de privacidade
                    </Link>
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="receiveUpdates"
                    name="receiveUpdates"
                    checked={formData.receiveUpdates}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        receiveUpdates: checked as boolean,
                      })
                    }
                  />
                  <label
                    htmlFor="receiveUpdates"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Desejo receber dicas de costura e novidades por email
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full space-y-4">
                <Button
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Criando
                      conta...
                    </>
                  ) : (
                    "Criar conta"
                  )}
                </Button>
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={prevStep}
                  disabled={isLoading}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                </Button>
              </div>
            </CardFooter>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-8"
          >
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold mb-2">
              Conta criada com sucesso!
            </CardTitle>
            <CardDescription className="mb-6">
              Bem-vindo(a) à plataforma Kátia Costura. Sua jornada de
              aprendizado começa agora!
            </CardDescription>
            <div className="space-y-4">
              <Button
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
                asChild
              >
                <Link href="/private/dashboard/student">
                  Ir para o Dashboard
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/">Voltar para o Início</Link>
              </Button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-center p-4">
      <FadeInSection>
        <Link href="/" className="flex items-center gap-2 mb-8 group">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <Scissors className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              Kátia IA
            </h1>
            <p className="text-xs text-pink-600 dark:text-pink-400 font-medium">
              Sua assistente de costura
            </p>
          </div>
        </Link>
      </FadeInSection>

      <FadeInSection delay={200}>
        <Card className="w-full max-w-md shadow-xl border-pink-100">
          {renderFormStep()}
        </Card>
      </FadeInSection>

      <FadeInSection delay={400}>
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 max-w-md">
          <p>
            Ao criar uma conta, você terá acesso a todos os recursos da Kátia
            IA, sua assistente virtual de costura disponível 24/7.
          </p>
        </div>
      </FadeInSection>

      <footer className="p-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 w-full max-w-md mx-auto mt-8">
        &copy; {new Date().getFullYear()} Kátia Costura. Todos os direitos reservados.
      </footer>
    </div>
  );
}