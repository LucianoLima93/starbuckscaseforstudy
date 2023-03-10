import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  z-index: 3;
  height: 100%;
  max-height: 101px;
  min-height: 72px;
`;

export const Nav = styled.nav`
  box-shadow: 0 1px 3px rgba(0,0,0,.1),0 2px 2px rgba(0,0,0,.06),0 0 2px rgba(0,0,0,.07);
  background-color: #fff;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      padding-left: 2.4rem;
      &:first-child {
        padding-left: 0;
      }
    }
  }
`;

export const NavContainer = styled.div`
  @media screen and (min-width: 1520px) {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
  }
  padding-left: 4rem;
  padding-right: 4rem;
`;

export const ItemsFlex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 72px;
`;

export const Wrapper = styled.div`
  align-items: center;
  flex-grow: 1;
  display: none;
  @media screen and (min-width: 992px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  margin-right: 4rem;
  @media screen and (min-width: 1702px) {
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  a svg {
    width: 51px;
    height: 51px;
  }
`;

export const LeftMenu = styled.div`
  li {
    text-decoration: none;
    a {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.4rem;
      letter-spacing: .1em;
      padding-top: 4rem;
      padding-bottom: 4rem;
      display: inline-block;
      cursor: pointer;
      text-decoration: none;
      color: #000000DE;
      &:hover {
        color: #006341;
      }
    }
  }
`;

export const RightMenu = styled.div`
  font-size: 1.4rem;
  margin-left: auto;
  flex-shrink: 0;
  div {
    a {
      display: inline-block;
      &:first-child {
        font-weight: 600;
        margin-right: 4rem;
      }
    }
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4rem;
`;

export const FindIconContainer = styled.a`
  display: flex !important;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-right: 4rem;
  display: inline-block;
  color: #000;
  fill: #000;
  text-decoration: none;
  &:hover {
    color: #006341;
    fill: #006341;
  }
`;

export default Container;