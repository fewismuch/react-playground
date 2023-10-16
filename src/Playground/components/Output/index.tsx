import React, { useContext, useEffect, useRef, useState } from 'react'
import { useMount, useUpdateEffect } from 'ahooks'
import { ViewSelector } from './ViewSelector'
import { CompiledCode } from './CompiledCode'
import { Preview } from './Preview.tsx'
import { PlaygroundContext } from '../../PlaygroundContext.tsx'
import CompilerWorker from './compiler.worker.ts?worker'
import type { OutputProps } from '../../types'

const viewTypes = ['PREVIEW', 'JS']

export const Output: React.FC<OutputProps> = props => {
  const { showCompileOutput = true } = props
  const { files, theme, selectedFileName } = useContext(PlaygroundContext)
  const [activedType, setActivedType] = useState('PREVIEW')
  const compiler = useRef<any>(null)
  const [previewData, setPreviewData] = useState({})
  const [compiledData, setCompiledData] = useState('')
  const isJsView = activedType === 'JS'
  const isPreviewView = activedType === 'PREVIEW'

  const handleViewChange = (type: string) => {
    setActivedType(type)
  }

  const comp = () => {
    if (isPreviewView) compiler.current?.postMessage(files)
    if (isJsView) {
      compiler.current?.postMessage(files[selectedFileName].value)
    }
  }

  useUpdateEffect(() => {
    comp()
  }, [files])

  useEffect(() => {
    comp()
  }, [activedType])

  useEffect(() => {
    // TODO 排除css文件
    if (isJsView) {
      compiler.current?.postMessage(files[selectedFileName].value)
    }
  }, [selectedFileName])

  useMount(() => {
    if (!compiler.current) {
      compiler.current = new CompilerWorker()
      compiler.current.addEventListener('message', ({ data }) => {
        if (data.type === 'UPDATE_FILES') {
          data.data.importmap = files['import-map.json'].value
          setPreviewData(data)
        } else if (data.type === 'UPDATE_FILE') {
          // 更新js视图
          console.log(data.data)
          setCompiledData(data.data)
        }
      })

      compiler.current.postMessage(files)
    }
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <ViewSelector
        items={viewTypes}
        value={activedType}
        onChange={handleViewChange}
        hidden={!showCompileOutput}
      />

      <Preview hidden={activedType !== 'PREVIEW'} data={previewData} />
      {showCompileOutput ? (
        <CompiledCode hidden={activedType !== 'JS'} theme={theme} value={compiledData} />
      ) : null}
    </div>
  )
}
