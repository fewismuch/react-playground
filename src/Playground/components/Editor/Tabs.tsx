import React from "react";
import styles from './index.module.less'

interface Props {
  files: string[],
  activatedTab: string,
  onChange: (fileName: string) => void
}

export const Tabs: React.FC<Props> = ({files, activatedTab, onChange}) => {
  const addTab = () => {
    console.log(1);
  }

  const handleClickTab = (fileName: string) => {
    onChange(fileName)
  }

  return <div className={styles.tabsBox}>
    {
      files.map((item, index) =>
        <div key={item + index}
             className={[styles.tabItem, activatedTab === item ? styles.activated : null].join(' ')}
             onClick={() => handleClickTab(item)}>
          {item}
        </div>
      )
    }
    <div className={styles.add} onClick={addTab}>+</div>
  </div>
}
