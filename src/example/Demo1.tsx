import { Playground } from '../Playground/index'

export const Demo1 = () => {
  return (
    <Playground
      showHeader={false}
      showCompileOutput={false}
      fileSelectorReadOnly
      width={600}
      height={400}
    />
  )
}
