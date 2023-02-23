/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Container, { CardContainer, CarouselContainer, Image, ImageContainer, ImagePlaceholder, Card, ImageSpread, ButtonArrow, ButtonArrowContainer } from "./styles";
import Svg from "../../../handlers/HandleSvg";
import { useDebouncedCallback } from "use-debounce";

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
  const [currentIndexOnScreen, setCurrentIndexOnScreen] = useState(0);
  const [prevNextIdx, setPrevNextIdx] = useState(0);
  const [prevRemainder, setPrevRemainder] = useState(0);
  const [nextRemainder, setNextRemainder] = useState(0);
  
  const setInitialState = () => {
    const _amountOnScreen = Math.trunc(carouselContainerRef.current.offsetWidth / cardContainerRef.current.offsetWidth);
    setAmountOnScreen(_amountOnScreen);
    setOffsetWidthCard(parseFloat(cardContainerRef.current.offsetWidth));
    setMaxToScroll(Math.trunc(carouselData.length / _amountOnScreen));
    setRemainder(carouselData.length % _amountOnScreen);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  useEffect(() => {
    setInitialState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handleResize = useDebouncedCallback(() => {
    setInitialState();
    if (currentIndexOnScreen > 0) {
      let newValueToTranslate;

      if (finalSlide) {
        newValueToTranslate = (carouselData.length - amountOnScreen) * offsetWidthCard;
      } else {
        newValueToTranslate = currentIndexOnScreen * offsetWidthCard;
      }       

      setPrevNextIdx(Math.trunc(currentIndexOnScreen / amountOnScreen));
      setPrevRemainder(currentIndexOnScreen % amountOnScreen);
      setNextRemainder((carouselData.length - currentIndexOnScreen) % amountOnScreen);

      translate3dCarousel(-newValueToTranslate, indexAmountOnScreen);
    }
  }, 0);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  
  const goToNext = () => {
    const valeuToScroll = offsetWidthCard * amountOnScreen;
    let _remainder, _indexAmountOnScreen;

    if (prevNextIdx > 0) {
      _indexAmountOnScreen = prevNextIdx;
      _remainder = nextRemainder;
      setPrevNextIdx(prevNextIdx + 1);
    } else {
      _remainder = remainder;
      _indexAmountOnScreen = indexAmountOnScreen;
    }

    const valeuToScrollRemainder = offsetWidthCard * _remainder;

    if (carouselContainerRef.current) {
      translate3dCarousel(-valeuToScroll + valueToTranslate, _indexAmountOnScreen + 1);
      if (_indexAmountOnScreen + 1 === maxToScroll && _remainder > 0) {
        translate3dCarousel(-valeuToScrollRemainder + valueToTranslate, _indexAmountOnScreen);
        setFinalSlide(!finalSlide);
      } else {
        translate3dCarousel(-valeuToScroll + valueToTranslate, _indexAmountOnScreen + 1);
        if((currentIndexOnScreen + amountOnScreen) === (carouselData.length - amountOnScreen)
        && _remainder === 0) setFinalSlide(!finalSlide);
      }
      setCurrentIndexOnScreen(currentIndexOnScreen + amountOnScreen);
    }
  }

  const goToPrev = () => {
    const valeuToScroll = offsetWidthCard * amountOnScreen;
    let _remainder, _indexAmountOnScreen;

    if (prevNextIdx > 0) {
      _indexAmountOnScreen = prevNextIdx;
      _remainder = prevRemainder;
      setPrevNextIdx(prevNextIdx - 1);
    } else {
      _remainder = remainder;
      _indexAmountOnScreen = indexAmountOnScreen;
    }

    const valeuToScrollRemainder = offsetWidthCard * _remainder;

    if (carouselContainerRef.current) {
      if (finalSlide) setFinalSlide(!finalSlide);
      if (_indexAmountOnScreen === 0 && _remainder > 0) {
        translate3dCarousel(valueToTranslate + valeuToScrollRemainder, _indexAmountOnScreen);
      } else {
        translate3dCarousel(valueToTranslate + valeuToScroll, _indexAmountOnScreen - 1);
      }
      const _currentIndexOnScreen = currentIndexOnScreen - amountOnScreen

      setCurrentIndexOnScreen(_currentIndexOnScreen < 0 ? 0 : _currentIndexOnScreen);
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reset = () => {
    if (prevNextIdx > 0) {
      setInitialState();
      setPrevNextIdx(0);
      setPrevRemainder(0);
      setIndexAmountOnScreen(0);
      setCurrentIndexOnScreen(0);
    }
  }
  const translate3dCarousel = (translateValue, index) => {
    carouselContainerRef.current.style.transform = `translate3d(${translateValue}px, 0px, 0px)`;
    setValueToTranslate(translateValue);
    setIndexAmountOnScreen(index);
  }

  useEffect(() => {
    if (valueToTranslate === 0 || currentIndexOnScreen === 0) {
      setDisablePrev(true);
      reset();
    } else {
      setDisablePrev(false);
    }
  }, [currentIndexOnScreen, reset, valueToTranslate])

  useEffect(() => {
    if (finalSlide) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  }, [amountOnScreen, carouselData.length, finalSlide])

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
      {`currentIndexOnScreen: ${currentIndexOnScreen} `}
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
