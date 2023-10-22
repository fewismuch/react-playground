import classnames from 'classnames'
import React, { useContext, useEffect, useState } from 'react'

import { TabsItem } from './TabsItem'
import { maxSequenceTabName } from './utils.ts'
import { ENTRY_FILE_NAME, IMPORT_MAP_FILE_NAME, MAIN_FILE_NAME } from '../../../files.ts'
import { PlaygroundContext } from '../../../PlaygroundContext'
import { FileSelectorProps } from '../../../types.ts'

import styles from './index.module.less'

export const FileSelector: React.FC<FileSelectorProps> = props => {
  const { onChange, onError, readOnly = false } = props
  const { files, removeFile, addFile, updateFileName, selectedFileName, setSelectedFileName } =
    useContext(PlaygroundContext)
  const [tabs, setTabs] = useState([''])
  const [creating, setCreating] = useState(false)

  const addTab = () => {
    setTabs([...tabs, maxSequenceTabName(tabs)])
    setCreating(true)
  }

  const handleCancel = () => {
    if (creating) {
      tabs.pop()
      setTabs([...tabs])
      setCreating(false)
    }
  }

  const handleClickTab = (fileName: string) => {
    if (creating) return
    onChange(fileName)
    setSelectedFileName(fileName)
  }

  const editImportMap = () => {
    onChange(IMPORT_MAP_FILE_NAME)
  }

  const handleSaveTab = (val: string, item: string) => {
    // 修改名字
    if (creating) {
      addFile(val)
      setCreating(false)
    } else {
      updateFileName(item, val)
    }
    setTimeout(() => {
      handleClickTab(val)
    }, 0)
  }

  const handleValidateTab = (newName: string, oldName: string) => {
    if (!/\.(jsx|tsx|js|ts|css|json)$/.test(newName)) {
      onError('Playground only supports *.jsx, *.tsx, *.js, *.ts, *.css, *.json files.')
      return false
    }

    // name已存在
    if (tabs.includes(newName) && newName !== oldName) {
      onError(`File "${newName}" already exists.`)
      return false
    }
    onError('')
    return true
  }

  useEffect(() => {
    setTabs(
      Object.keys(files).filter(item => ![IMPORT_MAP_FILE_NAME, ENTRY_FILE_NAME].includes(item))
    )
  }, [files])

  return (
    <div className={styles.tabs}>
      {tabs.map((item, index) => (
        <TabsItem
          key={index + item}
          value={item}
          actived={selectedFileName === item}
          creating={creating}
          readOnlyTabs={readOnly ? tabs : [MAIN_FILE_NAME]}
          onValidate={handleValidateTab}
          onOk={(name: string) => handleSaveTab(name, item)}
          onCancel={handleCancel}
          onRemove={(name: string) => {
            const result = confirm(`你确定要删除 ${name} 吗？`)
            if (result) {
              removeFile(name)
              handleClickTab(MAIN_FILE_NAME)
            }
          }}
          onClick={() => handleClickTab(item)}
        />
      ))}

      {!readOnly && (
        <>
          <div className={styles.add} onClick={addTab}>
            +
          </div>
          <div className={styles['import-map-wrapper']}>
            <div
              className={classnames(
                styles['tab-item'],
                selectedFileName === IMPORT_MAP_FILE_NAME ? styles.actived : null
              )}
              onClick={editImportMap}
            >
              Import Map
            </div>
          </div>
        </>
      )}
    </div>
  )
}
