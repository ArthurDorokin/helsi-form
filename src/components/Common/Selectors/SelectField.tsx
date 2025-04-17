import { FC } from 'react'
import { Field } from 'react-final-form'
import classes from './SelectField.module.scss'

interface Option {
  id: number
  label: string
  value: string
}

interface SelectFieldProps {
  name: string
  label?: string
  required?: boolean
  options: Option[]
}

export const SelectField: FC<SelectFieldProps> = ({ name, label, required = false, options }) => {
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <div className={classes.wrapper}>
          <select
            {...input}
            id={name}
            className={`${classes.select} ${meta.touched && meta.error ? classes.error_select : ''}`}
          >
            <option value="" disabled hidden>
              -- Вибрати --
            </option>
            {[{ id: -1, value: '', label: '-- Вибрати --' }, ...options].map((opt) => (
              <option key={opt.id} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <label htmlFor={name} className={classes.label}>
            {label}
            {required && <span className={classes.requiredLabel}> *</span>}
          </label>
          {meta.touched && meta.error && <div className={classes.error}>{meta.error}</div>}
        </div>
      )}
    </Field>
  )
}
