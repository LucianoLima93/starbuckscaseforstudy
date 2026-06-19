/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Container, { CardContainer, CarouselContainer } from "./styles";
import { useDebouncedCallback } from "use-debounce";
import { checkMinimumPercentage } from "./util";

interface CarouselProps<T> {
  carouselData: T[];
  renderCard?: (item: T, index: number) => React.ReactNode;
  showSeeMore?: (amount: number) => void;
}

function Carousel<T>({ carouselData, renderCard = () => null, showSeeMore = () => {} }: CarouselProps<T>) {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const [valueToTranslate, setValueToTranslate] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const setInitialValues = useCallback(() => {
    const carouselWidth = carouselContainerRef.current?.offsetWidth ?? 0;
    const cardWidth = cardContainerRef.current?.offsetWidth ?? 0;
    const amountOnScreen =
      cardWidth > 0 && carouselWidth > 0
        ? checkMinimumPercentage(carouselWidth / cardWidth)
        : 0;
    setValueToTranslate(cardWidth * amountOnScreen);
    setTotalPages(Math.ceil((carouselData?.length ?? 0) / amountOnScreen) - 1);
  }, [carouselData]);

  useEffect(() => {
    setInitialValues();
  }, [setInitialValues]);

  useEffect(() => {
    showSeeMore(
      cardContainerRef.current && carouselContainerRef.current
        ? Math.trunc(carouselContainerRef.current.offsetWidth / cardContainerRef.current.offsetWidth)
        : 0
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSeeMore]);

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

  const carouselItem = carouselData.map((item, i) => (
    <CardContainer key={i} ref={cardContainerRef}>
      {renderCard(item, i)}
    </CardContainer>
  ));

  useEffect(() => {
    if (carouselContainerRef.current) {
      const valueToScroll = page * valueToTranslate;
      carouselContainerRef.current.style.transform = `translate3d(-${valueToScroll}px, 0px, 0px)`;
    }
  }, [page, valueToTranslate]);

  return (
    <Container>
      <CarouselContainer ref={carouselContainerRef} $translate={valueToTranslate}>
        {carouselItem}
      </CarouselContainer>
      <button type="button" disabled={page === 0} onClick={() => setPage(prev => prev - 1)}>Prev</button>
      <button type="button" disabled={page >= totalPages} onClick={() => setPage(prev => prev + 1)}>Next</button>
    </Container>
  );
}

export default Carousel;
