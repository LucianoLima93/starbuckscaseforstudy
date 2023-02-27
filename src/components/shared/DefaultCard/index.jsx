import React from "react";
import Card from "./styles";
import { Image, ImageContainer, ImageSpread } from "./styles";

const DefaultCard = ({item}) => {
  return (
    <Card>
      <div style={{paddingBottom: "62.9747%"}}/>
      <ImageContainer>
        <ImageSpread>
          <Image src={item.image} alt="carousel"/>
        </ImageSpread>
        {/* <ImagePlaceholder src={defaultImages.placeholder} alt="placeholder"/> */}
      </ImageContainer>
  </Card>
  );
};
export default DefaultCard;
