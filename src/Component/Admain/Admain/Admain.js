import { Details } from "@material-ui/icons";
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
import Swal from "sweetalert2";
const Admain = () => {
  const [isAdmain, setIsAdmain] = useState(false);
  const [loginUser, setLoginUser] = useContext(UserContext);

  const [datas, setDatas] = useState([]);

  // console.log(datas);

  const [addAdmain, setAddAdmain] = useState([]);
  // console.log("adddAdmain", addAdmain);
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

  useEffect(() => {
    axios("https://intense-anchorage-50845.herokuapp.com/addAdmain").then(
      (data) => {
        // console.log(data.rasult);
        setAddAdmain(data.rasult);
      }
    );
  }, []);

  ////is admain ////

  useEffect(() => {
    axios
      .get(
        `https://intense-anchorage-50845.herokuapp.com/addAdmain/isAdmain/${loginUser.loginUserEmail}`
      )
      .then(({ data }) => {
        // console.log(data);
        if (data.data.length) {
          setIsAdmain(true);
          Swal.fire("Now you can to enter my admin pages", "Thnq", "success");
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
  //
  return (
    <>
      <NavBar isAdmain={isAdmain}></NavBar>
      {isAdmain ? (
        <div className="container" style={{ paddingTop: "5%" }}>
          <div className="admain_container">
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
              <MakeAdmain isAdmain={isAdmain}></MakeAdmain>
            </div>
          </div>
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
    </>
  );
};

export default Admain;

/*  */
