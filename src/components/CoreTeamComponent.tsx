import React from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';
import { PersonComponent } from './shared/person/PersonComponent';
import { StaticImage } from 'gatsby-plugin-image';

export const CoreTeamComponent = () => {
  return (
    <div className="h-flex-column core-team-component">
      <div className="h-flex-row h-flex-row--space-between core-team-component--title-row">
        <span className="sub-title">The core <br/> Team</span>
        <span className="core-team-component--who-we-are">
          <SvgIcon icon={SVG_ICONS.LINE_2} color={SVG_COLORS.WHITE} className="core-team-component--who-we-are--line"/>
          <span className="core-team-component--who-we-are--text">Who we are</span>
        </span>
      </div>
      <div className="h-flex-row h-flex-row--space-between core-team-component--persons">
        <div className="h-flex-column">
          <PersonComponent
            name={'Thomas Bohner'}
            image={<StaticImage src={'../assets/people/bohner.png'} alt={'Thomas Bohner'}/>}
            linkedInUrl={'https://google.be'}
            twitterUrl={'https://google.be'}
            title={'FOUNDER, CEO'}
          />
        </div>
        <div className="h-flex-column">
          <PersonComponent
            name={'Maxim Piessen'}
            image={<StaticImage src={'../assets/people/Piessen.png'} alt={'Maxim Piessen'}/>}
            linkedInUrl={'https://google.be'}
            twitterUrl={'https://google.be'}
            title={'CO-FOUNDER, CTO'}
          />
        </div>
        <div className="h-flex-column">
          <PersonComponent
            name={'Chaim Finizola'}
            image={<StaticImage src={'../assets/people/Finizola.png'} alt={'Chaim Finizola'}/>}
            linkedInUrl={'https://google.be'}
            twitterUrl={'https://google.be'}
            title={'CO-FOUNDER, CGO'}
          />
        </div>
      </div>
    </div>
  )
}
