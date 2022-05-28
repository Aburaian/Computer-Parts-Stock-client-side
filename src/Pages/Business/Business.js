import { HiFlag } from "react-icons/hi";
import { HiThumbUp } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineIdentification } from "react-icons/hi";
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
          <HiFlag className="h-10 w-10 ml-4 text-blue-500"></HiFlag>

          <div class="stat-title">Countries</div>
          <div class="stat-value">72</div>
        </div>

        <div class="stat">
          <HiOutlineIdentification className="h-10 w-10 ml-4 text-blue-500"></HiOutlineIdentification>
          <div class="stat-title">Complete Projects</div>
          <div class="stat-value">535+</div>
        </div>

        <div class="stat">
          <HiOutlineUserGroup className="h-10 w-10 ml-4 text-blue-500"></HiOutlineUserGroup>
          <div class="stat-title">Happy Clients</div>
          <div class="stat-value">280+</div>
        </div>
        <div class="stat">
          <HiThumbUp className="h-10 w-10 ml-4 text-blue-500"></HiThumbUp>
          <div class="stat-title">Feedbacks</div>
          <div class="stat-value">432+</div>
        </div>
      </div>
    </div>
  );
};

export default Business;
