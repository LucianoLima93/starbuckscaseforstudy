import React, { Suspense, lazy } from "react";
import Container from "./styles";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../views/Home"));
const GiftCard = lazy(() => import("../views/GiftCard"));
const Rewards = lazy(() => import("../views/Rewards"));

const Content = () => {
  return (
    <Container>
      <Suspense fallback={<></>}>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/gift' element={<GiftCard/>}></Route>
          <Route path='/rewards' element={<Rewards/>}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
export default Content;
