import React, { useContext } from "react";
import Container, { TextWarning, Warning } from "./styles";
import TextBanner from "../../components/Home/TextBanner";
import TwoColumns from "../../components/Home/TwoColumns";
import { ThemeContext } from "styled-components";
import { twoColumnsData } from "../../data/twoColumns";

const Home = () => {
  const themeContext = useContext(ThemeContext);

  const textColorOne = themeContext.color.neutral.high.pure;
  const textColorTwo = themeContext.color.brand.houseGreen;
  const bkgColorOne = themeContext.color.brand.dark;
  const bkgColorTwo = themeContext.color.brand.light;
  const bkgColorThree = themeContext.color.brand.blueLight;

  const btnStyle = {minWidth: "35px", minHeight: "35px", fontSize: "16px", marginTop: "32px", marginRight: 0}
  return (
    <Container>
      <TextBanner/>
      <TwoColumns data={twoColumnsData.firstColumn}
        btnStyle={{...btnStyle, color: textColorOne, borderColor: textColorOne}}
        style={{backgroundColor: bkgColorOne, color: textColorOne}}/>
      <TwoColumns data={twoColumnsData.secondColumn}
        btnStyle={{...btnStyle, color: textColorTwo, borderColor: textColorTwo}}
        style={{backgroundColor: bkgColorTwo, color: textColorTwo}} direction="row-reverse"/>
      <TwoColumns data={twoColumnsData.thirdColumn}
        columnType="short"
        btnStyle={{...btnStyle, color: textColorOne, borderColor: textColorOne}}
        style={{backgroundColor: bkgColorOne, color: textColorOne}}/>
      <TwoColumns data={twoColumnsData.fourthColumn}
        columnType="short"
        btnStyle={{...btnStyle, color: textColorTwo, borderColor: textColorTwo}}
        style={{backgroundColor: bkgColorThree, color: textColorTwo}} direction="row-reverse"/>
        <Warning>
          <TextWarning>*At participating stores.</TextWarning>
        </Warning>
    </Container>
  );
};
export default Home;
