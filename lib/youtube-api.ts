interface YouTubeVideo {
  id: {
    videoId: string
  }
  snippet: {
    title: string
    description: string
    thumbnails: {
      medium: {
        url: string
        width: number
        height: number
      }
      high: {
        url: string
        width: number
        height: number
      }
    }
    channelTitle: string
    publishedAt: string
  }
}

interface YouTubeResponse {
  items: YouTubeVideo[]
  nextPageToken?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  error?: {
    code: number
    message: string
    errors: Array<{
      message: string
      domain: string
      reason: string
    }>
  }
}

export interface ProcessedVideo {
  id: string
  titulo: string
  descricao: string
  thumbnail: string
  canal: string
  dataPublicacao: string
  url: string
  duracao: string
  visualizacoes: number
  rating: number
  nivel: "Iniciante" | "Intermediário" | "Avançado"
  categoria: string
  premium: boolean
  instrutor: string
}

const SEARCH_QUERIES = [
  "costura básica",
  "como costurar",
  "máquina de costura",
  "bordado tutorial",
  "costura iniciantes",
  "sewing tutorial",
]

export async function fetchYouTubeVideos(
  query = "costura básica",
  maxResults = 12,
): Promise<{ videos: ProcessedVideo[]; error?: string; debug?: any }> {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY

    console.log("🔍 Debug YouTube API:")
    console.log("- API Key existe:", !!API_KEY)
    console.log("- API Key length:", API_KEY?.length || 0)
    console.log("- Query:", query)
    console.log("- Max Results:", maxResults)

    if (!API_KEY) {
      console.warn("⚠️ YouTube API Key não encontrada")
      return {
        videos: getFallbackVideos(),
        error: "API Key não configurada",
      }
    }

    // URL mais simples para testar
    const searchUrl = new URL("https://www.googleapis.com/youtube/v3/search")
    searchUrl.searchParams.set("part", "snippet")
    searchUrl.searchParams.set("q", query)
    searchUrl.searchParams.set("type", "video")
    searchUrl.searchParams.set("maxResults", maxResults.toString())
    searchUrl.searchParams.set("order", "relevance")
    searchUrl.searchParams.set("key", API_KEY)

    console.log("🌐 URL da requisição:", searchUrl.toString())

    const response = await fetch(searchUrl.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    console.log("📡 Response status:", response.status)
    console.log("📡 Response headers:", Object.fromEntries(response.headers.entries()))

    const responseText = await response.text()
    console.log("📄 Response body (first 500 chars):", responseText.substring(0, 500))

    let data: YouTubeResponse
    try {
      data = JSON.parse(responseText)
    } catch (parseError) {
      console.error("❌ Erro ao fazer parse do JSON:", parseError)
      return {
        videos: getFallbackVideos(),
        error: "Erro ao processar resposta da API",
        debug: { responseText: responseText.substring(0, 200) },
      }
    }

    if (!response.ok) {
      console.error("❌ YouTube API Error:", {
        status: response.status,
        statusText: response.statusText,
        error: data.error,
      })

      return {
        videos: getFallbackVideos(),
        error: `YouTube API Error ${response.status}: ${data.error?.message || "Erro desconhecido"}`,
        debug: {
          status: response.status,
          apiError: data.error,
        },
      }
    }

    if (!data.items || data.items.length === 0) {
      console.warn("⚠️ Nenhum vídeo encontrado para:", query)
      return {
        videos: getFallbackVideos(),
        error: "Nenhum vídeo encontrado",
      }
    }

    console.log("✅ Vídeos encontrados:", data.items.length)

    const processedVideos = data.items.map((video, index) => processYouTubeVideo(video, index))

    return {
      videos: processedVideos,
    }
  } catch (error) {
    console.error("💥 Erro geral ao buscar vídeos:", error)
    return {
      videos: getFallbackVideos(),
      error: `Erro de conexão: ${error instanceof Error ? error.message : "Erro desconhecido"}`,
      debug: { error: error instanceof Error ? error.stack : error },
    }
  }
}

function processYouTubeVideo(video: YouTubeVideo, index: number): ProcessedVideo {
  const title = video.snippet.title
  const description = video.snippet.description

  // Determinar nível baseado no título/descrição
  let nivel: "Iniciante" | "Intermediário" | "Avançado" = "Iniciante"
  if (title.toLowerCase().includes("avançado") || title.toLowerCase().includes("profissional")) {
    nivel = "Avançado"
  } else if (title.toLowerCase().includes("intermediário") || title.toLowerCase().includes("médio")) {
    nivel = "Intermediário"
  }

  // Determinar categoria
  let categoria = "Básico"
  if (title.toLowerCase().includes("máquina")) categoria = "Máquinas"
  else if (title.toLowerCase().includes("bordado")) categoria = "Bordado"
  else if (title.toLowerCase().includes("capulana")) categoria = "Capulanas"
  else if (title.toLowerCase().includes("conserto")) categoria = "Consertos"
  else if (title.toLowerCase().includes("roupa") || title.toLowerCase().includes("vestido")) categoria = "Roupas"

  return {
    id: video.id.videoId,
    titulo: title,
    descricao: description.substring(0, 150) + "...",
    thumbnail: video.snippet.thumbnails.medium?.url || video.snippet.thumbnails.high?.url,
    canal: video.snippet.channelTitle,
    dataPublicacao: video.snippet.publishedAt,
    url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
    duracao: generateRandomDuration(),
    visualizacoes: Math.floor(Math.random() * 5000) + 100,
    rating: Number((4.0 + Math.random() * 1.0).toFixed(1)),
    nivel,
    categoria,
    premium: false,
    instrutor: video.snippet.channelTitle,
  }
}

function generateRandomDuration(): string {
  const minutes = Math.floor(Math.random() * 45) + 5
  const seconds = Math.floor(Math.random() * 60)
  return `${minutes}:${seconds.toString().padStart(2, "0")}`
}

function getFallbackVideos(): ProcessedVideo[] {
  return [
    {
      id: "fallback-1",
      titulo: "Primeiros Passos na Costura - Tutorial Básico",
      descricao:
        "Aprenda os fundamentos básicos da costura. Tutorial completo para iniciantes que querem começar a costurar.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      canal: "Costura Fácil",
      dataPublicacao: new Date().toISOString(),
      url: "#",
      duracao: "15:30",
      visualizacoes: 1250,
      rating: 4.8,
      nivel: "Iniciante",
      categoria: "Básico",
      premium: false,
      instrutor: "Professora Ana",
    },
    {
      id: "fallback-2",
      titulo: "Como Usar a Máquina de Costura - Guia Completo",
      descricao:
        "Tutorial completo sobre máquinas de costura para iniciantes. Aprenda todas as funções básicas e dicas importantes.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      canal: "Máquinas e Costura",
      dataPublicacao: new Date().toISOString(),
      url: "#",
      duracao: "22:45",
      visualizacoes: 980,
      rating: 4.9,
      nivel: "Iniciante",
      categoria: "Máquinas",
      premium: false,
      instrutor: "João Silva",
    },
    {
      id: "fallback-3",
      titulo: "Bordado à Mão - Técnicas Tradicionais",
      descricao:
        "Aprenda técnicas tradicionais de bordado à mão. Perfeito para quem quer adicionar detalhes especiais às suas peças.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      canal: "Arte em Bordado",
      dataPublicacao: new Date().toISOString(),
      url: "#",
      duracao: "28:15",
      visualizacoes: 642,
      rating: 4.6,
      nivel: "Intermediário",
      categoria: "Bordado",
      premium: false,
      instrutor: "Maria Santos",
    },
    {
      id: "fallback-4",
      titulo: "Costura de Roupas Infantis - Passo a Passo",
      descricao:
        "Aprenda a costurar roupinhas de bebê e crianças. Técnicas especiais para tecidos delicados e acabamentos perfeitos.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      canal: "Costura Infantil",
      dataPublicacao: new Date().toISOString(),
      url: "#",
      duracao: "35:20",
      visualizacoes: 756,
      rating: 4.7,
      nivel: "Intermediário",
      categoria: "Roupas",
      premium: false,
      instrutor: "Carla Lima",
    },
    {
      id: "fallback-5",
      titulo: "Consertos Básicos de Roupas",
      descricao:
        "Como fazer consertos simples em roupas. Aprenda a dar nova vida às suas peças favoritas com técnicas fáceis.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      canal: "Consertos Fáceis",
      dataPublicacao: new Date().toISOString(),
      url: "#",
      duracao: "18:45",
      visualizacoes: 834,
      rating: 4.5,
      nivel: "Iniciante",
      categoria: "Consertos",
      premium: false,
      instrutor: "Pedro Costa",
    },
    {
      id: "fallback-6",
      titulo: "Técnicas Avançadas de Costura",
      descricao:
        "Para quem já tem experiência e quer aprender técnicas mais complexas. Acabamentos profissionais e truques especiais.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      canal: "Costura Profissional",
      dataPublicacao: new Date().toISOString(),
      url: "#",
      duracao: "42:10",
      visualizacoes: 423,
      rating: 4.9,
      nivel: "Avançado",
      categoria: "Básico",
      premium: true,
      instrutor: "Mestre Roberto",
    },
  ]
}

export async function searchMultipleQueries(maxPerQuery = 4): Promise<{ videos: ProcessedVideo[]; errors: string[] }> {
  const allVideos: ProcessedVideo[] = []
  const errors: string[] = []

  console.log("🔍 Iniciando busca múltipla...")

  for (const query of SEARCH_QUERIES) {
    try {
      console.log(`🔎 Buscando: ${query}`)
      const result = await fetchYouTubeVideos(query, maxPerQuery)

      if (result.error) {
        errors.push(`${query}: ${result.error}`)
      }

      allVideos.push(...result.videos)
    } catch (error) {
      const errorMsg = `${query}: ${error instanceof Error ? error.message : "Erro desconhecido"}`
      console.error(`❌ Erro ao buscar "${query}":`, error)
      errors.push(errorMsg)
    }
  }

  // Remover duplicatas baseado no ID
  const uniqueVideos = allVideos.filter((video, index, self) => index === self.findIndex((v) => v.id === video.id))

  console.log(`✅ Total de vídeos únicos: ${uniqueVideos.length}`)
  console.log(`⚠️ Total de erros: ${errors.length}`)

  return {
    videos: uniqueVideos.slice(0, 24), // Máximo 24 vídeos
    errors,
  }
}

// Função para testar a API
export async function testYouTubeAPI(): Promise<{
  success: boolean
  message: string
  details?: any
}> {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY

    if (!API_KEY) {
      return {
        success: false,
        message: "API Key não configurada",
      }
    }

    // Teste simples
    const testUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=test&type=video&maxResults=1&key=${API_KEY}`

    const response = await fetch(testUrl)
    const data = await response.json()

    if (response.ok) {
      return {
        success: true,
        message: "API funcionando corretamente!",
        details: {
          status: response.status,
          itemsFound: data.items?.length || 0,
        },
      }
    } else {
      return {
        success: false,
        message: `Erro na API: ${data.error?.message || "Erro desconhecido"}`,
        details: data.error,
      }
    }
  } catch (error) {
    return {
      success: false,
      message: `Erro de conexão: ${error instanceof Error ? error.message : "Erro desconhecido"}`,
    }
  }
}
