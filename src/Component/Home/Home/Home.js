import React from "react";
import Navbar from "../../Navigation/Navbar/Navbar";
import AllNews from "../../News/News/AllNews";
import NavBar from "../NavBar/NavBar";
import OurAllCatagorys from "../OurAllCatagorys/OurAllCatagorys";
import OurCategorys from "../OurAllCatagorys/OurCatagotys/OurCategorys";

const Home = () => {
  return (
    <div className="homes">
      {/* <NavBar></NavBar> */}

      <Navbar></Navbar>
      <OurCategorys></OurCategorys>
      <OurAllCatagorys></OurAllCatagorys>
    </div>
  );
};

export default Home;
