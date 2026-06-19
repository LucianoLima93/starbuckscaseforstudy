import React, { Suspense, lazy } from "react";
import Container from "./styles";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../views/Home"));
const GiftCard = lazy(() => import("../views/GiftCard"));
const Rewards = lazy(() => import("../views/Rewards"));
const NewGiftCard = lazy(() => import("../views/NewGiftCard"));

const Content: React.FC = () => {
  return (
    <Container>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gift" element={<GiftCard />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/newgift" element={<NewGiftCard />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default Content;
