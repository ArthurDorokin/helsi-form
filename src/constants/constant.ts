export const REG_EXP_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const PHONE_NUMBER_REGEX = /^\+\d{2} \(\d{3}\) \d{3}-\d{2}-\d{2}$/
export const IDENTIFICATION_CODE_REGEX = /^\d{10}$/
export const PASSPORT_SERIES_REGEX = /^[А-Яа-яЇїЄєІіЇї]{3}\d{5,9}$/
export const PASSPORT_NUM_INTERNATIONAL_REGEX = /^\d{4}\d{2}\d{2}-\d{5}$/
export const DATE_REGEX = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/

export const SHOULD_LIFT_LABEL = [
  'phoneNumber',
  'email',
  'dateOfIssue',
  'expiryDate',
  'passportNumberInternational',
]

export const FIELD_HELPER_TEXT_DATA: { [key: string]: { value: string; helperText: string } } = {
  identificationCode: {
    value: 'Немає РНОКПП (ІПН)',
    helperText: 'Немає ІПН за віком чи має відмітку у паспорті',
  },
  patronymic: {
    value: 'Немає по батькові',
    helperText: 'Немає по батькові згідно документів',
  },
  passportNumberInternational: {
    value: '',
    helperText: 'Вкажіть унікальний номер запису в Демографічному реєстрі (Запис №)',
  },
}
