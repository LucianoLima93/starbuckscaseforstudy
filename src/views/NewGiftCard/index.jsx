import React, { useContext, useState } from "react";
import Carousel from "../../components/shared/NewCarousel";
import Container, { CarouselTitle } from "./styles";
import { starbucksCarouselData } from "../../data/carouselNew";
import Button from "../../components/shared/Button";
import { ThemeContext } from "styled-components";
import NewCard from "../../components/shared/NewCard";


const NewGiftCard = () => {
  const themeContext = useContext(ThemeContext);
  const textColorOne = themeContext.color.brand.pure;
  const btnStyle = {minWidth: "35px", minHeight: "35px", fontSize: "16px", color: textColorOne}
  const [amountOnScreen, setAmountOnScreen] = useState(0);

  const carousels = starbucksCarouselData.sort(((a, b) => a.displayOrder - b.displayOrder)).map((el, i) => {
    return (
      <div key={i}>
        <CarouselTitle>
          <h2>{el.names}</h2>
          {el.eGifts.length > amountOnScreen && <Button text="See all" type={"link"} style={btnStyle}></Button>}
        </CarouselTitle>
        <Carousel
          showSeeMore={value => setAmountOnScreen(value)}
          carouselData={el.eGifts}
          renderCard={(item, i) =>
            <NewCard item={item} key={i}/>
          }
        />
      </div>
    )
  })
  return (
    <Container>{carousels}</Container>
  )
}

export default NewGiftCard;