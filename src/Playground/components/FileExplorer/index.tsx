import FileExplorer from '@rainetian/file-explorer'
import React, { useContext } from 'react'

import { filesData } from './filesData.ts'

import styles from './index.module.less'

import { PackageJsonView } from '@/Playground/components/FileExplorer/PackageJsonView.tsx'
import { SplitPane } from '@/Playground/components/SplitPane'
import { PlaygroundContext } from '@/Playground/PlaygroundContext.tsx'

export const FilesExplorer: React.FC = () => {
  const { files, theme } = useContext(PlaygroundContext)

  console.log(files)

  return (
    <div className={styles.box}>
      <div className={styles.header}>FILES</div>
      <SplitPane defaultSizes={[60, 40]} vertical>
        <FileExplorer data={filesData} rootId={0} initialOpen={[4]} theme={theme} />
        <div>
          <PackageJsonView data={''} />
        </div>
      </SplitPane>
    </div>
  )
}
