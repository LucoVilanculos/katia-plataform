import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ContactPage from "@/components/pages/contact-page"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header darkMode={false} setDarkMode={() => {}} />
      <ContactPage />
      <Footer />
    </div>
  )
}
