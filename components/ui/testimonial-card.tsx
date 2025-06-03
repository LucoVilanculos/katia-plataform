import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface Depoimento {
  id: number
  nome: string
  avatar: string
  texto: string
  rating: number
  curso: string
  cargo?: string
  cidade?: string
}

interface TestimonialCardProps {
  depoimento: Depoimento
  index: number
}

export default function TestimonialCard({ depoimento, index }: TestimonialCardProps) {
  return (
    <article
      className="hover:shadow-lg transition-all duration-300 border-pink-100 dark:border-gray-700"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <header className="flex items-center gap-3 mb-4">
            <Image
              src={depoimento.avatar || "/placeholder.svg"}
              alt={`Foto de ${depoimento.nome}`}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">{depoimento.nome}</h4>
              {depoimento.cargo && depoimento.cidade && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {depoimento.cargo} • {depoimento.cidade}
                </p>
              )}
              <div className="flex items-center gap-1" role="img" aria-label={`${depoimento.rating} estrelas`}>
                {[...Array(depoimento.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </header>

          <blockquote className="text-gray-600 dark:text-gray-300 mb-3 italic">"{depoimento.texto}"</blockquote>

          <footer>
            <Badge variant="outline" className="text-xs">
              {depoimento.curso}
            </Badge>
          </footer>
        </CardContent>
      </Card>
    </article>
  )
}
