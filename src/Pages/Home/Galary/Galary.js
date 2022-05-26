import React from "react";

const Galary = () => {
  return (
    <div className="my-20">
      <div className="text-center pb-8">
        <h2 className=" text-xl font-bold">
          Parts <span className="text-primary font-bold">Galary</span>
        </h2>
      </div>

      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <img
            src="https://www.bdstall.com/asset/product-image/giant_120769.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.bdstall.com/asset/product-image/giant_109525.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.bdstall.com/asset/product-image/giant_91154.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.bdstall.com/asset/product-image/giant_108893.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.bdstall.com/asset/product-image/giant_82707.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.bdstall.com/asset/product-image/giant_142691.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.bdstall.com/asset/product-image/giant_149526.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.bdstall.com/asset/product-image/giant_126391.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.bdstall.com/asset/product-image/giant_119550.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Galary;
