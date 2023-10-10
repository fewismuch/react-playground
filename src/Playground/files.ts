import {atou} from "./utils";
import main from "./components/Header/Download/template/src/main.jsx?raw";
import App from "./components/Header/Download/template/src/App.jsx?raw";
import indexCss from "./components/Header/Download/template/src/index.css?raw";
import AppCss from "./components/Header/Download/template/src/App.css?raw";
import importMap from "./components/Header/Download/template/import-map.json?raw";
// 读取hash值 设置为files
// TODO 校验
let files;
try {
  const hash = window.location.hash
  if (hash) files = JSON.parse(atou(hash?.split("#")[1]));
} catch (error) {
  console.error(error);
}

export const initFiles: any = files || {
  "main.jsx": {
    name: "main.jsx",
    language: "javascript",
    value: main,
  },
  "App.jsx": {
    name: "App.jsx",
    language: "javascript",
    value: App,
  },
  "App.css": {
    name: "App.css",
    language: "css",
    value: AppCss,
  },
  "index.css": {
    name: "index.css",
    language: "css",
    value: indexCss,
  },
  "import-map.json": {
    name: "import-map.json",
    language: "json",
    value: importMap,
  },
};
