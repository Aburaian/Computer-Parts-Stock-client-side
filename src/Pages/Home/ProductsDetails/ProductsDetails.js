import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const ProductsDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    if (number > 0) {
      const updateQuantity = product?.quantity + parseInt(number);
      fetch(`https://stark-coast-67001.herokuapp.com/product/${productId}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ updateQuantity }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      alert("submit successfully!!!");
      e.target.reset();
    } else {
      toast.error("put a valid integer number", {
        id: "putValid",
        duration: 5000,
      });
    }
  };

  return (
    <div className="mt-12 p-28 ">
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={product?.img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.name}</h2>
          <p>{product?.description}</p>
          <p>
            <span className="font-bold">Price:</span> {product?.price}
          </p>
          <p>
            <span className="font-bold">MOQ:</span> {product?.MQuantity}
          </p>
          <p>
            <span className="font-bold">Availble Quantity:</span>{" "}
            {product?.AvailbleQuantity}
          </p>
        </div>
      </div>
      <div className="my-20">
        <div className="text-center pb-8">
          <h2 className=" text-xl text-primary font-bold">Purchase</h2>
          <p>Quantity</p>
          <div className="mt-4">
            <input
              type="number"
              id="number"
              className="form-control"
              placeholder="200"
              required
            />
            <Button
              onClick={handleSubmit}
              className="mt-2 text-uppercase text-center"
              variant="primary"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
