import { useState, useRef, useEffect } from "react";
import styles from "./index.module.less";
import classnames from "classnames";

export function TabsItem({
  readOnly = [],
  addModal = false,
  tabs = [],
  value,
  onOk,
  onCancel,
  onRemove,
  actived,
  onClick,
}) {
  const inputRef = useRef(null);
  const [name, setName] = useState(value);
  const [pending, setPending] = useState(addModal);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      // enter key
      event.preventDefault();
      doneNameFile();
    } else if (event.keyCode === 27) {
      // esc key
      event.preventDefault();
      cancelNameFile();
    }
  };

  const cancelNameFile = () => {
    setName(value);
    setPending(false);
    onCancel();
  };

  function doneNameFile() {
    if (!pending) return;
    if (!/\.(jsx|tsx|js|ts|css|json)$/.test(name)) {
      console.error(
        `Playground only supports *.jsx, *.tsx, *.js, *.ts, *.css, *.json files.`,
      );
      return;
    }

    // already exists
    if (tabs.includes(name) && name !== value) {
      console.error(`File "${name}" already exists.`);
      return;
    }

    // 如果名称没有变化&是修改名称，就不做任何事
    if (name === value && actived) {
      setPending(false);
      return;
    }
    onOk(name);
    setPending(false);
  }

  const handleDoubleClick = () => {
    if (readOnly.includes(name)) return;
    setPending(true);
    setTimeout(() => {
      inputRef?.current?.focus();
    }, 0);
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <div
      className={classnames(styles.tabItem, actived ? styles.activated : null)}
      onClick={onClick}
    >
      {pending ? (
        <>
          <input
            ref={inputRef}
            className={styles.tabsItemInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={doneNameFile}
            onKeyDown={handleKeyDown}
          />
          <div className={styles.inputMask}></div>
        </>
      ) : (
        <>
          <span onDoubleClick={handleDoubleClick}>{name}</span>
          {readOnly.includes(name) ? null : (
            <span
              onClick={(e) => {
                e.stopPropagation();
                onRemove(name);
              }}
              style={{ marginLeft: 5, display: "flex" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24">
                <line stroke="#999" x1="18" y1="6" x2="6" y2="18"></line>
                <line stroke="#999" x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </span>
          )}
        </>
      )}
    </div>
  );
}
