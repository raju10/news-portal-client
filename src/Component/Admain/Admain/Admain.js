import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UseProductContext, UserContext } from "../../../App";
import NavBar from "../../Home/NavBar/NavBar";
import ShortMail from "../ShortMail";
import Dataa from "./Dataa/Dataa";
import MakeAdmain from "./MakeAdmain/MakeAdmain";

const Admain = () => {
  const [datas, setDatas] = useState([]);

  console.log(datas);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const catagoryData = {
      catagory: data.catagory,
    };

    setDatas(catagoryData);
  };

  return (
    <>
      <NavBar></NavBar>

      <div className="container" style={{ paddingTop: "5%" }}>
        <h5>Chose's Categorys</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <input
              type="radio"
              id="news"
              name="fav_language"
              value="news"
              {...register("catagory", { required: true })}
            />
              <label for="news">News</label>
            {errors.catagory && (
              <>
                <br />{" "}
                <span style={{ color: "red", fontSize: "12px" }}>
                  This field is required
                </span>
              </>
            )}
            <br /> {" "}
            <input
              type="radio"
              id="sports"
              name="fav_language"
              value="sports"
              {...register("catagory", { required: true })}
            />
              <label for="sports">Sports</label>
            {errors.catagory && (
              <>
                <br />{" "}
                <span style={{ color: "red", fontSize: "12px" }}>
                  This field is required
                </span>
              </>
            )}
            <br /> {" "}
            <input
              type="radio"
              id="health"
              name="fav_language"
              value="health"
              {...register("catagory", { required: true })}
            />
              <label for="health">Health</label>
            {errors.catagory && (
              <>
                <br />{" "}
                <span style={{ color: "red", fontSize: "12px" }}>
                  This field is required
                </span>
              </>
            )}
            {/*  */}
          </div>
          {datas.catagory === "news" ||
          datas.catagory === "sports" ||
          datas.catagory === "health" ? (
            <input className="nav-link disabled" type="submit" />
          ) : (
            <input type="submit" className="read_more_btn" />
          )}
        </form>

        <br />
        <br />
        {datas.catagory === "news" ||
        datas.catagory === "sports" ||
        datas.catagory === "health" ? (
          <Dataa datas={datas}></Dataa>
        ) : (
          <p style={{ color: "red" }}>Not attend</p>
        )}
        <div style={{ display: "none" }}>
          {" "}
          <MakeAdmain></MakeAdmain>
        </div>
      </div>
    </>
  );
};

export default Admain;

/* <div className="container">
<p style={{ textAlign: "center", color: "red" }}>
  {" "}
  I know you want to enter my admin page. But sorry you can't enter 😔
  <br /> If you want to enter my admin pages, please send me a short
  mail.. Thank you🙂
</p>
<ShortMail></ShortMail>
</div> */
