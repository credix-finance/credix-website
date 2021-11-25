import React from 'react';

import mappings from './_mappings';

// The icons themselves
export const SVG_ICONS = mappings;

// The color that should override the SVG's colors
export enum SVG_COLORS {
    NONE = '',
    WHITE = 'svg-icon-color-white',
    BLACK = 'svg-icon-color-black',
}

interface ISvgIconProps {
    icon: any;
    color?: SVG_COLORS;
    className?: string;
    onClick?: () => void;
}

function SvgIcon({
  icon,
  color = SVG_COLORS.NONE,
  className = '',
  onClick
}: ISvgIconProps) {
  return (
    <span className={`svg-icon ${color} ${className}`} onClick={onClick}>
      {icon}
    </span>
  );
}

export default SvgIcon;
