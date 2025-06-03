"use client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface LanguageSwitcherProps {
  currentLanguage: string
  setCurrentLanguage: (lang: string) => void
}

export function LanguageSwitcher({ currentLanguage, setCurrentLanguage }: LanguageSwitcherProps) {
  const languages = [
    { code: "PT", name: "Português" },
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
    { code: "FR", name: "Français" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2 text-pink-600 hover:text-pink-700">
          <Globe className="w-4 h-4" />
          <span>{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setCurrentLanguage(lang.code)}
            className={currentLanguage === lang.code ? "bg-pink-50 text-pink-600 font-medium" : ""}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
