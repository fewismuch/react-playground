// @ts-ignore
import { Allotment } from 'allotment'
import React from 'react'

import 'allotment/dist/style.css'

export const SplitPane = (props: { children: React.ReactNode[] }) => {
  return <Allotment>{props.children}</Allotment>
}
