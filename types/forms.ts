// This file will contain TypeScript types and interfaces for forms.
// It will be created as a new file based on the provided instructions.

// Example form schema (replace with your actual form schemas)
export interface ExampleForm {
  name: string
  email: string
  age: number
  price: number // Updated to use MZN values
}

// Example usage of the form schema
export const defaultExampleFormValues: ExampleForm = {
  name: "",
  email: "",
  age: 18,
  price: 12699.0, // MT 12.699,00 (aproximadamente) - Updated price in MZN
}

// You can define more form schemas and related types/interfaces here as needed.

// Example of a type for form errors
export type ExampleFormErrors = {
  name?: string
  email?: string
  age?: string
  price?: string
}
