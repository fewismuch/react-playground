import { editor } from 'monaco-editor'

export const MonacoEditorConfig: editor.IStandaloneEditorConstructionOptions = {
  automaticLayout: true,
  cursorBlinking: 'smooth',
  fontLigatures: true,
  formatOnPaste: true,
  formatOnType: true,
  fontSize: 14,
  showDeprecated: true,
  showUnused: true,
  showFoldingControls: 'mouseover',
  scrollBeyondLastLine: false,
  minimap: {
    enabled: false,
  },
  inlineSuggest: {
    enabled: false,
  },
  fixedOverflowWidgets: true,
  smoothScrolling: true,
  smartSelect: {
    selectSubwords: true,
    selectLeadingAndTrailingWhitespace: true,
  },
  tabSize: 2,
  overviewRulerBorder: false, // 不要滚动条的边框
  // 滚动条设置
  scrollbar: {
    verticalScrollbarSize: 6, // 竖滚动条
    horizontalScrollbarSize: 6, // 横滚动条
  },
  // lineNumbers: 'off', // 隐藏控制行号
}
