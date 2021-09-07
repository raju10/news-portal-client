import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import CatagoryWiseNews from "../../CatagoryWiseNews/CatagoryWiseNews";
import { UseProductContext } from "../../../App";

const OurAllCatagorys = () => {
  const [news, setNews] = useContext(UseProductContext);
  console.log("news", news);
  //

  const catagories = ["news", "sports", "health"];
  return (
    <div className="container ">
      {catagories.map((catagory) => (
        <CatagoryWiseNews
          catagory={catagory}
          newss={news.filter((n) => n.catagory === catagory)}
        ></CatagoryWiseNews>
      ))}{" "}
    </div>
  );
};

export default OurAllCatagorys;
