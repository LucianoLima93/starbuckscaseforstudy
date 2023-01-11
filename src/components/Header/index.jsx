/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container, { FindIconContainer, FlexCenter, ItemsFlex, LeftMenu, Logo, Nav, NavContainer, RightMenu, Wrapper } from "./styles";
import Svg from '../../handlers/HandleSvg';
import Button from "../shared/Button";

const Header = () => {
  return (
    <Container>
      <Nav>
        <NavContainer>
          <ItemsFlex>
            <Logo>
              <a href="/">
                <Svg name="logo" style={{width: "50px", height: "50px"}}/>
              </a>
            </Logo>
            <Wrapper>
              <LeftMenu>
                <ul>
                  <li><a>Menu</a></li>
                  <li><a>Rewards</a></li>
                  <li><a>Gift Cards</a></li>
                </ul>
              </LeftMenu>
              <RightMenu>
                <FlexCenter>
                  <FindIconContainer href="">
                    <Svg name="ic-find" style={{width: "32px", height: "32px", paddingRight: "0.8rem", verticalAlign: "middle"}}></Svg>
                    Find a store
                  </FindIconContainer>
                  <Button type={"soft"} text="Sign in" />
                  <Button type={"black"} text="Join now" />
                </FlexCenter>
              </RightMenu>
            </Wrapper>
          </ItemsFlex>
        </NavContainer>
      </Nav>
    </Container>
  );
};
export default Header;
