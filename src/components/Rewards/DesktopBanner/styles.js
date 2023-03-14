import styled from 'styled-components';

export const Container = styled.div`
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
