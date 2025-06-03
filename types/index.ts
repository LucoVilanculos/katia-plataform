import type React from "react"
// Tipos principais da aplicação
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: "student" | "instructor" | "admin"
  createdAt: Date
  updatedAt: Date
}

export interface Course {
  id: string
  title: string
  description: string
  thumbnail: string
  instructor: User
  price: number
  duration: number // em minutos
  level: "beginner" | "intermediate" | "advanced"
  category: string
  tags: string[]
  rating: number
  studentsCount: number
  createdAt: Date
  updatedAt: Date
}

export interface Lesson {
  id: string
  courseId: string
  title: string
  description: string
  videoUrl: string
  duration: number
  order: number
  isPreview: boolean
  materials?: string[]
}

export interface Testimonial {
  id: string
  name: string
  avatar: string
  rating: number
  comment: string
  course?: string
  location?: string
  createdAt: Date
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  description: string
  features: string[]
  popular?: boolean
  premium?: boolean
  color: string
  icon: React.ReactNode
}

export interface Newsletter {
  email: string
  name?: string
  subscribedAt: Date
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface LoginForm {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterForm {
  name: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
  receiveUpdates?: boolean
}

export interface CourseProgress {
  userId: string
  courseId: string
  completedLessons: string[]
  progress: number // 0-100
  lastAccessedAt: Date
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt?: Date
}

export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  read: boolean
  createdAt: Date
}
