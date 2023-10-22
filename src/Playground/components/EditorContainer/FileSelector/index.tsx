import classnames from 'classnames'
import React, { useContext, useEffect, useState } from 'react'

import { TabsItem } from './TabsItem'
import { maxSequenceTabName } from './utils.ts'
import { importMapFileName, mainFileName } from '../../../files.ts'
import { PlaygroundContext } from '../../../PlaygroundContext'
import { FileSelectorProps } from '../../../types.ts'

import styles from './index.module.less'

export const FileSelector: React.FC<FileSelectorProps> = ({ onChange, readOnly = false }) => {
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
    onChange(importMapFileName)
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

  useEffect(() => {
    setTabs(Object.keys(files).filter(item => ![importMapFileName, 'main.jsx'].includes(item)))
  }, [files])

  return (
    <div className={styles.tabs}>
      {tabs.map((item, index) => (
        <TabsItem
          key={index + item}
          value={item}
          actived={selectedFileName === item}
          creating={creating}
          tabs={tabs}
          readOnlyTabs={readOnly ? tabs : [mainFileName]}
          onOk={(name: string) => handleSaveTab(name, item)}
          onCancel={handleCancel}
          onRemove={(name: string) => {
            const result = confirm(`你确定要删除 ${name} 吗？`)
            if (result) {
              removeFile(name)
              handleClickTab(mainFileName)
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
                selectedFileName === importMapFileName ? styles.actived : null
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
