import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  console.log("home");
  return (
    <>
      <div className="z-10 flex flex-col relative text-white text-wrap pl-10 mb-10 h-screen overflow-hidden">
        <div className="   text-4xl font-bold">Book Your Slot</div>
        <div className="  text-4xl font-bold pb-8">
          <div className="text-7xl text-pink-500 italic ">
            <div className=" text-9xl">CYBER</div>
            SECURITY
          </div>
          <span className="bg-blue-500 rounded-lg px-4">
            Hands-on Industrial Training with Project
          </span>
        </div>
        <div className=" pl-10 pb-4 text-pink-500  rounded-lg px-4   text-4xl font-bold ">
          <ol style={{ listStyleType: "square" }}>
            <li cl>VAPT</li>
            <li>CLOUD SECURITY</li>
            <li>SOC (SPLUNK, ELK)</li>
            <li>GRC</li>
            <li>PROJECTS/INTERNSHIP</li>
            <li>PLACEMENTS WITH OUR CLIENT</li>
          </ol>
        </div>
        <span className=" text-white bg-blue-500  text-4xl font-bold shadow-md shadow-white  border-2 px-4 border-blue-950 rounded-lg">
          <Link to={"register"}>REGISTER NOW</Link>
        </span>
      </div>
    </>
  );
};

export default Home;
