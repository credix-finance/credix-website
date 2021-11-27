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
        <div className="h-flex-column">
          <PersonComponent
            name={'Chike Ukaegbu'}
            image={<StaticImage src={'../assets/people/Ukaegbu.png'} alt={'Chike Ukaegbu'}/>}
            linkedInUrl={'https://google.be'}
            twitterUrl={'https://google.be'}
            title={
              <span>Head crypto <br/> emerging markets @ VISA</span>
            }
          />
        </div>
        <div className="h-flex-column">
          <PersonComponent
            name={'Joao Bezzerra'}
            image={<StaticImage src={'../assets/people/Bezzerra.png'} alt={'Joao Bezzerra'}/>}
            linkedInUrl={'https://google.be'}
            twitterUrl={'https://google.be'}
            title={
              <span>FORMEr MANAGING DIRECTOR <br/> & CTO @ ITAU</span>
            }
          />
        </div>
        <div className="h-flex-column">
          <PersonComponent
            name={'Reginald de Wasseige'}
            image={<StaticImage src={'../assets/people/De_Wasseige.png'} alt={'Reginald de Wasseige'}/>}
            linkedInUrl={'https://google.be'}
            twitterUrl={'https://google.be'}
            title={
              <span>INVESTOR <br/>@ AUGMENTUM</span>
            }
          />
        </div>
        <div className="h-flex-column">
          <PersonComponent
            name={'Kenneth Bok'}
            image={<StaticImage src={'../assets/people/Bok.png'} alt={'Kenneth Bok'}/>}
            linkedInUrl={'https://google.be'}
            twitterUrl={'https://google.be'}
            title={
              <span>MD BLOCKS <br/> EX GOLDMAN SACHS</span>
            }
          />
        </div>
      </div>
    </div>
  )
}
