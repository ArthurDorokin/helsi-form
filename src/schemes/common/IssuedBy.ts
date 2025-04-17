import * as yup from 'yup'

export const IssuedByInputSchema = yup.object().shape({
  issuedBy: yup
    .string()
    .trim()
    .min(2, 'Ким видано повинно містити щонайменше 2 символи')
    .max(50, 'Ким видано не повинно перевищувати 50 символів')
    .required('Поле не може бути пустим'),
})

export type IssuedByInput = yup.InferType<typeof IssuedByInputSchema>
