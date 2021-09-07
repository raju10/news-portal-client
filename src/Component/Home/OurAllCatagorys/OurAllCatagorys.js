import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import CatagoryWiseNews from "../../CatagoryWiseNews/CatagoryWiseNews";
import { UseProductContext } from "../../../App";
import "./OurAllCatagorys.css";
const OurAllCatagorys = () => {
  const [news, setNews] = useContext(UseProductContext);
  console.log("news", news);
  //
  useEffect(() => {
    fetch("https://intense-anchorage-50845.herokuapp.com/news")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data.rasult);
      });
  }, []);
  const catagories = ["news", "sports", "health"];
  return (
    <div className="container " style={{ paddingTop: "5%" }}>
      <div className="heading_title">
        <h4>
          Our All <span style={{ color: "#0288d1" }}>Categort's</span>
        </h4>
      </div>
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
