import { PlaygroundSandbox } from './Playground/PlaygroundSandbox'
// import { Playground as PlaygroundSandbox } from '@/Playground'

function App() {
  const handleFilesHash = (hash: string) => {
    window.location.hash = hash
  }

  return <PlaygroundSandbox onFilesChange={handleFilesHash} />
}

export default App
