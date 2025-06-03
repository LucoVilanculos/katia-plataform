import { Suspense } from "react"
import SplashScreen from "@/components/layout/splash-screen"
import PublicHomePage from "@/components/pages/public-home-page"

export default function Page() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <PublicHomePage />
    </Suspense>
  )
}
