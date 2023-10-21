import classnames from 'classnames'
import React, { useState, useRef, useEffect } from 'react'

import styles from './index.module.less'

interface Props {
  readOnly: any
  creating: boolean
  tabs: any
  value: string
  onOk: any
  onCancel: any
  onRemove: any
  actived: any
  onClick: any
}

export const TabsItem: React.FC<Props> = props => {
  const { readOnly = [''], tabs = [], value, onOk, onCancel, onRemove, actived, onClick } = props
  const inputRef = useRef<any>(null)
  const [name, setName] = useState(value)
  const [creating, setCreating] = useState(props.creating)

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      // enter key
      event.preventDefault()
      doneNameFile()
    } else if (event.keyCode === 27) {
      // esc key
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

    // 如果名称没有变化&是修改名称，就不做任何事
    if (name === value && actived) {
      setCreating(false)
      return
    }
    onOk(name)
    setCreating(false)
  }

  const handleDoubleClick = () => {
    if (readOnly.includes(name)) return
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
      className={classnames(styles['tab-item'], actived ? styles.activated : null)}
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
          {readOnly.includes(name) ? null : (
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
