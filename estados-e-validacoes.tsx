"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

// 🎯 PARTE 1: ESTADOS - Vamos desmistificar isso!
interface Usuario {
  id: number
  nome: string
  email: string
  ativo: boolean
}

interface FormData {
  nome: string
  email: string
}

export default function EstadosEValidacoes() {
  // ✅ ESTADO SIMPLES - Começando devagar
  const [contador, setContador] = useState<number>(0)

  // ✅ ESTADO COM OBJETO - Aqui que complica, mas vou explicar!
  const [usuario, setUsuario] = useState<Usuario | null>(null)

  // ✅ ESTADO COM ARRAY - Lista de usuários
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  // ✅ ESTADO DO FORMULÁRIO
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
  })

  // ✅ ESTADO DE LOADING/ERROR
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // 🎯 PARTE 2: CONDITIONAL RENDERING - O famoso && que te confunde!

  // ❌ JEITO CONFUSO (que todo mundo faz)
  // {usuario && <div>{usuario.nome}</div>}

  // ✅ JEITO CLARO - Vamos quebrar isso em funções!

  const renderUsuario = () => {
    // Se não tem usuário, não renderiza nada
    if (!usuario) return null

    // Se tem usuário, renderiza
    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            Usuário Logado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Nome:</strong> {usuario.nome}
          </p>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
          <Badge variant={usuario.ativo ? "default" : "secondary"}>{usuario.ativo ? "Ativo" : "Inativo"}</Badge>
        </CardContent>
      </Card>
    )
  }

  const renderListaUsuarios = () => {
    // Lista vazia? Mostra mensagem
    if (usuarios.length === 0) {
      return (
        <Card className="mt-4">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <AlertCircle className="w-5 h-5" />
              <p>Nenhum usuário encontrado</p>
            </div>
          </CardContent>
        </Card>
      )
    }

    // Tem usuários? Renderiza a lista
    return (
      <div className="mt-4 space-y-2">
        {usuarios.map((user) => (
          <Card key={user.id}>
            <CardContent className="pt-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{user.nome}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <Badge variant={user.ativo ? "default" : "secondary"}>{user.ativo ? "Ativo" : "Inativo"}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  // 🎯 PARTE 3: VALIDAÇÕES - Vamos fazer isso direito!

  const validarEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validarNome = (nome: string): boolean => {
    return nome.trim().length >= 2
  }

  const validarFormulario = (): string | null => {
    if (!validarNome(formData.nome)) {
      return "Nome deve ter pelo menos 2 caracteres"
    }

    if (!validarEmail(formData.email)) {
      return "Email inválido"
    }

    return null // null = sem erro
  }

  // 🎯 FUNÇÕES DE AÇÃO - Aqui que a mágica acontece!

  const fazerLogin = () => {
    setIsLoading(true)
    setError(null)

    // Simula uma chamada de API
    setTimeout(() => {
      const novoUsuario: Usuario = {
        id: 1,
        nome: "João Silva",
        email: "joao@email.com",
        ativo: true,
      }

      setUsuario(novoUsuario)
      setIsLoading(false)
    }, 1000)
  }

  const adicionarUsuario = () => {
    const erro = validarFormulario()

    if (erro) {
      setError(erro)
      return
    }

    const novoUsuario: Usuario = {
      id: Date.now(), // ID simples para exemplo
      nome: formData.nome,
      email: formData.email,
      ativo: true,
    }

    // Adiciona o novo usuário à lista
    setUsuarios((prev) => [...prev, novoUsuario])

    // Limpa o formulário
    setFormData({ nome: "", email: "" })
    setError(null)
  }

  const logout = () => {
    setUsuario(null)
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>🎯 TypeScript: Estados e Validações CLARAMENTE</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* CONTADOR SIMPLES */}
          <div className="flex items-center gap-4">
            <Button onClick={() => setContador((prev) => prev - 1)}>-</Button>
            <span className="text-xl font-bold">{contador}</span>
            <Button onClick={() => setContador((prev) => prev + 1)}>+</Button>
          </div>

          {/* LOGIN/LOGOUT */}
          <div className="flex gap-2">
            {!usuario ? (
              <Button onClick={fazerLogin} disabled={isLoading}>
                {isLoading ? "Fazendo login..." : "Fazer Login"}
              </Button>
            ) : (
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            )}
          </div>

          {/* FORMULÁRIO COM VALIDAÇÃO */}
          <div className="space-y-3">
            <Input
              placeholder="Nome"
              value={formData.nome}
              onChange={(e) => setFormData((prev) => ({ ...prev, nome: e.target.value }))}
            />
            <Input
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            />

            {error && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <XCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <Button onClick={adicionarUsuario} className="w-full">
              Adicionar Usuário
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* RENDERIZAÇÃO CONDICIONAL - JEITO CLARO! */}
      {renderUsuario()}
      {renderListaUsuarios()}
    </div>
  )
}
