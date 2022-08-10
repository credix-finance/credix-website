import * as React from "react";
import "../theme/index.scss";
import { HomeComponent } from "../components/HomeComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { CTATeamComponent } from "../components/CTATeamComponent";
import { CoreTeamComponent } from "../components/CoreTeamComponent";
import { FooterComponent } from "../components/FooterComponent";
import Helmet from "react-helmet";
import fav from "../../static/favicon.png";
import preview from "../../static/preview_large.png";
import { ELocalStorage, useComponentProps } from "../hooks/useComponentProps";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxComponent } from "../components/ParallaxComponent";
import { BackersBorrowersComponent } from "../components/BackersBorrowersComponent";
import { MarqueeComponent } from "../components/shared/marquee/MarqueeComponent";
import { CTAHomeComponent } from "../components/CTAHomeComponent";
import { useEffect, useState } from "react";
import { CookieBanner } from "../components/shared/cookies/CookieBanner";

const IndexPage = () => {
  const { width, mobileWidth, getLightTheme } = useComponentProps();

  const [isLightTheme, setIsLightTheme] = useState<boolean | undefined>(
    undefined
  );

  const setLightTheme = (bool: boolean) => {
    setIsLightTheme(bool);
    localStorage.setItem(ELocalStorage.LIGHT_THEME, JSON.stringify(bool));
  };

  useEffect(() => {
    setIsLightTheme(getLightTheme());
  }, []);

  return (
    <main className={`${isLightTheme ? "light" : "dark"}`}>
      <Helmet
        titleTemplate="%s - Credit investing made global"
        link={[{ rel: "shortcut icon", type: "image/png", href: `${fav}` }]}
        meta={[
          {
            name: "description",
            content:
              "CREDIX is a decentralized credit marketplace connecting investors with FinTechs in emerging markets. Learn more about the future of debt financing now.",
          },
          {
            name: "keywords",
            content:
              "fintech, finance, capital, blockchain, investors, borrowers, assets, emerging countries, capital markets",
          },
          {
            name: "robots",
            content: "index, nofollow",
          },
          {
            name: "title",
            content: "Credix",
          },
          {
            property: "og:image",
            content: preview,
          },
          {
            property: "og:image:alt",
            content: "Credix - Credit investing made global",
          },
          {
            property: "og:title",
            content: "Credix - Credit investing made global",
          },
          {
            property: "og:description",
            content:
              "CREDIX is a decentralized credit marketplace connecting investors with FinTechs in emerging markets. Learn more about the future of debt financing now.",
          },
          {
            property: "og:url",
            content: "https://credix.finance",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "twitter:image",
            content: preview,
          },
          {
            property: "twitter:description",
            content:
              "CREDIX is a decentralized credit marketplace connecting investors with FinTechs in emerging markets. Learn more about the future of debt financing now.",
          },
          {
            property: "twitter:title",
            content: "Credix - Credit investing made global",
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
          {
            name: "theme-color",
            content: "#1F1F1F",
          },
        ]}
      >
        <title lang="en">Credix</title>
        <html lang="en" />
      </Helmet>
      {typeof isLightTheme !== "undefined" && (
        <>
          <MarqueeComponent />
          <CookieBanner />
          <ParallaxProvider>
            <HeaderComponent
              isMobile={!!width && width < mobileWidth}
              isLightTheme={isLightTheme}
              setLightTheme={setLightTheme}
            />
            <HomeComponent isMobile={!!width && width < mobileWidth} />
            <ParallaxComponent
              isMobile={!!width && width < mobileWidth}
              isLightTheme={isLightTheme}
            />
            <BackersBorrowersComponent />
            <CoreTeamComponent isLightTheme={isLightTheme} />
            <CTATeamComponent />
            <CTAHomeComponent />
            <FooterComponent
              isMobile={!!width && width < mobileWidth}
              isLightTheme={isLightTheme}
            />
          </ParallaxProvider>
        </>
      )}
    </main>
  );
};

export default IndexPage;
