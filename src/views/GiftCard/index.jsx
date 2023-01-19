import React from "react";
import Carousel from "../../components/shared/Carousel";
import Container from "./styles";
import { carouselData } from "../../data/carousel";


const GiftCard = () => {
  return (
    <Container>
      <Carousel carouselData={carouselData}/>
      <Carousel carouselData={carouselData}/>
    </Container>
  )
}
export default GiftCard;