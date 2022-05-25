import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  //   const [user] = useAuthState(auth);

  //   const logout = () => {
  //     signOut(auth);
  //   };
  return (
    <header className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Purchase</Link>
              </li>
              <li>
                <Link to="/review">Review</Link>
              </li>
              <li>
                <Link to="/galary">Galary</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              {/* {user && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )} */}
              {/* <li>
              {user ? (
                <button className="btn btn-" onClick={logout}>
                  Sign Out
                </button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li> */}
            </ul>
          </div>
          <div className="w-16 h-16 mt-2 rounded-full">
            <img
              src="https://www.geekdoor.com/images/inner-banner.png"
              alt=""
            />
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Computer Parts Stock
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex uppercase">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Purchase</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
            <li>
              <Link to="/galary">Galary</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            {/* {{user && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}} */}
            {/* {
              <li>
                {user ? (
                  <button className="btn btn-" onClick={logout}>
                    Sign Out
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            } */}
          </ul>
        </div>
        <div className="navbar-end">
          <label
            tabIndex="1"
            for="dashboard-sidebar"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
