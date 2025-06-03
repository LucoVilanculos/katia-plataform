"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Users, Search, Filter, MoreHorizontal, UserPlus, Download, Mail, Ban, CheckCircle } from "lucide-react"

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const users = [
    {
      id: 1,
      name: "Maria Santos",
      email: "maria.santos@email.com",
      role: "Estudante",
      status: "Ativo",
      joinDate: "15/01/2024",
      lastLogin: "2 horas atrás",
      courses: 3,
      avatar: "MS",
    },
    {
      id: 2,
      name: "João Silva",
      email: "joao.silva@email.com",
      role: "Instrutor",
      status: "Ativo",
      joinDate: "10/12/2023",
      lastLogin: "1 dia atrás",
      courses: 8,
      avatar: "JS",
    },
    {
      id: 3,
      name: "Ana Costa",
      email: "ana.costa@email.com",
      role: "Estudante",
      status: "Pendente",
      joinDate: "20/01/2024",
      lastLogin: "Nunca",
      courses: 0,
      avatar: "AC",
    },
    {
      id: 4,
      name: "Carlos Neves",
      email: "carlos.neves@email.com",
      role: "Instrutor",
      status: "Suspenso",
      joinDate: "05/11/2023",
      lastLogin: "1 semana atrás",
      courses: 5,
      avatar: "CN",
    },
  ]

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">
              Gestão de Usuários 👥
            </h1>
            <p className="text-gray-600 mt-2">Gerencie todos os usuários da plataforma</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button className="bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700">
              <UserPlus className="w-4 h-4 mr-2" />
              Novo Usuário
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Usuários</p>
                  <p className="text-2xl font-bold text-blue-600">2,847</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Estudantes</p>
                  <p className="text-2xl font-bold text-green-600">2,456</p>
                </div>
                <Users className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Instrutores</p>
                  <p className="text-2xl font-bold text-purple-600">391</p>
                </div>
                <Users className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Novos (30d)</p>
                  <p className="text-2xl font-bold text-orange-600">156</p>
                </div>
                <Users className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar usuários por nome ou email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Usuários</CardTitle>
            <CardDescription>{filteredUsers.length} usuários encontrados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {user.avatar}
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div>
                      <h4 className="font-semibold">{user.name}</h4>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>

                    <div className="text-center">
                      <Badge variant={user.role === "Instrutor" ? "default" : "secondary"}>{user.role}</Badge>
                    </div>

                    <div className="text-center">
                      <Badge
                        variant={
                          user.status === "Ativo" ? "default" : user.status === "Pendente" ? "secondary" : "destructive"
                        }
                      >
                        {user.status}
                      </Badge>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-medium">{user.courses} cursos</p>
                      <p className="text-xs text-gray-500">Desde {user.joinDate}</p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm">{user.lastLogin}</p>
                      <p className="text-xs text-gray-500">Último acesso</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Mail className="w-4 h-4" />
                    </Button>
                    {user.status === "Ativo" ? (
                      <Button size="sm" variant="outline">
                        <Ban className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline">
                        <CheckCircle className="w-4 h-4" />
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
