import React, { useContext, useState } from 'react'
// @ts-ignore
import { CopyToClipboard } from 'react-copy-to-clipboard'

import DownloadSvg from './icons/download.svg?raw'
import GithubSvg from './icons/github.svg?raw'
import MoonSvg from './icons/moon.svg?raw'
import ReactSvg from './icons/react.svg'
import ShareSvg from './icons/share.svg?raw'
import SuccessSvg from './icons/success.svg?raw'
import SunSvg from './icons/sun.svg?raw'
import { PlaygroundContext } from '../../PlaygroundContext'
import { downloadFiles } from '../../utils'

import styles from './index.module.less'

export const Header: React.FC = () => {
  const { files, theme, changeTheme, filesHash } = useContext(PlaygroundContext)
  const [copyed, setCopyed] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const copyLink = () => {
    setCopyed(true)
    setTimeout(() => {
      setCopyed(false)
    }, 3000)
  }

  const downloadProject = () => {
    downloadFiles(files).then(() => {
      setDownloaded(true)
      setTimeout(() => {
        setDownloaded(false)
      }, 3000)
    })
  }

  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <img alt='logo' src={ReactSvg} />
        <span>React Playground</span>
      </div>
      <div className={styles.links}>
        {theme === 'light' && (
          <button
            title='Toggle dark mode'
            className={styles.theme}
            dangerouslySetInnerHTML={{ __html: SunSvg }}
            onClick={() => changeTheme('dark')}
          />
        )}
        {theme === 'dark' && (
          <button
            title='Toggle light mode'
            className={styles.theme}
            dangerouslySetInnerHTML={{ __html: MoonSvg }}
            onClick={() => changeTheme('light')}
          />
        )}

        <CopyToClipboard
          text={`${location.host}${location.pathname}#${filesHash}`}
          onCopy={copyLink}
        >
          <button
            title='Copy sharable URL'
            dangerouslySetInnerHTML={{ __html: copyed ? SuccessSvg : ShareSvg }}
            onClick={copyLink}
          />
        </CopyToClipboard>

        <button
          title='Download project files'
          dangerouslySetInnerHTML={{ __html: downloaded ? SuccessSvg : DownloadSvg }}
          onClick={downloadProject}
        />

        <a
          href='https://github.com/fewismuch/react-playground'
          target='_blank'
          title='View on GitHub'
        >
          <button dangerouslySetInnerHTML={{ __html: GithubSvg }} />
        </a>
      </div>
    </nav>
  )
}
