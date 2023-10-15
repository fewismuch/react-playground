import React from 'react'
import classnames from 'classnames'
import styles from './index.module.less'

interface Props {
  onChange: (viewType: string) => void
  items: string[]
  value?: string
  hidden?: boolean
}

export const ViewSelector: React.FC<Props> = props => {
  const { onChange, items, value = items[0], hidden } = props

  return (
    <div className={styles.tabs} style={{ display: hidden ? 'none' : '' }}>
      {items.map(name => (
        <div
          key={name}
          className={classnames(styles.tabItem, value === name ? styles.activated : '')}
          onClick={() => onChange(name)}
        >
          {name}
        </div>
      ))}
    </div>
  )
}
