import { Avatar, CardMedia } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UseProductContext } from "../../../App";
import CatagoryWiseNews from "../../CatagoryWiseNews/CatagoryWiseNews";
import NavBar from "../../Home/NavBar/NavBar";
import OurAllCatagorys from "../../Home/OurAllCatagorys/OurAllCatagorys";
import AllTopics from "../AllTopics/AllTopics";
import "./AllNews.css";
const AllNews = () => {
  const [news, setNews] = useContext(UseProductContext);
  console.log("news", news);
  //

  const catagories = ["news", "sports"];
  //
  //
  //
  //
  //
  const { catagorys } = useParams();
  console.log(catagorys);
  //

  // const [allNewsFilter, setAllNewsFilter] = useState([]);
  // const [allSportsFilter, setAllSportsFilter] = useState([]);
  const sportsFilter = news.filter((pd) => pd.catagory === "sports");

  const newsFilter = news.filter((pd) => pd.catagory === "news");
  console.log("allNewsFilter", newsFilter);
  console.log("allSportsFilter", sportsFilter);

  const [allFindNews, setAllFindProduct] = useState([]);
  console.log("allFindProduct", allFindNews);
  useEffect(() => {
    fetch(`http://localhost:1000/news`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setProduct(data.rasult);
        setNews(data.rasult);
        const filterAllNews = data.rasult.filter(
          (pro) => pro.catagory === catagorys
        );
        setAllFindProduct(filterAllNews);
        // /////

        /////
      });
  }, [catagorys]);

  return (
    <div>
      <NavBar></NavBar>
    </div>
  );
};

export default AllNews;
