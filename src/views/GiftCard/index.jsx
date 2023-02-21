import React from "react";
import Carousel from "../../components/shared/Carousel";
import Container, { CarouselTitle } from "./styles";
import { carouselData } from "../../data/carousel";


const GiftCard = () => {
  const carousels = carouselData.map((el, i) => {
    return (
      <div key={i}>
        <CarouselTitle>{el.displayName}</CarouselTitle>
        <Carousel carouselData={el.data}/>
      </div>
    )
  })
  return (
    <Container>{carousels}</Container>
  )
}
export default GiftCard;