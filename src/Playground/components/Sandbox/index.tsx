import React, { useEffect, useRef, useState } from 'react'

import iframeRaw from './iframe.html?raw'
import packageConfig from '../../../../package.json'
import { getIframeUrl } from '../Output/Preview/utils'

import type { IMessageData, IPlayground } from '@/Playground/types'

const currentVersionIframeRaw = iframeRaw.replace('#version#', packageConfig.version)
const iframeUrl = getIframeUrl(currentVersionIframeRaw)

export const Sandbox: React.FC<IPlayground> = (props) => {
  const { width = '100vw', height = '100vh' } = props
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const loaded = useRef(false)
  const [inViewport, setInViewport] = useState(false)
  const sandboxRef = useRef(null)

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInViewport(true)
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2, // 可见性超过20%时触发回调
    })

    if (sandboxRef.current) {
      observer.observe(sandboxRef.current)
    }

    return () => {
      if (sandboxRef.current) {
        observer.unobserve(sandboxRef.current)
      }
    }
  }, [])

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
    <div ref={sandboxRef} style={{ width, height }}>
      {inViewport ? (
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
      ) : null}
    </div>
  )
}
