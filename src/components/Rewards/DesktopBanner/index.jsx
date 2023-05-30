import React from "react";
import { Container, ImageContainer } from "./styles";

const Rewards = () => {
  const desktopImage = 'url(https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png)';
  return (
    <Container>
      <ImageContainer desktopImage={desktopImage}>
        <div style={{maxWidth: '1440px', width: '100%', boxSizing: 'content-box', margin: '0 auto'}}>
          <div style={{paddingBottom: '56.25%'}}></div>
        </div>
      </ImageContainer>
      {/* <TextBlock>
        <h2>FREE COFFEE IS A TAP AWAY</h2>
        <span>Join now to start earning Rewards.</span>
        <span>Or <a href="/">join in the app</a> for the best experience</span>
      </TextBlock> */}
    </Container>
  )
}

export default Rewards;