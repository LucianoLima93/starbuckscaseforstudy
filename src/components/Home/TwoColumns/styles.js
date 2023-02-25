import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 32px auto;
  @media screen and (min-width: 992px) {
    display: flex;
  }
`;

export const ColumnOne = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  @media screen and (min-width: 992px) {
    width: calc(100% * (6 / 12));
    padding: 32px 48px;
  }
`;
export const ColumnTwo = styled.div`
  width: 100%;
  @media screen and (min-width: 992px) {
    width: calc(100% * (6 / 12));
  }
`;
export const Title = styled.div`
  letter-spacing: 2px;
  line-height: 1.2;
  width: 100%;
  font-weight: 600;
  margin-bottom: 24px;
  font-size: 24px;
  @media screen and (min-width: 1024px) {
    ${(props) => {
      if (props.columnType === 'short') {
        return `font-size: 24px;`;
      }
      return `font-size: 50px;`;
    }}
  }
  @media screen and (min-width: 992px) {
    max-width: 83%;
  }
  @media screen and (min-width: 375px) {
    font-size: 28px;
  }
`;
export const Description = styled.div`
  width: 100%;
  @media screen and (min-width: 992px) {
    max-width: 83%;
  }
  @media screen and (min-width: 375px) {
    font-size: 22px;
  }
  font-size: 19px;
  ${(props) => {
    if (props.columnType === 'short') {
      return `font-size: 19px;`;
    }
    return `font-size: 24px;`;
  }}
`;
export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export default Container;