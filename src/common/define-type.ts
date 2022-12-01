import { ThemePalette } from '../theme'
import { IconName } from './define-icon'

export interface Login {
  loginName: string
  password: string
}
export type LanguageType = 'en' | 'vi'

export type NavbarType = 'dashboard' | 'booking' | 'front-desk' | 'cashier' | 'channel' | 'report'

//Type Icons
type RotateDeg = 0 | 45 | 90 | 135 | 180 | 225 | 270
export type ColorCustom = keyof ThemePalette
export type Size = 'default' | 'mini' | 'small' | 'medium' | 'big' | 'large'
export type Placement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom'
export interface TooltipPropsIcon {
  title: string
  placement?: Placement
}
export interface PropsIcon extends Props {
  name?: IconName
  colorSvg?: ColorCustom
  hexColor?: string
  svgSize?: Size
  rotateDeg?: RotateDeg
  tooltip?: TooltipPropsIcon
}
