import { useState, useRef, useEffect } from "react";
import styles from './index.module.less'

export function TabsItem({
  omits = [],
  editing = false,
  value,
  onOk,
  onCancel,
  onErr,
  onRemove,
  noRemove = false,
}) {
  const inputRef = useRef(null);
  const [name, setName] = useState(value);
  const [pending, setPending] = useState(editing);

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
      onErr(
        `Playground only supports *.jsx, *.tsx, *.js, *.ts, *.css, *.json files.`,
      );
      return;
    }

    // already exists
    if (omits.includes(name)) {
      onErr(`File "${name}" already exists.`);
      return;
    }

    // TODO 如果名称没有变化就不做任何事
    if (name !== value) onOk(name);
    setPending(false);
  }

  const handleDoubleClick = () => {
    if (noRemove) return;
    setPending(true);
    setTimeout(() => {
      inputRef?.current?.focus();
    }, 0);
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <>
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
          {noRemove ? null : (
            <span
              onClick={(e) => {
                e.stopPropagation();
                onRemove(name);
              }}
              style={{ marginLeft: 5, display: "flex" }}
            >
              <svg class="icon" width="12" height="12" viewBox="0 0 24 24">
                <line stroke="#999" x1="18" y1="6" x2="6" y2="18"></line>
                <line stroke="#999" x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </span>
          )}
        </>
      )}
    </>
  );
}
