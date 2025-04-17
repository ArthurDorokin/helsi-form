import * as yup from 'yup'
import { IDENTIFICATION_CODE_REGEX } from '../../constants/constant.ts'

export const IdentificationCodeInputSchema = yup.object().shape({
  identificationCode: yup
    .string()
    .matches(IDENTIFICATION_CODE_REGEX, 'РНОКПП (ІПН) має містити рівно 10 цифр')
    .required('Поле не може бути пустим'),
})

export type IdentificationCodeInput = yup.InferType<typeof IdentificationCodeInputSchema>
