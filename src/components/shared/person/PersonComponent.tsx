import React, { ReactElement } from 'react';
import { SocialButton } from '../buttons/SocialButton';
import { SVG_ICONS } from '../svg-icon/SvgIcon';

interface IPersonProps {
  image: ReactElement;
  name: string;
  title: ReactElement;
  linkedInUrl: string;
  twitterUrl: string;
}

export const PersonComponent = ({ image, name, title, linkedInUrl, twitterUrl } : IPersonProps) => {

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="h-flex-column person-component">
      {image}
      <span className="person-component--name">{name}</span>
      <span className="person-component--title">{title}</span>
      <div className="h-flex-row h-flex-row--justify-center h-margin-top">
        <SocialButton icon={SVG_ICONS.LINKEDIN} className="h-margin h-cursor-pointer" onClick={() => openInNewTab(linkedInUrl)}/>
        <SocialButton icon={SVG_ICONS.TWITTER} className="h-margin h-cursor-pointer" onClick={() => openInNewTab(twitterUrl)}/>
      </div>
    </div>
  )
}
