import { type NextRequest, NextResponse } from "next/server"
import { fetchYouTubeVideos, searchMultipleQueries, testYouTubeAPI } from "@/lib/youtube-api"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q") || "costura básica"
    const maxResults = Number.parseInt(searchParams.get("maxResults") || "12")
    const multiple = searchParams.get("multiple") === "true"
    const test = searchParams.get("test") === "true"

    console.log("🚀 API YouTube chamada:", {
      query,
      maxResults,
      multiple,
      test,
    })

    // Teste da API
    if (test) {
      const testResult = await testYouTubeAPI()
      return NextResponse.json(testResult)
    }

    let result
    if (multiple) {
      result = await searchMultipleQueries(4)
      return NextResponse.json({
        success: true,
        videos: result.videos,
        total: result.videos.length,
        errors: result.errors,
        usingFallback: result.videos.every((v) => v.id.startsWith("fallback")),
      })
    } else {
      result = await fetchYouTubeVideos(query, maxResults)
      return NextResponse.json({
        success: true,
        videos: result.videos,
        total: result.videos.length,
        error: result.error,
        debug: result.debug,
        usingFallback: result.videos.every((v) => v.id.startsWith("fallback")),
      })
    }
  } catch (error) {
    console.error("💥 Erro na API YouTube:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Erro interno do servidor",
        message: error instanceof Error ? error.message : "Erro desconhecido",
        videos: [],
      },
      { status: 500 },
    )
  }
}
