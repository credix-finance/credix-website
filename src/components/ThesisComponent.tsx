import React from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';
import { StaticImage } from 'gatsby-plugin-image';
import { IWidthProps } from '../pages';

export const ThesisComponent = ({ isMobile }: IWidthProps) => {
  return (
    <div className="h-flex-column thesis-component">
      <div className="h-flex-row">
        <span className="sub-title">Thesis</span>
      </div>
      <div className="h-flex-row h-flex-row--space-between thesis-component--row">
        <div className="h-flex-column thesis-component--column">
          <div className="h-flex-column thesis-component--image-column">
            {
              isMobile ?
                <StaticImage src={'../assets/shapes/credit-investing-small.png'} alt={'credit investing'} className="thesis-component--image"/>
                :
                <StaticImage src={'../assets/shapes/credit-investing.png'} alt={'credit investing'} className="thesis-component--shape"/>
              // <SvgIcon icon={SVG_ICONS.CREDIT_INVESTING} color={SVG_COLORS.WHITE} className="thesis-component--shape"/>
            }
          </div>
          <div className="h-flex-column thesis-component--column--row-mobile">
            <span className="thesis-component--sub-title">Credit Investing</span>
            <span className="thesis-component--text">Our borrowers provide credit investment opportunities that are currently not accessible to (retail) investors</span>
          </div>
        </div>
        <div className="h-flex-column thesis-component--column">
          <div className="h-flex-column thesis-component--image-column">
            {
              isMobile ?
                <StaticImage src={'../assets/shapes/the-bridge-small.png'} alt={'the bridge'} className="thesis-component--image"/>
                :
                <StaticImage src={'../assets/shapes/the-bridge.png'} alt={'the bridge'} className="thesis-component--shape"/>
              // <SvgIcon icon={SVG_ICONS.THE_BRIDGE} color={SVG_COLORS.WHITE} className="thesis-component--shape"/>
            }
          </div>
          <div className="h-flex-column thesis-component--column--row-mobile">
            <span className="thesis-component--sub-title">The Bridge</span>
            <span className="thesis-component--text">Investment opportunities are connected to real-world assets,  not linked to crypto volatility</span>
          </div>
        </div>
        <div className="h-flex-column thesis-component--column">
          <div className="h-flex-column thesis-component--image-column">
            {
              isMobile ?
                <StaticImage src={'../assets/shapes/defi-small.png'} alt={'defi'} className="thesis-component--image"/>
                :
                <StaticImage src={'../assets/shapes/defi.png'} alt={'defi'} className="thesis-component--shape"/>
              // <SvgIcon icon={SVG_ICONS.DEFI_LOGO} color={SVG_COLORS.WHITE} className="thesis-component--shape"/>
            }
          </div>
          <div className="h-flex-column thesis-component--column--row-mobile">
            <span className="thesis-component--sub-title">Access to DeFi</span>
            <span className="thesis-component--text">Global  institutional / retail investors get fully compliant access to DeFi</span>
          </div>
        </div>
      </div>
    </div>
  )
}
