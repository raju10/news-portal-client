import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
// navbar open
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import Admain from "./Component/Admain/Admain/Admain";
import AllNews from "./Component/News/News/AllNews";

import { FaBars, FaTimes } from "react-icons";
import Newss from "./Component/News/News/Newss";
import SelectedCategory from "./Component/News/SelectedCategory/SelectedCategory";
import Login from "./Component/Firebase/Login/Login/Login";
import PrivateRoute from "./Component/Firebase/Login/PrivateRoute/PrivateRoute";
import MakeAdmain from "./Component/Admain/Admain/MakeAdmain/MakeAdmain";
import FilterAdmain from "./Component/Admain/FilterAdmain";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderNavbar from "./Component/Navigation/HeaderNavbar/HeaderNavbar";
import NewAdmain from "./Component/NewAdmain/NewAdmain";
// navbar close

export const UseProductContext = createContext();
export const UseSelcNewsContext = createContext();
export const UserContext = createContext();
function App() {
  const [news, setNews] = useState([]);
  const [selcNews, setSelcNews] = useState([]);
  const [loginUser, setLoginUser] = useState({});
  ////////////

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  /////////////
  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <UseSelcNewsContext.Provider value={[selcNews, setSelcNews]}>
        <UseProductContext.Provider value={[news, setNews]}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/news/:catagorys">
                <Newss></Newss>
              </Route>
              {selcNews.catagory === "sports" ? (
                <PrivateRoute path="/:catagorys/id">
                  <SelectedCategory></SelectedCategory>
                </PrivateRoute>
              ) : (
                <Route path="/:catagorys/id">
                  <SelectedCategory></SelectedCategory>
                </Route>
              )}

              {/* <Route path="/:catagorys/id">
                <SelectedCategory></SelectedCategory>
              </Route> */}
              <Route path="/all-news/:catagorys">
                <AllNews></AllNews>
              </Route>
              <PrivateRoute path="/admain">
                <Admain></Admain>
              </PrivateRoute>
              <PrivateRoute path="/make-admain">
                <MakeAdmain></MakeAdmain>
              </PrivateRoute>
              <Route path="/nav">
                <HeaderNavbar></HeaderNavbar>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/raju">
                <NewAdmain></NewAdmain>
              </Route>
              {/* navbar open*/}
              <Route
                render={({ location, history }) => (
                  <React.Fragment>
                    <SideNav
                      onSelect={(selected) => {
                        const to = "/" + selected;
                        if (location.pathname !== to) {
                          history.push(to);
                        }
                      }}
                    >
                      <SideNav.Toggle />
                      <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                          <NavIcon>
                            <i
                              className="fa fa-fw fa-home"
                              style={{ fontSize: "1.75em" }}
                            />
                          </NavIcon>
                          <NavText>Home</NavText>
                        </NavItem>
                        {/* <NavItem eventKey="devices">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-device"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Devices</NavText>
                    </NavItem> */}
                      </SideNav.Nav>
                    </SideNav>
                    <main>
                      {/* <Route path="/" exact component={props => <RootComponent />} /> */}
                      <Route path="/home" component={(props) => <Home />} />
                      {/* <Route path="/devices" component={props => <Devices />} /> */}
                    </main>
                  </React.Fragment>
                )}
              />
              {/* navbae close */}
            </Switch>
          </Router>
        </UseProductContext.Provider>
      </UseSelcNewsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
