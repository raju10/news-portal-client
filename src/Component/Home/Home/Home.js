import React from "react";
import { FaArrowUp } from "react-icons/fa";
import HeaderNavbar from "../../Navigation/HeaderNavbar/HeaderNavbar";

import Ards from "../Ards/Ards";
import Footer from "../Footer/Footer";

import OurAllCatagorys from "../OurAllCatagorys/OurAllCatagorys";

import OurCategory from "../OurAllCatagorys/OurCategory/OurCategory";

const Home = () => {
  return (
    <div className="homes">
      <HeaderNavbar></HeaderNavbar>

      <OurCategory></OurCategory>

      <OurAllCatagorys></OurAllCatagorys>
      <Ards></Ards>
      <Footer></Footer>
      {/* <FaArrowUp/> */}
    </div>
  );
};

export default Home;
