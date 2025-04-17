import * as yup from 'yup'
import { REG_EXP_EMAIL } from '../../constants/constant.ts'

export const EmailInputSchema = yup.object().shape({
  email: yup
    .string()
    .matches(REG_EXP_EMAIL, 'Будь ласка, введіть коректну адресу електронної пошти'),
  // .required('Поле не може бути пустим'),
})

export type EmailInput = yup.InferType<typeof EmailInputSchema>
