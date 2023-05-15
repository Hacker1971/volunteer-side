import React, { useContext } from "react";
import logo from "../../assets/logos/Group 1329.png";

import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className=" bg-gradient-to-r from-white to-transparent bg-opacity-90">
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to='/Donation' className="justify-between">Donation</Link>
              </li>
              <li>
                {/* <link>Events</link> */}
                <Link to='/event' className="justify-between">Events</Link>
              </li>
              <li>
                <Link to='/Blog' className="justify-between">Blog</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            {" "}
            <img src={logo} className="w-32 h-9" alt="" />{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to='/Donation' className="justify-between">Donation</Link>
            </li>
            <li>
              <Link to='/event' className="justify-between">Events</Link>
            </li>
            <li>
              <Link to='/Blog' className="justify-between">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="navbar">
            {user ? (
              <button onClick={signOut}>logout</button>
            ) : (
              <Link to="/login" className="btn btn-success">
                Register
              </Link>
            )}

           {
            user?  <Link
            className="btn ml-4  bg-[#434141] text-white hover:text-black"
            to="/addService"
          >
            Admin
          </Link> : <></>
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
