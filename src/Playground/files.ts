import { atou } from "./utils";
// 读取hash值 设置为files
// TODO 校验
let files;
try {
  files = JSON.parse(atou(window.location.hash?.split("#")[1]));
} catch (error) {
  console.error(error);
}

export const initFiles: any = files || {
  "App.jsx": {
    name: "App.jsx",
    id: "100",
    language: "javascript",
    value: `import { Button } from './Button'
import { name } from './const'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { round } from 'lodash'

const App = () => {
	console.log(round(1.567))
	const [num, setNum] = React.useState(1)
	return <>
		<button onClick={() => setNum(num + 1)}>clickab</button>
		<span>{num}</span>
		<Button /> {name}
	</>
}
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
`,
  },
  "Button.jsx": {
    name: "Button.jsx",
    id: "102",
    language: "javascript",
    value: `export const Button = () => {
	return <button>abc</button>
}`,
  },
  "const.js": {
    name: "const.js",
    id: "103",
    language: "javascript",
    value: `export const name = 'abc';
export const age = 20;`,
  },
  "import-map.json": {
    name: "import-map.json",
    id: "104",
    language: "json",
    value: `{
  "imports": {
    "react": "https://esm.sh/react",
    "react-dom/client": "https://esm.sh/react-dom/client",
    "lodash": "https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/+esm"
  }
}`,
  },
};
