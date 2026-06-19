import React from "react";
import { Container, ImageContainer } from "./styles";

const DesktopBanner: React.FC = () => {
  const desktopImage = 'url(https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png)';
  return (
    <Container>
      <ImageContainer desktopImage={desktopImage}>
        <div style={{ maxWidth: '1440px', width: '100%', boxSizing: 'content-box', margin: '0 auto' }}>
          <div style={{ paddingBottom: '56.25%' }}></div>
        </div>
      </ImageContainer>
    </Container>
  );
};

export default DesktopBanner;
