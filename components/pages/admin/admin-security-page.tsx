"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Lock, AlertTriangle, Eye, Key, Activity, Globe, Database, Server, Wifi } from "lucide-react"

export default function AdminSecurityPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)
  const [autoBackup, setAutoBackup] = useState(true)
  const [sslEnabled, setSSLEnabled] = useState(true)

  const securityAlerts = [
    {
      type: "warning",
      title: "Tentativas de login suspeitas",
      description: "5 tentativas falhadas do IP 192.168.1.100",
      time: "15 min atrás",
      severity: "Média",
    },
    {
      type: "info",
      title: "Backup de segurança concluído",
      description: "Backup automático realizado com sucesso",
      time: "2 horas atrás",
      severity: "Baixa",
    },
    {
      type: "error",
      title: "Certificado SSL expirando",
      description: "Certificado expira em 7 dias",
      time: "1 dia atrás",
      severity: "Alta",
    },
  ]

  const loginAttempts = [
    { ip: "192.168.1.100", location: "Maputo, MZ", attempts: 5, status: "Bloqueado", time: "15 min atrás" },
    { ip: "10.0.0.45", location: "Beira, MZ", attempts: 1, status: "Sucesso", time: "1 hora atrás" },
    { ip: "172.16.0.23", location: "Nampula, MZ", attempts: 2, status: "Falhado", time: "3 horas atrás" },
    { ip: "203.45.67.89", location: "Desconhecido", attempts: 8, status: "Bloqueado", time: "6 horas atrás" },
  ]

  const systemSecurity = [
    { component: "Firewall", status: "Ativo", lastUpdate: "2 dias atrás", level: "Alto" },
    { component: "Antivírus", status: "Ativo", lastUpdate: "1 hora atrás", level: "Alto" },
    { component: "SSL/TLS", status: "Ativo", lastUpdate: "30 dias atrás", level: "Médio" },
    { component: "Backup", status: "Ativo", lastUpdate: "2 horas atrás", level: "Alto" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Segurança do Sistema 🛡️
            </h1>
            <p className="text-gray-600 mt-2">Monitore e configure a segurança da plataforma</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Activity className="w-4 h-4 mr-2" />
              Logs
            </Button>
            <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
              <Shield className="w-4 h-4 mr-2" />
              Scan Segurança
            </Button>
          </div>
        </div>

        {/* Security Status */}
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-700">Sistema Seguro</h3>
                  <p className="text-sm text-gray-600">Todas as verificações de segurança passaram</p>
                </div>
              </div>
              <Badge className="bg-green-500 text-white">Nível Alto</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Security Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              Alertas de Segurança
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {securityAlerts.map((alert, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg border ${
                    alert.type === "error"
                      ? "bg-red-50 border-red-200"
                      : alert.type === "warning"
                        ? "bg-yellow-50 border-yellow-200"
                        : "bg-blue-50 border-blue-200"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      alert.type === "error" ? "bg-red-500" : alert.type === "warning" ? "bg-yellow-500" : "bg-blue-500"
                    }`}
                  ></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{alert.title}</h4>
                    <p className="text-xs text-gray-600">{alert.description}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                  <Badge
                    variant={
                      alert.severity === "Alta" ? "destructive" : alert.severity === "Média" ? "default" : "secondary"
                    }
                  >
                    {alert.severity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="access">Controle de Acesso</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoramento</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* System Security Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="w-5 h-5 text-blue-500" />
                    Status dos Componentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {systemSecurity.map((component, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full ${component.status === "Ativo" ? "bg-green-500" : "bg-red-500"}`}
                          ></div>
                          <div>
                            <h4 className="font-semibold text-sm">{component.component}</h4>
                            <p className="text-xs text-gray-600">Atualizado {component.lastUpdate}</p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            component.level === "Alto"
                              ? "default"
                              : component.level === "Médio"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {component.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="w-5 h-5 text-purple-500" />
                    Ações Rápidas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Lock className="w-4 h-4 mr-2" />
                      Forçar Logout de Todos os Usuários
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Database className="w-4 h-4 mr-2" />
                      Backup Manual do Sistema
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="w-4 h-4 mr-2" />
                      Verificação de Vulnerabilidades
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Activity className="w-4 h-4 mr-2" />
                      Relatório de Segurança
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="access" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tentativas de Login Recentes</CardTitle>
                <CardDescription>Monitore tentativas de acesso ao sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {loginAttempts.map((attempt, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Globe className="w-5 h-5 text-blue-500" />
                        <div>
                          <h4 className="font-semibold text-sm">{attempt.ip}</h4>
                          <p className="text-xs text-gray-600">{attempt.location}</p>
                          <p className="text-xs text-gray-500">{attempt.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{attempt.attempts} tentativas</p>
                        <Badge
                          variant={
                            attempt.status === "Sucesso"
                              ? "default"
                              : attempt.status === "Bloqueado"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {attempt.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-green-500" />
                    Monitoramento em Tempo Real
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Usuários Online</span>
                      <span className="font-semibold text-green-600">247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tentativas de Login/min</span>
                      <span className="font-semibold text-blue-600">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tráfego Suspeito</span>
                      <span className="font-semibold text-red-600">3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Conexões SSL</span>
                      <span className="font-semibold text-green-600">100%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-blue-500" />
                    Status da Rede
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Latência Média</span>
                      <span className="font-semibold text-green-600">45ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Largura de Banda</span>
                      <span className="font-semibold text-blue-600">78%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Pacotes Perdidos</span>
                      <span className="font-semibold text-green-600">0.1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Uptime</span>
                      <span className="font-semibold text-green-600">99.9%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações de Segurança</CardTitle>
                  <CardDescription>Configure as políticas de segurança do sistema</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Autenticação de Dois Fatores</h4>
                      <p className="text-sm text-gray-600">Exigir 2FA para todos os administradores</p>
                    </div>
                    <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Backup Automático</h4>
                      <p className="text-sm text-gray-600">Backup diário automático dos dados</p>
                    </div>
                    <Switch checked={autoBackup} onCheckedChange={setAutoBackup} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">SSL/TLS Forçado</h4>
                      <p className="text-sm text-gray-600">Forçar conexões seguras HTTPS</p>
                    </div>
                    <Switch checked={sslEnabled} onCheckedChange={setSSLEnabled} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Políticas de Senha</CardTitle>
                  <CardDescription>Configure os requisitos de senha</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Comprimento Mínimo</label>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-600">8</span>
                      <span className="text-sm text-gray-600">caracteres</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Expiração</label>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-purple-600">90</span>
                      <span className="text-sm text-gray-600">dias</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tentativas Máximas</label>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-red-600">5</span>
                      <span className="text-sm text-gray-600">tentativas</span>
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
