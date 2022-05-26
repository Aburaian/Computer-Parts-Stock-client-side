import React from "react";

const PartsStock = () => {
  return (
    <div className="bg-gray-200 py-8">
      <div className="text-center pb-8">
        <h2 className=" text-xl font-bold">
          Parts{"   "}
          <span className="text-primary font-bold">Stock</span>{" "}
        </h2>
      </div>
      <div className="py-4 container flex justify-center items-center">
        {" "}
        <p className="me-4">UPS </p>{" "}
        <progress
          className="progress progress-success w-50"
          value="60"
          max="100"
        ></progress>{" "}
        <p className="ms-4">50% </p>
      </div>
      <div className=" container flex justify-center items-center">
        {" "}
        <p className="me-4">Processor </p>
        <progress
          className="progress progress-success w-50"
          value="60"
          max="100"
        ></progress>{" "}
        <p className="ms-4">65%</p>
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
