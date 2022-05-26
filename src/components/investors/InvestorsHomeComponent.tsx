import * as React from 'react'
import { CredixButton } from '../shared/buttons/CredixButton';
import SvgIcon, { SVG_ICONS } from '../shared/svg-icon/SvgIcon';
import { StaticImage } from 'gatsby-plugin-image';
import { IComponentProps } from '../../hooks/useComponentProps';

// todo: fix url for becoming investor button
export const InvestorsHomeComponent = ({ isMobile }: IComponentProps) => {

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
          <h1 className="cta-block-investors--title">Invest <br/> With Credix</h1>
          <span className="cta-block-investors--text">Stable return, flexibility to withdraw at any moment and invest in senior tranche.</span>
          <CredixButton className="cta-block-investors--button" url={''}>Become an investor</CredixButton>
        </div>
      </div>
    </div>
  )
}
