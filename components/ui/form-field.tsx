"use client"

import type React from "react"

import { forwardRef } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  description?: string
  variant?: "input" | "textarea"
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, description, variant = "input", className, ...props }, ref) => {
    const Component = variant === "textarea" ? Textarea : Input

    return (
      <div className="space-y-2">
        {label && (
          <Label htmlFor={props.id} className="text-sm font-medium">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </Label>
        )}

        <Component ref={ref} className={cn(error && "border-red-500 focus:border-red-500", className)} {...props} />

        {description && <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>}

        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      </div>
    )
  },
)

FormField.displayName = "FormField"
