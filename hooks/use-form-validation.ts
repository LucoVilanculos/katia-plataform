import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type * as z  from "zod"

export function useFormValidation<T extends z.ZodType<any, any>>(
  schema: T,
  defaultValues?: z.infer<T>
) {
  return useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  })
}
