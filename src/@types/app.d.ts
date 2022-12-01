declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
declare type PropsAny = { [key: string]: unknown }
declare interface Props extends PropsAny {
  children?: React.ReactNode | React.ReactNodeArray
  key?: string | number | null | undefined
  className?: string | undefined
  style?: React.CSSProperties
  disabled?: boolean
  onClick?: (event: unknown) => void
  onContextMenu?: (event: React.MouseEvent<Element, MouseEvent>) => void
}
