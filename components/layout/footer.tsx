import { Scissors } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Kátia Costura</h3>
            </div>
            <p className="text-gray-400">Transformando vidas através da arte da costura, uma aluna de cada vez.</p>
          </div>

          <nav aria-label="Links de cursos">
            <h4 className="font-semibold mb-4">Cursos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Costura à Mão
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Máquina de Costura
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Roupas Infantis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Técnicas Avançadas
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Links de suporte">
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Comunidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Links legais">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kátia Costura. Feito com 💕 para quem ama costurar.</p>
        </div>
      </div>
    </footer>
  )
}
