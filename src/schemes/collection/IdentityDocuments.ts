import * as yup from 'yup'
import {
  DateOfIssueInputSchema,
  DocumentTypeInputSchema,
  ExpiryDateInputSchema,
  IssuedByInputSchema,
  PassportNumberInternationalInputSchema,
  PassportSeriesInputSchema,
} from '../common'

export const IdentityDocumentsCollectionSchema = DocumentTypeInputSchema.concat(
  PassportSeriesInputSchema,
)
  .concat(DateOfIssueInputSchema)
  .concat(ExpiryDateInputSchema)
  .concat(IssuedByInputSchema)
  .concat(PassportNumberInternationalInputSchema)

export type IdentityDocumentsCollection = yup.InferType<typeof IdentityDocumentsCollectionSchema>
