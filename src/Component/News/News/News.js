import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UseProductContext } from "../../../App";
import NavBar from "../../Home/NavBar/NavBar";
import AllTopics from "../AllTopics/AllTopics";
import "./News.css";
const News = () => {
  const [news, setNews] = useContext(UseProductContext);
  const [selcNews, setSelcNews] = useState([]);
  console.log("selcNews", selcNews);
  const { catagorys } = useParams();
  console.log(catagorys);
  const [findNews, setFindNews] = useState([]);
  console.log("findProduct", findNews);

  useEffect(() => {
    fetch("http://localhost:1000/news")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const filterNews = data.rasult.filter(
          (pro) => pro.data.thisCatagory === catagorys
        );
        setFindNews(filterNews);
      });
  }, [catagorys]);
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 ">
              <div className="row">
                {findNews.map((news) => (
                  <div className="col-sm-3">
                    <div className="news_catagory">
                      <div>
                        {" "}
                        <img
                          className="news_catagory_img"
                          src={news.imgUrl}
                          alt=""
                          style={{
                            width: "100%",
                            height: "150px",
                          }}
                        />
                      </div>

                      <div className="date-catagory">
                        <div>
                          <button
                            onClick={() =>
                              setSelcNews({
                                ...selcNews,
                                catagory: news.catagory,
                                selcTisCatagory: news.data.thisCatagory,
                                date: news.date,
                                selctedNewsImg: news.imgUrl,
                                description: news.data.description,
                              })
                            }
                          >
                            {news.catagory}
                          </button>
                          <p className="this_catagory_btn">
                            {news.data.thisCatagory}
                          </p>
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

export default News;
