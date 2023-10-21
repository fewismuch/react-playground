import React, { useContext, useMemo } from 'react'

import DownloadSvg from './icons/download.svg?raw'
import GithubSvg from './icons/github.svg?raw'
import MoonSvg from './icons/moon.svg?raw'
import ReactSvg from './icons/react.svg'
import ShareSvg from './icons/share.svg?raw'
import SunSvg from './icons/sun.svg?raw'
import { PlaygroundContext } from '../../PlaygroundContext'
import { downloadFiles } from '../../utils'

import styles from './index.module.less'

export const Header: React.FC = () => {
  const { files, theme, changeTheme } = useContext(PlaygroundContext)

  const copyLink = async () => {
    await navigator.clipboard.writeText(location.href)
    alert('Sharable URL has been copied to clipboard.')
  }

  const downloadProject = () => {
    if (!confirm('Download project files?')) {
      return
    }
    downloadFiles(files).then(() => console.log('download success'))
  }

  return useMemo(
    () => (
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

          <button
            title='Copy sharable URL'
            dangerouslySetInnerHTML={{ __html: ShareSvg }}
            onClick={copyLink}
          />

          <button
            title='Download project files'
            dangerouslySetInnerHTML={{ __html: DownloadSvg }}
            onClick={downloadProject}
          />

          <a
            href='https://github.com/vuejs/core/tree/main/packages/sfc-playground'
            target='_blank'
            title='View on GitHub'
          >
            <button dangerouslySetInnerHTML={{ __html: GithubSvg }} />
          </a>
        </div>
      </nav>
    ),
    [theme]
  )
}
