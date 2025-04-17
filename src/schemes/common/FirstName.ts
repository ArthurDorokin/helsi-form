import * as yup from 'yup'

export const FirstNameInputSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Імʼя повинно містити щонайменше 2 символи')
    .max(50, 'Імʼя не повинно перевищувати 50 символів')
    .required('Поле не може бути пустим'),
})

export type FirstNameInput = yup.InferType<typeof FirstNameInputSchema>
