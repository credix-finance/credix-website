import React, { ReactElement } from 'react';
import SvgIcon, { SVG_COLORS } from '../svg-icon/SvgIcon';

interface IProps {
  icon: ReactElement;
  onClick?: () => void
  className?: string;
  isLightTheme?: boolean;
}

export const SocialButton = ({ icon, onClick, className, isLightTheme }: IProps) => {
  return (
    <SvgIcon icon={icon} color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE} className={className} onClick={onClick}/>
  )
}
