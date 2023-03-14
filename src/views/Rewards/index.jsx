import React from "react";
import Container, { Banner, BannerContent, BannerTitle } from "./styles";
import DesktopBanner from "../../components/Rewards/DesktopBanner"

const Rewards = () => {
  return (
    <Container>
      <Banner>
        <BannerContent>
          <BannerTitle>Starbucks® Rewards</BannerTitle>
        </BannerContent>
      </Banner>
      <DesktopBanner></DesktopBanner>
    </Container>
  )
};

export default Rewards;