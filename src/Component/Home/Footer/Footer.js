import React from "react";
import "./Footer.css";
import logo from "../../../Image/logo/herald_logo.png";
import footer_food_img from "../../../Image/footer_img/herald024-74x55.jpg";
import footer_health_img from "../../../Image/footer_img/h.jpg";
import footer_sports_img from "../../../Image/footer_img/s.jpg";
import footer_travel_img from "../../../Image/footer_img/most_discussed/travel.jpg";
import footer_fashion_img from "../../../Image/footer_img/most_discussed/herald092-74x55.jpg";
import "./Footer.css";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "#222222" }}>
      <div className="footer_container">
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <div style={{ marginBottom: "3%" }}>
                <img
                  src={logo}
                  alt=""
                  style={{ width: "80%", marginBottom: "6%" }}
                />
                <p>
                  Herald is the next generation WordPress magazine theme,
                  featuring a fully flexible header with 3 customizable areas
                  and an easy-to-use module builder for unlimited layout
                  combinations
                </p>
                <button className="read_more_btn">Find out more</button>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <div className="footer_most_contain">
                <h4>Most Popular</h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: "5%",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <img
                      src={footer_food_img}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div style={{ width: "150%", paddingLeft: "5%" }}>
                    <p>Grandma’s secret blueberry pie recipe revealed!</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: "5%",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <img
                      src={footer_sports_img}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div style={{ width: "150%", paddingLeft: "5%" }}>
                    <p>Grandma’s secret blueberry pie recipe revealed!</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: "5%",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <img
                      src={footer_health_img}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div style={{ width: "150%", paddingLeft: "5%" }}>
                    <p>Grandma’s secret blueberry pie recipe revealed!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
              {" "}
              <div className="footer_most_contain">
                <h4>Most Popular</h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: "5%",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <img
                      src={footer_food_img}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div style={{ width: "150%", paddingLeft: "5%" }}>
                    <p>Grandma’s secret blueberry pie recipe revealed!</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: "5%",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <img
                      src={footer_travel_img}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div style={{ width: "150%", paddingLeft: "5%" }}>
                    <p>Grandma’s secret blueberry pie recipe revealed!</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: "5%",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <img
                      src={footer_fashion_img}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div style={{ width: "150%", paddingLeft: "5%" }}>
                    <p>Grandma’s secret blueberry pie recipe revealed!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <h4>Tags</h4>
              <div className="footer_tags">
                <ul>
                  <li>awesome</li>
                  <li>news</li>
                  <li>blog</li>
                  <li>health</li>
                  <li>sports</li>
                  <li>culture</li>
                  <li>culture</li>
                  <li>earth</li>
                  <li>eco</li>
                  <li>ecology</li>
                  <li>entrepreneurship</li>
                  <li>environment</li>
                  <li>fashion</li>
                  <li>fashoin</li>
                  <li>funk</li>
                  <li>future</li>
                  <li>lifestyle</li>
                  <li>magazine</li>
                  <li>music</li>
                  <li>pasta</li>
                  <li>photos</li>
                  <li>post</li>
                  <li>lifestyle</li>
                  <li>sustainability</li>
                  <li>studio</li>
                  <li>technology</li>
                  <li>rock</li>
                  <li>tips</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#111",
          position: "relative",
          top: "18px",
        }}
      >
        <p
          className="container"
          style={{ color: "#dddddd", padding: "10px 5px", fontSize: "12px" }}
        >
          Copyright © 2021. Created by Meks. Powered by WordPress.
        </p>
      </div>
    </div>
  );
};

export default Footer;
