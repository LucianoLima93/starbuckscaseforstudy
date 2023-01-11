import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.brand.light};
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  color: ${(props) => props.theme.color.brand.houseGreen};
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const Description = styled.div`
  padding-top: 24px;
  font-size: 19px;
  a {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Container;