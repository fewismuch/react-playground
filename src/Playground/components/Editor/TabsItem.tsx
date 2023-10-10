import { useState, useRef, useEffect } from "react";

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

    onOk(name);
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
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={doneNameFile}
          onKeyDown={handleKeyDown}
          style={{
            width: 90,
            outline: "none",
            fontSize: 14,
            border: "1px solid #ccc",
            padding: "2px 0 2px 10px",
          }}
        />
      ) : (
        <>
          <span onDoubleClick={handleDoubleClick}>{name}</span>
          {noRemove ? null : (
            <span
              onClick={(e) => {
                e.stopPropagation();
                onRemove(name);
              }}
              style={{ marginLeft: 5 }}
            >
              x
            </span>
          )}
        </>
      )}
    </>
  );
}
