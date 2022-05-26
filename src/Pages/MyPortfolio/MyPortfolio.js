import React from "react";
import PortfolioImg from "../../images/sakil.png";

const MyPortfolio = () => {
  return (
    <div>
      <div className="text-center py-8">
        <h2 className=" text-xl font-bold">
          My{"   "}
          <span className="text-primary font-bold">Portfolio</span>{" "}
        </h2>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={PortfolioImg}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">
              <span className="text-primary">Name: </span>MD. Abu Raian Sakil
            </h1>
            <p className="py-2">
              <span className="font-bold">Email: </span>aburaian182@gmail.com
            </p>
            <p className="py-2">
              <span className="font-bold">Address: </span>Magura, Satkhira
            </p>
            <p className="py-2">
              <span className="font-bold">Education: </span>BBA, Accounting,
              Satkhira Government College
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-8 mt-12">
        <div className="text-center pb-8">
          <h2 className=" text-xl font-bold">
            My{"   "}
            <span className="text-primary font-bold">Skills</span>{" "}
          </h2>
        </div>
        <div className="py-4 container flex justify-center items-center">
          {" "}
          <p className="me-4">HTML </p>{" "}
          <progress
            className="progress progress-success w-50"
            value="90"
            max="100"
          ></progress>{" "}
          <p className="ms-4">90% </p>
        </div>
        <div className="container flex justify-center items-center">
          {" "}
          <p className="me-4">HTML5 </p>{" "}
          <progress
            className="progress progress-success w-50"
            value="95"
            max="100"
          ></progress>{" "}
          <p className="ms-4">95% </p>
        </div>
        <div className="py-4 container flex justify-center items-center">
          {" "}
          <p className="me-4">CSS </p>{" "}
          <progress
            className="progress progress-success w-50"
            value="95"
            max="100"
          ></progress>{" "}
          <p className="ms-4">95% </p>
        </div>
        <div className="container flex justify-center items-center">
          {" "}
          <p className="me-4">Bootstrap </p>{" "}
          <progress
            className="progress progress-success w-50"
            value="98"
            max="100"
          ></progress>{" "}
          <p className="ms-4">98% </p>
        </div>
        <div className="py-4 container flex justify-center items-center">
          {" "}
          <p className="me-4">Tailwind </p>{" "}
          <progress
            className="progress progress-success w-50"
            value="98"
            max="100"
          ></progress>{" "}
          <p className="ms-4">98% </p>
        </div>
        <div className="container flex justify-center items-center">
          {" "}
          <p className="me-4">Java Script </p>{" "}
          <progress
            className="progress progress-success w-50"
            value="90"
            max="100"
          ></progress>{" "}
          <p className="ms-4">90% </p>
        </div>
        <div className="py-4 container flex justify-center items-center">
          {" "}
          <p className="me-4">React </p>{" "}
          <progress
            className="progress progress-success w-50"
            value="95"
            max="100"
          ></progress>{" "}
          <p className="ms-4">95% </p>
        </div>
        <div className=" container flex justify-center items-center">
          {" "}
          <p className="me-4">React All Library </p>{" "}
          <progress
            className="progress progress-success w-50"
            value="95"
            max="100"
          ></progress>{" "}
          <p className="ms-4">95% </p>
        </div>
        <div className="py-4 container flex justify-center items-center">
          {" "}
          <p className="me-4">react router </p>{" "}
          <progress
            className="progress progress-success w-50"
            value="95"
            max="100"
          ></progress>{" "}
          <p className="ms-4">95% </p>
        </div>
        <div className="container flex justify-center items-center">
          {" "}
          <p className="me-4">Firebase </p>{" "}
          <progress
            className="progress progress-success w-50"
            value="90"
            max="100"
          ></progress>{" "}
          <p className="ms-4">90% </p>
        </div>
        <div className="py-4 container flex justify-center items-center">
          {" "}
          <p className="me-4">Node js </p>{" "}
          <progress
            className="progress progress-success w-50"
            value="80"
            max="100"
          ></progress>{" "}
          <p className="ms-4">80% </p>
        </div>
        <div className=" container flex justify-center items-center">
          {" "}
          <p className="me-4">Mongo DB </p>{" "}
          <progress
            className="progress progress-success w-50"
            value="80"
            max="100"
          ></progress>{" "}
          <p className="ms-4">80% </p>
        </div>
        <div className="text-center pt-12">
          <h2 className=" text-xl font-bold">
            My{"   "}
            <span className="text-primary font-bold">Websites</span>{" "}
          </h2>
        </div>
        <div className="py-4">
          <a
            href="https://warehouse-client-side-de85b.web.app/"
            className="link link-hover"
          >
            Electronics Warehouse
          </a>
        </div>
        <div>
          <a
            href="https://raian-learning-home.web.app/"
            className="link link-hover"
          >
            Raian Learning Home
          </a>
        </div>
        <div className="py-4">
          <a
            href="https://computer-reviews-9.netlify.app/"
            className="link link-hover"
          >
            Computer Shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
