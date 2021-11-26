import React from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';

export const ThesisComponent = () => {
  return (
    <div className="h-flex-column thesis-component">
      <div className="h-flex-row">
        <span className="sub-title">Thesis</span>
      </div>
      <div className="h-flex-row h-flex-row--space-between thesis-component--row">
        <div className="h-flex-column thesis-component--column">
          <SvgIcon icon={SVG_ICONS.CREDIT_INVESTING} color={SVG_COLORS.WHITE} className="thesis-component--shape"/>
          <span className="thesis-component--sub-title">Credit Investing</span>
          <span className="thesis-component--text">Our borrowers provide credit investment opportunities that are currently not accessible to (retail) investors</span>
        </div>
        <div className="h-flex-column thesis-component--column">
          <SvgIcon icon={SVG_ICONS.THE_BRIDGE} color={SVG_COLORS.WHITE} className="thesis-component--shape"/>
          <span className="thesis-component--sub-title">The Bridge</span>
          <span className="thesis-component--text">Investment opportunities are connected to real-world assets,  not linked to crypto volatility</span>
        </div>
        <div className="h-flex-column thesis-component--column">
          <SvgIcon icon={SVG_ICONS.DEFI_LOGO} color={SVG_COLORS.WHITE} className="thesis-component--shape"/>
          <span className="thesis-component--sub-title">Access to DeFi</span>
          <span className="thesis-component--text">Global  institutional / retail investors get fully compliant access to DeFi</span>
        </div>
      </div>
    </div>
  )
}
