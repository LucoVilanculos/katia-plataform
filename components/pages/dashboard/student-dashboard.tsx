"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Trophy, Star, Play, Download, Calendar, Target, TrendingUp, Award } from "lucide-react"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const enrolledCourses = [
    {
      id: 1,
      title: "Costura Básica com Capulana",
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      instructor: "Kátia Nhamirre",
      nextLesson: "Acabamentos Profissionais",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 2,
      title: "Bordados Tradicionais",
      progress: 45,
      totalLessons: 8,
      completedLessons: 4,
      instructor: "Maria Santos",
      nextLesson: "Pontos Decorativos",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 3,
      title: "Design de Moda Africana",
      progress: 20,
      totalLessons: 15,
      completedLessons: 3,
      instructor: "Ana Mucavel",
      nextLesson: "Inspirações Culturais",
      image: "/placeholder.svg?height=100&width=150",
    },
  ]

  const achievements = [
    { title: "Primeira Costura", icon: Trophy, earned: true },
    { title: "Semana Completa", icon: Calendar, earned: true },
    { title: "Mestre da Capulana", icon: Award, earned: false },
    { title: "Criativa", icon: Star, earned: true },
  ]

  const recentActivity = [
    { action: "Completou", item: "Lição: Medidas Básicas", time: "2 horas atrás" },
    { action: "Iniciou", item: "Curso: Bordados Tradicionais", time: "1 dia atrás" },
    { action: "Conquistou", item: "Conquista: Semana Completa", time: "3 dias atrás" },
    { action: "Assistiu", item: "Vídeo: Técnicas de Corte", time: "5 dias atrás" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-red-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              Olá, Estudante! 👋
            </h1>
            <p className="text-gray-600 mt-2">Continue sua jornada de aprendizado</p>
          </div>
          <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600">
            <BookOpen className="w-4 h-4 mr-2" />
            Explorar Cursos
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-l-4 border-l-pink-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Cursos Ativos</p>
                  <p className="text-2xl font-bold text-pink-600">3</p>
                </div>
                <BookOpen className="w-8 h-8 text-pink-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Horas Estudadas</p>
                  <p className="text-2xl font-bold text-orange-600">24h</p>
                </div>
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Conquistas</p>
                  <p className="text-2xl font-bold text-red-600">3</p>
                </div>
                <Trophy className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Progresso Médio</p>
                  <p className="text-2xl font-bold text-purple-600">47%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="courses">Meus Cursos</TabsTrigger>
            <TabsTrigger value="achievements">Conquistas</TabsTrigger>
            <TabsTrigger value="activity">Atividade</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Continue Learning */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-pink-500" />
                    Continue Aprendendo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {enrolledCourses.slice(0, 2).map((course) => (
                    <div
                      key={course.id}
                      className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{course.title}</h4>
                        <p className="text-xs text-gray-600">Próxima: {course.nextLesson}</p>
                        <Progress value={course.progress} className="mt-2 h-2" />
                      </div>
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Weekly Goal */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-orange-500" />
                    Meta Semanal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-orange-600">5/7</p>
                      <p className="text-sm text-gray-600">Dias de estudo esta semana</p>
                    </div>
                    <Progress value={71} className="h-3" />
                    <p className="text-sm text-center text-gray-600">Faltam apenas 2 dias para completar sua meta!</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-white text-gray-800">{course.progress}%</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">Por {course.instructor}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>
                          {course.completedLessons}/{course.totalLessons} lições
                        </span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="flex-1">
                        <Play className="w-4 h-4 mr-2" />
                        Continuar
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className={`text-center p-6 ${achievement.earned ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200" : "bg-gray-50 border-gray-200"}`}
                >
                  <achievement.icon
                    className={`w-12 h-12 mx-auto mb-3 ${achievement.earned ? "text-yellow-500" : "text-gray-400"}`}
                  />
                  <h3 className={`font-semibold ${achievement.earned ? "text-gray-800" : "text-gray-500"}`}>
                    {achievement.title}
                  </h3>
                  {achievement.earned && <Badge className="mt-2 bg-yellow-500 text-white">Conquistado!</Badge>}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
                <CardDescription>Suas últimas ações na plataforma</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 border-l-4 border-l-pink-200 bg-pink-50 rounded-r-lg"
                    >
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-semibold">{activity.action}</span> {activity.item}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
