import React from 'react'
import { ReactSVG } from 'react-svg'
import { PropsIcon, Size } from '../common/define-type'

const SvgSizeNumber: Record<Size, string> = {
  default: '24px',
  mini: '6px',
  small: '14px',
  medium: '18px',
  big: '30px',
  large: '35px',
}

const CIconsSVG = ({ ...props }: PropsIcon) => {
  const { name, svgSize = 'default', disabled, rotateDeg } = props

  return name ? (
    <ReactSVG
      className={props?.className}
      style={{
        width: SvgSizeNumber[svgSize],
        height: SvgSizeNumber[svgSize],
        display: disabled ? 'none' : 'inline-block',
      }}
      onClick={props.onClick}
      src={`assets/icons/${name}.svg`}
      wrapper='span'
      beforeInjection={(svg) => {
        svg.setAttribute(
          'style',
          ` max-width: ${SvgSizeNumber[svgSize]}; 
              max-height: ${SvgSizeNumber[svgSize]}; 
              transform: rotate(${rotateDeg}deg)`,
        )
      }}
    />
  ) : (
    <React.Fragment></React.Fragment>
  )
}

export default React.memo(CIconsSVG)
