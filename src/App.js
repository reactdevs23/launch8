import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PartOfFuture from "./components/PartOfFuture/PartOfFuture";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Sale from "./pages/Sale/Sale";
import Mint from "./pages/Mint/Mint";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/details" element={<Sale />}></Route>
        <Route path="/minter" element={<Mint />}></Route>
      </Routes>
      <PartOfFuture />
      <Footer />
    </>
  );
}

export default App;
