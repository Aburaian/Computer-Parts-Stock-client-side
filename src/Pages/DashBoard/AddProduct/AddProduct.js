import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://calm-hamlet-14735.herokuapp.com/product`;
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
        Please add a <span className="text-primary fw-bold">Product</span>
      </h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2 p-2"
          placeholder="Product Name"
          {...register("Name")}
        />
        <textarea
          className="mb-2 p-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2 p-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2 p-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input className="p-2" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
