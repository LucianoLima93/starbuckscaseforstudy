import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: inline-block;
  background: none;
  border: 1px solid #000;
  border-radius: 50px;
  padding: 7px 16px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  transition: all .2s ease;
  &:active {
    transform: scale(.95);
  }
`;

export const BlackButton = styled(ButtonContainer)`
  background-color: #000;
  color: #fff;
  &:hover {
    background-color: rgba(0,0,0,.7);
    border-color: rgba(0,0,0,.7);
  }
`;
export const SoftButton = styled(ButtonContainer)`
  margin-right: 1.6rem;
  &:hover {
    background-color: rgba(0,0,0,.06);
  }
`;
export default ButtonContainer;