export const initFiles: any = {
  'App.tsx': {
    name: 'App.tsx',
    language: 'typescript',
    value: `
	import {Button} from './Button'
  import {name} from './const'
  import React from 'react'
import ReactDOM from 'react-dom/client'
  
	const App = ()=>{
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
};
