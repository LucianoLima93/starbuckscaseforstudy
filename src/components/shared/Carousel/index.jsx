/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Container, { CardContainer, CarouselContainer, Image, ImageContainer, ImagePlaceholder, Card, ImageSpread, ButtonArrow, ButtonArrowContainer } from "./styles";
import Svg from "../../../handlers/HandleSvg";
import { useDebouncedCallback } from "use-debounce";

const Carousel = ({carouselData}) => {
  const cardContainerRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const [valueToTranslate, setValueToTranslate] = useState(0);
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(true);
  const [offsetWidthCard, setOffsetWidthCard] = useState(false);
  const [maxToScroll, setMaxToScroll] = useState(0);
  const [amountOnScreen, setAmountOnScreen] = useState(0);
  const [indexAmountOnScreen, setIndexAmountOnScreen] = useState(0);
  const [remainder, setRemainder] = useState(0);
  const [finalSlide, setFinalSlide] = useState(false);
  const [currentIndexOnScreen, setCurrentIndexOnScreen] = useState(0);
  const [prevNextIdx, setPrevNextIdx] = useState(0);
  const [isNext, setIsNext] = useState(null);
  const [prevRemainder, setPrevRemainder] = useState(0);
  const [nextRemainder, setNextRemainder] = useState(0);
  const carouselLength = carouselData && carouselData.length;
  
  const setInitialState = () => {
    const _amountOnScreen = Math.trunc(carouselContainerRef.current.offsetWidth / cardContainerRef.current.offsetWidth);
    setAmountOnScreen(_amountOnScreen);
    setOffsetWidthCard(parseFloat(cardContainerRef.current.offsetWidth));
    setMaxToScroll(Math.trunc(carouselData.length / _amountOnScreen));
    setRemainder(carouselData.length % _amountOnScreen);
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

  useEffect(()=> {
    const valeuToScroll = offsetWidthCard * amountOnScreen;
    let _indexAmountOnScreen, _remainder;

    if (prevNextIdx > 0) {
      // _indexAmountOnScreen = prevNextIdx;
      // if (isNext) {
      //   _remainder = nextRemainder;
      // } else {
      //   _remainder = prevRemainder;
      // }
    } else {
      _indexAmountOnScreen = indexAmountOnScreen;
      _remainder = remainder;
    }
    const valeuToScrollRemainder = offsetWidthCard * _remainder;
    const isRemainderFinal = carouselLength - (currentIndexOnScreen + amountOnScreen) === _remainder;
    const isRemainderStart = currentIndexOnScreen - amountOnScreen === 0;

    if (isNext) {
      if (_indexAmountOnScreen === maxToScroll && isRemainderFinal) {
        translate3dCarousel(-valeuToScrollRemainder + valueToTranslate);
        setCurrentIndexOnScreen(currentIndexOnScreen + _remainder);
      } else {
        translate3dCarousel(-valeuToScroll + valueToTranslate);
        setCurrentIndexOnScreen(currentIndexOnScreen + amountOnScreen);
      }
    } else {
      if (_indexAmountOnScreen === 0 && !isRemainderStart) {
        translate3dCarousel(valeuToScrollRemainder + valueToTranslate);
        setCurrentIndexOnScreen(currentIndexOnScreen - _remainder);
      } else {
        translate3dCarousel(valueToTranslate + valeuToScroll);
        setCurrentIndexOnScreen(currentIndexOnScreen - amountOnScreen);
      }
    }
  }, [indexAmountOnScreen]);
  
  useEffect(() => {
    let _indexAmountOnScreen;

    if (prevNextIdx > 0) {
      _indexAmountOnScreen = prevNextIdx;
    } else {
      _indexAmountOnScreen = indexAmountOnScreen;
    }
    if (_indexAmountOnScreen === maxToScroll
      || currentIndexOnScreen + amountOnScreen === carouselLength) {
      setDisableNext(false);
    } else {
      setDisableNext(true);
    }
    if (_indexAmountOnScreen > 0) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
    }
  }, [amountOnScreen, carouselLength, currentIndexOnScreen, indexAmountOnScreen, maxToScroll, prevNextIdx])

  const goToNext = () => {
    if (carouselContainerRef.current) {
      setIsNext(true)
      if (prevNextIdx > 0) {
        setPrevNextIdx(prevNextIdx + 1);
      } else {
        setIndexAmountOnScreen(indexAmountOnScreen + 1);
        if(indexAmountOnScreen + 1 === maxToScroll
          || currentIndexOnScreen + amountOnScreen === carouselLength) setFinalSlide(true);
      }
    }
  }


  const goToPrev = () => {
    if (carouselContainerRef.current) {
      setIsNext(false);
      if (prevNextIdx > 0) {
        setPrevNextIdx(prevNextIdx - 1);
      } else {
        setIndexAmountOnScreen(indexAmountOnScreen - 1);
      }
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
      threshold: 1
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
      {`prevNextIdx: ${prevNextIdx} `}
      {`maxToScroll: ${maxToScroll} `}
      {`amountOnScreen: ${amountOnScreen} `}
      {`offsetWidthCard: ${offsetWidthCard} `}
      {`remainder: ${remainder} `}
      {`currentIndexOnScreen: ${currentIndexOnScreen} `}
      {`carouselData.length: ${carouselData.length} `}
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
