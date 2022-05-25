import React from "react";

const PartsStock = () => {
  return (
    <div className="bg-gray-200 py-8">
      <div className="text-center pb-8">
        <h2 className=" text-xl font-bold uppercase">
          Parts{"   "}
          <span className="text-primary font-bold uppercase">Stock</span>{" "}
        </h2>
      </div>
      <div className="py-4">
        {" "}
        <span>UPS </span>
        <progress
          className="progress progress-success w-56"
          value="60"
          max="100"
        ></progress>{" "}
        <span>50%</span>
      </div>
      <div>
        {" "}
        <span>Processor </span>
        <progress
          className="progress progress-success w-56"
          value="60"
          max="100"
        ></progress>{" "}
        <span>65%</span>
      </div>
      <div className="py-4">
        {" "}
        <span>Motherboard </span>
        <progress
          className="progress progress-success w-56"
          value="60"
          max="100"
        ></progress>{" "}
        <span>60%</span>
      </div>
      <div>
        {" "}
        <span>RAM </span>
        <progress
          className="progress progress-success w-56"
          value="60"
          max="100"
        ></progress>{" "}
        <span>40%</span>
      </div>
      <div className="py-4">
        {" "}
        <span>Hard Disk </span>
        <progress
          className="progress progress-success w-56"
          value="60"
          max="100"
        ></progress>{" "}
        <span>54%</span>
      </div>
      <div>
        {" "}
        <span>SSD </span>
        <progress
          className="progress progress-success w-56"
          value="60"
          max="100"
        ></progress>{" "}
        <span>85%</span>
      </div>
      <div className="py-4">
        {" "}
        <span>Graphics Card </span>
        <progress
          className="progress progress-success w-56"
          value="60"
          max="100"
        ></progress>{" "}
        <span>33%</span>
      </div>
      <div className="py-2">
        {" "}
        <span>CPU Cooler </span>
        <progress
          className="progress progress-success w-56"
          value="60"
          max="100"
        ></progress>{" "}
        <span>52%</span>
      </div>
      <div className="py-4">
        {" "}
        <span>Computer Casing </span>
        <progress
          className="progress progress-success w-56"
          value="60"
          max="100"
        ></progress>{" "}
        <span>90%</span>
      </div>
    </div>
  );
};

export default PartsStock;
