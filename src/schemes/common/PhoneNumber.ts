import * as yup from 'yup'
import { PHONE_NUMBER_REGEX } from '../../constants/constant.ts'

export const PhoneNumberInputSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(PHONE_NUMBER_REGEX, 'Некоректний номер телефона. Приклад: +38(093) 999-88-77'),
  // .required('Поле не може бути пустим'),
})

export type PhoneNumberInput = yup.InferType<typeof PhoneNumberInputSchema>
