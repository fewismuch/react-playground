import React, { useEffect, useRef } from 'react'

import { getIframeUrl } from './utils.ts'

interface Props {
  hidden: boolean
  data: {
    compileCode: string
    importmap: string
  }
}

const iframeUrl = getIframeUrl()

export const Preview: React.FC<Props> = props => {
  const { hidden, data } = props
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    iframeRef.current?.contentWindow?.postMessage(data)
  }, [data])

  return (
    <iframe
      ref={iframeRef}
      src={iframeUrl}
      style={{
        width: '100%',
        height: '100%',
        padding: 0,
        border: 'none',
        display: hidden ? 'none' : ''
      }}
      sandbox='allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin'
    />
  )
}
