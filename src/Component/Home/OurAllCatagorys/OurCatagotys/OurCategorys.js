import React from "react";
import newsImg from "../../../../Image/our-catagory_img/img-3.jpg";
import sportsImg from "../../../../Image/our-catagory_img/sports.jpg";
import healthImg from "../../../../Image/our-catagory_img/health.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./OurCategorys.css";
import { Link } from "react-router-dom";
const OurCategorys = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container">
      <div className="heading_title">
        <h4>
          Our <span style={{ color: "#0288d1" }}>Categort's</span>
        </h4>
      </div>
      <div style={{ marginTop: "5%" }}>
        <Carousel responsive={responsive}>
          <Link to="/all-news/news">
            {" "}
            <div className="single_categoryss">
              <img src={newsImg} alt="" />
              <p>News</p>
            </div>
          </Link>
          <Link to="/all-news/sports">
            {" "}
            <div className="single_categoryss" style={{}}>
              <img src={sportsImg} alt="" />
              <p>Sports</p>
            </div>
          </Link>
          <Link to="/all-news/health">
            {" "}
            <div className="single_categoryss" style={{}}>
              <img src={healthImg} alt="" />
              <p>Health</p>
            </div>
          </Link>
          <Link to="/all-news/news">
            {" "}
            <div className="single_categoryss" style={{}}>
              <img src={newsImg} alt="" />
              <p>News</p>
            </div>
          </Link>
        </Carousel>
      </div>
    </div>
  );
};

export default OurCategorys;
