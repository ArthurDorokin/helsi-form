import * as yup from 'yup'

export const PreferredContactMethodInputSchema = yup.object().shape({
  preferredContactMethod: yup
    .string()
    .oneOf(['email', 'phone'], 'Виберіть правильний варіант звʼязку з клієнтом'),
})

export type PreferredContactMethodInput = yup.InferType<typeof PreferredContactMethodInputSchema>
