import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { FaArrowRight, FaStopwatch, FaBook } from "react-icons/fa";
import "./CatagoryWiseNews.css";
import { UseSelcNewsContext } from "../../App";
const CatagoryWiseNews = ({ newss, catagory }) => {
  const [selcNews, setSelcNews] = useContext(UseSelcNewsContext);
  const { catagorys } = useParams();
  console.log(catagorys);
  return (
    <>
      <div className="all_heading_name">
        <button
          className={
            (catagory === "news" && "catagory_color_Change") ||
            (catagory === "sports" && "sports_catagory_color_Change") ||
            (catagory === "health" && "health_catagory_color_Change")
          }
        >
          {" "}
          {catagory}
        </button>
      </div>
      <div className="row">
        {newss.map((news) => (
          <div className="col-sm-3" style={{ marginBottom: "3%" }}>
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
                      className={
                        (news.catagory === "news" && "reade_more_news_btn") ||
                        (news.catagory === "sports" &&
                          "reade_more_sports_btn") ||
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
          </div>
        ))}
      </div>
    </>
  );
};

export default CatagoryWiseNews;
