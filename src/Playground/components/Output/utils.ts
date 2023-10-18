import iframeRaw from './iframe.html?raw'

export const getIframeUrl = () => {
  // 判断浏览器是否支持esm ，不支持esm就引入es-module-shims
  const newIframeRaw =
    typeof import.meta === 'undefined'
      ? iframeRaw.replace(
          '<!-- es-module-shims -->',
          '<script async src="https://unpkg.com/es-module-shims@1.8.0/dist/es-module-shims.js"></script>'
        )
      : iframeRaw
  return URL.createObjectURL(new Blob([newIframeRaw], { type: 'text/html' }))
}
