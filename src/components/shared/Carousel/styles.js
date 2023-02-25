import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
  z-index: 0;
  padding-left: 131px;
  padding-right: 6.4rem;
  padding-bottom: 1.6rem;
  padding-top: 1.6rem;
  position: relative;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    padding-left: 1.6rem;
    padding-right: 2.4rem;
    padding-bottom: 1.6rem;
    padding-top: 1.6rem;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  white-space: nowrap;
  z-index: 0;
  transition: all .4s ease;
  margin-left: -1.6rem;
`;

export const ButtonArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  ${(props) => {
    if(props.direction === 'left') {
      return 'left: 2.4rem'
    } else {
      return 'right: 2.4rem'
    }
  }}
`

export const ButtonArrow = styled.div`
  transition-property: all;
  transition-duration: .2s;
  transition-timing-function: ease;
  width: 40px;
  height: 40px;
  line-height: 4rem;
  background: #fff;
  font-size: 1.6rem;
  box-shadow: 0 0 6px rgb(0 0 0 / 24%), 0 8px 12px rgb(0 0 0 / 14%);
  border-radius: 50%;
  position: relative;
  :active {
    box-shadow: 0 0 6px rgb(0 0 0 / 24%), 0 8px 12px transparent;
    transform: translateY(4px);
  }
  :focus {
    outline: none;
  }
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
  width: 50%;
  padding: 0 0.8rem;
  @media screen and (min-width: 480px) {
    width: 33.33333%;
  }
  @media screen and (min-width: 1024px) {
    width: 25%;
  }
  @media screen and (min-width: 1024px) {
    width: 24.16667%;
    padding: 0 1.6rem;
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