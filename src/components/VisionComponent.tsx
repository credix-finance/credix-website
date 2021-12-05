import React from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';
import { IComponentProps } from '../pages';
import { StaticImage } from 'gatsby-plugin-image';

export const VisionComponent = ({ isTablet }: IComponentProps) => {
  return (
    <div className="h-flex-column vision-component">
      <div className="h-flex-row">
        <span className="sub-title">Our vision</span>
      </div>
      <div className="h-flex-row h-flex-row--space-between vision-component--text-row">
        <div className="vision-component--left-text">
          We are building a decentralized marketplace to give borrowers in emerging countries access to previously untapped capital.
        </div>
        <div className="vision-component--right-text">
          Credix is rethinking global debt capital markets. Starting with borrowers in emerging markets and private credit investors.
          <br/>
          <br/>
          Our goal is to create a fully decentralised protocol that will allow any borrow and any investor to connect in a more open, transparent, and efficient way.
        </div>
      </div>
      <div className="h-flex-row">
        <span className="vision-component--subtitle">The Roadmap</span>
      </div>
      <div className="h-flex-row h-flex-row--space-between h-flex-row--align-center vision-component--roadmap-shapes">
        <div className="h-flex-column h-flex-column--align-center vision-component--roadmap-shape-column">
          <StaticImage src={'../assets/shapes/roadmap_1.png'} alt={'roadmap 1'} className="vision-component--roadmap-shape"/>
          <span className="vision-component--roadmap-shape--text">DevNet <br/> Launch</span>
        </div>
        {
          !isTablet &&
          <SvgIcon icon={SVG_ICONS.LINE_1} color={SVG_COLORS.WHITE}/>
        }
        <div className="h-flex-column h-flex-column--align-center vision-component--roadmap-shape-column">
          <StaticImage src={'../assets/shapes/roadmap_2.png'} alt={'roadmap 1'} className="vision-component--roadmap-shape"/>
          <span className="vision-component--roadmap-shape--text">Closed Alpha <br/> Launch</span>
        </div>
        {
          !isTablet &&
          <SvgIcon icon={SVG_ICONS.LINE_1} color={SVG_COLORS.WHITE}/>
        }
        <div className="h-flex-column h-flex-column--align-center vision-component--roadmap-shape-column">
          <StaticImage src={'../assets/shapes/roadmap_3.png'} alt={'roadmap 1'} className="vision-component--roadmap-shape"/>
          <span className="vision-component--roadmap-shape--text">Public <br/> Launch</span>
        </div>
        {
          !isTablet &&
          <SvgIcon icon={SVG_ICONS.LINE_1} color={SVG_COLORS.WHITE}/>
        }
        <div className="h-flex-column h-flex-column--align-center vision-component--roadmap-shape-column">
          <StaticImage src={'../assets/shapes/roadmap_4.png'} alt={'roadmap 1'} className="vision-component--roadmap-shape"/>
          <span className="vision-component--roadmap-shape--text">Tokenize <br/> RECEIVABLES</span>
        </div>
        {
          !isTablet &&
          <SvgIcon icon={SVG_ICONS.LINE_1} color={SVG_COLORS.WHITE}/>
        }
        <div className="h-flex-column h-flex-column--align-center vision-component--roadmap-shape-column">
          <StaticImage src={'../assets/shapes/roadmap_5.png'} alt={'roadmap 1'} className="vision-component--roadmap-shape"/>
          <span className="vision-component--roadmap-shape--text">Launch <br/> v2</span>
        </div>
        {
          !isTablet &&
          <SvgIcon icon={SVG_ICONS.LINE_1} color={SVG_COLORS.WHITE}/>
        }
        <div className="h-flex-column h-flex-column--align-center vision-component--roadmap-shape-column">
          <StaticImage src={'../assets/shapes/roadmap_6.png'} alt={'roadmap 1'} className="vision-component--roadmap-shape"/>
          <span className="vision-component--roadmap-shape--text">RETHINK DEBT <br/> Capital Markets</span>
        </div>
      </div>
    </div>
  )
}
