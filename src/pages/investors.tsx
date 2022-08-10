import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { HeaderComponent } from "../components/HeaderComponent";
import fav from "../../static/favicon.png";
import preview from "../../static/preview_large.png";
import { InvestorsHomeComponent } from "../components/investors/InvestorsHomeComponent";
import { InvestorsCTAComponent } from "../components/investors/InvestorsCTAComponent";
import { FooterComponent } from "../components/FooterComponent";
import { InvestorsList } from "../components/investors/InvestorsList";
import { ELocalStorage, useComponentProps } from "../hooks/useComponentProps";
import { MarqueeComponent } from "../components/shared/marquee/MarqueeComponent";
import { Location } from "@reach/router";
import { CookieBanner } from "../components/shared/cookies/CookieBanner";

const InvestorsPage = () => {
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
              "Get access to exclusive, high-quality private credit investments.",
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
              "Get access to exclusive, high-quality private credit investments.",
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
              "Get access to exclusive, high-quality private credit investments.",
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
          <Location>
            {(locationProps) => (
              <HeaderComponent
                {...locationProps}
                isMobile={!!width && width < mobileWidth}
                isLightTheme={isLightTheme}
                setLightTheme={setLightTheme}
              />
            )}
          </Location>
          <InvestorsHomeComponent isMobile={!!width && width < mobileWidth} />
          <InvestorsCTAComponent />
          <InvestorsList
            isMobile={!!width && width < mobileWidth}
            isLightTheme={isLightTheme}
          />
          <FooterComponent
            isMobile={!!width && width < mobileWidth}
            isLightTheme={isLightTheme}
          />
        </>
      )}
    </main>
  );
};

export default InvestorsPage;
