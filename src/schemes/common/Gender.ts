import * as yup from 'yup'

export const GenderInputSchema = yup.object().shape({
  gender: yup
    .string()
    .oneOf(['male', 'female'], 'Виберіть правильний варіант для статі')
    .required('Стать є обовʼязковою'),
})

export type GenderInput = yup.InferType<typeof GenderInputSchema>
