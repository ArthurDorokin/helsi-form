import { FC } from 'react'
import { Field, useForm } from 'react-final-form'
import { IMaskInput } from 'react-imask'
import classes from './Fields.module.scss'
import { SHOULD_LIFT_LABEL } from '../../../constants/constant.ts'

interface PhoneFieldProps {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
}

export const PhoneField: FC<PhoneFieldProps> = ({
  name,
  label,
  placeholder = '+38 (___) ___-__-__',
  required = false,
}) => {
  const form = useForm()

  const handleAccept = (value: string) => {
    form.change(name, value)
  }

  return (
    <div className={classes.wrapper}>
      <Field name={name}>
        {({ input, meta }) => (
          <>
            <IMaskInput
              {...input}
              id={name}
              mask="+{38} (000) 000-00-00"
              unmask={false}
              placeholder={placeholder}
              className={`${classes.input} ${meta.error && meta.touched ? classes.error_input : ''}`}
              disabled={false}
              onAccept={handleAccept}
            />

            {label && (
              <label
                htmlFor={name}
                className={`${classes.label} ${
                  SHOULD_LIFT_LABEL.includes(name) ? classes.activeLabel : ''
                }`}
              >
                {label}
                {required && <span className={classes.requiredLabel}> *</span>}
              </label>
            )}

            {meta.touched && meta.error && <div className={classes.error}>{meta.error}</div>}
          </>
        )}
      </Field>
    </div>
  )
}
