"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Usuario {
  id: number
  nome: string
  email: string
  ativo: boolean
}

export default function ExplicandoRenderizacao() {
  const [usuarios] = useState<Usuario[]>([
    { id: 1, nome: "João Silva", email: "joao@email.com", ativo: true },
    { id: 2, nome: "Maria Santos", email: "maria@email.com", ativo: false },
    { id: 3, nome: "Pedro Costa", email: "pedro@email.com", ativo: true },
  ])

  // 🤔 MÉTODO 1: O famoso {} que te confunde
  const metodo1_Confuso = () => (
    <div className="space-y-2">
      <h3 className="font-bold text-red-500">❌ MÉTODO CONFUSO (que todo mundo faz)</h3>
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

  // ✅ MÉTODO 2: Função separada (mais claro)
  const renderUsuario = (user: Usuario) => (
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
  )

  const metodo2_Claro = () => (
    <div className="space-y-2">
      <h3 className="font-bold text-green-500">✅ MÉTODO CLARO (função separada)</h3>
      {usuarios.map(renderUsuario)}
    </div>
  )

  // 🚀 MÉTODO 3: Componente separado (MELHOR ainda)
  const UsuarioCard = ({ usuario }: { usuario: Usuario }) => (
    <Card>
      <CardContent className="pt-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">{usuario.nome}</p>
            <p className="text-sm text-muted-foreground">{usuario.email}</p>
          </div>
          <Badge variant={usuario.ativo ? "default" : "secondary"}>{usuario.ativo ? "Ativo" : "Inativo"}</Badge>
        </div>
      </CardContent>
    </Card>
  )

  const metodo3_Perfeito = () => (
    <div className="space-y-2">
      <h3 className="font-bold text-blue-500">🚀 MÉTODO PERFEITO (componente separado)</h3>
      {usuarios.map((user) => (
        <UsuarioCard key={user.id} usuario={user} />
      ))}
    </div>
  )

  // 🎯 MÉTODO 4: Com lógica complexa
  const metodo4_ComLogica = () => {
    const usuariosAtivos = usuarios.filter((user) => user.ativo)
    const usuariosInativos = usuarios.filter((user) => !user.ativo)

    return (
      <div className="space-y-4">
        <h3 className="font-bold text-purple-500">🎯 MÉTODO COM LÓGICA SEPARADA</h3>

        <div>
          <h4 className="font-semibold text-green-600 mb-2">Usuários Ativos ({usuariosAtivos.length})</h4>
          <div className="space-y-2">
            {usuariosAtivos.map((user) => (
              <UsuarioCard key={user.id} usuario={user} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-600 mb-2">Usuários Inativos ({usuariosInativos.length})</h4>
          <div className="space-y-2">
            {usuariosInativos.map((user) => (
              <UsuarioCard key={user.id} usuario={user} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>🤔 POR QUE usamos {} e "mandamos tudo lá"?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-bold mb-2">🧠 EXPLICAÇÃO MENTAL:</h4>
            <p className="mb-2">
              <strong>As chaves {`{}`}</strong> no JSX significam: <em>"Aqui dentro vai código JavaScript!"</em>
            </p>
            <p className="mb-2">
              <strong>O .map()</strong> é uma função que pega cada item da lista e transforma em JSX
            </p>
            <p>
              <strong>"Mandar tudo lá"</strong> acontece porque colocamos todo o HTML dentro do map() - isso deixa
              confuso!
            </p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="confuso" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="confuso">❌ Confuso</TabsTrigger>
          <TabsTrigger value="claro">✅ Claro</TabsTrigger>
          <TabsTrigger value="perfeito">🚀 Perfeito</TabsTrigger>
          <TabsTrigger value="logica">🎯 Com Lógica</TabsTrigger>
        </TabsList>

        <TabsContent value="confuso" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-red-500">❌ Método Confuso</CardTitle>
              <p className="text-sm text-muted-foreground">Todo mundo faz assim no início, mas fica uma bagunça!</p>
            </CardHeader>
            <CardContent>
              {metodo1_Confuso()}

              <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-700 mb-2">Problemas deste método:</h4>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• Código muito longo dentro do JSX</li>
                  <li>• Difícil de ler e entender</li>
                  <li>• Difícil de reutilizar</li>
                  <li>• Difícil de testar</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="claro" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-500">✅ Método Claro</CardTitle>
              <p className="text-sm text-muted-foreground">Separamos a lógica de renderização em uma função</p>
            </CardHeader>
            <CardContent>
              {metodo2_Claro()}

              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-700 mb-2">Vantagens:</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Código mais limpo no JSX</li>
                  <li>• Função reutilizável</li>
                  <li>• Mais fácil de entender</li>
                  <li>• Tipagem clara</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="perfeito" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-500">🚀 Método Perfeito</CardTitle>
              <p className="text-sm text-muted-foreground">Componente separado - a forma mais profissional</p>
            </CardHeader>
            <CardContent>
              {metodo3_Perfeito()}

              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-700 mb-2">Por que é perfeito:</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Componente reutilizável em qualquer lugar</li>
                  <li>• Fácil de testar isoladamente</li>
                  <li>• Props tipadas</li>
                  <li>• Código super limpo</li>
                  <li>• Fácil de manter</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logica" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-purple-500">🎯 Com Lógica Complexa</CardTitle>
              <p className="text-sm text-muted-foreground">Quando precisamos de mais lógica, separamos tudo</p>
            </CardHeader>
            <CardContent>
              {metodo4_ComLogica()}

              <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-700 mb-2">Quando usar:</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• Quando tem filtros ou ordenação</li>
                  <li>• Quando tem lógica condicional complexa</li>
                  <li>• Quando precisa agrupar dados</li>
                  <li>• Quando tem cálculos antes de renderizar</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
