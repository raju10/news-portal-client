import React, { useContext } from "react";
import { UseSelcNewsContext } from "../../../App";
import { FaArrowRight, FaStopwatch, FaBook } from "react-icons/fa";
import "./SelectedCategory.css";
import AllTopics from "../AllTopics/AllTopics";
import { grey } from "@material-ui/core/colors";
import NavBar from "../../Home/NavBar/NavBar";
const SelectedCategory = () => {
  const [selcNews, setSelcNews] = useContext(UseSelcNewsContext);
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="seltedCatagory">
              <small>{selcNews.catagory}</small>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat tempora quo, asperiores consectetur voluptatum
                  doloribus deleniti magnam accusantium dolorum incidunt.{" "}
                </h6>

                <p>
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Incidunt accusamus quae earum quod odio sapiente temporibus
                  officiis dicta nemo consequatur! <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus mollitia quos ipsam eius a voluptatibus veniam sequi
                  eaque itaque iure!
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
  );
};

export default SelectedCategory;
