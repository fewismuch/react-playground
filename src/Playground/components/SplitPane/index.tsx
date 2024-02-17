// @ts-ignore
import { Allotment } from 'allotment'
import classnames from 'classnames'
import React, { useRef, useState } from 'react'

import styles from './index.module.less'

import type { ISplitPane } from '@/Playground/types'

import 'allotment/dist/style.css'

export const SplitPane: React.FC<ISplitPane> = (props) => {
  const { defaultSizes = [50, 100, 100] } = props

  const SplitLinePosition = {
    LEFT: [0, Infinity],
    CENTER: defaultSizes,
    RIGHT: [Infinity, 0],
  }

  const ref = useRef<any>(null)
  const [SplitLine, setSplitLine] = useState(SplitLinePosition.CENTER)

  const hiddenLeft = JSON.stringify(SplitLine) === JSON.stringify(SplitLinePosition.LEFT)
  const hiddenRight = JSON.stringify(SplitLine) === JSON.stringify(SplitLinePosition.RIGHT)

  const resize = () => {
    if (JSON.stringify(SplitLine) !== JSON.stringify(SplitLinePosition.CENTER)) {
      ref.current?.resize(SplitLinePosition.CENTER)
      setSplitLine(SplitLinePosition.CENTER)
      return true
    }
    return false
  }

  const handleCollapseLeft = () => {
    if (!resize()) {
      ref.current?.resize(SplitLinePosition.LEFT)
      setSplitLine(SplitLinePosition.LEFT)
    }
  }

  const handleCollapseRight = () => {
    if (!resize()) {
      ref.current?.resize(SplitLinePosition.RIGHT)
      setSplitLine(SplitLinePosition.RIGHT)
    }
  }

  return (
    <Allotment ref={ref} defaultSizes={defaultSizes}>
      <Allotment.Pane snap minSize={0}>
        {props.children?.[0]}
        <div className={classnames(styles['collapse-left'], hiddenRight ? styles.active : '')}>
          <div className={styles['collapse-btn']} onClick={handleCollapseLeft}></div>
        </div>
      </Allotment.Pane>
      <Allotment.Pane snap minSize={0}>
        <div className={classnames(styles['collapse-right'], hiddenLeft ? styles.active : '')}>
          <div className={styles['collapse-btn']} onClick={handleCollapseRight}></div>
        </div>
        {props.children?.[1]}
        <div className={classnames(styles['collapse-left'], hiddenRight ? styles.active : '')}>
          <div className={styles['collapse-btn']} onClick={handleCollapseLeft}></div>
        </div>
      </Allotment.Pane>

      <Allotment.Pane snap minSize={0}>
        <div className={classnames(styles['collapse-right'], hiddenLeft ? styles.active : '')}>
          <div className={styles['collapse-btn']} onClick={handleCollapseRight}></div>
        </div>
        {props.children?.[2]}
      </Allotment.Pane>
    </Allotment>
  )
}
