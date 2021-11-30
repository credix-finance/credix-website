import React from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';
import { PersonComponent } from './shared/person/PersonComponent';
import { StaticImage } from 'gatsby-plugin-image';

export const CoreTeamComponent = () => {
  return (
    <>
      <div className="h-flex-column core-team-component">
        <div className="h-flex-row core-team-component--title-row">
          <div className="h-flex-column core-team-component--title-column">
            <span className="sub-title">The core <br/> Team</span>
            <span className="core-team-component--who-we-are">
              <SvgIcon icon={SVG_ICONS.LINE_2} color={SVG_COLORS.WHITE} className="core-team-component--who-we-are--line"/>
              <span className="core-team-component--who-we-are--text">Who we are</span>
            </span>
          </div>
          <div className="h-flex-column core-team-component--persons-column">
            <div className="h-flex-row h-flex-row--space-around core-team-component--persons">
              <div className="h-flex-column">
                <PersonComponent
                  name={'Thomas Bohner'}
                  image={<StaticImage src={'../assets/people/Thomas.jpeg'} alt={'Thomas Bohner'}/>}
                  linkedInUrl={'https://www.linkedin.com/in/thomas-bohner-a0165597/'}
                  twitterUrl={'https://twitter.com/t_bohner'}
                  title={'FOUNDER, CEO'}
                />
              </div>
              <div className="h-flex-column">
                <PersonComponent
                  name={'Maxim Piessen'}
                  image={<StaticImage src={'../assets/people/Maxim.jpeg'} alt={'Maxim Piessen'}/>}
                  linkedInUrl={'https://www.linkedin.com/in/maximpiessen/'}
                  twitterUrl={'https://twitter.com/PiessenMaxim'}
                  title={'CO-FOUNDER, CTO'}
                />
              </div>
              <div className="h-flex-column">
                <PersonComponent
                  name={'Chaim Finizola'}
                  image={<StaticImage src={'../assets/people/Chaim.jpeg'} alt={'Chaim Finizola'}/>}
                  linkedInUrl={'https://www.linkedin.com/in/chaimfinizola/'}
                  twitterUrl={'https://twitter.com/chaim_fes'}
                  title={'CO-FOUNDER, CGO'}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}
