import * as React from 'react'
import { CredixButton } from './shared/buttons/CredixButton';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';


export const HomeComponent = () => {

  return (
    <div className="h-flex-column home-component">
      <SvgIcon className="home-component--background-shape" icon={SVG_ICONS.HOME_BACKGROUND_SHAPE} color={SVG_COLORS.BLACK}/>
      <div className="h-flex-row cta-block">
        <div className="h-flex-column">
          <h1 className="cta-block--title">Credit investing<br/> democratized</h1>
          <span className="cta-block--text">Be part of the new decentralized credit marketplace connecting investors with FinTechs in emerging markets.</span>
          <CredixButton className="cta-block--button" url={'https://discord.gg/5Ab8b8ueGs'}>Join Discord</CredixButton>
        </div>
      </div>
      <div className="h-flex-row home-component--arrow-row" id="journey">
        <a href="#journey" className="home-component--arrow"/>
      </div>
    </div>
  )
}
