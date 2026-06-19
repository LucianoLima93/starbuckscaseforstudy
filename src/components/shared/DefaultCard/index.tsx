import React, { useState } from "react";
import { defaultImages } from "../../../data/carousel";
import Card, { Image, ImageContainer, ImageSpread } from "./styles";
import type { EGift } from "../../../data/carousel";

interface DefaultCardProps {
  item: EGift;
}

const DefaultCard: React.FC<DefaultCardProps> = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <Card>
      <div style={{ paddingBottom: "62.9747%" }} />
      <ImageContainer>
        <ImageSpread>
          <Image
            showImage={isLoaded}
            src={defaultImages.placeholder}
            alt="placeholder"
          />
          <Image
            showImage={!isLoaded}
            src={item.largeImageUrl}
            alt="carousel"
            onLoad={() => setIsLoaded(false)}
          />
        </ImageSpread>
      </ImageContainer>
    </Card>
  );
};

export default DefaultCard;
