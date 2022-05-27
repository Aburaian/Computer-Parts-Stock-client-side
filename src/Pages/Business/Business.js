import React from "react";

const Business = () => {
  return (
    <div className="my-20">
      <div className="text-center pb-8">
        <h2 className=" text-xl font-bold">
          Business <span className="text-primary font-bold"> Summary</span>{" "}
        </h2>
      </div>
      <div class="stats stats-vertical lg:stats-horizontal shadow">
        <div class="stat">
          <div class="stat-title">Countries</div>
          <div class="stat-value">72</div>
        </div>

        <div class="stat">
          <div class="stat-title">Complete Projects</div>
          <div class="stat-value">535+</div>
        </div>

        <div class="stat">
          <div class="stat-title">Happy Clients</div>
          <div class="stat-value">280+</div>
        </div>
        <div class="stat">
          <div class="stat-title">Feedbacks</div>
          <div class="stat-value">432+</div>
        </div>
      </div>
    </div>
  );
};

export default Business;
