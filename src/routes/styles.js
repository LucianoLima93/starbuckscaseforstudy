import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: ${(props) => props.theme.box.lg};
  margin: 0 auto;
`;

export default Container;