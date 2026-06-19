/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Container, { CardContainer, CarouselContainer, ButtonArrow, ButtonArrowContainer } from "./styles";
import Svg from "../../../handlers/HandleSvg";
import { useDebouncedCallback } from "use-debounce";

interface CarouselProps<T> {
  carouselData: T[];
  renderCard: (item: T, index?: number) => React.ReactNode;
  showSeeMore?: (amount: number) => void;
}

function Carousel<T>({ carouselData, renderCard, showSeeMore = () => {} }: CarouselProps<T>) {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const carouselLength = carouselData?.length ?? 0;

  const [valueToTranslate, setValueToTranslate] = useState(0);
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(true);
  const [offsetWidthCard, setOffsetWidthCard] = useState(0);
  const [maxToScroll, setMaxToScroll] = useState(0);
  const [amountOnScreen, setAmountOnScreen] = useState(0);
  const [indexAmountOnScreen, setIndexAmountOnScreen] = useState(0);
  const [remainder, setRemainder] = useState(0);
  const [currentIndexOnScreen, setCurrentIndexOnScreen] = useState(0);
  const [isNext, setIsNext] = useState<boolean | null>(null);
  const [prevRemainder, setPrevRemainder] = useState(0);
  const [nextRemainder, setNextRemainder] = useState(0);
  const [updateIndex, setUpdateIndex] = useState(false);
  const [auxIndex, setAuxIndex] = useState(0);

  const checkMinimumPercentage = (value: number): number => {
    return Math.trunc(parseFloat(value.toFixed(1)));
  };

  const setInitialState = () => {
    if (!carouselContainerRef.current || !cardContainerRef.current) return;
    const _amountOnScreen = checkMinimumPercentage(
      carouselContainerRef.current.offsetWidth / cardContainerRef.current.offsetWidth
    );
    setAmountOnScreen(_amountOnScreen);
    setOffsetWidthCard(parseFloat(String(cardContainerRef.current.offsetWidth)));
    setMaxToScroll(checkMinimumPercentage(carouselLength / _amountOnScreen));
    setRemainder(carouselLength % _amountOnScreen);
  };

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
      translate3dCarousel(-newValueToTranslate);
      setUpdateIndex(true);
    }
  }, 15);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    const valeuToScroll = offsetWidthCard * amountOnScreen;
    let _remainder: number;

    if (updateIndex) {
      _remainder = isNext ? nextRemainder : prevRemainder;
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
    showSeeMore(amountOnScreen);
  }, [amountOnScreen, showSeeMore]);

  useEffect(() => {
    if (indexAmountOnScreen === maxToScroll || currentIndexOnScreen + amountOnScreen === carouselLength) {
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
  }, [amountOnScreen, carouselLength, currentIndexOnScreen, indexAmountOnScreen, maxToScroll, showSeeMore]);

  const goToNext = () => {
    if (carouselContainerRef.current) {
      setIsNext(true);
      setAuxIndex(auxIndex + 1);
      setIndexAmountOnScreen(indexAmountOnScreen + 1);
    }
  };

  const goToPrev = () => {
    if (carouselContainerRef.current) {
      setIsNext(false);
      setAuxIndex(auxIndex + 1);
      setIndexAmountOnScreen(indexAmountOnScreen - 1);
    }
  };

  const translate3dCarousel = (translateValue: number) => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.style.transform = `translate3d(${translateValue}px, 0px, 0px)`;
    }
    setValueToTranslate(translateValue);
  };

  const observer = useMemo(() => {
    const options: IntersectionObserverInit = {
      root: carouselContainerRef.current,
      rootMargin: '0px',
      threshold: 0.30,
    };
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('inactive-carousel');
        } else {
          entry.target.classList.add('inactive-carousel');
        }
      });
    };
    return new IntersectionObserver(callback, options);
  }, []);

  useEffect(() => {
    if (carouselContainerRef.current) {
      Array.prototype.forEach.call(carouselContainerRef.current.children, (el: Element) => {
        observer.observe(el);
      });
    }
  }, [observer]);

  const btnContainerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const svgStyle: React.CSSProperties = { overflow: 'visible', fill: 'currentcolor' };

  const carouselItem = carouselData.map((item, i) => (
    <CardContainer key={i} ref={cardContainerRef}>
      {renderCard(item, i)}
    </CardContainer>
  ));

  return (
    <Container>
      {disablePrev && (
        <ButtonArrowContainer direction="left">
          <ButtonArrow onClick={goToPrev}>
            <Svg name="ic-arrow" width="24px" height="24px" containerStyle={btnContainerStyle} style={svgStyle} />
          </ButtonArrow>
        </ButtonArrowContainer>
      )}
      <CarouselContainer ref={carouselContainerRef}>
        {carouselItem}
      </CarouselContainer>
      {disableNext && (
        <ButtonArrowContainer direction="right">
          <ButtonArrow onClick={goToNext}>
            <Svg name="ic-arrow" width="24px" height="24px" containerStyle={btnContainerStyle} style={{ ...svgStyle, transform: 'rotate(180deg)' }} />
          </ButtonArrow>
        </ButtonArrowContainer>
      )}
    </Container>
  );
}

export default Carousel;
