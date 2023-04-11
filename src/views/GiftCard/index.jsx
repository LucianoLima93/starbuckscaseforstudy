import React, { useContext, useState } from "react";
import Carousel from "../../components/shared/Carousel";
import Container, { CarouselTitle } from "./styles";
import { starbucksCarouselData } from "../../data/carousel";
import Button from "../../components/shared/Button";
import { ThemeContext } from "styled-components";
import DefaultCard from "../../components/shared/DefaultCard";


const GiftCard = () => {
  const themeContext = useContext(ThemeContext);
  const textColorOne = themeContext.color.brand.pure;
  const btnStyle = {minWidth: "35px", minHeight: "35px", fontSize: "16px", color: textColorOne}
  const [amountOnScreen, setAmountOnScreen] = useState(0);

  const carousels = starbucksCarouselData.sort(((a, b) => a.displayOrder - b.displayOrder)).map((el, i) => {
    return (
      <div key={i}>
        <CarouselTitle>
          <h2>{el.names.long}</h2>
          {el.cards.giftCards.length > amountOnScreen && <Button text="See all" type={"link"} style={btnStyle}></Button>}
        </CarouselTitle>
        <Carousel
          showSeeMore={value => setAmountOnScreen(value)}
          carouselData={el.cards.giftCards}
          renderCard={(item, i) =>
            <DefaultCard item={item} key={i}/>
          }
        />
      </div>
    )
  })
  return (
    <Container>{carousels}</Container>
  )
}
export default GiftCard;