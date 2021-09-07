import React, { useContext } from "react";
import {
  FaNewspaper,
  FaHome,
  FaCalendar,
  FaShoePrints,
  FaAndroid,
} from "react-icons/fa";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from "react-router-dom";
import { UseProductContext } from "../../../App";
import "./NavBar.css";
const NavBar = () => {
  const [news, setNews] = useContext(UseProductContext);
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
                <Link to="/all-news/news">All News </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/bangladesh">Bangladesh </Link>
              </NavText>{" "}
            </NavItem>
          </NavItem>
          {/* news part close */}
          {/* sports part open */}
          <NavItem eventKey="sports">
            <NavIcon>
              {" "}
              <FaShoePrints style={{ fontSize: "1.75em" }} />{" "}
            </NavIcon>

            <NavText>Sports</NavText>
            <NavItem eventKey="charts/barchart">
              {" "}
              <NavText>
                {" "}
                <Link to="/all-news/sports">All Sports </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/cricket">Ckicket </Link>
              </NavText>{" "}
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/football">Football </Link>
              </NavText>{" "}
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/tenis">Tenis </Link>
              </NavText>{" "}
            </NavItem>
          </NavItem>
          {/* sport part close */}
          <NavItem eventKey="admain">
            <NavIcon>
              <Link to="/admain">
                {" "}
                <FaCalendar style={{ fontSize: "1.75em" }} />
              </Link>
            </NavIcon>
            <NavText>Admain</NavText>
          </NavItem>
          <NavItem eventKey="makeAdmain">
            <NavIcon>
              <Link to="/make-admain">
                {" "}
                <FaAndroid style={{ fontSize: "1.75em" }} />
              </Link>
            </NavIcon>
            <NavText>Make Admain</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};

export default NavBar;
