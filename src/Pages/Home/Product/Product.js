import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { id, price, img, MQuantity, description, name, AvailbleQuantity } =
    product;

  const navigate = useNavigate();
  const ProductDeatils = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>
            <span className="font-bold">Price:</span> {price}
          </p>
          <p>
            <span className="font-bold">MOQ:</span> {MQuantity}
          </p>
          <p>
            <span className="font-bold">Availble Quantity:</span>{" "}
            {AvailbleQuantity}
          </p>
          <div clasName="card-actions">
            <button
              onClick={() => ProductDeatils(id)}
              className="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
