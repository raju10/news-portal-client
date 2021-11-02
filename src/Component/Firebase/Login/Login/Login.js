import { FcGoogle, AiFillGoogleCircle } from "react-icons/fa";
import React, { useContext, useState } from "react";
import firebase from "firebase";
import "firebase/auth";

import { useHistory, useLocation } from "react-router";

import "./Login.css";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../../App";
import loginBg from "../../../../Image/Loing_img/memories-1.jpg";
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handelGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;

        const signInUser = {
          loginUserEmail: user.email,
          loginUserName: user.displayName,
          loginUserPhoto: user.photoURL,
        };
        setLoginUser(signInUser);
        history.replace(from);
        /////////////
        // sessionStorage.setItem("token", signInUser);
        ////////////
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
        // console.log(errorCode, errorMessage);
      });
    // const signinUserToken = () => {
    //   firebase
    //     .auth()
    //     .currentUser.getIdToken(/* forceRefresh */ true)
    //     .then(function (idToken) {
    //       sessionStorage.setItem("token", idToken);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //   //
    // };
    //
  };
  return (
    <section className="login-page">
      <div className=" container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6 shadow p-5">
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">
                Forgot your password?
              </label>
            </div>
            <div className="from-group mt-5">
              <button className="login-btn" onClick={handelGoogleSignIn}>
                Google Sign in
              </button>
            </div>
          </div>
          <div className="col-md-6  d-md-block align-self-end">
            <img
              className=""
              src={loginBg}
              alt=""
              style={{
                width: "100%",
                position: "relative",
                top: "-50px",
                marginTop: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
