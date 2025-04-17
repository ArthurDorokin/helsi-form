import * as yup from 'yup'

export const LastNameInputSchema = yup.object().shape({
  lastName: yup
    .string()
    .trim()
    .min(2, 'Прізвище повинно містити щонайменше 2 символи')
    .max(50, 'Прізвище не повинно перевищувати 50 символів')
    .required('Поле не може бути пустим'),
})

export type LastNameInput = yup.InferType<typeof LastNameInputSchema>
