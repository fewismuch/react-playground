export type Theme = 'light' | 'dark'

export interface File {
  name: string
  value: string
  language: string
}

export interface Files {
  [key: string]: File
}
