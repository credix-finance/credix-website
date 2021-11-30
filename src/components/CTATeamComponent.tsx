import React from 'react';
import { CredixButton } from './shared/buttons/CredixButton';

export const CTATeamComponent = () => {
  return (
    <div className="h-flex-column cta-team-component">
      <div className="h-flex-row h-flex-row--space-between cta-team-component--row">
        <span className="h-flex-column">
          <span className="cta-team-component--title">Join The Team</span>
          <span className="cta-team-component--text">
          Become part of the team and help us build the debt capital markets <br/> infrastructure of the future.
          </span>
        </span>
        <span className="h-flex-column cta-team-component--button-column">
          <CredixButton className="cta-team-component--button" url={'https://angel.co/company/credix'}>See openings</CredixButton>
        </span>
      </div>
    </div>

  )
}
