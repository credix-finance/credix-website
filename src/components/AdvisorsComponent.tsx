import React from 'react';
import { PersonComponent } from './shared/person/PersonComponent';
import { StaticImage } from 'gatsby-plugin-image';

export const AdvisorsComponent = () => {
  return (
    <div className="h-flex-column advisors-component">
      <div className="h-flex-row">
        <span className="advisors-component--subtitle">Our Advisors</span>
      </div>
      <div className="h-flex-row h-flex-row--space-between advisors-component--persons">
        <div className="h-flex-column advisors-component--person">
          <PersonComponent
            name={'Chike Ukaegbu'}
            image={<StaticImage src={'../assets/people/Ukaegbu.jpeg'} alt={'Chike Ukaegbu'}/>}
            linkedInUrl={'https://www.linkedin.com/in/chikeukaegbu/'}
            twitterUrl={'https://twitter.com/chikeukaegbu'}
            title={
              <span>Head crypto <br/> emerging markets @ VISA</span>
            }
            advisor={true}
          />
        </div>
        <div className="h-flex-column advisors-component--person">
          <PersonComponent
            name={'Joao Bezzerra'}
            image={<StaticImage src={'../assets/people/Bezzerra.png'} alt={'Joao Bezzerra'}/>}
            linkedInUrl={'https://www.linkedin.com/in/jo%C3%A3o-bezerra-leite-77b94924/'}
            twitterUrl={'https://twitter.com/bezerraj10'}
            title={
              <span>FORMER MANAGING DIRECTOR <br/> & CTO @ ITAU</span>
            }
            advisor={true}
          />
        </div>
        <div className="h-flex-column advisors-component--person">
          <PersonComponent
            name={'Reginald de Wasseige'}
            image={<StaticImage src={'../assets/people/De_Wasseige.png'} alt={'Reginald de Wasseige'}/>}
            linkedInUrl={'https://www.linkedin.com/in/reginald-de-wasseige-747ab528/'}
            twitterUrl={''}
            title={
              <span>INVESTOR <br/>@ AUGMENTUM</span>
            }
            advisor={true}
          />
        </div>
        <div className="h-flex-column advisors-component--person">
          <PersonComponent
            name={'Kenneth Bok'}
            image={<StaticImage src={'../assets/people/Bok.png'} alt={'Kenneth Bok'}/>}
            linkedInUrl={'https://www.linkedin.com/in/kenbok/'}
            twitterUrl={'https://twitter.com/BokKenneth'}
            title={
              <span>MD BLOCKS <br/> EX GOLDMAN SACHS</span>
            }
            advisor={true}
          />
        </div>
        {/*</div>*/}
      </div>
    </div>
  )
}
