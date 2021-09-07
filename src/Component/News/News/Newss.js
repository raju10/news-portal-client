import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UseProductContext, UseSelcNewsContext } from "../../../App";
import NavBar from "../../Home/NavBar/NavBar";
import AllTopics from "../AllTopics/AllTopics";
import "./Newss.css";
import { FaArrowRight, FaStopwatch, FaBook } from "react-icons/fa";
import { colors } from "@material-ui/core";
import slcImg from "../../../Image/our-catagory_img/news.jpg";
import { Link } from "react-router-dom";
const Newss = () => {
  const [news, setNews] = useContext(UseProductContext);
  const [selcNews, setSelcNews] = useContext(UseSelcNewsContext);
  console.log("selcNews", selcNews);
  const { catagorys, id } = useParams();
  console.log(catagorys);
  const [findNews, setFindNews] = useState([]);
  console.log("findProduct", findNews);

  useEffect(() => {
    fetch("https://intense-anchorage-50845.herokuapp.com/news")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const filterNews = data.rasult.filter(
          (pro) => pro.data.thisCatagory === catagorys
        );
        setFindNews(filterNews);
      });
  }, [catagorys]);

  ///

  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 ">
              <div className="row">
                {findNews.map((news) => (
                  <div className="col-sm-4" style={{ paddingBottom: "3%" }}>
                    <div className="catagory_box" style={{ width: "100%" }}>
                      <img
                        src={news.imgUrl}
                        alt=""
                        style={{ width: "100%", height: "150px" }}
                      />
                      <div style={{ padding: "4% 4%" }}>
                        <div className="date_catagory">
                          {" "}
                          <small>{news.catagory}</small>{" "}
                          <FaArrowRight
                            style={{
                              fontSize: "13px",
                              color: "#80808096",
                              marginTop: "7px",
                            }}
                          />
                          <span>{news.data.thisCatagory}</span>{" "}
                          <FaStopwatch
                            style={{
                              fontSize: "15px",
                              color: "#80808096",
                              marginTop: "6px",
                              marginLeft: "4%",
                            }}
                          />
                          <span style={{ fontFamily: "monospace" }}>
                            {" "}
                            {new Date().toDateString(news.date)}
                          </span>
                        </div>
                        <p>{news.title}</p>
                        <div className="read_more">
                          <small>
                            2min read <FaBook />
                          </small>
                          <Link to={`/${catagorys}/id`}>
                            <button
                              className="read_more_btn"
                              onClick={() =>
                                setSelcNews({
                                  ...selcNews,
                                  id: news._id,
                                  catagory: news.catagory,
                                  selcThisCatagory: news.data.thisCatagory,
                                  date: news.date,
                                  selctedNewsImg: news.imgUrl,
                                  description: news.data.description,
                                  title: news.data.title,
                                })
                              }
                            >
                              Read More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-sm-3">
              <AllTopics></AllTopics>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newss;
