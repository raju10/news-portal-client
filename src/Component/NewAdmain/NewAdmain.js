import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
const colourOptions = [
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "tomato", label: "tomato", color: "#FF8B00" },
  { value: "pink", label: "pink", color: "#FFC400" },
];
const NewAdmain = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          // defaultValue={[colourOptions[2], colourOptions[3]]}
          //{...register("thisCatagory", { required: true })}
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select w-50"
          classNamePrefix="select"
        />

        <input type="submit" className="read_more_btn" />
      </form>
    </div>
  );
};

export default NewAdmain;
