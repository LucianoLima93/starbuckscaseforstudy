/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Container, { CardContainer, CarouselContainer, Image, ImageContainer, ImagePlaceholder, Card, ImageSpread } from "./styles";
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
  const [finalSlide, setFinalSlide] = useState(false);
  const [inactiveClass, setInactiveClass] = useState('');
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
    const valeuToScrollRemainder = offsetWidthCard * remainder;

    if (carouselContainerRef.current) {
      if (indexAmountOnScreen === maxToScroll && remainder > 0) {
        translate3dCarousel(-valeuToScrollRemainder + valueToTranslate, indexAmountOnScreen);
        setFinalSlide(!finalSlide);
      } else {
        translate3dCarousel(-valeuToScroll + valueToTranslate, indexAmountOnScreen + 1);
        if((indexAmountOnScreen + 1) === maxToScroll && remainder === 0) setFinalSlide(!finalSlide);
      }
    }
  }

  const goToPrev = () => {
    const valeuToScroll = offsetWidthCard * amountOnScreen;
    const valeuToScrollRemainder = offsetWidthCard * remainder;

    if (carouselContainerRef.current && !disablePrev) {
      if (finalSlide && remainder > 0) {
        translate3dCarousel(valueToTranslate + valeuToScrollRemainder, indexAmountOnScreen);
        setFinalSlide(!finalSlide);
      } else {
        translate3dCarousel(valueToTranslate + valeuToScroll, indexAmountOnScreen - 1);
        if(indexAmountOnScreen === maxToScroll && remainder === 0) setFinalSlide(!finalSlide);
      }
    }
  }
  const translate3dCarousel = (translateValue, index) => {
    carouselContainerRef.current.style.transform = `translate3d(${translateValue}px, 0px, 0px)`;
    setValueToTranslate(translateValue);
    setIndexAmountOnScreen(index);
  }
  useEffect(() => {
    if (finalSlide) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
    if (indexAmountOnScreen === 0) setIndexAmountOnScreen(1);
  },[indexAmountOnScreen, finalSlide]);

  useEffect(() => {
    if (valueToTranslate === 0) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
    }
  },[valueToTranslate]);
  useEffect(() => {
    console.log('indexAmountOnScreen: ', indexAmountOnScreen);
    console.log('amountOnScreen', amountOnScreen * indexAmountOnScreen);
    console.log('remainder: ', remainder);
    console.log(carouselData.length);
    Array.from(carouselContainerRef.current.children).forEach((el, index, array) => {
      if (indexAmountOnScreen === 1) {
        // Start of carousel
        if ((index + 1) > amountOnScreen) el.classList.toggle("inactive-carousel");
      } else {
      }
    })
  }, [indexAmountOnScreen, amountOnScreen, remainder])

  const carouselItem = carouselData.map((item, i) => {
    return (
      <CardContainer key={i} ref={cardContainerRef} className={inactiveClass}>
        <Card>
          <div style={{paddingBottom: "62.9747%"}}/>
          <ImageContainer>
            <ImageSpread>
              <Image src={item.image} alt="carousel"/>
            </ImageSpread>
            {/* <ImagePlaceholder src={defaultImages.placeholder} alt="placeholder"/> */}
          </ImageContainer>
        </Card>
      </CardContainer>
    )
  });

  return (
    <Container>
      <div style={{fontSize: "24px", marginBottom: "20px", display: "flex", justifyContent: "space-between"}}>
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
