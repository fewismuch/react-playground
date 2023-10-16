import React, { useContext, useState } from 'react'
import classnames from 'classnames'
import styles from './index.module.less'
import { PlaygroundContext } from '../../PlaygroundContext'
import { TabsItem } from './Tabs/TabsItem'

interface Props {
  onChange: (fileName: string) => void
}

export const Tabs: React.FC<Props> = ({ onChange }) => {
  const { files, removeFile, updateFileName, setSelectedFileName } = useContext(PlaygroundContext)
  const importMapFileName = 'import-map.json'
  // TODO 改
  const entryFileName = 'App.jsx'
  const [tabs, setTabs] = useState(Object.keys(files).filter(item => item !== importMapFileName))
  const [pendingName, setPendingeName] = useState('')
  const [selectedTabsItemName, setSelectedTabsItemName] = useState(entryFileName)

  const addTab = () => {
    setPendingeName('Comp.jsx')
    setTabs([...tabs, 'Comp.jsx'])
    // @ts-ignore
    //addFile("Comp.jsx");
  }

  const handleCancelAdd = () => {
    // 新增还是修改
    tabs.pop()
    setTabs([...tabs])
  }

  const handleClickTab = (fileName: string) => {
    if (pendingName) return
    onChange(fileName)
    setSelectedTabsItemName(fileName)
    setSelectedFileName(fileName)
  }

  const editImportMap = () => {
    onChange(importMapFileName)
  }

  return (
    <div className={styles.tabsBox}>
      {tabs.map((item, index) => (
        <div
          key={item + index}
          className={classnames(
            styles.tabItem,
            selectedTabsItemName === item ? styles.activated : null
          )}
          onClick={() => handleClickTab(item)}
        >
          <TabsItem
            value={item}
            editing={pendingName === item}
            readOnly={['App.jsx']}
            onOk={val => {
              // 修改名字
              updateFileName(item, val)
              setTimeout(() => {
                handleClickTab(val)
              }, 0)
            }}
            onCancel={handleCancelAdd}
            onError={err => console.error(err)}
            onRemove={name => {
              const result = confirm('你确定要执行此操作吗？')
              if (result) {
                removeFile(name)
                handleClickTab(entryFileName)
              }
            }}
          />
        </div>
      ))}
      <div className={styles.add} onClick={addTab}>
        +
      </div>
      <div className={styles['import-map-wrapper']}>
        <div className={styles.tabItem} onClick={editImportMap}>
          Import Map
        </div>
      </div>
    </div>
  )
}
