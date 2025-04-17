import * as yup from 'yup'
import { DATE_REGEX } from '../../constants/constant.ts'
import { isRealDate } from '../../utils/utils.ts'

export const BirthDateInputSchema = yup.object().shape({
  birthDate: yup
    .string()
    .matches(DATE_REGEX, 'Дата народження повинна бути у форматі ДД.ММ.РРРР')
    .required('Поле не може бути пустим')
    .test('real-date-check', 'Невірна дата', (value) => {
      if (!value) return false
      return isRealDate(value)
    }),
})

export type BirthDateInput = yup.InferType<typeof BirthDateInputSchema>
