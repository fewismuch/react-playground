import { useState } from 'react'

export const useTypesProgress = () => {
  const [progress, setProgress] = useState(0)
  const [total, setTotal] = useState(0)
  const [finished, setFinished] = useState(false)

  const onWatch = (typeHelper: any) => {
    const handleProgress = (progress: number, total: number) => {
      setProgress(progress)
      setTotal(total)
    }
    typeHelper.addListener('progress', handleProgress)

    const handleFinished = () => setFinished(true)
    typeHelper.addListener('finished', handleFinished)

    const handleStarted = () => setFinished(false)
    typeHelper.addListener('started', handleStarted)

    return () => {
      typeHelper.removeListener('progress', handleProgress)
      typeHelper.removeListener('finished', handleFinished)
      typeHelper.removeListener('started', handleStarted)
    }
  }

  return { progress, total, finished, onWatch }
}
