import React, { ReactElement } from 'react';
import SvgIcon, { SVG_COLORS } from '../svg-icon/SvgIcon';

interface IProps {
  icon: ReactElement;
  onClick?: () => void
  className?: string;
}

export const SocialButton = ({ icon, onClick, className }: IProps) => {
  return (
    <SvgIcon icon={icon} color={SVG_COLORS.WHITE} className={className} onClick={onClick}/>
  )
}
