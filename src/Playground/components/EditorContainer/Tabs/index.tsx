import React, {useContext, useEffect, useState} from "react";
import styles from "./index.module.less";
import {PlaygroundContext} from "../../../PlaygroundContext";
import {TabsItem} from "./TabsItem";

interface Props {
  onChange: (fileName: string) => void;
  readOnly?: boolean
}

const maxSequenceNumber = (tabs: string[]) => {
  const result = tabs.reduce((max, fileName) => {
    const match = fileName.match(/Comp(\d+)\.jsx/);
    if (match) {
      const sequenceNumber = parseInt(match[1], 10);
      return Math.max(max, sequenceNumber);
    }
    return max;
  }, 0);
  return result + 1
}

export const Tabs: React.FC<Props> = ({onChange, readOnly = false}) => {
  const {files, removeFile, addFile, updateFileName, setSelectedFileName} =
    useContext(PlaygroundContext);
  const importMapFileName = "import-map.json";
  const entryFileName = "main.jsx";
  const [tabs, setTabs] = useState(['']);

  const [selectedTabsItemName, setSelectedTabsItemName] =
    useState(entryFileName);
  const [isAddModal, setisAddModal] = useState(false)

  const addTab = () => {
    setTabs([...tabs, `Comp${maxSequenceNumber(tabs)}.jsx`]);
    setisAddModal(true)
  };

  const handleCancel = () => {
    if (isAddModal) {
      tabs.pop()
      setTabs([...tabs])
      setisAddModal(false)
    }
  }

  const handleClickTab = (fileName: string) => {
    if (isAddModal) return;
    onChange(fileName);
    setSelectedTabsItemName(fileName);
    setSelectedFileName(fileName);
  };

  const editImportMap = () => {
    onChange(importMapFileName);
  };

  useEffect(() => {
    setTabs(Object.keys(files).filter((item) => item !== importMapFileName))
  }, [files])

  return (
    <div className={styles.tabsBox}>
      {tabs.map((item, index) => (
        <TabsItem
          key={item + index}
          value={item}
          actived={selectedTabsItemName === item}
          addModal={isAddModal}
          tabs={tabs}
          readOnly={readOnly?tabs:["main.jsx"]}
          onOk={(val) => {
            // 修改名字
            if (isAddModal) {
              addFile(val)
              setisAddModal(false)
            } else {
              updateFileName(item, val);
            }
            setTimeout(() => {
              handleClickTab(val);
            }, 0);
          }}
          onCancel={handleCancel}
          onRemove={(name) => {
            let result = confirm("你确定要执行此操作吗？");
            if (result) {
              removeFile(name);
              handleClickTab(entryFileName);
            }
          }}
          onClick={() => handleClickTab(item)}
        />
      ))}

      {
        !readOnly && (
          <>
            <div className={styles.add} onClick={addTab}>
              +
            </div>
            <div className={styles["import-map-wrapper"]}>
              <div className={styles.tabItem} onClick={editImportMap}>
                Import Map
              </div>
            </div>
          </>
        )
      }

    </div>
  );
};
