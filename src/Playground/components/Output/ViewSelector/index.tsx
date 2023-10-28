import classnames from 'classnames'
import React from 'react'

import { IViewSelector } from '../../../types.ts'

import styles from './index.module.less'

export const ViewSelector: React.FC<IViewSelector> = (props) => {
  const { onChange, items, value = items[0], hidden } = props

  return hidden ? null : (
    <div className={styles.tabs}>
      {items.map((name) => (
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
