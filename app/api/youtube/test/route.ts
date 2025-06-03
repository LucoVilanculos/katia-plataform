import { NextResponse } from "next/server"
import { testYouTubeAPI } from "@/lib/youtube-api"

export async function GET() {
  try {
    const result = await testYouTubeAPI()

    return NextResponse.json({
      ...result,
      timestamp: new Date().toISOString(),
      environment: {
        hasApiKey: !!process.env.YOUTUBE_API_KEY,
        apiKeyLength: process.env.YOUTUBE_API_KEY?.length || 0,
        nodeEnv: process.env.NODE_ENV,
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao testar API",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 },
    )
  }
}
