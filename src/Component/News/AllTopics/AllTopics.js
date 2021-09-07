import React from "react";
import { Link } from "react-router-dom";
const AllTopics = () => {
  return (
    <div>
      <div className="all_heading_name">
        <button>Topics</button>
      </div>
      <div className="all_news_catagory">
        <Link to="/all-news/news" style={{ color: "white" }}>
          <button
            className="all_news_catagory_btn"
            style={{ background: "#009688" }}
          >
            News
          </button>
        </Link>
        <Link to="/all-news/sports" style={{ color: "white" }}>
          <button
            className="all_news_catagory_btn"
            style={{ background: "#009688" }}
          >
            Sports
          </button>
        </Link>
        <Link to="/all-news/news" style={{ color: "white" }}>
          <button
            className="all_news_catagory_btn"
            style={{ background: "#009688" }}
          >
            Health
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllTopics;
