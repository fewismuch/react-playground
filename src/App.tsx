import { Playground } from './Playground'
// import { Playground as PlaygroundSandbox } from '@/Playground'

function App() {
  const handleFilesHash = (hash: string) => {
    window.location.hash = hash
  }

  return <Playground onFilesChange={handleFilesHash} />
}

export default App
