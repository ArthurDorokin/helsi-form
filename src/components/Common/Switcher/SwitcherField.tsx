import { FC } from 'react'
import clsx from 'clsx'
import classes from './SwitcherField.module.scss'

interface SwitcherProps {
  checked: boolean
  onChange: () => void
}

export const SwitcherField: FC<SwitcherProps> = ({ checked, onChange }) => {
  return (
    <div className={clsx(classes.switch, { [classes.checked]: checked })} onClick={onChange}>
      <div className={classes.thumb} />
    </div>
  )
}
