import React from "react";
import error from "../../assets/error.jpg";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div>
        <img src={error} alt="" />
        <div className="flex justify-center mt-10">
          <Link to="/">
            <button className="btn btn-accent">Back To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
