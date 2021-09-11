import React from "react";
import { Link } from "react-router-dom";
import enviromentImg from "../../../Image/upcomming_categorys_img/environment.jpg.webp";
import lifeStyleImg from "../../../Image/upcomming_categorys_img/lifestyle-1.jpg.webp";
import fahionImg from "../../../Image/upcomming_categorys_img/fashion-img.jpg.webp";
import "./AllTopics.css";
const AllTopics = () => {
  return (
    <>
      <div>
        <div className="all_heading_name">
          <button>Topics</button>
        </div>
        <div className="all_news_catagory">
          <Link to="/all-news/news" style={{ color: "white" }}>
            <button
              className="all_news_catagory_btn"
              style={{ background: "#d80808ab" }}
            >
              News
            </button>
          </Link>
          <Link to="/all-news/sports" style={{ color: "white" }}>
            <button
              className="all_news_catagory_btn"
              style={{ background: "#0288d1" }}
            >
              Sports
            </button>
          </Link>
          <Link to="/all-news/health" style={{ color: "white" }}>
            <button
              className="all_news_catagory_btn"
              style={{ background: "#8bc34a" }}
            >
              Health
            </button>
          </Link>
        </div>
      </div>
      <>
        <div className="upcomming_categorys">
          <h3>Upcomming Categorie's</h3>
          <div className="upcomming_categorys_container">
            <div style={{ width: "70%" }}>
              <img
                src={enviromentImg}
                alt=""
                style={{ width: "100%", borderRadius: "2px" }}
              />
            </div>
            <div className="upcomming_categorys_description">
              <span style={{ color: "#ca85ca" }}>Enviroment</span>
              <p>Solar Energy for Mother Earth and Everyday Smiles</p>
            </div>
          </div>
          <div className="upcomming_categorys_container">
            <div style={{ width: "70%" }}>
              <img
                src={lifeStyleImg}
                alt=""
                style={{ width: "100%", borderRadius: "2px" }}
              />
            </div>
            <div className="upcomming_categorys_description">
              <span style={{ color: "#f4b23f" }}>Lifestyle</span>
              <p>What Will Natural Beauty Be Like In 100 Years?</p>
            </div>
          </div>
          <div className="upcomming_categorys_container">
            <div style={{ width: "70%" }}>
              <img
                src={fahionImg}
                alt=""
                style={{ width: "100%", borderRadius: "2px" }}
              />
            </div>
            <div className="upcomming_categorys_description">
              <span style={{ color: "#f4b23f" }}>Fashion</span>
              <p>Hipster Yoga at the End of the World</p>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AllTopics;
