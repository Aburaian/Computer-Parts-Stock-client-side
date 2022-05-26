import React from "react";
import useReviews from "../../../hooks/UseReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div className="my-20">
      <div className="text-center pb-8">
        <h2 className=" text-xl font-bold">
          Parts{"   "}
          <span className="text-primary font-bold">Reviews</span>{" "}
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
