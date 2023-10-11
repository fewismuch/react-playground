import React, {useContext, useEffect} from "react";
import ReactSvg from "@/assets/react.svg";
import SunSvg from "@/assets/sun.svg?raw";
import MoonSvg from "@/assets/moon.svg?raw";
import DownloadSvg from "@/assets/download.svg?raw";
import GithubSvg from "@/assets/github.svg?raw";
import ShareSvg from "@/assets/share.svg?raw";
import {PlaygroundContext, Theme} from "../../PlaygroundContext.tsx";
import styles from "./index.module.less";
import {utoa, downloadFiles} from "../../utils";

const STORAGE_THEME = "react-playground-prefer-dark";

export const Header: React.FC = () => {
  const {files, theme, setTheme} = useContext(PlaygroundContext);

  const changeTheme = (theme: Theme) => {
    document.querySelector("body")?.setAttribute('class',theme)
    sessionStorage.setItem(STORAGE_THEME, String(theme === Theme.DARK));
    setTheme?.(theme);
  };

  async function copyLink() {
    await navigator.clipboard.writeText(location.href);
    alert("Sharable URL has been copied to clipboard.");
  }

  const downloadProject = () => {
    if (!confirm("Download project files?")) {
      return;
    }
    downloadFiles(files)
  }

  useEffect(() => {
    window.location.hash = utoa(JSON.stringify(files));
  }, [files]);

  useEffect(() => {
    const storageTheme = JSON.parse(
      sessionStorage.getItem(STORAGE_THEME) || "false",
    )
      ? Theme.DARK
      : Theme.LIGHT;
    document.querySelector("body")?.setAttribute('class',storageTheme)
    setTheme?.(storageTheme);
  }, []);

  return (
    <nav className={styles.box}>
      <div className={styles.logo}>
        <img alt="logo" src={ReactSvg}/>
        <span>React Playground</span>
      </div>
      <div className={styles.links}>
        {theme === Theme.LIGHT && (
          <button
            title="Toggle dark mode"
            className={styles.theme}
            dangerouslySetInnerHTML={{__html: SunSvg}}
            onClick={() => changeTheme(Theme.DARK)}
          />
        )}
        {theme === Theme.DARK && (
          <button
            title="Toggle light mode"
            className={styles.theme}
            dangerouslySetInnerHTML={{__html: MoonSvg}}
            onClick={() => changeTheme(Theme.LIGHT)}
          />
        )}

        <button
          title="Copy sharable URL"
          dangerouslySetInnerHTML={{__html: ShareSvg}}
          onClick={copyLink}
        />

        <button
          title="Download project files"
          dangerouslySetInnerHTML={{__html: DownloadSvg}}
          onClick={downloadProject}
        />

        <a
          href="https://github.com/vuejs/core/tree/main/packages/sfc-playground"
          target="_blank"
          title="View on GitHub"
        >
          <button dangerouslySetInnerHTML={{__html: GithubSvg}}/>
        </a>
      </div>
    </nav>
  );
};
