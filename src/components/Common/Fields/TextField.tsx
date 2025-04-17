import { FC } from 'react'
import { Field } from 'react-final-form'
import classes from './Fields.module.scss'
import { SwitcherField } from '../Switcher'
import { SHOULD_LIFT_LABEL } from '../../../constants/constant.ts'
import { useFieldSwitcher } from '../../../utils/hooks'

interface InputFieldProps {
  name: string
  label?: string
  required?: boolean
  type?: string
  withSwitcher?: boolean
  placeholder?: string
}

export const TextField: FC<InputFieldProps> = ({
  name,
  label,
  required = false,
  type = 'text',
  withSwitcher = false,
  placeholder = '',
}) => {
  const { isDisabled, handleToggle, field } = useFieldSwitcher(name)

  return (
    <div className={classes.wrapper}>
      {/* If there is text for the switcher, then we display it */}
      {withSwitcher && <SwitcherField checked={!isDisabled} onChange={handleToggle} />}

      <Field name={name}>
        {({ input, meta }) => (
          <>
            <input
              {...input}
              id={name}
              type={type}
              placeholder={placeholder}
              autoComplete="off"
              className={`${classes.input} ${meta.error && meta.touched ? classes.error_input : ''}`}
              disabled={isDisabled}
            />
            <label
              htmlFor={name}
              className={`${classes.label} ${
                SHOULD_LIFT_LABEL.includes(name) ? classes.activeLabel : ''
              }`}
            >
              {label}
              {required && <span className={classes.requiredLabel}> *</span>}
            </label>
            {meta.touched && meta.error && <div className={classes.error}>{meta.error}</div>}

            {/* The text that is displayed under the input */}
            {(withSwitcher ? isDisabled : true) && field.helperText && (
              <div className={classes.helperText}>{field.helperText}</div>
            )}
          </>
        )}
      </Field>
    </div>
  )
}
