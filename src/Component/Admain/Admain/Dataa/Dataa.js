import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { UserContext } from "../../../../App";

const Dataa = ({ datas }) => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  const [imgUrl, setImgUrl] = useState(null);
  console.log("imgUrl", imgUrl);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    const allData = { ...datas, data, imgUrl, loginUser };
    // console.log(allData);
    // https://intense-anchorage-50845.herokuapp.com
    axios
      .post("https://intense-anchorage-50845.herokuapp.com/news", allData)

      .then((data) => {
        // console.log(data);
        if (data) {
          Swal.fire("Your post creating succesfully", "Thnq", "success");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    e.target.reset();
  };
  ///img upload functions open////
  const handelImgUpload = (e) => {
    console.log(e.target.files[0]);
    const imgData = new FormData();
    imgData.set("key", "a0a6964d25e2a5c91f0e5eac3886a4ec");
    imgData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        console.log("response", response);
        setImgUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  ///img upload functions close//
  return (
    <div>
      <h5>Plese creating a new post</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        {(datas.catagory === "news" && (
          <>
            <select
              className="form-control w-25"
              {...register("thisCatagory", { required: true })}
            >
              <option disabled={true} value="Not set">
                Select Option
              </option>
              <option value="bangladesh">Bangladesh</option>
              <option value="asia">Asia</option>
              {/* <option value="world">World</option> */}
            </select>
            {/* {errors.menCatagory && (
              <span className="text-danger">This field is required</span>
            )} */}
          </>
        )) ||
          (datas.catagory === "sports" && (
            <>
              <select
                className="form-control w-75"
                {...register("thisCatagory", { required: true })}
              >
                <option disabled={true} value="Not set">
                  Select Option
                </option>
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
                <option value="tenis">Tenis</option>
                <option value="hocky">Hocky</option>
              </select>
              {errors.sportsCatagory && (
                <span className="text-danger">This field is required</span>
              )}
            </>
          )) ||
          (datas.catagory === "health" && (
            <>
              <select
                className="form-control w-75"
                {...register("thisCatagory", { required: true })}
              >
                <option disabled={true} value="Not set">
                  Select Option
                </option>
                <option value="covid">Covid</option>
                <option value="food">Food</option>
              </select>
              {errors.sportsCatagory && (
                <span className="text-danger">This field is required</span>
              )}
            </>
          ))}
        <input
          {...register("title", { required: true })}
          className="form-control w-75"
          placeholder="Title"
        />

        {errors.title && <span>This field is required</span>}
        <br />
        <input
          {...register("author", { required: true })}
          defaultValue={loginUser.loginUserName}
          className="form-control w-75"
          placeholder="Author Name"
        />

        {errors.author && <span>author is required</span>}
        <br />
        <textarea
          {...register("description", { required: true })}
          className="form-control w-75"
          placeholder="Description"
        />

        {errors.description && <span>This field is required</span>}
        <br />
        <input
          type="file"
          onChange={handelImgUpload}
          // {...register("img", { required: true })}
          className="form-control"
        />
        {/* {errors.img && <span>Image is required</span>} */}
        <br />
        <input type="submit" className="read_more_btn" />
      </form>
    </div>
  );
};

export default Dataa;
