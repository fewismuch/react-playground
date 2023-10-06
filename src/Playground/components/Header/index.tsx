import React, {useContext} from "react";
import ReactSvg from '@/assets/react.svg'
import SunSvg from '@/assets/sun.svg?raw'
import MoonSvg from '@/assets/moon.svg?raw'
import DownloadSvg from '@/assets/download.svg?raw'
import GithubSvg from '@/assets/github.svg?raw'
import ShareSvg from '@/assets/share.svg?raw'
import {PlaygroundContext, Theme} from "../../PlaygroundContext.tsx";
import {useMount} from "ahooks";
import styles from './index.module.less'

export const Header: React.FC = () => {
  const {theme, setTheme} = useContext(PlaygroundContext);

  const changeTheme = (theme: Theme) => {
    // @ts-ignore
    document.querySelector('body').className = theme
    sessionStorage.setItem('react-playground-prefer-dark', String(theme === Theme.DARK))
    setTheme?.(theme)
  }

  useMount(() => {
    const storageTheme = JSON.parse(sessionStorage.getItem('react-playground-prefer-dark') || 'false') ? Theme.DARK : Theme.LIGHT
    // @ts-ignore
    document.querySelector('body').className = storageTheme
    setTheme?.(storageTheme)
  })

  return (
    <nav className={styles.box}>
      <div className={styles.logo}>
        <img alt="logo" src={ReactSvg}/>
        <span>React Playground</span>
      </div>
      <div className={styles.links}>
        {
          theme === Theme.LIGHT &&
          <button className={styles.theme} dangerouslySetInnerHTML={{__html: SunSvg}}
                  onClick={() => changeTheme(Theme.DARK)}/>
        }
        {
          theme === Theme.DARK &&
          <button className={styles.theme} dangerouslySetInnerHTML={{__html: MoonSvg}}
                  onClick={() => changeTheme(Theme.LIGHT)}/>
        }

        <button dangerouslySetInnerHTML={{__html: ShareSvg}}/>

        <button dangerouslySetInnerHTML={{__html: DownloadSvg}}/>


        <button dangerouslySetInnerHTML={{__html: GithubSvg}}/>
      </div>
    </nav>
  )
}
