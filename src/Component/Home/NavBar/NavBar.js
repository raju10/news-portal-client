import React, { useContext, useEffect, useState } from "react";
import {
  FaNewspaper,
  FaHome,
  FaUserShield,
  FaFootballBall,
  FaUserLock,
  FaMedkit,
} from "react-icons/fa";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from "react-router-dom";
import { UseProductContext, UserContext } from "../../../App";
import "./NavBar.css";
import axios from "axios";
import ShortMail from "../../Admain/ShortMail";
const NavBar = ({ isAdmain }) => {
  const [news, setNews] = useContext(UseProductContext);
  const [loginUser, setLoginUser] = useContext(UserContext);

  /////////////
  /////////////

  ////////////
  ////////////
  return (
    <div>
      <SideNav
        classname="sidenav"
        style={{ background: "#0288d1", position: "fixed" }}
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <Link to="/home">
                {" "}
                <FaHome style={{ fontSize: "1.75em" }} />
              </Link>
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          {/* news part open */}
          <NavItem eventKey="news">
            <NavIcon>
              {" "}
              <FaNewspaper style={{ fontSize: "1.75em" }} />{" "}
            </NavIcon>

            <NavText>News</NavText>
            <NavItem eventKey="charts/barchart">
              {" "}
              <NavText>
                {" "}
                <Link
                  to="/all-news/news"
                  style={{ color: "#111", textDecoration: "none" }}
                >
                  All News{" "}
                </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/bangladesh" style={{ color: "#111" }}>
                  Bangladesh{" "}
                </Link>
              </NavText>{" "}
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/asia" style={{ color: "#111" }}>
                  Asia{" "}
                </Link>
              </NavText>{" "}
            </NavItem>
          </NavItem>
          {/* news part close */}
          {/* sports part open */}
          <NavItem eventKey="sports">
            <NavIcon>
              {" "}
              <FaFootballBall style={{ fontSize: "1.75em" }} />{" "}
            </NavIcon>

            <NavText>Sports</NavText>
            <NavItem eventKey="charts/barchart">
              {" "}
              <NavText>
                {" "}
                <Link to="/all-news/sports" style={{ color: "#111" }}>
                  All Sports{" "}
                </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/cricket" style={{ color: "#111" }}>
                  Ckicket{" "}
                </Link>
              </NavText>{" "}
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/football" style={{ color: "#111" }}>
                  Football{" "}
                </Link>
              </NavText>{" "}
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/tenis" style={{ color: "#111" }}>
                  Tenis{" "}
                </Link>
              </NavText>{" "}
            </NavItem>
          </NavItem>
          {/* sport part close */}
          {/* Health part open */}
          <NavItem eventKey="news">
            <NavIcon>
              {" "}
              <FaMedkit style={{ fontSize: "1.75em" }} />{" "}
            </NavIcon>

            <NavText>Health</NavText>
            <NavItem eventKey="charts/barchart">
              {" "}
              <NavText>
                {" "}
                <Link to="/all-news/health" style={{ color: "#111" }}>
                  Health{" "}
                </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/covid" style={{ color: "#111" }}>
                  Covid{" "}
                </Link>
              </NavText>{" "}
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/food" style={{ color: "#111" }}>
                  Food{" "}
                </Link>
              </NavText>{" "}
            </NavItem>
          </NavItem>
          {/* news part close */}

          {isAdmain && (
            <>
              <NavItem eventKey="admain">
                <NavIcon>
                  <Link to="/admain">
                    {" "}
                    <FaUserLock style={{ fontSize: "1.75em" }} />
                  </Link>
                </NavIcon>
                <NavText>
                  <Link to="/admain">Admin</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="makeAdmain">
                <NavIcon>
                  <Link to="/make-admain">
                    {" "}
                    <FaUserShield style={{ fontSize: "1.75em" }} />
                  </Link>
                </NavIcon>
                <NavText>
                  {" "}
                  <Link to="/make-admain">Make Admin</Link>
                </NavText>
              </NavItem>
            </>
          )}
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};

export default NavBar;
