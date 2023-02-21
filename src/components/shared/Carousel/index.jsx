/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Container, { CardContainer, CarouselContainer, Image, ImageContainer, ImagePlaceholder, Card, ImageSpread, ButtonArrow, ButtonArrowContainer } from "./styles";
import Svg from "../../../handlers/HandleSvg";

const Carousel = ({carouselData}) => {
  const cardContainerRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const [valueToTranslate, setValueToTranslate] = useState(0);
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const [offsetWidthCard, setOffsetWidthCard] = useState(false);
  const [maxToScroll, setMaxToScroll] = useState(0);
  const [amountOnScreen, setAmountOnScreen] = useState(false);
  const [indexAmountOnScreen, setIndexAmountOnScreen] = useState(1);
  const [remainder, setRemainder] = useState(0);
  const [finalSlide, setFinalSlide] = useState(false);

  const handleResize = useCallback(() => {
      const _amountOnScreen = Math.trunc(carouselContainerRef.current.offsetWidth / cardContainerRef.current.offsetWidth);
      setAmountOnScreen(_amountOnScreen);
      setOffsetWidthCard(cardContainerRef.current.offsetWidth);
      setMaxToScroll(Math.trunc(carouselData.length / _amountOnScreen));
      setRemainder(carouselData.length % _amountOnScreen);
  }, [carouselData.length]);

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

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
    if (finalSlide || carouselData.length < amountOnScreen) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
    if (indexAmountOnScreen === 0) setIndexAmountOnScreen(1);
  },[indexAmountOnScreen, finalSlide, amountOnScreen, carouselData]);

  useEffect(() => {
    if (valueToTranslate === 0) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
    }
  },[valueToTranslate]);

  const observer = useMemo(() => {
    const options = {
      root: carouselContainerRef.current,
      rootMargin: '0px',
      threshold: 1
    }
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('inactive-carousel');
        } else {
          entry.target.classList.add('inactive-carousel');
        }
      })
    }
    return new IntersectionObserver(callback, options);
  }, []);

  useEffect(() => {
    Array.prototype.forEach.call(carouselContainerRef.current.children, (el) => {
      observer.observe(el);
    })
  }, [observer]);
  const btnContainerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const svgStyle = { overflow: 'visible', fill: 'currentcolor' }
  const carouselItem = carouselData.map((item, i) => {
    return (
      <CardContainer key={i} ref={cardContainerRef}>
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
      {!disablePrev &&
      <ButtonArrowContainer direction='left'>
        <ButtonArrow onClick={() => goToPrev()}>
          <Svg name="ic-arrow"
            width="24px"
            height="24px"
            containerStyle={btnContainerStyle}
            style={svgStyle}/>
        </ButtonArrow>
      </ButtonArrowContainer>
      }
      <CarouselContainer ref={carouselContainerRef}>
        {carouselItem}
      </CarouselContainer>
      {!disableNext &&
      <ButtonArrowContainer direction='right'>
        <ButtonArrow onClick={() => goToNext()} >
          <Svg name="ic-arrow"
            width="24px"
            height="24px"
            containerStyle={btnContainerStyle}
            style={{...svgStyle, transform: 'rotate(180deg)'}}/>
        </ButtonArrow>
      </ButtonArrowContainer>
      }
    </Container>
  );
};
export default Carousel;
