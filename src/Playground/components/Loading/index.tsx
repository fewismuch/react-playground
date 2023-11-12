import React from 'react'

import styles from './index.module.less'

interface Props {
  finished?: boolean
}

export const Loading: React.FC<Props> = ({ finished = false }) => {
  return finished ? null : <div className={styles.loader}></div>
}
