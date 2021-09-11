import React from "react";
import emailjs from "emailjs-com";
const ShortMail = () => {
  //////////////////
  function sendEmail(e) {
    // console.log(e.target.value);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t4b77sp",
        "template_b0ozs69",
        e.target,
        "user_o8Tv2LDlheDIOO91GunSi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  /////
  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <label style={{ color: "#111" }}>Submit your E-mail id</label>

        <input
          type="text"
          name="user_email"
          className="form-control w-100 bg-white"
          placeholder="Email"
          required
        />
        <br />

        <input type="submit" value="Send" className="buttons  read_more_btn" />
      </form>
    </div>
  );
};

export default ShortMail;
