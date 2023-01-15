import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
  z-index: 0;
  padding-left: 131px;
  padding-right: 6.4rem;
  padding-bottom: 1.6rem!important;
  padding-top: 1.6rem!important;
`;

export const CarouselContainer = styled.div`
  position: relative;
  white-space: nowrap;
  z-index: 0;
  transition: all .2s ease-in-out;
`;

export const CardContainer = styled.div`
  width: 24.16667%;
  padding: 0 1.6rem;
  white-space: normal;
  display: inline-block;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 3.3333%/5.298%;
`;

export const ImagePlaceholder = styled.img``;

export default Container;