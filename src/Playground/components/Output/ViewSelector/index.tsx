import classnames from 'classnames'
import React from 'react'

import styles from './index.module.less'

interface Props {
  onChange: (viewType: string) => void
  items: string[]
  value?: string
  hidden?: boolean
}

export const ViewSelector: React.FC<Props> = props => {
  const { onChange, items, value = items[0], hidden } = props

  return hidden ? null : (
    <div className={styles.tabs}>
      {items.map(name => (
        <div
          key={name}
          className={classnames(styles['tab-item'], value === name ? styles.actived : '')}
          onClick={() => onChange(name)}
        >
          {name}
        </div>
      ))}
    </div>
  )
}
