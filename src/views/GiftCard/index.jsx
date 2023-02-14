import React from "react";
import Carousel from "../../components/shared/Carousel";
import Container, { CarouselTitle } from "./styles";
import { carouselData } from "../../data/carousel";


const GiftCard = () => {
  const carousels = carouselData.map((el) => {
    return (
      <>
        <CarouselTitle>{el.displayName}</CarouselTitle>
        <Carousel carouselData={el.data}/>
      </>
    )
  })
  return (
    <Container>{carousels}</Container>
  )
}
export default GiftCard;