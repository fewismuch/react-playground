import React, { useContext, useState } from "react";
import styles from "./index.module.less";
import { PlaygroundContext } from "../../PlaygroundContext.tsx";
import { TabsItem } from "./TabsItem";

interface Props {
  onChange: (fileName: string) => void;
}

export const Tabs: React.FC<Props> = ({ onChange }) => {
  const { files, removeFile, addFile, updateFileName } =
    useContext(PlaygroundContext);
  const [pendingName, setPendingName] = useState("");
  const importMapFileName = "import-map.json";
  const entryFileName = 'main.jsx'
  const tabs = Object.keys(files).filter((item) => item !== importMapFileName);
  const [selectedTabsItemName, setSelectedTabsItemName] = useState(entryFileName);

  const addTab = () => {
    if (pendingName) return;
    // @ts-ignore
    addFile("Comp.jsx");
    setPendingName("Comp.jsx");
  };

  const handleClickTab = (fileName: string) => {
    onChange(fileName);
    setSelectedTabsItemName(fileName);
  };

  const editImportMap = () => {
    onChange(importMapFileName);
  };

  return (
    <div className={styles.tabsBox}>
      {tabs.map((item, index) => (
        <div
          key={item + index}
          className={[
            styles.tabItem,
            selectedTabsItemName === item ? styles.activated : null,
          ].join(" ")}
          onClick={() => handleClickTab(item)}
        >
          <TabsItem
            value={item}
            omits={["main.jsx"]}
            editing={pendingName === item}
            onOk={(val) => {
              // 修改名字
              updateFileName(item, val);
              setPendingName("");
              setTimeout(() => {
                handleClickTab(val);
              }, 0);
            }}
            onCancel={() => {
              if (pendingName) removeTabs(item);
            }}
            onError={(err) => console.error(err)}
            onRemove={(name) => {
              let result = confirm("你确定要执行此操作吗？");
              if (result) {
                removeFile(name);
                handleClickTab(entryFileName);
              }
            }}
            noRemove={item===entryFileName}
          />
        </div>
      ))}
      <div className={styles.add} onClick={addTab}>
        +
      </div>
      <div className={styles["import-map-wrapper"]}>
        <div className={styles.tabItem} onClick={editImportMap}>
          Import Map
        </div>
      </div>
    </div>
  );
};
