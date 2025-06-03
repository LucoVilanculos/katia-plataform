// Tipos para respostas da API
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface CourseFilters {
  category?: string
  level?: string
  priceRange?: [number, number]
  rating?: number
  search?: string
}

export interface DashboardStats {
  totalCourses: number
  completedCourses: number
  totalHours: number
  achievements: number
  currentStreak: number
}

export interface InstructorStats {
  totalStudents: number
  totalCourses: number
  totalRevenue: number
  averageRating: number
  monthlyEarnings: number[]
}

export interface AdminStats {
  totalUsers: number
  totalCourses: number
  totalRevenue: number
  activeUsers: number
  newSignups: number
  conversionRate: number
}
