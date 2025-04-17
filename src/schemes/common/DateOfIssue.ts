import * as yup from 'yup'
import { DATE_REGEX } from '../../constants/constant.ts'
import { isRealDate } from '../../utils/utils.ts'

export const DateOfIssueInputSchema = yup.object().shape({
  dateOfIssue: yup
    .string()
    .matches(DATE_REGEX, 'Дата повинна бути у форматі ДД.ММ.РРРР')
    .required('Поле не може бути пустим')
    .test('real-date-check', 'Невірна дата', (value) => {
      if (!value) return false
      return isRealDate(value)
    }),
})

export type DateOfIssueInput = yup.InferType<typeof DateOfIssueInputSchema>
