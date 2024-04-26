/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Container, { CardContainer, CarouselContainer } from "./styles";
import { useDebouncedCallback } from "use-debounce";
import { checkMinimumPercentage } from "./util";

const Carousel = ({carouselData, renderCard = () => {}}) => {
  const cardContainerRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const [valueToTranslate, setValueToTranslate] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const setInitialValues = useCallback(() => {
    const carouselWidth = carouselContainerRef.current.offsetWidth || 0;
    const cardWidth = cardContainerRef.current.offsetWidth || 0;
    const amountOnScreen = cardWidth > 0 && carouselWidth > 0 
      ? checkMinimumPercentage(carouselWidth / cardWidth) : 0;
    setValueToTranslate(cardWidth * amountOnScreen);
    setTotalPages(Math.ceil(carouselData && carouselData.length / amountOnScreen) - 1)
  }, [carouselData]);

  useEffect(() => {
    setInitialValues();
  }, [setInitialValues]);

  const handleResize = useDebouncedCallback(() => {
    setInitialValues();
    setPage(0);
  }, 100);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const carouselItem = carouselData.map((item, i) => {
    return (
      <CardContainer key={i} ref={cardContainerRef}>
        {renderCard(item)}
      </CardContainer>
    )
  });

  useEffect(() => {
    const valeuToScroll = page * valueToTranslate;
    carouselContainerRef.current.style.transform = `translate3d(-${valeuToScroll}px, 0px, 0px)`;
  }, [page, valueToTranslate]);
  return (
    <Container>
      <CarouselContainer ref={carouselContainerRef}
        $translate={valueToTranslate}>
        {carouselItem}
      </CarouselContainer>
      <button type="button" disabled={page === 0} onClick={() => setPage(prev => prev - 1)}>Prev</button>
      <button type="button" disabled={page >= totalPages} onClick={() => setPage(prev => prev + 1)}>Next</button>
    </Container>
  );
};
export default Carousel;
