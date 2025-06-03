"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home, AlertTriangle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md">
        {/* Error Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-12 h-12 text-white" />
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto bg-red-200 rounded-full -z-10 blur-sm animate-ping"></div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Algo deu errado!</h2>
          <p className="text-gray-600">Ocorreu um erro inesperado. Tenta novamente ou volta ao início.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Tentar Novamente
          </Button>

          <Button variant="outline" asChild>
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Voltar ao Início
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
