import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 32px auto;
`;

export const ColumnOne = styled.div`
  width: calc(100% * (6 / 12));
  text-align: center;
  padding: 32px 48px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;
export const ColumnTwo = styled.div`
  width: calc(100% * (6 / 12));
`;
export const Title = styled.div`
  font-size: 50px;
  letter-spacing: 2px;
  line-height: 1.2;
  max-width: 83%;
  font-weight: 600;
  margin-bottom: 24px;
`;
export const Description = styled.div`
  font-size: 24px;
  max-width: 83%;
`;
export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export default Container;