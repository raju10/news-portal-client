import React, { useState } from "react";
import NavBar from "../../../Home/NavBar/NavBar";
import ShortMail from "../../ShortMail";
import MakeAdmainInput from "./MakeAdmainInput/MakeAdmainInput";

const MakeAdmain = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* <Navbar></Navbar> */}
      <NavBar></NavBar>

      <div className="container " style={{ marginTop: "5%" }}>
        <MakeAdmainInput></MakeAdmainInput>
      </div>
    </div>
  );
};

export default MakeAdmain;
