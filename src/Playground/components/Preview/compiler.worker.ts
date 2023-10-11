import {transform} from "@babel/standalone";
import {last} from "lodash";

const entryFileName = "main.jsx";

const getInternalModule = (tabs, moduleName: string) => {
  let _moduleName = last(moduleName.split("./"))!;
  if (!_moduleName.includes(".")) {
    _moduleName += ".jsx";
  }

  return tabs[_moduleName];
};

const babelTransform = (filename: string, code: string, tabs) => {
  let _code = code;
  const regex = /import\s+React/g;
  if (filename.endsWith(".jsx") && !regex.test(code)) {
    _code = `import React from 'react';\n${code}`;
  }

  return transform(_code, {
    presets: ["react"],
    filename,
    plugins: [
      // Babel plugin to get file import names
      function importGetter() {
        return {
          visitor: {
            ImportDeclaration(path: any) {
              const module: string = path.node.source.value;
              if (module.startsWith(".")) {
                const _module = getInternalModule(tabs, module);
                if (_module.name.endsWith(".css")) {
                  // TODO 缺少移除
                  const js = `
                  (() => {
                    let stylesheet = document.getElementById('style_${_module.name}');
                    if (!stylesheet) {
                      stylesheet = document.createElement('style')
                      stylesheet.setAttribute('id', 'style_${_module.name}')
                      document.head.appendChild(stylesheet)
                    }
                    const styles = document.createTextNode(\`${_module.value}\`)
                    stylesheet.innerHTML = ''
                    stylesheet.appendChild(styles)
                  })()
                  `;
                  path.node.source.value = URL.createObjectURL(
                    new Blob([js], {type: "application/javascript"}),
                  );
                } else if (_module.name.endsWith(".json")) {
                  //  TODO json 转export
                } else {
                  path.node.source.value = URL.createObjectURL(
                    new Blob(
                      [babelTransform(_module.name, _module.value, tabs)],
                      {
                        type: "application/javascript",
                      },
                    ),
                  );
                }
              }
            },
          },
        };
      },
    ],
  }).code!;
};

const compile = (tabs) => {
  const main = tabs[entryFileName];
  const compileCode = babelTransform(entryFileName, main.value, tabs);
  return {compileCode};
};

self.addEventListener("message", async ({data}) => {
  console.log("compile");
  if (data.view) {
    self.postMessage({
      type: "UPDATE_CODE_JS",
      data: transform(data.data, {
        presets: ["react"],
        retainLines: true,
      }).code,
    });
    return;
  }
  try {
    self.postMessage({
      type: "UPDATE_CODE",
      data: compile(data),
    });
  } catch (e) {
    self.postMessage({event: "ERROR", error: e});
  }
});
