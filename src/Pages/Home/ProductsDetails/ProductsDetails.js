import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:3000/products/${productId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, product]);

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
    </div>
  );
};

export default ProductsDetails;
