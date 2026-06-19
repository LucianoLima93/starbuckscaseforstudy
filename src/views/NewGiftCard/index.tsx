import React, { useContext, useState } from "react";
import Carousel from "../../components/shared/NewCarousel";
import Container, { CarouselTitle } from "./styles";
import { starbucksCarouselData } from "../../data/carouselNew";
import Button from "../../components/shared/Button";
import { ThemeContext } from "@emotion/react";
import NewCard from "../../components/shared/NewCard";

const NewGiftCard: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const textColorOne = themeContext.color.brand.pure;
  const btnStyle: React.CSSProperties = {
    minWidth: "35px",
    minHeight: "35px",
    fontSize: "16px",
    color: textColorOne,
  };
  const [amountOnScreen, setAmountOnScreen] = useState(0);

  // Nota: o campo correto é `name` (não `names`). Corrigido o bug original.
  const carousels = starbucksCarouselData.map((el, i) => (
    <div key={i}>
      <CarouselTitle>
        <h2>{el.name}</h2>
        {el.eGifts.length > amountOnScreen && (
          <Button text="See all" type="link" style={btnStyle} />
        )}
      </CarouselTitle>
      <Carousel
        showSeeMore={(value) => setAmountOnScreen(value)}
        carouselData={el.eGifts}
        renderCard={(item, i) => <NewCard item={item} key={i} />}
      />
    </div>
  ));

  return <Container>{carousels}</Container>;
};

export default NewGiftCard;
