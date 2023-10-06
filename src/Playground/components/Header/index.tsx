import React from "react";
import styles from './index.module.less'
import ReactSvg from '@/assets/react.svg'
import SunSvg from '@/assets/sun.svg?raw'
import MoonSvg from '@/assets/moon.svg?raw'
import DownloadSvg from '@/assets/download.svg?raw'
import GithubSvg from '@/assets/github.svg?raw'
import ShareSvg from '@/assets/share.svg?raw'

export const Header: React.FC = () => {
  const setTheme = (theme: string) => {
    // @ts-ignore
    document.querySelector('body').className = theme
    sessionStorage.setItem('react-playground-prefer-dark', String(theme === 'dark'))
  }

  return (
    <nav className={styles.box}>
      <div className={styles.logo}>
        <img alt="logo" src={ReactSvg}/>
        <span>React Playground</span>
      </div>
      <div className={styles.links}>
        <button className={styles.theme} dangerouslySetInnerHTML={{__html: SunSvg}} onClick={() => setTheme('dark')}>
        </button>
        <button className={styles.theme} dangerouslySetInnerHTML={{__html: MoonSvg}} onClick={() => setTheme('light')}>
        </button>

        <button dangerouslySetInnerHTML={{__html: ShareSvg}}>
        </button>

        <button dangerouslySetInnerHTML={{__html: DownloadSvg}}>
        </button>


        <button dangerouslySetInnerHTML={{__html: GithubSvg}}>
        </button>
      </div>
    </nav>
  )
}
