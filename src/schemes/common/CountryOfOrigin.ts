import * as yup from 'yup'

export const CountryOfOriginInputSchema = yup.object().shape({
  countryOfOrigin: yup
    .string()
    .trim()
    .min(2, 'Країна походження повинна містити щонайменше 2 символи')
    .max(50, 'Країна походження не повинна перевищувати 50 символів')
    .required('Поле не може бути пустим'),
})

export type CountryOfOriginInput = yup.InferType<typeof CountryOfOriginInputSchema>
