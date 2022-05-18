import * as React from 'react'
import { CredixButton } from '../shared/buttons/CredixButton';
import SvgIcon, { SVG_ICONS } from '../shared/svg-icon/SvgIcon';
import { IWidthProps } from '../../pages';
import { StaticImage } from 'gatsby-plugin-image';

// todo: fix url for becoming borrower button
// todo: replace image with correct one
export const HomeComponent = ({ isMobile }: IWidthProps) => {

  return (
    <div className="h-flex-column home-component-borrowers">
      {
        isMobile ?
          <StaticImage className="home-component-borrowers--background-shape--mobile" src="../../assets/shapes/home-background-shape-investors_mobile.png" alt="background"/>
          :
          <SvgIcon className="home-component-borrowers--background-shape" icon={SVG_ICONS.HOME_BACKGROUND_SHAPE_INVESTORS}/>
      }
      <div className="h-flex-row cta-block">
        <div className="h-flex-column">
          <h1 className="cta-block-borrowers--title">Borrow at attractive rates</h1>
          <span className="cta-block--text">Get cheaper credit, less bureaucracy and shorter lead times.</span>
          <CredixButton className="cta-block-borrowers--button" url={''}>Become a borrower</CredixButton>
        </div>
      </div>
    </div>
  )
}
