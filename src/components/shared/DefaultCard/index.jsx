import React, { useState } from "react";
import { defaultImages } from "../../../data/carousel";
import Card from "./styles";
import { Image, ImageContainer, ImageSpread } from "./styles";


const DefaultCard = ({item}) => {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <Card>
      <div style={{paddingBottom: "62.9747%"}}/>
      <ImageContainer>
        <ImageSpread>
          <Image
            showImage={isLoaded}
            src={defaultImages.placeholder} alt="placeholder"/>
          <Image
            showImage={!isLoaded}
            src={item.assets[0].uri} alt="carousel"
            onLoad={() => setIsLoaded(false)}/>
        </ImageSpread>
      </ImageContainer>
  </Card>
  );
};
export default DefaultCard;
