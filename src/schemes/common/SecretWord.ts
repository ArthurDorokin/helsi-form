import * as yup from 'yup'

export const SecretWordInputSchema = yup.object().shape({
  secretWord: yup
    .string()
    .min(6, 'Секретне слово повинно містити не менше 6 символів')
    .required('Поле не може бути пустим'),
})

export type SecretWordInput = yup.InferType<typeof SecretWordInputSchema>
