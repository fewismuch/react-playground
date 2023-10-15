import {Playground} from "./Playground/index2";
import {initFiles} from './Playground/files'
function App() {
  return (
    <div style={{width:'100%',height:300,border:'1px solid #dbdbdb'}}>
      <Playground theme='light' files={initFiles}/>
    </div>
  )
}

export default App
