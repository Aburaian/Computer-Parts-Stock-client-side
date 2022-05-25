import React from "react";
import Bannar from "../Bannar/Bannar";
import Galary from "../Galary/Galary";
import PartsStock from "../PartsStock/PartsStock";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Products></Products>
      <Reviews></Reviews>
      <Galary></Galary>
      <PartsStock></PartsStock>
    </div>
  );
};

export default Home;
