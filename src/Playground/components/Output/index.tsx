import React, { useContext, useEffect, useRef, useState } from 'react'

import CompilerWorker from './compiler.worker.ts?worker&inline'
import { Preview } from './Preview'
import { ViewSelector } from './ViewSelector'

import { IMPORT_MAP_FILE_NAME } from '@/Playground/files'
import { PlaygroundContext } from '@/Playground/PlaygroundContext'
import type { IPreviewData } from '@/Playground/types'
import { debounce } from '@/Playground/utils'

export const Output: React.FC = () => {
  const { files, selectedFileName } = useContext(PlaygroundContext)
  const [activedType, setActivedType] = useState('PREVIEW')
  const compilerRef = useRef<Worker | null>(null)
  const [compiledFiles, setCompiledFiles] = useState<IPreviewData>()

  const handleViewChange = (type: string) => {
    setActivedType(type)
  }

  const sendCompiledCode = debounce(() => {
    if (activedType === 'PREVIEW') compilerRef.current?.postMessage(files)
    if (activedType === 'JS') {
      compilerRef.current?.postMessage(files[selectedFileName].value)
    }
  }, 50)

  useEffect(() => {
    if (!compilerRef.current) {
      compilerRef.current = new CompilerWorker()
      compilerRef.current.addEventListener('message', ({ data }: { data: any }) => {
        if (data.type === 'UPDATE_FILES') {
          try {
            JSON.parse(files[IMPORT_MAP_FILE_NAME].value)
            data.data.importmap = files[IMPORT_MAP_FILE_NAME].value
          } catch (error) {
            console.error('importmap 解析错误:', error)
          }
          setCompiledFiles(data)
        } else if (data.type === 'ERROR') {
          console.log(data)
        }
      })
    }
  }, [])

  useEffect(() => {
    sendCompiledCode()
  }, [activedType, files])

  useEffect(() => {
    if (selectedFileName === IMPORT_MAP_FILE_NAME || activedType === 'PREVIEW') return
    if (['javascript', 'typescript'].includes(files[selectedFileName]?.language)) {
      compilerRef.current?.postMessage(files[selectedFileName]?.value)
    } else {
      compilerRef.current?.postMessage('')
    }
  }, [selectedFileName])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <ViewSelector items={['PREVIEW']} value={activedType} onChange={handleViewChange} />

      <Preview
        iframeKey={files[IMPORT_MAP_FILE_NAME].value}
        hidden={activedType !== 'PREVIEW'}
        data={compiledFiles}
      />
    </div>
  )
}
