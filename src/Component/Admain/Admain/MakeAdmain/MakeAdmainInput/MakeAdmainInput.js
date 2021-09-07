import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmainInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://intense-anchorage-50845.herokuapp.com/addAdmain", data)

      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div data-aos="fade-left">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <input defaultValue="test" {...register("example")} /> */}

          <input
            {...register("email", { required: true })}
            placeholder="make a new admain email address"
            className="form-control w-75"
          />

          {errors.email && <span>This field is required</span>}
          <br />

          <input type="submit" className="read_more_btn" />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmainInput;
