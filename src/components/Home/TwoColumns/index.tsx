import React from "react";
import Container, { ColumnOne, ColumnTwo, Description, Title, Image } from "./styles";
import Button from "../../shared/Button";
import type { ColumnType, TwoColumnItem } from "../../../data/twoColumns";

interface TwoColumnProps {
  direction?: React.CSSProperties["flexDirection"];
  data?: Partial<TwoColumnItem>;
  style?: React.CSSProperties;
  btnStyle?: React.CSSProperties;
  columnType?: ColumnType;
}

const TwoColumn: React.FC<TwoColumnProps> = ({
  direction = 'row',
  data = {},
  style = {},
  btnStyle = {},
  columnType = 'grande',
}) => {
  return (
    <Container style={{ flexDirection: direction, ...style }}>
      <ColumnTwo>
        <Image src={data.image} loading="lazy" alt={data.title ?? ''} />
      </ColumnTwo>
      <ColumnOne>
        <Title columnType={columnType}>{data.title}</Title>
        <Description columnType={columnType}>{data.description}</Description>
        <Button text={data.btnText ?? ''} type="soft" style={btnStyle} />
      </ColumnOne>
    </Container>
  );
};

export default TwoColumn;
