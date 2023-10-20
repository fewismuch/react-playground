import React, { useContext, useEffect, useState } from 'react'
import styles from './index.module.less'
import { PlaygroundContext } from '../../../PlaygroundContext'
import { TabsItem } from './TabsItem'

interface Props {
  onChange: (fileName: string) => void
  readOnly?: boolean
}

const maxSequenceNumber = (tabs: string[]) => {
  const result = tabs.reduce((max, fileName) => {
    const match = fileName.match(/Comp(\d+)\.jsx/)
    if (match) {
      const sequenceNumber = parseInt(match[1], 10)
      return Math.max(max, sequenceNumber)
    }
    return max
  }, 0)
  return result + 1
}

export const Tabs: React.FC<Props> = ({ onChange, readOnly = false }) => {
  const { files, removeFile, addFile, updateFileName, selectedFileName, setSelectedFileName } =
    useContext(PlaygroundContext)
  const importMapFileName = 'import-map.json'
  const entryFileName = 'App.jsx'
  const [tabs, setTabs] = useState([''])
  const [creating, setCreating] = useState(false)

  const addTab = () => {
    setTabs([...tabs, `Comp${maxSequenceNumber(tabs)}.jsx`])
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

  useEffect(() => {
    setTabs(Object.keys(files).filter(item => ![importMapFileName, 'main.jsx'].includes(item)))
  }, [files])

  return (
    <div className={styles.tabsBox}>
      {tabs.map((item, index) => (
        <TabsItem
          key={index + item}
          value={item}
          actived={selectedFileName === item}
          creating={creating}
          tabs={tabs}
          readOnly={readOnly ? tabs : ['App.jsx']}
          onOk={val => {
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
          }}
          onCancel={handleCancel}
          onRemove={name => {
            const result = confirm('你确定要执行此操作吗？')
            if (result) {
              removeFile(name)
              handleClickTab(entryFileName)
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
            <div className={styles.tabItem} onClick={editImportMap}>
              Import Map
            </div>
          </div>
        </>
      )}
    </div>
  )
}
