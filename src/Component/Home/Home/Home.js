import React from "react";
import Navbar from "../../Navigation/Navbar/Navbar";
import AllNews from "../../News/News/AllNews";
import NavBar from "../NavBar/NavBar";
import OurAllCatagorys from "../OurAllCatagorys/OurAllCatagorys";

const Home = () => {
  return (
    <>
      {/* <NavBar></NavBar> */}

      <Navbar></Navbar>

      <OurAllCatagorys></OurAllCatagorys>
    </>
  );
};

export default Home;
