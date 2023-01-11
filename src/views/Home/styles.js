import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.box.lg};
  margin: 0 auto;
`;

export const Warning = styled.div`
  padding: 32px 0;
  width: 100%;
  text-align: center;
`;

export const TextWarning = styled.span`
  font-size: 14px;
  line-height: 1.8;
`;

export default Container;
