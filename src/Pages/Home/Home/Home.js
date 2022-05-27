import React from "react";
import Bannar from "../Bannar/Bannar";
import Galary from "../Galary/Galary";
import PartsStock from "../PartsStock/PartsStock";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Footer from "../../SharedPages/Footer/Footer";
import Business from "../../Business/Business";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Products></Products>
      <Business></Business>
      <Reviews></Reviews>
      <Galary></Galary>
      <PartsStock></PartsStock>
      <Footer></Footer>
    </div>
  );
};

export default Home;
