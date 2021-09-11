import React, { useContext } from "react";
import { UseSelcNewsContext } from "../../../App";
import { FaArrowRight, FaStopwatch, FaBook } from "react-icons/fa";
import "./SelectedCategory.css";
import AllTopics from "../AllTopics/AllTopics";
import { grey } from "@material-ui/core/colors";
import NavBar from "../../Home/NavBar/NavBar";
import Footer from "../../Home/Footer/Footer";
const SelectedCategory = () => {
  const [selcNews, setSelcNews] = useContext(UseSelcNewsContext);
  return (
    <div className="" style={{ paddingTop: "2%" }}>
      <NavBar></NavBar>
      <div className="container ">
        <div className="selected_category_container">
          <div className="row">
            <div className="col-sm-9">
              <div className="seltedCatagory">
                <small
                  style={{
                    fontSize: "16px",
                    letterSpacing: "1px",
                    color: "#0288d1cf",
                    textTransform: "uppercase",
                    fontWeight: "500",
                  }}
                >
                  {selcNews.catagory}
                </small>
                <h4>{selcNews.title}</h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "5%",
                  }}
                >
                  {" "}
                  <FaStopwatch
                    style={{
                      fontSize: "15px",
                      color: "#80808096",
                    }}
                  />
                  <small style={{ color: grey, fontSize: "14px" }}>
                    {" "}
                    {new Date().toDateString(selcNews.date)}
                  </small>{" "}
                  <small
                    style={{ color: grey, fontSize: "14px", paddingLeft: "5%" }}
                  >
                    <FaBook
                      style={{
                        fontSize: "15px",
                        color: "#80808096",
                      }}
                    />{" "}
                    2min read
                  </small>
                </div>
                <img
                  src={selcNews.selctedNewsImg}
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="selceted_news_description">
                  <h6 style={{ color: "#111", fontWeight: "500" }}>
                    {selcNews.title}
                  </h6>

                  <p>
                    {" "}
                    {selcNews.description} <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <AllTopics></AllTopics>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer_another_side"
        style={{ position: "relative", top: "23px" }}
      >
        <Footer></Footer>
      </div>
    </div>
  );
};

export default SelectedCategory;
