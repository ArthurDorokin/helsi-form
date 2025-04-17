import { FC, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Grid.module.scss'

interface GridProps {
  columns?: number
  gap?: string
  rowGap?: string
  className?: string
  children: ReactNode
}

export const Grid: FC<GridProps> = ({
  columns = 3,
  gap = '24px',
  rowGap = '12px',
  className,
  children,
}) => {
  return (
    <div
      className={clsx(styles.grid, className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
        rowGap,
      }}
    >
      {children}
    </div>
  )
}
