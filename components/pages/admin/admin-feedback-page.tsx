"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageSquare,
  Star,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Filter,
  Download,
} from "lucide-react";

export default function AdminFeedbackPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const feedbackStats = [
    {
      label: "Total Avaliações",
      value: "1,247",
      icon: MessageSquare,
      color: "blue",
    },
    { label: "Média Geral", value: "4.6", icon: Star, color: "yellow" },
    { label: "Satisfação", value: "92%", icon: TrendingUp, color: "green" },
    { label: "Pendentes", value: "23", icon: Clock, color: "orange" },
  ];

  const recentFeedback = [
    {
      id: 1,
      user: "Maria Santos",
      course: "Costura Básica com Capulana",
      rating: 5,
      comment:
        "Excelente curso! A Kátia explica muito bem e os vídeos são claros.",
      date: "2 horas atrás",
      status: "Novo",
    },
    {
      id: 2,
      user: "João Silva",
      course: "Bordados Tradicionais",
      rating: 4,
      comment: "Muito bom, mas poderia ter mais exemplos práticos.",
      date: "1 dia atrás",
      status: "Respondido",
    },
    {
      id: 3,
      user: "Ana Costa",
      course: "Design de Moda Africana",
      rating: 5,
      comment: "Adorei! Aprendi muito sobre a cultura moçambicana.",
      date: "3 dias atrás",
      status: "Novo",
    },
    {
      id: 4,
      user: "Carlos Neves",
      course: "Costura Básica",
      rating: 3,
      comment: "Bom curso, mas alguns vídeos estão com qualidade baixa.",
      date: "1 semana atrás",
      status: "Em análise",
    },
  ];

  const courseRatings = [
    {
      course: "Costura Básica com Capulana",
      rating: 4.8,
      reviews: 234,
      trend: "+0.2",
    },
    {
      course: "Bordados Tradicionais",
      rating: 4.6,
      reviews: 156,
      trend: "+0.1",
    },
    {
      course: "Design de Moda Africana",
      rating: 4.9,
      reviews: 189,
      trend: "+0.3",
    },
    { course: "Técnicas Avançadas", rating: 4.5, reviews: 98, trend: "-0.1" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">
              Gestão de Feedback 💬
            </h1>
            <p className="text-gray-600 mt-2">
              Monitore avaliações e comentários dos usuários
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {feedbackStats.map((stat, index) => (
            <Card
              key={index}
              className={`border-l-4 border-l-${stat.color}-500`}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className={`text-2xl font-bold text-${stat.color}-600`}>
                      {stat.value}
                    </p>
                  </div>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-500`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="feedback">Feedback Recente</TabsTrigger>
            <TabsTrigger value="analytics">Análises</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Course Ratings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Avaliações por Curso
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courseRatings.map((course, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">
                            {course.course}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {course.reviews} avaliações
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-semibold">
                              {course.rating}
                            </span>
                            <span
                              className={`text-xs ${course.trend.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                            >
                              {course.trend}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Feedback Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    Resumo de Satisfação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-green-600">92%</p>
                      <p className="text-sm text-gray-600">
                        Taxa de Satisfação Geral
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>5 estrelas</span>
                        <span>68%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "68%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>4 estrelas</span>
                        <span>24%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "24%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>3 estrelas</span>
                        <span>6%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ width: "6%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>1-2 estrelas</span>
                        <span>2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "2%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Feedback Recente</CardTitle>
                <CardDescription>
                  Últimas avaliações e comentários dos usuários
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFeedback.map((feedback) => (
                    <div
                      key={feedback.id}
                      className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {feedback.user
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <h4 className="font-semibold">{feedback.user}</h4>
                            <p className="text-sm text-gray-600">
                              {feedback.course}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < feedback.rating ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <Badge
                            variant={
                              feedback.status === "Novo"
                                ? "default"
                                : feedback.status === "Respondido"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {feedback.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        {feedback.comment}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">{feedback.date}</p>
                        <div className="flex gap-2">
                          {feedback.status === "Novo" && (
                            <>
                              <Button size="sm" variant="outline">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Responder
                              </Button>
                              <Button size="sm" variant="outline">
                                <AlertCircle className="w-4 h-4 mr-2" />
                                Marcar
                              </Button>
                            </>
                          )}
                        </div>
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
                  <CardTitle>Tendências de Avaliação</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">+15%</p>
                      <p className="text-sm text-gray-600">
                        Aumento nas avaliações este mês
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Janeiro</span>
                        <span>4.5 ⭐</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Fevereiro</span>
                        <span>4.6 ⭐</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Março</span>
                        <span>4.7 ⭐</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Abril</span>
                        <span>4.6 ⭐</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Maio</span>
                        <span>4.8 ⭐</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Palavras-chave Frequentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Excelente</span>
                      <Badge>234 menções</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Claro</span>
                      <Badge>189 menções</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Útil</span>
                      <Badge>156 menções</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Prático</span>
                      <Badge>134 menções</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Recomendo</span>
                      <Badge>98 menções</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
