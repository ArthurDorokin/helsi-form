import { useCallback, useState } from 'react'
import { useForm } from 'react-final-form'
import { FIELD_HELPER_TEXT_DATA } from '../../constants/constant.ts'

export const useFieldSwitcher = (name: string) => {
  const form = useForm()
  const [isDisabled, setIsDisabled] = useState(false)

  const field = FIELD_HELPER_TEXT_DATA[name] || { value: '', helperText: '' }

  const handleToggle = useCallback(() => {
    const newDisabledState = !isDisabled
    setIsDisabled(newDisabledState)

    const finalValue = !newDisabledState ? '' : field.value
    form.change(name, finalValue)
  }, [field.value, form, isDisabled, name])

  return {
    isDisabled,
    handleToggle,
    field,
  }
}
