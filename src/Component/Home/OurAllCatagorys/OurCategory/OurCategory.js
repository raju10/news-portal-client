import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newsImg from "../../../../Image/heared_img/voice3_13-810x540.jpg.webp";
import "./OurCategory.css";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
const OurCategory = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <Slider {...settings}>
        <div className="our_catagory_news_containers">
          {" "}
          <button>NEWS</button>
          <Link
            to={{ pathname: "/all-news/news" }}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <h6 style={{ textDecoration: "none" }}>
              Hipster Yoga at the End of the World
            </h6>{" "}
          </Link>
        </div>

        <div className="our_catagory_sport_containers">
          {" "}
          <Link to="/all-news/sports" style={{ textDecoration: "none" }}>
            {" "}
            <button>SPORT</button>
            <h6 style={{ textDecoration: "none" }}>
              Hipster Yoga at the End of the World
            </h6>
          </Link>
        </div>

        <div className="our_catagory_health_containers">
          {" "}
          <Link to="/all-news/health" style={{ textDecoration: "none" }}>
            {" "}
            <button>HEALTH</button>{" "}
            <h6 style={{ textDecoration: "none" }}>
              Hipster Yoga at the End of the World
            </h6>{" "}
          </Link>
        </div>

        <div className="our_catagory_sport_containers">
          {" "}
          <Link to="/all-news/sports" style={{ textDecoration: "none" }}>
            {" "}
            <button>SPORT</button>
            <h6 style={{ textDecoration: "none" }}>
              Hipster Yoga at the End of the World
            </h6>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default OurCategory;
