import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { IComponentProps } from '../hooks/useMobileWidth';

export const ThesisComponent = ({ isMobile }: IComponentProps) => {
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
                <StaticImage src={'../assets/shapes/credit-investing_mobile.png'} alt={'credit investing'} className="thesis-component--image"/>
                :
                <StaticImage src={'../assets/shapes/credit-investing.png'} alt={'credit investing'} className="thesis-component--shape"/>
            }
          </div>
          <div className="h-flex-column thesis-component--column--row-mobile">
            <span className="thesis-component--sub-title">Credit investing</span>
            <span className="thesis-component--text">Our borrowers provide credit investment opportunities that are currently not accessible to (retail) investors</span>
          </div>
        </div>
        <div className="h-flex-column thesis-component--column">
          <div className="h-flex-column thesis-component--image-column">
            {
              isMobile ?
                <StaticImage src={'../assets/shapes/the-bridge_mobile.png'} alt={'the bridge'} className="thesis-component--image"/>
                :
                <StaticImage src={'../assets/shapes/the-bridge.png'} alt={'the bridge'} className="thesis-component--shape"/>
            }
          </div>
          <div className="h-flex-column thesis-component--column--row-mobile">
            <span className="thesis-component--sub-title">The bridge</span>
            <span className="thesis-component--text">Investment opportunities are connected to real-world assets,  not linked to crypto volatility</span>
          </div>
        </div>
        <div className="h-flex-column thesis-component--column">
          <div className="h-flex-column thesis-component--image-column">
            {
              isMobile ?
                <StaticImage src={'../assets/shapes/defi_mobile.png'} alt={'defi'} className="thesis-component--image"/>
                :
                <StaticImage src={'../assets/shapes/defi.png'} alt={'defi'} className="thesis-component--shape"/>
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
