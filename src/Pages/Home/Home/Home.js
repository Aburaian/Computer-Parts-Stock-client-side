import React from "react";
import Bannar from "../Bannar/Bannar";
import Galary from "../Galary/Galary";
import PartsStock from "../PartsStock/PartsStock";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Footer from "../../SharedPages/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Products></Products>
      <Reviews></Reviews>
      <Galary></Galary>
      <PartsStock></PartsStock>
      <Footer></Footer>
    </div>
  );
};

export default Home;
