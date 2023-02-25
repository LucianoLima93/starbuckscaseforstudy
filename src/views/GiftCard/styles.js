import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const CarouselTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1024px) {
    padding-left: 131px;
    padding-right: 4rem;
  }
  h2 {
    letter-spacing: .1em;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.4rem;
  }
`;

export default Container;