import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina classes CSS condicionalmente e resolve conflitos do Tailwind
 * @param inputs - Classes CSS para combinar
 * @returns String com classes combinadas
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formata números para moeda moçambicana (Metical)
 * @param value - Valor numérico
 * @returns String formatada como moeda
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-MZ", {
    style: "currency",
    currency: "MZN",
  }).format(value)
}

/**
 * Formata data para o padrão brasileiro
 * @param date - Data para formatar
 * @returns String formatada
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat("pt-BR").format(dateObj)
}

/**
 * Formata data relativa (ex: "há 2 dias")
 * @param date - Data para formatar
 * @returns String formatada
 */
export function formatRelativeDate(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000)

  if (diffInSeconds < 60) return "agora mesmo"
  if (diffInSeconds < 3600) return `há ${Math.floor(diffInSeconds / 60)} min`
  if (diffInSeconds < 86400) return `há ${Math.floor(diffInSeconds / 3600)} h`
  if (diffInSeconds < 2592000) return `há ${Math.floor(diffInSeconds / 86400)} dias`

  return formatDate(dateObj)
}

/**
 * Trunca texto com reticências
 * @param text - Texto para truncar
 * @param maxLength - Comprimento máximo
 * @returns Texto truncado
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + "..."
}

/**
 * Gera slug a partir de texto
 * @param text - Texto para converter
 * @returns Slug formatado
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[^a-z0-9\s-]/g, "") // Remove caracteres especiais
    .replace(/\s+/g, "-") // Substitui espaços por hífens
    .replace(/-+/g, "-") // Remove hífens duplicados
    .trim()
}

/**
 * Valida email
 * @param email - Email para validar
 * @returns Boolean indicando se é válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Formata número de telefone brasileiro
 * @param phone - Telefone para formatar
 * @returns Telefone formatado
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "")

  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
  }
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
  }

  return phone
}

/**
 * Debounce function para otimizar performance
 * @param func - Função para fazer debounce
 * @param wait - Tempo de espera em ms
 * @returns Função com debounce aplicado
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Calcula tempo de leitura estimado
 * @param text - Texto para calcular
 * @returns Tempo em minutos
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

/**
 * Gera cor aleatória para avatar
 * @param name - Nome para gerar cor baseada
 * @returns Cor em hexadecimal
 */
export function generateAvatarColor(name: string): string {
  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#85C1E9",
  ]

  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

/**
 * Converte bytes para formato legível
 * @param bytes - Número de bytes
 * @returns String formatada (ex: "1.5 MB")
 */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

/**
 * Copia texto para clipboard
 * @param text - Texto para copiar
 * @returns Promise<boolean> indicando sucesso
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error("Erro ao copiar para clipboard:", error)
    return false
  }
}

/**
 * Gera ID único
 * @returns String com ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

/**
 * Verifica se está em modo escuro
 * @returns Boolean indicando modo escuro
 */
export function isDarkMode(): boolean {
  if (typeof window === "undefined") return false
  return document.documentElement.classList.contains("dark")
}

/**
 * Scroll suave para elemento
 * @param elementId - ID do elemento
 * @param offset - Offset em pixels (opcional)
 */
export function scrollToElement(elementId: string, offset = 0): void {
  const element = document.getElementById(elementId)
  if (element) {
    const top = element.offsetTop - offset
    window.scrollTo({ top, behavior: "smooth" })
  }
}

/**
 * Converte USD para Metical moçambicano
 * @param usdValue - Valor em USD
 * @param exchangeRate - Taxa de câmbio (padrão: 63.5 MZN por USD)
 * @returns Valor em MZN
 */
export function convertToMZN(usdValue: number, exchangeRate = 63.5): number {
  return usdValue * exchangeRate
}

/**
 * Formata preço com desconto em Metical
 * @param originalPrice - Preço original
 * @param discountPercent - Percentual de desconto
 * @returns Objeto com preços formatados
 */
export function formatPriceWithDiscount(originalPrice: number, discountPercent: number) {
  const discountAmount = originalPrice * (discountPercent / 100)
  const finalPrice = originalPrice - discountAmount

  return {
    original: formatCurrency(originalPrice),
    discount: `${discountPercent}% OFF`,
    final: formatCurrency(finalPrice),
    savings: formatCurrency(discountAmount),
  }
}
