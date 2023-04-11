import styled from 'styled-components';

export const ImageContainer = styled.div`
  background-color: ${(props) => props.theme.color.brand.light};
  background-image: ${(props) => props.desktopImage};
  display: flex;
  background-size: cover;
  @media screen and (min-width: 768px) {
    background-position: 50%;
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
`;

export const Container = styled.div`
  
`;
export const TextBlock = styled.div`
  h2 {
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 1.29;  
  }
  span {
    font-size: 1.9rem;
    padding-top: 1.6rem;
    display: block;
  }
`;
