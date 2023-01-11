import React, { useContext } from "react";
import Container from "./styles";
import TextBanner from "../../components/Home/TextBanner";
import TwoColumns from "../../components/Home/TwoColumns";
import { ThemeContext } from "styled-components";

const Home = () => {
  const themeContext = useContext(ThemeContext);

  const firstColumn = {
    title: 'New year, cool new brew',
    description: 'Introducing Pistachio Cream Cold Brew—bold, smooth coffee topped with pistachio cream cold foam.',
    btnText: 'Try it now',
    image: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82556.jpg',
  }
  const secondColumn = {
    title: 'Pistachio your way',
    description: 'Our creamy Pistachio Frappuccino® blended beverage satisfies all your winter cravings.',
    btnText: 'Order now',
    image: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82669.jpg',
  }
  const textColorOne = themeContext.color.neutral.high.pure;
  const textColorTwo = themeContext.color.brand.houseGreen;
  const bkgColorOne = themeContext.color.brand.dark;
  const bkgColorTwo = themeContext.color.brand.light;
  const btnStyle = {minWidth: "35px", minHeight: "35px", fontSize: "16px", marginTop: "32px", marginRight: 0}
  return (
    <Container>
      <TextBanner/>
      <TwoColumns data={firstColumn}
        btnStyle={{...btnStyle, color: textColorOne, borderColor: textColorOne}}
        style={{backgroundColor: bkgColorOne, color: textColorOne}}/>
      <TwoColumns data={secondColumn}
        btnStyle={{...btnStyle, color: textColorTwo, borderColor: textColorTwo}}
        style={{backgroundColor: bkgColorTwo, color: textColorTwo}} direction="row-reverse"/>
    </Container>
  );
};
export default Home;
