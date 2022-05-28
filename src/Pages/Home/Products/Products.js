import React from "react";
import useProducts from "../../../hooks/UseProducts";
import Product from "../Product/Product";
const Products = () => {
  const [products] = useProducts();
  return (
    <div className="my-20">
      <div className="text-center pb-8">
        <h2 className=" text-xl font-bold">
          Computer <span className="text-primary font-bold"> Parts</span>{" "}
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
