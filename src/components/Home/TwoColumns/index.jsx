import React from "react";
import Container, { ColumnOne, ColumnTwo, Description, Title, Image } from "./styles";
import Button from "../../shared/Button";

const TwoColumn = ({
  direction = 'row',
  data = {},
  style = {},
  btnStyle= {},
}) => {
  return (
    <Container style={{flexDirection: direction, ...style}}>
      <ColumnOne>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
        <Button text={data.btnText} type={"soft"} style={btnStyle}></Button>
      </ColumnOne>
      <ColumnTwo>
        <Image src={data.image} loading="lazy"></Image>
      </ColumnTwo>
    </Container>
  );
};
export default TwoColumn;
