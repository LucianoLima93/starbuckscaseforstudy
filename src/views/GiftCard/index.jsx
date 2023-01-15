/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Container, { CardContainer, CarouselContainer, Image, ImageContainer, ImagePlaceholder } from "./styles";
import { carouselData, defaultImages } from "../../data/carousel";

const GiftCard = () => {
  const cardContainerRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const [valueToTranslate, setValueToTranslate] = useState(0);
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const [offsetWidthCard, setOffsetWidthCard] = useState(false);
  const [maxToScroll, setMaxToScroll] = useState(0);
  // const [offsetWidth, setOffsetWidth] = useState(false);
  const [amountOnScreen, setAmountOnScreen] = useState(false);
  const [indexAmountOnScreen, setIndexAmountOnScreen] = useState(1);
  const [remainder, setRemainder] = useState(0);

  const carouselItem = carouselData.map((item, i) => {
    return (
      <CardContainer key={i} ref={cardContainerRef}>
        <ImageContainer>
          <Image src={item.image} alt="carousel"/>
          {/* <ImagePlaceholder src={defaultImages.placeholder} alt="placeholder"/> */}
        </ImageContainer>
      </CardContainer>
    )
  });
  // TODO será a area calculo por scroll
  useEffect(() => {
    const _amountOnScreen = Math.trunc(carouselContainerRef.current.offsetWidth / cardContainerRef.current.offsetWidth);
    setAmountOnScreen(_amountOnScreen);

    setOffsetWidthCard(cardContainerRef.current.offsetWidth);
    setMaxToScroll(Math.trunc(carouselData.length / _amountOnScreen));
    setRemainder(carouselData.length % _amountOnScreen);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToNext = () => {
    const valeuToScroll = offsetWidthCard * amountOnScreen;
    if (carouselContainerRef.current) {
      if ((indexAmountOnScreen) === maxToScroll && remainder > 0) {
        translate3dCarousel(-(offsetWidthCard * remainder) + valueToTranslate, indexAmountOnScreen + 1);
      } else {
        translate3dCarousel(-valeuToScroll + valueToTranslate, indexAmountOnScreen + 1);
      }
    }
  }

  const goToPrev = () => {
    const valeuToScroll = offsetWidthCard * amountOnScreen;
    if (carouselContainerRef.current && !disablePrev) {
      if ((indexAmountOnScreen) === maxToScroll && remainder > 0) {
        translate3dCarousel(valueToTranslate + (offsetWidthCard * remainder), indexAmountOnScreen - 1);
      } else {
        translate3dCarousel(valueToTranslate + valeuToScroll, indexAmountOnScreen - 1);
      }
    }
  }
  const translate3dCarousel = (translateValue, index) => {
    carouselContainerRef.current.style.transform = `translate3d(${translateValue}px, 0px, 0px)`;
    setValueToTranslate(translateValue);
    setIndexAmountOnScreen(index);
  }
  useEffect(() => {
    const addIfRemaider = remainder > 0 ? 1 : 0;
    const _maxToScroll = maxToScroll + addIfRemaider;
    if (indexAmountOnScreen === _maxToScroll) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  },[indexAmountOnScreen, maxToScroll, remainder]);

  useEffect(() => {
    if (valueToTranslate === 0) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
    }
  },[valueToTranslate]);


  return (
    <Container>
      <div style={{fontSize: "24px", marginBottom: "20px", display: "flex"}}>
        {!disablePrev && <div onClick={() => goToPrev()}>Prev</div>}
        {!disableNext && <div onClick={() => goToNext()} >Next</div>}
      </div>
      <CarouselContainer ref={carouselContainerRef}>
        {carouselItem}
      </CarouselContainer>
    </Container>
  );
};
export default GiftCard;
