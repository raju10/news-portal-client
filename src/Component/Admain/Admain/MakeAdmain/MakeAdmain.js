import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../../../App";
import NavBar from "../../../Home/NavBar/NavBar";
import ShortMail from "../../ShortMail";
import MakeAdmainInput from "./MakeAdmainInput/MakeAdmainInput";

const MakeAdmain = () => {
  const [isAdmain, setIsAdmain] = useState(false);
  const [loginUser, setLoginUser] = useContext(UserContext);
  useEffect(() => {
    axios
      .get(
        `https://intense-anchorage-50845.herokuapp.com/addAdmain/isAdmain/${loginUser.loginUserEmail}`
      )
      .then(({ data }) => {
        // console.log(data);
        if (data.data.length) {
          Swal.fire("Now you can to enter my admin pages", "Thnq", "success");
          setIsAdmain(true);
        } else {
          setIsAdmain(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You don't axist my admain Pages",
            // footer: '<a href="">Why do I have this issue?</a>'
          });
        }
      });
  }, [loginUser]);
  return (
    <div style={{ overflow: "hidden" }}>
      {/* <Navbar></Navbar> */}
      <NavBar></NavBar>

      {isAdmain ? (
        <div className="container " style={{ marginTop: "5%" }}>
          <MakeAdmainInput></MakeAdmainInput>
        </div>
      ) : (
        <div className="container">
          <p style={{ textAlign: "center", color: "red" }}>
            {" "}
            I know you want to enter my admin page. But sorry you can't enter 😔
            <br /> If you want to enter my admin pages, please send me a short
            mail.. Thank you🙂
          </p>
          <ShortMail></ShortMail>
        </div>
      )}
    </div>
  );
};

export default MakeAdmain;
