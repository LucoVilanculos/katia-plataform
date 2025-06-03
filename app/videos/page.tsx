import ProfessionalHeader from "@/components/layout/professional-header"
import ProfessionalFooter from "@/components/layout/professional-footer"
import VideosPage from "@/components/pages/videos-page"

export default function Videos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ProfessionalHeader
        darkMode={false}
        setDarkMode={() => {}}
        user={{
          nome: "Visitante",
          tipo: "visitante",
        }}
      />
      <VideosPage />
      <ProfessionalFooter />
    </div>
  )
}
