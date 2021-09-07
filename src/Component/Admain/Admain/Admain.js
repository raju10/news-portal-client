import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UseProductContext } from "../../../App";
import NavBar from "../../Home/NavBar/NavBar";
import Dataa from "./Dataa/Dataa";

const Admain = () => {
  const [news, setNews] = useContext(UseProductContext);
  const [adddAdmain, setAddAdmain] = useState([]);

  const [isAdmain, setIsAdmain] = useState({});
  console.log(isAdmain);
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
  // ////
  useEffect(() => {
    fetch("https://intense-anchorage-50845.herokuapp.com/addAdmain")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setAddAdmain(data.rasult);
      });
    for (let i = 0; i < adddAdmain.length; i++) {
      const element = adddAdmain[i];
      setIsAdmain(element);
    }
  }, []);

  return (
    <>
      <NavBar></NavBar>
      {isAdmain ? (
        <div className="container">
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
            {datas.catagory === "news" || datas.catagory === "sports" ? (
              <input className="nav-link disabled" type="submit" />
            ) : (
              <input type="submit" className="btn btn-success" />
            )}
          </form>

          <br />
          <br />
          {datas.catagory === "news" || datas.catagory === "sports" ? (
            <Dataa datas={datas}></Dataa>
          ) : (
            <p style={{ color: "red" }}>Not attend</p>
          )}
        </div>
      ) : (
        <p>sorry</p>
      )}
    </>
  );
};

export default Admain;
