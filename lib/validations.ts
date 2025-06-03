import { z } from "zod"

// Validações customizadas
export const phoneValidation = z
  .string()
  .transform((val) => val.replace(/\D/g, ""))
  .refine((val) => val.length === 10 || val.length === 11, "Telefone inválido")

export const passwordValidation = z
  .string()
  .min(6, "Senha deve ter pelo menos 6 caracteres")
  .regex(/^(?=.*[a-z])/, "Deve conter pelo menos uma letra minúscula")
  .regex(/^(?=.*[A-Z])/, "Deve conter pelo menos uma letra maiúscula")
  .regex(/^(?=.*\d)/, "Deve conter pelo menos um número")

export const emailValidation = z
  .string()
  .min(1, "Email é obrigatório")
  .email("Email inválido")
  .transform((val) => val.toLowerCase())

// Validação de arquivo
export const fileValidation = z
  .instanceof(File)
  .refine((file) => file.size <= 5 * 1024 * 1024, "Arquivo deve ter no máximo 5MB")
  .refine(
    (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
    "Apenas imagens JPEG, PNG ou WebP são permitidas",
  )

// Validação de URL
export const urlValidation = z.string().url("URL inválida").optional().or(z.literal(""))
