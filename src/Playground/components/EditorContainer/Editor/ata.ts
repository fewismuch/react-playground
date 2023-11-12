import { setupTypeAcquisition, ATABootstrapConfig } from '@typescript/ata'

type DelegateListener = Required<{
  [k in keyof ATABootstrapConfig['delegate']]: Set<NonNullable<ATABootstrapConfig['delegate'][k]>>
}>

const delegateListener = createDelegate()

function createDelegate() {
  const delegate: DelegateListener = {
    receivedFile: new Set(),
    progress: new Set(),
    errorMessage: new Set(),
    finished: new Set(),
    started: new Set(),
  }

  return delegate
}

type InferSet<T> = T extends Set<infer U> ? U : never

export async function createATA() {
  // @ts-ignore
  const ts = await import('https://esm.sh/typescript@5.2.2')
  const ata = setupTypeAcquisition({
    projectName: 'monaco-ts',
    typescript: ts,
    logger: console,
    fetcher(input, init) {
      // console.log('fetching =>', input, init);
      let result: any
      try {
        // @ts-ignore
        result = fetch(input, init)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
      return result
    },
    delegate: {
      receivedFile: (code, path) => {
        delegateListener.receivedFile.forEach((fn) => fn(code, path))
      },
      progress: (downloaded, total) => {
        delegateListener.progress.forEach((fn) => fn(downloaded, total))
      },
      started: () => {
        delegateListener.started.forEach((fn) => fn())
      },
      finished: (_f) => {
        delegateListener.finished.forEach((fn) => fn(_f))
      },
    },
  })

  const acquireType = (code: string) => ata(code)
  const addListener = <T extends keyof DelegateListener>(
    event: T,
    handler: InferSet<DelegateListener[T]>
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delegateListener[event].add(handler)
  }

  const removeListener = <T extends keyof DelegateListener>(
    event: T,
    handler: InferSet<DelegateListener[T]>
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delegateListener[event].delete(handler)
  }

  return {
    acquireType,
    addListener,
    removeListener,
    dispose: () => {
      for (const key in delegateListener) {
        delegateListener[key as keyof DelegateListener].clear()
      }
    },
  }
}
