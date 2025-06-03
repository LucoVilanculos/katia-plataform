"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  BookOpen,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  Shield,
  Settings,
  BarChart3,
  UserCheck,
  FileText,
  Activity,
  Globe,
} from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const systemStats = [
    { label: "Total Usuários", value: "2,847", change: "+12%", icon: Users, color: "blue" },
    { label: "Cursos Ativos", value: "156", change: "+8%", icon: BookOpen, color: "green" },
    { label: "Receita Mensal", value: "MT 890K", change: "+23%", icon: DollarSign, color: "purple" },
    { label: "Taxa de Conversão", value: "18.2%", change: "+5%", icon: TrendingUp, color: "orange" },
  ]

  const recentUsers = [
    { name: "Maria Santos", email: "maria@email.com", role: "Estudante", status: "Ativo", joined: "2 horas atrás" },
    { name: "João Silva", email: "joao@email.com", role: "Instrutor", status: "Pendente", joined: "1 dia atrás" },
    { name: "Ana Costa", email: "ana@email.com", role: "Estudante", status: "Ativo", joined: "3 dias atrás" },
    { name: "Carlos Neves", email: "carlos@email.com", role: "Instrutor", status: "Ativo", joined: "1 semana atrás" },
  ]

  const systemAlerts = [
    { type: "warning", message: "Servidor de vídeos com alta utilização (85%)", time: "5 min atrás" },
    { type: "info", message: "Backup automático concluído com sucesso", time: "2 horas atrás" },
    { type: "error", message: "Falha no pagamento para 3 usuários", time: "1 dia atrás" },
    { type: "success", message: "Atualização de segurança aplicada", time: "2 dias atrás" },
  ]

  const courseStats = [
    { category: "Costura Básica", courses: 45, students: 1247, revenue: "MT 340K" },
    { category: "Bordados", courses: 23, students: 689, revenue: "MT 180K" },
    { category: "Design de Moda", courses: 34, students: 892, revenue: "MT 290K" },
    { category: "Técnicas Avançadas", courses: 18, students: 456, revenue: "MT 150K" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">
              Painel Administrativo 🛡️
            </h1>
            <p className="text-gray-600 mt-2">Gerencie toda a plataforma Kátia AI</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Configurações
            </Button>
            <Button className="bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700">
              <Shield className="w-4 h-4 mr-2" />
              Segurança
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemStats.map((stat, index) => (
            <Card key={index} className={`border-l-4 border-l-${stat.color}-500`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</p>
                    <p className="text-xs text-green-600 font-medium">{stat.change}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-500`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Alerts */}
        <Card className="border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Alertas do Sistema
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {systemAlerts.map((alert, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    alert.type === "error"
                      ? "bg-red-50 border border-red-200"
                      : alert.type === "warning"
                        ? "bg-yellow-50 border border-yellow-200"
                        : alert.type === "success"
                          ? "bg-green-50 border border-green-200"
                          : "bg-blue-50 border border-blue-200"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      alert.type === "error"
                        ? "bg-red-500"
                        : alert.type === "warning"
                          ? "bg-yellow-500"
                          : alert.type === "success"
                            ? "bg-green-500"
                            : "bg-blue-500"
                    }`}
                  ></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="users">Usuários</TabsTrigger>
            <TabsTrigger value="courses">Cursos</TabsTrigger>
            <TabsTrigger value="analytics">Análises</TabsTrigger>
            <TabsTrigger value="system">Sistema</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Platform Growth */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-500" />
                    Crescimento da Plataforma
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-blue-600">2,847</p>
                        <p className="text-xs text-gray-600">Usuários Totais</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">156</p>
                        <p className="text-xs text-gray-600">Cursos Ativos</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-purple-600">89%</p>
                        <p className="text-xs text-gray-600">Satisfação</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Crescimento mensal</span>
                        <span className="text-green-600 font-medium">+23%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-green-500" />
                    Atividade Recente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2">
                      <UserCheck className="w-4 h-4 text-green-500" />
                      <div className="flex-1">
                        <p className="text-sm">45 novos usuários registrados</p>
                        <p className="text-xs text-gray-500">Últimas 24 horas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <BookOpen className="w-4 h-4 text-blue-500" />
                      <div className="flex-1">
                        <p className="text-sm">12 novos cursos publicados</p>
                        <p className="text-xs text-gray-500">Esta semana</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <DollarSign className="w-4 h-4 text-purple-500" />
                      <div className="flex-1">
                        <p className="text-sm">MT 45,600 em vendas</p>
                        <p className="text-xs text-gray-500">Hoje</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestão de Usuários</CardTitle>
                <CardDescription>Usuários recentes e suas informações</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{user.name}</h4>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-xs text-gray-500">Registrado {user.joined}</p>
                      </div>
                      <Badge variant={user.role === "Instrutor" ? "default" : "secondary"}>{user.role}</Badge>
                      <Badge variant={user.status === "Ativo" ? "default" : "destructive"}>{user.status}</Badge>
                      <Button size="sm" variant="outline">
                        Gerenciar
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas por Categoria</CardTitle>
                <CardDescription>Performance dos cursos por categoria</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseStats.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{category.category}</h4>
                        <p className="text-sm text-gray-600">
                          {category.courses} cursos • {category.students} estudantes
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{category.revenue}</p>
                        <p className="text-xs text-gray-500">Receita total</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-500" />
                    Distribuição Geográfica
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Maputo</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Beira</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Nampula</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-500" />
                    Relatórios Rápidos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Relatório de Vendas Mensal
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Relatório de Usuários
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Performance dos Cursos
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Análise de Engajamento
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-red-500" />
                    Status do Sistema
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Servidor Web</span>
                      <Badge className="bg-green-500">Online</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Base de Dados</span>
                      <Badge className="bg-green-500">Online</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Servidor de Vídeos</span>
                      <Badge className="bg-yellow-500">Alta Utilização</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">API Externa</span>
                      <Badge className="bg-green-500">Online</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-blue-500" />
                    Configurações Rápidas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
                      Configurações Gerais
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="w-4 h-4 mr-2" />
                      Segurança e Privacidade
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Gestão de Permissões
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Activity className="w-4 h-4 mr-2" />
                      Logs do Sistema
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
