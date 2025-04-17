import * as yup from 'yup'

export const PatronymicInputSchema = yup.object().shape({
  patronymic: yup
    .string()
    .trim()
    .min(2, 'По батькові повинно містити щонайменше 2 символи')
    .max(50, 'По батькові не повинно перевищувати 50 символів')
    .required('Поле не може бути пустим'),
})

export type PatronymicInput = yup.InferType<typeof PatronymicInputSchema>
