import classes from './App.module.scss'
import { Form } from 'react-final-form'
import { TextAreaField, TextField } from './components/Common/Fields'
import IconArrowToBack from './assets/images/icons/icon-arrow-to-back.svg'
import { SelectField } from './components/Common/Selectors'
import { documentTypeData, genderData, preferredContactMethodData } from './utils/Data.ts'
import { Grid } from './components/Layouts'
import { SPACING_M, SPACING_S } from './constants/spacing.ts'
import { PhoneField } from './components/Common/Fields'
import { SubmitButton } from './components/Common/Buttons'
import { usePersonForm } from './utils/hooks'

function App() {
  const { validate, onSubmit } = usePersonForm()

  return (
    <div className={classes.wrap}>
      <div className={classes.headerTabl}>
        <IconArrowToBack />
        <h2>Створення персони</h2>
      </div>

      <div className={classes.wrapFrom}>
        <Form onSubmit={onSubmit} validate={validate}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.patientData}>
                <h2>Дані пацієнта</h2>
                <Grid columns={3} gap={SPACING_M.XL} rowGap={SPACING_S.XL}>
                  <TextField name="lastName" label="Прізвище" required />
                  <TextField name="firstName" label="Імʼя" required />
                  <TextField name="patronymic" label="По батькові" required withSwitcher />
                  <TextField name="identificationCode" label="РНОКПП (ІПН)" required withSwitcher />
                  <TextField name="birthDate" label="Дата народження" required />
                  <SelectField name="gender" label="Стать" required options={genderData} />
                </Grid>

                <Grid columns={2} gap={SPACING_M.XL} rowGap={SPACING_S.XL}>
                  <TextField name="countryOfOrigin" label="Країна походження" required />
                  <TextField name="placeOfBirth" label="Місце народження" required />
                  <SelectField
                    name="preferredContactMethod"
                    label="Бажаний спосіб звʼязку із пацієнтом"
                    options={preferredContactMethodData}
                  />
                  <TextField
                    name="secretWord"
                    label="Секретне слово (не менше 6 символів)"
                    required
                  />
                  <PhoneField name="phoneNumber" label="Контактний номер телефону" />
                  <TextField
                    name="email"
                    label="Адреса електронної пошти"
                    placeholder={'example@example.com'}
                  />
                </Grid>

                <h2>Документи, що посвідчує особу</h2>
                <Grid columns={2} gap={SPACING_M.XL} rowGap={SPACING_S.XL}>
                  <SelectField
                    name="documentType"
                    label="Тип документу"
                    required
                    options={documentTypeData}
                  />
                  <TextField name="passportSeries" label="Серія (за наявністі), номер" required />
                  <TextField
                    name="dateOfIssue"
                    label="Коли видано"
                    placeholder={'31.12.1971'}
                    required
                  />
                  <TextField name="expiryDate" label="Діє до" placeholder={'31.12.1971'} />
                  <TextAreaField name="issuedBy" label="Ким видано" required />
                  <TextField
                    name="passportNumberInternational"
                    label="Запис № (УНЗР)"
                    placeholder={'РРРРММДД-ХХХХХ'}
                  />
                </Grid>
              </div>

              <SubmitButton />
            </form>
          )}
        </Form>
      </div>
    </div>
  )
}

export default App
