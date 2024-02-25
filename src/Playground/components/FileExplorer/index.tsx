import React from 'react'

import styles from './index.module.less'

import { PackageJsonView } from '@/Playground/components/FileExplorer/PackageJsonView.tsx'
import { SplitPane } from '@/Playground/components/SplitPane'

export const FileExplorer: React.FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>FILES</div>
      <SplitPane defaultSizes={[60, 40]} vertical>
        <div>files</div>
        <div>
          <PackageJsonView data={''} />
        </div>
      </SplitPane>
    </div>
  )
}
