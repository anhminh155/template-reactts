import React from 'react'
import { ReactSVG } from 'react-svg'
import { PropsIcon, Size } from '../common/define-type'
import { Tooltip } from '@material-tailwind/react'

const SvgSizeNumber: Record<Size, string> = {
  default: '24px',
  mini: '6px',
  small: '14px',
  medium: '18px',
  big: '30px',
  large: '35px',
}

const CIconsSVG = ({ ...props }: PropsIcon): JSX.Element => {
  const { tooltip, name, svgSize = 'default', disabled, rotateDeg } = props

  const renderReactSVG = () => {
    return (
      <ReactSVG
        className={props?.className}
        style={{
          width: SvgSizeNumber[svgSize],
          height: SvgSizeNumber[svgSize],
          display: disabled ? 'none' : 'inline-block',
        }}
        onClick={props.onClick}
        src={`assets/icons/${name}.svg`}
        beforeInjection={(svg) => {
          svg.setAttribute(
            'style',
            ` max-width: ${SvgSizeNumber[svgSize]}; 
              max-height: ${SvgSizeNumber[svgSize]}; 
              transform: rotate(${rotateDeg}deg)`,
          )
        }}
      />
    )
  }

  return tooltip ? (
    <Tooltip content={tooltip.title} placement={tooltip?.placement && 'top'}>
      <span>{renderReactSVG()}</span>
    </Tooltip>
  ) : (
    renderReactSVG()
  )
}

export default React.memo(CIconsSVG)
