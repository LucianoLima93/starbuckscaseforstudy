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
  transition: all .4s ease;
`;

export const CardContainer = styled.div`
  width: 24.16667%;
  padding: 0 1.6rem;
  white-space: normal;
  display: inline-block;
  &.inactive-carousel {
    opacity: .2;
    pointer-events: none;
  }
`;

export const Card = styled.div`
  position: relative;
  transition: transform .3s ease;
  display: block;
  background-color: transparent;
  :hover {
    transform: translateY(-8px);
    ::after {
      opacity: 1;
    }
    ::before {
      opacity: 0;
    }
  }
  ::after {
    border-radius: 3.3333%/5.298%;
    bottom: 0;
    box-shadow: 0 6px 6px rgb(0 0 0 / 14%);
    opacity: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity .3s;
  }
  ::before {
    border-radius: 3.3333%/5.298%;
    bottom: 0;
    box-shadow: 0 2px 3px rgb(0 0 0 / 24%);
    content: "";
    left: 0;
    opacity: 1;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const ImageContainer = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ImageSpread = styled.div`
  position: relative;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 3.3333%/5.298%;
`;

export const ImagePlaceholder = styled.img``;

export default Container;