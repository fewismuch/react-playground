import React, { useEffect, useRef, useState } from 'react'

import { getIframeUrl } from './utils'
import { Message } from '../../Message'

import type { IPreview, IMessage } from '../../../types'

interface Props {
  hidden: boolean
  data?: IPreview
  iframeKey?: string
}

const iframeUrl = getIframeUrl()

export const Preview: React.FC<Props> = props => {
  const { hidden, data, iframeKey } = props
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (data) iframeRef.current?.contentWindow?.postMessage(data)
  }, [data])

  const handleMessage = (msg: IMessage) => {
    const { type, message } = msg.data
    if (type === 'LOADED') {
      iframeRef.current?.contentWindow?.postMessage(data)
    } else if (type === 'ERROR') {
      setError(typeof message === 'string' ? message : '')
    } else if (!type) {
      setError('')
    }
  }

  useEffect(() => {
    window.addEventListener('message', handleMessage)
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <>
      <iframe
        key={iframeKey}
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
      <Message type='error' context={error} />
    </>
  )
}
