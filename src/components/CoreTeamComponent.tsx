import React from 'react';
import { PersonComponent } from './shared/person/PersonComponent';
import { StaticImage } from 'gatsby-plugin-image';
import { IComponentProps } from '../pages';

export const CoreTeamComponent = ({ isLightTheme }: IComponentProps) => {
  return (
    <div className="h-flex-row core-team-component">
      <div className="h-flex-column core-team-component--core">
        <div className="h-flex-row core-team-component--title-row">
          <div className="h-flex-column core-team-component--title-column">
            <span className="sub-title">The core team</span>
          </div>
        </div>
        <div className="h-flex-column">
          <div className="h-flex-column core-team-component--persons-column">
            <div className="h-flex-row h-flex-row--space-around core-team-component--persons">
              <div className="h-flex-column">
                <PersonComponent
                  name={'Thomas Bohner'}
                  image={<StaticImage src={'../assets/people/Thomas.jpeg'} alt={'Thomas Bohner'}/>}
                  linkedInUrl={'https://www.linkedin.com/in/thomas-bohner-a0165597/'}
                  twitterUrl={'https://twitter.com/t_bohner'}
                  title={'FOUNDER, CEO'}
                  isLightTheme={isLightTheme}
                />
              </div>
              <div className="h-flex-column">
                <PersonComponent
                  name={'Maxim Piessen'}
                  image={<StaticImage src={'../assets/people/Maxim.jpeg'} alt={'Maxim Piessen'}/>}
                  linkedInUrl={'https://www.linkedin.com/in/maximpiessen/'}
                  twitterUrl={'https://twitter.com/PiessenMaxim'}
                  title={'CO-FOUNDER, CTO'}
                  isLightTheme={isLightTheme}
                />
              </div>
              <div className="h-flex-column">
                <PersonComponent
                  name={'Chaim Finizola'}
                  image={<StaticImage src={'../assets/people/Chaim.jpeg'} alt={'Chaim Finizola'}/>}
                  linkedInUrl={'https://www.linkedin.com/in/chaimfinizola/'}
                  twitterUrl={'https://twitter.com/chaim_fes'}
                  title={'CO-FOUNDER, CGO'}
                  isLightTheme={isLightTheme}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="h-flex-column core-team-component--advisors">
        <div className="h-flex-row core-team-component--title-row">
          <div className="h-flex-column core-team-component--title-column">
            <span className="sub-title">Our advisors</span>
          </div>
        </div>
        <span className="core-team-component--advisors--name">Chike Ukaegbu</span>
        <span className="core-team-component--advisors--description">Head crypto <br/> emerging markets @ VISA</span>
        <span className="core-team-component--advisors--name">Joao Bezzerra</span>
        <span className="core-team-component--advisors--description">Former managing director & <br/> CTO @ ITAU</span>
        <span className="core-team-component--advisors--name">Reginald de wasseige</span>
        <span className="core-team-component--advisors--description">Investor @ Augmentum</span>
        <span className="core-team-component--advisors--name">Kenneth Bok</span>
        <span className="core-team-component--advisors--description">MD blocks <br/> Ex goldman Sachs</span>

      </div>
    </div>

  )
}
