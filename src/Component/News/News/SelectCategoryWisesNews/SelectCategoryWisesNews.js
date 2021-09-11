import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Home/Footer/Footer";
import AllTopics from "../../AllTopics/AllTopics";
import "./SelectCategoryWisesNews.css";
const SelectCategoryWisesNews = ({ catagory, findNews }) => {
  // console.log(catagory, findNews);

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row">
        {findNews.map((news, key = news._id) => (
          <div
            data-aos="fade-left"
            className="col-sm-6 col-md-4 col-lg-4 col-xl-3 "
          >
            {news.data.thisCatagory && (
              <>
                <div className="all_heading_name">
                  <button> {catagory}</button>
                </div>{" "}
                <Link to={`/news/${news.data.thisCatagory}`}>
                  {" "}
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
                        <button>{news.catagory}</button>
                        <p className="this_catagory_btn">
                          {news.data.thisCatagory}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategoryWisesNews;
