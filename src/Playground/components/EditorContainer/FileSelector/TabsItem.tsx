import classnames from 'classnames'
import React, { useState, useRef, useEffect } from 'react'

import { TabsItemProps } from '../../../types'

import styles from './index.module.less'

export const TabsItem: React.FC<TabsItemProps> = props => {
  const {
    readOnlyTabs = [''],
    tabs = [],
    value,
    actived = false,
    onOk,
    onCancel,
    onRemove,
    onClick
  } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState(value)
  const [creating, setCreating] = useState(props.creating)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Entry') {
      event.preventDefault()
      doneNameFile()
    } else if (event.key === 'Escape') {
      event.preventDefault()
      cancelNameFile()
    }
  }

  const cancelNameFile = () => {
    setName(value)
    setCreating(false)
    onCancel()
  }

  function doneNameFile() {
    if (!creating) return
    if (!/\.(jsx|tsx|js|ts|css|json)$/.test(name)) {
      console.error('Playground only supports *.jsx, *.tsx, *.js, *.ts, *.css, *.json files.')
      return
    }

    // already exists
    if (tabs.includes(name) && name !== value) {
      console.error(`File "${name}" already exists.`)
      return
    }

    // 如果名称没有变化且是修改状态，就不做任何事
    if (name === value && actived) {
      setCreating(false)
      return
    }
    onOk(name)
    setCreating(false)
  }

  const handleDoubleClick = () => {
    if (readOnlyTabs.includes(name)) return
    setCreating(true)
    setTimeout(() => {
      inputRef?.current?.focus()
    }, 0)
  }

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <div
      className={classnames(styles['tab-item'], actived ? styles.actived : null)}
      onClick={onClick}
    >
      {creating ? (
        <>
          <input
            ref={inputRef}
            className={styles['tabs-item-input']}
            value={name}
            onChange={e => setName(e.target.value)}
            onBlur={doneNameFile}
            onKeyDown={handleKeyDown}
          />
          <div className={styles['input-mask']}></div>
        </>
      ) : (
        <>
          <span onDoubleClick={handleDoubleClick}>{name}</span>
          {readOnlyTabs.includes(name) ? null : (
            <span
              onClick={e => {
                e.stopPropagation()
                onRemove(name)
              }}
              style={{ marginLeft: 5, display: 'flex' }}
            >
              <svg width='12' height='12' viewBox='0 0 24 24'>
                <line stroke='#999' x1='18' y1='6' x2='6' y2='18'></line>
                <line stroke='#999' x1='6' y1='6' x2='18' y2='18'></line>
              </svg>
            </span>
          )}
        </>
      )}
    </div>
  )
}
