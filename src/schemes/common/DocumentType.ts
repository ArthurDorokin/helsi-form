import * as yup from 'yup'

export const DocumentTypeInputSchema = yup.object().shape({
  documentType: yup
    .string()
    .oneOf(
      [
        'Posvidchennia osoby, yaka potrebuie dodatkovoho zakhystu',
        'Pasport (ID‑kartka)',
        'Pasport (knyzhechka)',
        'Posvidka na postiyne prozhyvannia v Ukraini',
        'Posvidka bizhentsia',
        'Posvidka na prozhyvannia',
        'Tymchasove posvidchennia hromadianyna Ukrainy',
      ],
      'Виберіть правильний тип документа',
    )
    .required('Тип документа є обовʼязковим'),
})

export type DocumentTypeInput = yup.InferType<typeof DocumentTypeInputSchema>
