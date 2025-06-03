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
  Star,
  Plus,
  Eye,
  MessageSquare,
  Calendar,
  Award,
  BarChart3,
  Video,
  Edit,
} from "lucide-react"

export default function InstructorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const courses = [
    {
      id: 1,
      title: "Costura Básica com Capulana",
      students: 156,
      rating: 4.8,
      revenue: "MT 45,600",
      status: "Ativo",
      completion: 89,
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 2,
      title: "Bordados Tradicionais",
      students: 89,
      rating: 4.9,
      revenue: "MT 28,900",
      status: "Ativo",
      completion: 76,
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 3,
      title: "Design de Moda Africana",
      students: 234,
      rating: 4.7,
      revenue: "MT 67,800",
      status: "Ativo",
      completion: 92,
      image: "/placeholder.svg?height=100&width=150",
    },
  ]

  const recentStudents = [
    { name: "Maria João", course: "Costura Básica", progress: 75, joined: "2 dias atrás" },
    { name: "Ana Santos", course: "Bordados", progress: 45, joined: "1 semana atrás" },
    { name: "Carla Neves", course: "Design de Moda", progress: 90, joined: "3 dias atrás" },
    { name: "Sofia Lima", course: "Costura Básica", progress: 30, joined: "5 dias atrás" },
  ]

  const monthlyStats = [
    { month: "Jan", students: 45, revenue: 15600 },
    { month: "Fev", students: 67, revenue: 23400 },
    { month: "Mar", students: 89, revenue: 31200 },
    { month: "Abr", students: 123, revenue: 42800 },
    { month: "Mai", students: 156, revenue: 54600 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dashboard do Instrutor 👩‍🏫
            </h1>
            <p className="text-gray-600 mt-2">Gerencie seus cursos e acompanhe o progresso dos estudantes</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            <Plus className="w-4 h-4 mr-2" />
            Criar Novo Curso
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Estudantes</p>
                  <p className="text-2xl font-bold text-blue-600">479</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Cursos Ativos</p>
                  <p className="text-2xl font-bold text-purple-600">3</p>
                </div>
                <BookOpen className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Receita Mensal</p>
                  <p className="text-2xl font-bold text-green-600">MT 142K</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avaliação Média</p>
                  <p className="text-2xl font-bold text-yellow-600">4.8</p>
                </div>
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="courses">Meus Cursos</TabsTrigger>
            <TabsTrigger value="students">Estudantes</TabsTrigger>
            <TabsTrigger value="analytics">Análises</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    Atividade Recente
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Nova inscrição no curso "Costura Básica"</p>
                        <p className="text-xs text-gray-500">Maria João - há 2 horas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Curso "Bordados" atingiu 100 estudantes</p>
                        <p className="text-xs text-gray-500">há 1 dia</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Nova avaliação 5 estrelas recebida</p>
                        <p className="text-xs text-gray-500">Ana Santos - há 3 dias</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Performing Course */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-500" />
                    Curso Destaque
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg?height=80&width=120"
                        alt="Design de Moda Africana"
                        className="w-20 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">Design de Moda Africana</h4>
                        <p className="text-sm text-gray-600">234 estudantes ativos</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">4.7</span>
                          <span className="text-sm text-gray-500">(89 avaliações)</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-purple-600">92%</p>
                        <p className="text-xs text-gray-600">Taxa de Conclusão</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">MT 67.8K</p>
                        <p className="text-xs text-gray-600">Receita Total</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge
                      className={`absolute top-2 right-2 ${course.status === "Ativo" ? "bg-green-500" : "bg-gray-500"}`}
                    >
                      {course.status}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{course.title}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Estudantes:</span>
                        <span className="font-medium">{course.students}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Avaliação:</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{course.rating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Receita:</span>
                        <span className="font-medium text-green-600">{course.revenue}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Taxa de Conclusão</span>
                        <span>{course.completion}%</span>
                      </div>
                      <Progress value={course.completion} className="h-2" />
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        Ver
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Estudantes Recentes</CardTitle>
                <CardDescription>Últimas inscrições e progresso dos estudantes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudents.map((student, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{student.name}</h4>
                        <p className="text-sm text-gray-600">{student.course}</p>
                        <p className="text-xs text-gray-500">Inscrito {student.joined}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{student.progress}%</p>
                        <Progress value={student.progress} className="w-20 h-2 mt-1" />
                      </div>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
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
                    <BarChart3 className="w-5 h-5 text-blue-500" />
                    Crescimento Mensal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monthlyStats.map((stat, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{stat.month}</span>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm font-medium">{stat.students} estudantes</p>
                            <p className="text-xs text-gray-500">MT {stat.revenue.toLocaleString()}</p>
                          </div>
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                              style={{ width: `${(stat.students / 200) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-purple-500" />
                    Estatísticas de Vídeo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-purple-600">1,247</p>
                      <p className="text-sm text-gray-600">Total de visualizações</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-xl font-bold text-blue-600">89%</p>
                        <p className="text-xs text-gray-600">Taxa de Retenção</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-green-600">4.2min</p>
                        <p className="text-xs text-gray-600">Tempo Médio</p>
                      </div>
                    </div>
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
