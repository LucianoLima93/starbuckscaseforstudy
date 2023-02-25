import React, { useContext } from "react";
import Carousel from "../../components/shared/Carousel";
import Container, { CarouselTitle } from "./styles";
import { carouselData } from "../../data/carousel";
import Button from "../../components/shared/Button";
import { ThemeContext } from "styled-components";


const GiftCard = () => {
  const themeContext = useContext(ThemeContext);
  const textColorOne = themeContext.color.brand.pure;
  const btnStyle = {minWidth: "35px", minHeight: "35px", fontSize: "16px", color: textColorOne}

  const carousels = carouselData.map((el, i) => {
    return (
      <div key={i}>
        <CarouselTitle>
          <h2>{el.displayName}</h2>
          <Button text="See all" type={"link"} style={btnStyle}></Button>
        </CarouselTitle>
        <Carousel carouselData={el.data}/>
      </div>
    )
  })
  return (
    <Container>{carousels}</Container>
  )
}
export default GiftCard;