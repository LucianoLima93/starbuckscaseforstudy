/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Container, { CardContainer, CarouselContainer, Image, ImageContainer, ImagePlaceholder, Card, ImageSpread, ButtonArrow, ButtonArrowContainer } from "./styles";
import Svg from "../../../handlers/HandleSvg";
import { useDebouncedCallback } from "use-debounce";
import DefaultCard from "../DefaultCard";

const Carousel = ({carouselData}) => {
  const cardContainerRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const carouselLength = carouselData && carouselData.length;
  const [valueToTranslate, setValueToTranslate] = useState(0);
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(true);
  const [offsetWidthCard, setOffsetWidthCard] = useState(false);
  const [maxToScroll, setMaxToScroll] = useState(0);
  const [amountOnScreen, setAmountOnScreen] = useState(0);
  const [indexAmountOnScreen, setIndexAmountOnScreen] = useState(0);
  const [remainder, setRemainder] = useState(0);
  const [currentIndexOnScreen, setCurrentIndexOnScreen] = useState(0);
  const [isNext, setIsNext] = useState(null);
  const [prevRemainder, setPrevRemainder] = useState(0);
  const [nextRemainder, setNextRemainder] = useState(0);
  const [updateIndex, setUpdateIndex] = useState(false);
  const [auxIndex, setAuxIndex] = useState(0);
  
  const checkMinimumPercentage = (value) => {
    return Math.trunc(parseFloat(value.toFixed(1)))
  }

  const setInitialState = () => {
    const _amountOnScreen = checkMinimumPercentage(carouselContainerRef.current.offsetWidth / cardContainerRef.current.offsetWidth);
    checkMinimumPercentage  (carouselContainerRef.current.offsetWidth / cardContainerRef.current.offsetWidth);
    setAmountOnScreen(_amountOnScreen);
    setOffsetWidthCard(parseFloat(cardContainerRef.current.offsetWidth));
    setMaxToScroll(checkMinimumPercentage(carouselLength / _amountOnScreen));
    setRemainder(carouselLength % _amountOnScreen);
  }

  useEffect(() => {
    setInitialState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handleResize = useDebouncedCallback(() => {
    setInitialState();
    if (currentIndexOnScreen > 0) {
      const newValueToTranslate = currentIndexOnScreen * offsetWidthCard;
      
      const _remainder = currentIndexOnScreen % amountOnScreen > 0 ? 1 : 0;
      setIndexAmountOnScreen(checkMinimumPercentage(currentIndexOnScreen / amountOnScreen) + _remainder);
      setPrevRemainder(currentIndexOnScreen % amountOnScreen);
      setNextRemainder((carouselLength - currentIndexOnScreen) % amountOnScreen);

      translate3dCarousel(-newValueToTranslate, indexAmountOnScreen);
      setUpdateIndex(true);
    }
  }, 15);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(()=> {
    const valeuToScroll = offsetWidthCard * amountOnScreen;
    let _remainder;

    if (updateIndex) {
      if (isNext) {
        _remainder = nextRemainder;
      } else {
        _remainder = prevRemainder;
      }
    } else {
      _remainder = remainder;
    }
    const valeuToScrollRemainder = offsetWidthCard * _remainder;
    const isRemainderFinal = carouselLength - (currentIndexOnScreen + amountOnScreen) === _remainder;
    const isRemainderStart = currentIndexOnScreen - amountOnScreen === 0;

    if (isNext) {
      if (indexAmountOnScreen === maxToScroll && isRemainderFinal) {
        translate3dCarousel(-valeuToScrollRemainder + valueToTranslate);
        setCurrentIndexOnScreen(currentIndexOnScreen + _remainder);
      } else {
        translate3dCarousel(-valeuToScroll + valueToTranslate);
        setCurrentIndexOnScreen(currentIndexOnScreen + amountOnScreen);
      }
    } else {
      if (indexAmountOnScreen === 0 && !isRemainderStart) {
        translate3dCarousel(valeuToScrollRemainder + valueToTranslate);
        setCurrentIndexOnScreen(currentIndexOnScreen - _remainder);
      } else {
        translate3dCarousel(valueToTranslate + valeuToScroll);
        setCurrentIndexOnScreen(currentIndexOnScreen - amountOnScreen);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auxIndex]);
  
  useEffect(() => {
    if (indexAmountOnScreen === maxToScroll
      || currentIndexOnScreen + amountOnScreen === carouselLength) {
      setDisableNext(false);
    } else {
      setDisableNext(true);
    }
    if (indexAmountOnScreen > 0) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
      setUpdateIndex(false);
    }
  }, [amountOnScreen, carouselLength, currentIndexOnScreen, indexAmountOnScreen, maxToScroll])

  const goToNext = () => {
    if (carouselContainerRef.current) {
      setIsNext(true);
      setAuxIndex(auxIndex + 1);
      setIndexAmountOnScreen(indexAmountOnScreen + 1);
    }
  }

  const goToPrev = () => {
    if (carouselContainerRef.current) {
      setIsNext(false);
      setAuxIndex(auxIndex + 1);
      setIndexAmountOnScreen(indexAmountOnScreen - 1);
    }
  }

  const translate3dCarousel = (translateValue) => {
    carouselContainerRef.current.style.transform = `translate3d(${translateValue}px, 0px, 0px)`;
    setValueToTranslate(translateValue);
  }

  const observer = useMemo(() => {
    const options = {
      root: carouselContainerRef.current,
      rootMargin: '0px',
      threshold: .75
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
        <DefaultCard item={item}/>
      </CardContainer>
    )
  });

  return (
    <Container>
      {disablePrev &&
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
      {disableNext &&
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
