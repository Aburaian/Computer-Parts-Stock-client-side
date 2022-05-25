import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="">
      <h1>404 Not Found</h1>
      <button>
        <Link className="no-underline" to="/">
          GO BACK TO HOME
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
