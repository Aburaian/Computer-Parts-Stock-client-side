import React from "react";
import { useForm } from "react-hook-form";

const MyReview = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://calm-hamlet-14735.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto bg-gray-200">
      <h2 className="mt-6 p-2">
        Please add a <span className="text-primary fw-bold">Review</span>
      </h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="mb-2 p-2"
          placeholder="Comment"
          {...register("Comment")}
        />
        <input
          className="mb-2 p-2"
          placeholder="Rating"
          type="number"
          {...register("Rating")}
        />
        <input
          className="mb-2 p-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input className="p-2" type="submit" value="Add Review" />
      </form>
    </div>
  );
};

export default MyReview;
