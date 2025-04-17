import { PatientDataCollectionSchema } from './collection/PatientData.ts'
import * as yup from 'yup'
import { IdentityDocumentsCollectionSchema } from './collection/IdentityDocuments.ts'

export const PersonCreationSchema = PatientDataCollectionSchema.concat(
  IdentityDocumentsCollectionSchema,
)

export type PatientDataInput = yup.InferType<typeof PersonCreationSchema>
