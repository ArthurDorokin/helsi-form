import { useCallback } from 'react'
import { PersonCreationSchema } from '../../schemes/PersonCreationSchema'
import { InferType, ValidationError } from 'yup'

type FormValues = InferType<typeof PersonCreationSchema>

export const usePersonForm = () => {
  const validate = useCallback(async (values: FormValues) => {
    try {
      await PersonCreationSchema.validate(values, { abortEarly: false })
      return {}
    } catch (err: unknown) {
      const errors: Record<string, string> = {}

      if (err instanceof ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) {
            errors[error.path] = error.message
          }
        })
      }

      return errors
    }
  }, [])

  const onSubmit = useCallback((values: FormValues) => {
    console.log('Відправлено:', values)
  }, [])

  return {
    validate,
    onSubmit,
  }
}
