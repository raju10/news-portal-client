import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { FaBook } from "react-icons/fa";
import { useParams } from "react-router";
import { UseSelcNewsContext } from "../../App";
import "./CatagoryWiseNews.css";
const CatagoryWiseNews = ({ newss, catagory }) => {
  const [selcNews, setSelcNews] = useContext(UseSelcNewsContext);

  const { catagorys } = useParams();

  return (
    <div>
      {newss.map((news) => (
        <div
          style={{
            display: "flex",
            margin: "6%",
            alignItems: "center",
            backgroundColor: "white",
            boxShadow: "0 3px 6px 0 rgb(0 0 0 / 7%)",
            borderRadius: "5px",
          }}
        >
          <div style={{ width: "90%" }}>
            <img
              src={news.imgUrl}
              alt=""
              style={{
                width: "100%",
                height: "120px",
                filter: "grayscale(51%)",
              }}
            />
          </div>
          <div className="all-catagorys_titles" style={{ width: "110%" }}>
            {" "}
            <span
              className={
                (catagory.news === "news" && "catagory_color_Change ") ||
                (catagory.sports === "sports" &&
                  "sports_catagory_color_Change ") ||
                (catagory.health === "health" &&
                  "health_catagory_color_Change ")
              }
            >
              {news.catagory}
            </span>
            <p>{news.data.title}</p>
            <div className="read_mores">
              <small className="two-min-read">
                <FaBook /> 2min read
              </small>
              <Link to={`/${catagorys}/id`}>
                <button
                  className={
                    (news.catagory === "news" && "reade_more_news_btn") ||
                    (news.catagory === "sports" && "reade_more_sports_btn") ||
                    (news.catagory === "health" && "reade_more_health_btn")
                  }
                  // className="read_more_btn"
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
      ))}
    </div>
  );
};

export default CatagoryWiseNews;
