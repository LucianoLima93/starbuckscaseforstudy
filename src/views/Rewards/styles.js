import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const BannerContent = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.box.lg};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const BannerTitle = styled.h1`
  letter-spacing: .1em;
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-size: 1.4rem;
  color: ${(props) => props.theme.color.neutral.high.pure} ;
`;

export const Banner = styled.div`
  background-color: ${(props) => props.theme.color.brand.darkest};
  box-shadow: ${(props) => props.theme.boxShadow.rewardsBanner};
  height: 50px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;
`;

export default Container;