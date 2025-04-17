import * as yup from 'yup'

export const PlaceOfBirthInputSchema = yup.object().shape({
  placeOfBirth: yup
    .string()
    .trim()
    .min(2, 'Місце народження повинно містити щонайменше 2 символи')
    .max(50, 'Місце народження не повинно перевищувати 50 символів')
    .required('Поле не може бути пустим'),
})

export type PlaceOfBirthInput = yup.InferType<typeof PlaceOfBirthInputSchema>
