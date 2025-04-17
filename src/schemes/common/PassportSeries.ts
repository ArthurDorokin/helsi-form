import * as yup from 'yup'
import { PASSPORT_SERIES_REGEX } from '../../constants/constant.ts'

export const PassportSeriesInputSchema = yup.object().shape({
  passportSeries: yup
    .string()
    .matches(PASSPORT_SERIES_REGEX, 'Номер введено некоректно, поле повинно містити 9 цифр')
    .required('Поле не може бути пустим'),
})

export type PassportSeriesInput = yup.InferType<typeof PassportSeriesInputSchema>
