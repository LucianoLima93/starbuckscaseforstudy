/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Container, { CardContainer, CarouselContainer, Image, ImageContainer, ImagePlaceholder, Card, ImageSpread, ButtonArrow, ButtonArrowContainer } from "./styles";
import Svg from "../../../handlers/HandleSvg";

const Carousel = ({carouselData}) => {
  const cardContainerRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const [valueToTranslate, setValueToTranslate] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [offsetWidthCard, setOffsetWidthCard] = useState(false);
  const [maxToScroll, setMaxToScroll] = useState(0);
  const [amountOnScreen, setAmountOnScreen] = useState(0);
  const [indexAmountOnScreen, setIndexAmountOnScreen] = useState(0);
  const [remainder, setRemainder] = useState(0);
  const [finalSlide, setFinalSlide] = useState(false);
  const [currentIndexOnScreen, setCurrentIndexOnScreen] = useState({value: 0, next: true});
  const [currentValue, setCurrentValue] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setInitialState = useCallback(() => {
    const _amountOnScreen = Math.trunc(carouselContainerRef.current.offsetWidth / cardContainerRef.current.offsetWidth);
    setAmountOnScreen(_amountOnScreen);
    setOffsetWidthCard(cardContainerRef.current.offsetWidth);
    setMaxToScroll(Math.trunc(carouselData.length / _amountOnScreen));
    setRemainder(carouselData.length % _amountOnScreen);   
  })

  useEffect(() => {
    setInitialState();
  }, [])
  
  useLayoutEffect(() => {
    const handleResize = () => {
      setInitialState();
      if (currentIndexOnScreen.value > 0) {
        let newValueToTranslate;
        let newIndex;
        if (finalSlide) {
          newValueToTranslate = (currentIndexOnScreen.value - remainder) * offsetWidthCard;
          newIndex = maxToScroll;
        } else {
          newValueToTranslate = (currentIndexOnScreen.value) * offsetWidthCard;
          newIndex = Math.trunc(currentIndexOnScreen.value / amountOnScreen);
        }
        
        translate3dCarousel(-newValueToTranslate, newIndex);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [amountOnScreen, currentIndexOnScreen, finalSlide, maxToScroll, offsetWidthCard, remainder, setInitialState]);
  
  const goToNext = () => {
    const valeuToScroll = offsetWidthCard * amountOnScreen;
    const valeuToScrollRemainder = offsetWidthCard * remainder;

    if (carouselContainerRef.current) {
      translate3dCarousel(-valeuToScroll + valueToTranslate, indexAmountOnScreen + 1);
      if (indexAmountOnScreen + 1 === maxToScroll && remainder > 0) {
        translate3dCarousel(-valeuToScrollRemainder + valueToTranslate, indexAmountOnScreen);
        setFinalSlide(!finalSlide);
      } else {
        translate3dCarousel(-valeuToScroll + valueToTranslate, indexAmountOnScreen + 1);
        if((indexAmountOnScreen + 1) === maxToScroll && remainder === 0) setFinalSlide(!finalSlide);
      }
      setCurrentIndexOnScreen({value: currentIndexOnScreen.value + amountOnScreen, next: true});
    }
  }

  const goToPrev = () => {
    const valeuToScroll = offsetWidthCard * amountOnScreen;
    const valeuToScrollRemainder = offsetWidthCard * remainder;
    if (carouselContainerRef.current) {
      if (finalSlide && remainder > 0) setFinalSlide(!finalSlide);
      if (indexAmountOnScreen === 0 && remainder > 0) {
        translate3dCarousel(valueToTranslate + valeuToScrollRemainder, indexAmountOnScreen);
      } else {
        translate3dCarousel(valueToTranslate + valeuToScroll, indexAmountOnScreen - 1);
      }
      setCurrentIndexOnScreen({value: currentIndexOnScreen.value - amountOnScreen, next: false});
    }
  }

  const translate3dCarousel = (translateValue, index) => {
    carouselContainerRef.current.style.transform = `translate3d(${translateValue}px, 0px, 0px)`;
    setValueToTranslate(translateValue);
    setIndexAmountOnScreen(index);
  }
  useEffect(() => {
    if (valueToTranslate === 0) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
    }

    if (finalSlide) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  }, [amountOnScreen, carouselData.length, finalSlide, valueToTranslate])

  const observer = useMemo(() => {
    const options = {
      root: carouselContainerRef.current,
      rootMargin: '0px',
      threshold: .95
    }
    const callback = (entries, observer) => {     
      entries.forEach((entry) => {
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
          {i}
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
      {`indexAmountOnScreen: ${indexAmountOnScreen} `}
      {`maxToScroll: ${maxToScroll} `}
      {`amountOnScreen: ${amountOnScreen} `}
      {`offsetWidthCard: ${offsetWidthCard} `}
      {`remainder: ${remainder} `}
      {`currentIndexOnScreen: ${currentIndexOnScreen.value} `}
      {`carouselData.length: ${carouselData.length} `}
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
