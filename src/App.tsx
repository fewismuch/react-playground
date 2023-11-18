import { PlaygroundSandbox } from './Playground/PlaygroundSandbox'

function App() {
  const handleFilesHash = (hash: string) => {
    window.location.hash = hash
  }

  return <PlaygroundSandbox onFilesChange={handleFilesHash} />
}

export default App
