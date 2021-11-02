import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { UseProductContext } from "../../../App";

import Footer from "../../Home/Footer/Footer";
import NavBar from "../../Home/NavBar/NavBar";

import "./AllNews.css";
import SelectCategoryWisesNews from "./SelectCategoryWisesNews/SelectCategoryWisesNews";
const AllNews = () => {
  const [news, setNews] = useContext(UseProductContext);

  const { catagorys } = useParams();
  // console.log(catagorys);

  const sportsFilter = news.filter((pd) => pd.catagory === "sports");

  const newsFilter = news.filter((pd) => pd.catagory === "news");

  const [allFindNews, setAllFindProduct] = useState([]);
  // console.log("allFindProduct", allFindNews);
  useEffect(() => {
    fetch(`https://intense-anchorage-50845.herokuapp.com/news`)
      .then((res) => res.json())
      .then((data) => {
        // setProduct(data.rasult);

        const filterAllNews = data.rasult.filter(
          (pro) => pro.catagory === catagorys
        );
        setAllFindProduct(filterAllNews);
      });
  }, [catagorys]);
  const thisCatagories = [
    "bangladesh",
    "asia",
    "cricket",
    "tenis",
    "football",
    "hocky",
    "covid",
    "food",
  ];
  return (
    <div>
      <NavBar></NavBar>
      <div className="container ">
        {" "}
        <div className="all_news_container">
          {thisCatagories.map((sCatagory) => (
            <SelectCategoryWisesNews
              key={Math.random()}
              catagory={sCatagory}
              findNews={allFindNews.filter(
                (n) => n.data.thisCatagory === sCatagory
              )}
            ></SelectCategoryWisesNews>
          ))}
        </div>
      </div>
      <div
        className="footer_another_side"
        style={{ position: "relative", top: "22px" }}
      >
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AllNews;
