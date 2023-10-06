export const initFiles: any = {
  'App.tsx': {
    name: 'App.tsx',
    language: 'typescript',
    value: `
	import {Button} from './Button'
  import {name} from './const'
  import React from 'react'
import ReactDOM from 'react-dom/client'
import {round} from 'lodash'
  
	const App = ()=>{
  console.log(round(1.567))
	  const [num,setNum]=React.useState<number>(1)
	  return <>
	  <button onClick={()=>setNum(num+1)}>clickab</button>
	  <span>{num}</span>
	  <Button/> {name}
	</>
	}
	ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

	`,
  },
  'Button.tsx': {
    name: 'Button.tsx',
    language: 'typescript',
    value: `
    export const Button = ()=>{
			    return <button>abc</button>
			  }`,
  },
  'const.ts': {
    name: 'const.ts',
    language: 'typescript',
    value: `export const name = 'abc';
				export const age = 20;`,
  },
  'import-map.json': {
    name: 'import-map.json',
    language: 'json',
    value: `{
    "imports": {
          "react": "https://esm.sh/react",
          "react-dom/client": "https://esm.sh/react-dom/client",
          "lodash":"https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/+esm"
        }
    }`,
  }
};
