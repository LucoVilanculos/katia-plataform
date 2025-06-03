import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md">
        {/* Animated 404 */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-9xl font-bold text-pink-200 -z-10 blur-sm">404</div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Página não encontrada</h2>
          <p className="text-gray-600">A página que procuras não existe ou foi movida.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/courses">
              <Search className="w-4 h-4 mr-2" />
              Ver Cursos
            </Link>
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 opacity-50">
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  )
}
