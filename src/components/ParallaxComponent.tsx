import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { StaticImage } from 'gatsby-plugin-image';
import { PopupButton } from '@typeform/embed-react';
import { IComponentProps } from '../hooks/useComponentProps';
import { openInNewTab } from '../utils/openInNewTab';

export const ParallaxComponent = ({ isMobile }: IComponentProps) => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const minOpacity = 15;
  const baseMargin = 50; 
  const marginMoveSpeed = 15 * Math.log(scrollY);

  const firstImageStyle = () => {
    const highLightTargetScroll = 480
    const opacity = (100 - Math.abs((scrollY - highLightTargetScroll) / (0.3*highLightTargetScroll)) * 100);
    const margin = baseMargin - marginMoveSpeed; 

    return { marginTop: margin + 'px', opacity: (opacity > minOpacity ? opacity : minOpacity) + '%' }

  }

  const secondImageStyle = () => {
    const highLightTargetScroll = 720
    const opacity = (100 - Math.abs((scrollY - highLightTargetScroll) / (0.3*highLightTargetScroll)) * 100);
    const margin = baseMargin + 80 - 1.2 * marginMoveSpeed;

    return { marginTop: margin + 'px', opacity: (opacity > minOpacity ? opacity : minOpacity) + '%' }

  }

  const thirdImageStyle = () => {
    const highLightTargetScroll = 1000
    const opacity = (100 - Math.abs((scrollY - highLightTargetScroll) / (0.3*highLightTargetScroll)) * 100);
    const margin = baseMargin + 150 - 1.3 * marginMoveSpeed;

    return { marginTop: margin + 'px', opacity: (opacity > minOpacity ? opacity : minOpacity) + '%' }

  }

  const visionComponent = () => (
    <>
      <span className="parallax-component--child-scroll--title">Vision</span>
      <hr className="solid"/>
      <span className="parallax-component--child-scroll--text">Credix is the first truly global ecosystem for private credit, connecting alternative lenders in emerging markets with institutional investors. {isMobile && <><br/><br/></>} We’re building an open and decentralized platform that will allow any loan originator and any investor to connect at scale in a more open, transparent, and efficient way.</span>
    </>
  )

  const investorsComponent = () => (
    <>
      <span className="parallax-component--child-scroll--title">For Investors</span>
      <hr className="solid"/>
      <span className="parallax-component--child-scroll--text">Institutional investors such as hedge funds, family offices, and alternative asset managers are accessing Credix to enhance returns and diversify risk.</span>
      <span className="cta-component-investors--text--cta-link" onClick={() => openInNewTab('https://docs.credix.finance/')}>Read our documentation -{'>'}</span>
      <br/>
      <PopupButton id="E98Qjiw9" className="credix-button--typeform parallax-component--child-scroll--button">
        Become an investor
      </PopupButton>
    </>
  )

  const borrowerComponent = () => (
    <>
      <span className="parallax-component--child-scroll--title">For Borrowers</span>
      <hr className="solid"/>
      <span className="parallax-component--child-scroll--text">Alternative lenders, such as Credit FinTechs and nonbank loan originators can access credit facilities more efficient and for a lower cost of capital.</span>
      <span className="cta-component-investors--text--cta-link" onClick={() => openInNewTab('https://docs.credix.finance/')}>Read our documentation -{'>'}</span>
      <br/>
      <PopupButton id="yFTAJy3h" className="credix-button--typeform parallax-component--child-scroll--button">
        Register as a borrower
      </PopupButton>
    </>
  )


  return (
    <div className="parallax-component">
      {
        isMobile ?
          <div className="h-flex-column parallax-component--mobile">
            {visionComponent()}
            {investorsComponent()}
            {borrowerComponent()}
          </div>
          :
          <div className="parallax-component--wrapper h-flex-row" style={{ transform: `translateY(${scrollY > 400 ? ((scrollY - 400) * 100) / (1500 - 400) : 0}px)` }}>
            <Parallax translateY={[30, -200]} className="parallax-component--child-scroll h-flex-column">
              {visionComponent()}
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              {investorsComponent()}
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              {borrowerComponent()}

            </Parallax>
            <div className="parallax-component--image-scroll h-flex-column">
              <div className="parallax-component--image-overlap" style={firstImageStyle()}>
                <StaticImage src={'../assets/shapes/Credix_platform_1.svg'} alt={'Credix platform 1'}/>
              </div>
              <div className="parallax-component--image-overlap" style={secondImageStyle()}>
                <StaticImage src={'../assets/shapes/Credix_platform_2.svg'} alt={'Credix platform 2'}/>
              </div>
              <div className="parallax-component--image-overlap" style={thirdImageStyle()}>
                <StaticImage src={'../assets/shapes/Credix_platform_3.svg'} alt={'Credix platform 3'}/>
              </div>
            </div>
          </div>

      }

    </div>
  );
}
