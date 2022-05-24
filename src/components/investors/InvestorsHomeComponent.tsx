import * as React from 'react'
import { CredixButton } from '../shared/buttons/CredixButton';
import SvgIcon, { SVG_ICONS } from '../shared/svg-icon/SvgIcon';
import { StaticImage } from 'gatsby-plugin-image';
import { IWidthProps } from '../../hooks/useMobileWidth';

// todo: fix url for becoming investor button
export const InvestorsHomeComponent = ({ isMobile }: IWidthProps) => {

  return (
    <div className="h-flex-column home-component-investors">
      {
        isMobile ?
          <StaticImage className="home-component-investors--background-shape--mobile" src="../../assets/shapes/home-background-shape-investors_mobile.png" alt="background"/>
          :
          <SvgIcon className="home-component-investors--background-shape" icon={SVG_ICONS.HOME_BACKGROUND_SHAPE_INVESTORS}/>
      }
      <div className="h-flex-row cta-block">
        <div className="h-flex-column">
          <h1 className="cta-block-investors--title">Invest with Credix</h1>
          <span className="cta-block--text">Stable return, flexibility to withdraw at any moment and invest in senior tranche.</span>
          <CredixButton className="cta-block-investors--button" url={''}>Become an investor</CredixButton>
        </div>
      </div>
    </div>
  )
}
