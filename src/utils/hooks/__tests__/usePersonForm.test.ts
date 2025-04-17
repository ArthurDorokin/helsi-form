import { renderHook } from '@testing-library/react'
import { usePersonForm } from '../usePersonForm'
import { InferType } from 'yup'
import { PersonCreationSchema } from '../../../schemes/PersonCreationSchema.ts'

// Get the type from the schema
type FormValues = InferType<typeof PersonCreationSchema>

describe('usePersonForm', () => {
  it('возвращает пустой объект ошибок при валидных значениях', async () => {
    const { result } = renderHook(() => usePersonForm())

    // Typify validValues with FormValues
    const validValues: FormValues = {
      lastName: 'Петренко',
      firstName: 'Олег',
      patronymic: 'Іванович',
      identificationCode: '1234567890',
      birthDate: '01.01.1990',
      gender: 'male',
      countryOfOrigin: 'Україна',
      placeOfBirth: 'Львів',
      preferredContactMethod: 'phone',
      secretWord: 'секрет1',
      phoneNumber: '+38 (067) 123-45-67',
      email: 'test@example.com',
      documentType: 'Pasport (ID‑kartka)',
      passportSeries: 'АБВ123456',
      dateOfIssue: '05.05.2005',
      expiryDate: '05.05.2030',
      issuedBy: 'МВС',
      passportNumberInternational: '20000101-12345',
    }

    // Typify errors using FormValues
    const errors: Record<keyof FormValues, string | undefined> =
      await result.current.validate(validValues)

    // Check that there are no errors
    expect(errors).toEqual({})
  })
})
