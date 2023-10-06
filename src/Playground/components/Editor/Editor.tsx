import React, {useCallback, useRef, useState} from "react";
import MonacoEditor, {Monaco} from '@monaco-editor/react';
import {
  MonacoJsxSyntaxHighlight,
  getWorker
} from "monaco-jsx-syntax-highlight";
//import "./userWoker.ts";
//import './jsx-highlight.less'
import {useGetState} from "ahooks";
import {useEditor} from "./useEditor.ts";
import {Tabs} from './Tabs.tsx'

interface Props {
  theme: string
  files: any,
  onChange: (files: any) => void
}

export const Editor: React.FC<Props> = (props) => {
  const {theme, files, onChange} = props
  const editorRef = useRef<any>(null);
  const jsxSyntaxHighlight = useRef<any>({highlighter: null})
  const [models, setModels, getModels] = useGetState({})
  const initFileName = 'App.tsx'
  const {initExtraLibs, doOpenEditor} = useEditor()
  const [activatedTab, setActivatedTab] = useState('App.tsx')

  function handleEditorChange(value: any, event: any) {
    // TODO 防抖
    const newFiles = JSON.parse(JSON.stringify(files))
    newFiles[activatedTab].value = value
    onChange(newFiles)
  }

  const findModel = (url) => {
    if (url.startsWith('/')) return getModels()[url.replace('/', '')]
    return getModels()[url]
  }

  const handleEditorDidMount = useCallback((editor: any, monaco: Monaco) => {
    initExtraLibs(monaco)
    const tempModels: Record<string, any> = {}
    Object.entries(files).forEach(([key, item]) => {
      tempModels[item.name] = monaco?.editor?.createModel(files[item.name].value, item.language, monaco.Uri.parse("file:///" + item.name))
    })
    setModels(tempModels)
    editor.setModel(tempModels[initFileName])

    // 覆盖原点击变量跳转方法
    editor._codeEditorService.doOpenEditor = function (editor, input) {
      const path = input.resource.path
      if (!path.startsWith('/node_modules/')) {
        const model = findModel(input.resource.path);
        doOpenEditor(editor, input, model)
        setActivatedTab(path.replace('/', ''))
      }
    }

    editorRef.current = editor;

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      target: monaco.languages.typescript.ScriptTarget.ES2020,
      esModuleInterop: true
    });

    const monacoJsxSyntaxHighlight = new MonacoJsxSyntaxHighlight(
      getWorker(),
      monaco
    );

    // editor is the result of monaco.editor.create
    const {
      highlighter,
      dispose
    } = monacoJsxSyntaxHighlight.highlighterBuilder({
      editor: editor
    });
    // init highlight
    highlighter();
    jsxSyntaxHighlight.current.highlighter = highlighter

    return dispose;
  }, []);


  function handleEditorWillMount(monaco: any) {
    console.log('beforeMount: the monaco instance:', monaco);
  }

  const handleTabsChange = (fileName: string) => {
    editorRef.current?.setModel(findModel(fileName));
    jsxSyntaxHighlight?.current.highlighter()
    setActivatedTab(fileName)
  }

  function handleEditorValidation(markers) {
    // model markers
    markers.forEach((marker) => {
      // 页面输出错误信息
      console.log('onValidate:', marker.message)
    });
  }

  return (
    <>
      <Tabs files={['App.tsx', 'Button.tsx', 'const.ts']} activatedTab={activatedTab} onChange={handleTabsChange}/>
      <MonacoEditor
        className={"editor"}
        height="calc(100vh - 100px)"
        theme={theme}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        beforeMount={handleEditorWillMount}
        onValidate={handleEditorValidation}
      />
    </>
  )
}
