import React, { ReactElement } from 'react';
import { SocialButton } from '../buttons/SocialButton';
import { SVG_ICONS } from '../svg-icon/SvgIcon';

interface IPersonProps {
  image: ReactElement;
  name: string;
  title: ReactElement | string;
  linkedInUrl: string;
  twitterUrl: string;
  advisor?: boolean
}

export const PersonComponent = ({ image, name, title, linkedInUrl, twitterUrl, advisor } : IPersonProps) => {

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className={`h-flex-column person-component ${advisor && 'person-component--advisor'}`}>
      <div className={`h-flex-column person-component--image ${advisor && 'person-component--image--advisor'}`}>
        {image}
      </div>
      <div className={`h-flex-column person-component--info ${advisor && 'person-component--info--advisor'}`}>
        <span className={`person-component--name ${advisor && 'person-component--name--advisor'}`}>{name}</span>
        <span className={`person-component--title ${advisor && 'person-component--title--advisor'}`}>{title}</span>
        <div className="h-flex-row h-flex-row--justify-center h-margin-top">
          <SocialButton icon={SVG_ICONS.LINKEDIN} className={`h-cursor-pointer person-component--social-button ${advisor && 'person-component--social-button--advisor'}`} onClick={() => openInNewTab(linkedInUrl)}/>
          <SocialButton icon={SVG_ICONS.TWITTER} className={`h-cursor-pointer person-component--social-button ${advisor && 'person-component--social-button--advisor'}`} onClick={() => openInNewTab(twitterUrl)}/>
        </div>
      </div>
    </div>
  )
}
