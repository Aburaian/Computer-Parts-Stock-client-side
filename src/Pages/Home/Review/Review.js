import React from "react";

const Review = ({ review }) => {
  const { id, image, comment, name } = review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{comment}</p>
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={image} alt="" />
          </div>
        </div>
        <h4 className="card-title">{name}</h4>

        <div className="card-actions justify-end">
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
