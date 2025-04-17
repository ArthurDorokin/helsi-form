import * as yup from 'yup'
import {
  BirthDateInputSchema,
  CountryOfOriginInputSchema,
  EmailInputSchema,
  FirstNameInputSchema,
  GenderInputSchema,
  IdentificationCodeInputSchema,
  LastNameInputSchema,
  PatronymicInputSchema,
  PhoneNumberInputSchema,
  PlaceOfBirthInputSchema,
  PreferredContactMethodInputSchema,
  SecretWordInputSchema,
} from '../common'

export const PatientDataCollectionSchema = LastNameInputSchema.concat(FirstNameInputSchema)
  .concat(PatronymicInputSchema)
  .concat(IdentificationCodeInputSchema)
  .concat(BirthDateInputSchema)
  .concat(GenderInputSchema)
  .concat(CountryOfOriginInputSchema)
  .concat(PlaceOfBirthInputSchema)
  .concat(PreferredContactMethodInputSchema)
  .concat(SecretWordInputSchema)
  .concat(PhoneNumberInputSchema)
  .concat(EmailInputSchema)

export type PatientDataCollection = yup.InferType<typeof PatientDataCollectionSchema>
