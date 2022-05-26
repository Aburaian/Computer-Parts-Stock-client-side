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
          value="50"
          max="100"
        ></progress>{" "}
        <p className="ms-4">50% </p>
      </div>
      <div className="container flex justify-center items-center">
        {" "}
        <p className="me-4">Processor </p>
        <progress
          className="progress progress-success w-50"
          value="65"
          max="100"
        ></progress>{" "}
        <p className="ms-4">65%</p>
      </div>
      <div className="py-4 container flex justify-center items-center">
        {" "}
        <p className="me-4">Motherboard </p>
        <progress
          className="progress progress-success w-50"
          value="60"
          max="100"
        ></progress>{" "}
        <p className="ms-4">60%</p>
      </div>
      <div className="container flex justify-center items-center">
        {" "}
        <p className="me-4">RAM </p>
        <progress
          className="progress progress-success w-50"
          value="40"
          max="100"
        ></progress>{" "}
        <p className="ms-4">40%</p>
      </div>
      <div className=" py-4 container flex justify-center items-center">
        {" "}
        <p className="me-4">Hard Disk </p>
        <progress
          className="progress progress-success w-50"
          value="54"
          max="100"
        ></progress>{" "}
        <p className="ms-4">54%</p>
      </div>
      <div className="container flex justify-center items-center">
        {" "}
        <p className="me-4">SSD </p>
        <progress
          className="progress progress-success w-50"
          value="85"
          max="100"
        ></progress>{" "}
        <p className="ms-4">85%</p>
      </div>
      <div className="py-4 container flex justify-center items-center">
        {" "}
        <p className="me-4">Graphics Card </p>
        <progress
          className="progress progress-success w-50"
          value="33"
          max="100"
        ></progress>{" "}
        <p className="ms-4">33%</p>
      </div>
      <div className="container flex justify-center items-center">
        {" "}
        <p className="me-4">CPU Cooler </p>
        <progress
          className="progress progress-success w-50"
          value="52"
          max="100"
        ></progress>{" "}
        <p className="ms-4">52%</p>
      </div>
      <div className=" py-4 container flex justify-center items-center">
        {" "}
        <p className="me-4">Computer Casing </p>
        <progress
          className="progress progress-success w-50"
          value="90"
          max="100"
        ></progress>{" "}
        <p className="ms-4">90%</p>
      </div>
    </div>
  );
};

export default PartsStock;
