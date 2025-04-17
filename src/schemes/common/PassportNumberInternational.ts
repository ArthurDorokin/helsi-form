import * as yup from 'yup'
import { PASSPORT_NUM_INTERNATIONAL_REGEX } from '../../constants/constant.ts'

export const PassportNumberInternationalInputSchema = yup.object().shape({
  passportNumberInternational: yup
    .string()
    .matches(PASSPORT_NUM_INTERNATIONAL_REGEX, 'Запис № має відповідати формату РРРРММДД-ХХХХХ'),
})

export type PassportNumberInternationalInput = yup.InferType<
  typeof PassportNumberInternationalInputSchema
>
