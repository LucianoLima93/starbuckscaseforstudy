import React from "react";
import Container, { TextWarning, Warning } from "./styles";
// import TextBanner from "../../components/Home/TextBanner";
import TwoColumns from "../../components/Home/TwoColumns";
import { twoColumnsData } from "../../data/twoColumns";

const Home = () => {
  const date = new Date();
  const btnStyle = {minWidth: "35px", minHeight: "35px", fontSize: "16px", marginTop: "32px", marginRight: 0};

  const twoColumns = twoColumnsData.map((column, i) => {
    return (
      <TwoColumns data={column}
        btnStyle={{...btnStyle, color: column.color, borderColor: column.color}}
        key={i}
        columnType={column.type}
        style={{backgroundColor: column.backgroundColor, color: column.color}}
        direction={column.direction}
      />
    )
  })

  return (
    <Container>
      {twoColumns}
      <Warning>
        <TextWarning>© {date.getFullYear()} This site is only for studies. All rights are reserved for Starbucks Coffee Company</TextWarning>
      </Warning>
    </Container>
  );
};
export default Home;
