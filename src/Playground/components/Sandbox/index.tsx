import React, { useEffect, useRef } from 'react'

import iframeRaw from './iframe.html?raw'
import { getIframeUrl } from '../Output/Preview/utils'

import type { IMessageData, IPlayground } from '@/Playground/types'

const iframeUrl = getIframeUrl(iframeRaw)

export const Sandbox: React.FC<IPlayground> = (props) => {
  const { width = '100vw', height = '100vh' } = props
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const loaded = useRef(false)

  const handleMessage = (msg: IMessageData) => {
    const { type } = msg.data
    if (type === 'SANDBOX_LOADED') {
      iframeRef.current?.contentWindow?.postMessage({
        type: 'SANDBOX_RUN',
        data: props,
      })
      loaded.current = true
    }
  }

  useEffect(() => {
    window.addEventListener('message', handleMessage)
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  useEffect(() => {
    if (loaded.current) {
      iframeRef.current?.contentWindow?.postMessage({
        type: 'SANDBOX_RUN',
        data: props,
      })
    }
  }, [props])

  return (
    <div style={{ width, height }}>
      <iframe
        ref={iframeRef}
        src={iframeUrl}
        style={{
          width: '100%',
          height: '100%',
          padding: 0,
          border: 'none',
        }}
        sandbox='allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin'
      />
    </div>
  )
}
