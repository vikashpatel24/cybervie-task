import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  console.log("home");
  return (
    <>


<div className="min-h-screen bg-[#0c0633] flex flex-col md:flex-row">
<div className="relative flex h-full flex-col justify-center p-4 text-white md:p-8">
          <h2 className="mb-2 text-3xl font-extrabold md:text-5xl bg-gradient-to-r from-amber-600 via-red-600 to-pink-500 bg-clip-text text-transparent">Book Your Slot</h2>
          <h1 className="mb-4 text-6xl font-extrabold italic uppercase tracking-wider md:text-8xl bg-gradient-to-r from-amber-600 via-red-600 to-pink-500 bg-clip-text text-transparent">Cyber <br/> Security</h1>
          <p className="mb-6 text-2xl font-bold md:text-3xl  text-orange-500">
           <span className="bg-gradient-to-r from-white to-blue-300 rounded-md pr-4 py-1 pl-1">
           Hands-on Industrial Training with Project

           </span>
           </p>
          <ul className="mb-6 space-y-2 font-bold text-3xl bg-gradient-to-r from-amber-600 via-red-600 to-pink-500 bg-clip-text text-transparent  ">
            <li>▪︎ VAPT</li>
            <li>▪︎ CLOUD SECURITY</li>
            <li>▪︎ SOC (SPLUNK, ELK)</li>
            <li>▪︎ GRC</li>
            <li>▪︎ PROJECTS/INTERNSHIP</li>
            <li>▪︎ PLACEMENT WITH OUR CLIENT</li>
          </ul>
          <Link to={'/register'} className="self-start bg-blue-500 shadow-lg rounded-lg shadow-white  px-6 py-3 text-lg font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-green-500">
            Register Now
          </Link>
        </div>
      <div className="flex-1">
        <img
          alt="Cyber Security Training"
          className="object-cover w-full h-screen"
          height="756"
          src="/assets/bg1.jpg"
          style={{
            aspectRatio: "378/756",
            objectFit: "cover",
          }}
          width="378"
        />
      </div>
    </div>




    {/* <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0c123b]">
      <div className="flex-1 p-8 md:p-12 lg:p-16 text-white">
        <h1 className="text-4xl font-bold mb-4">Book Your Slot</h1>
        <h2 className="text-3xl font-bold mb-8">CYBER SECURITY</h2>
        <p className="text-xl mb-6">Hands-on Industrial Training with Project</p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>VAPT</li>
          <li>CLOUD SECURITY</li>
          <li>SOC (SPLUNK, ELK)</li>
          <li>GRC</li>
          <li>PROJECTS/INTERNSHIP</li>
          <li>PLACEMENT WITH OUR CLIENT</li>
        </ul>
        <button className="bg-[#bd1e59] text-white">REGISTER NOW</button>
      </div>
      <div className="flex-1">
        <img
          alt="Cyber Security Training"
          className="max-w-full h-auto"
          height="500"
          src="/assets/bg1.jpg"
          style={{
            aspectRatio: "500/500",
            objectFit: "cover",
          }}
          width="500"
        />
      </div>
    </div> */}







      {/* <div className="relative h-screen w-full ">
        <img
          alt="Cyber Security Training"
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/bg1.jpg"
        />
        <div className="relative flex h-full flex-col justify-center p-4 text-white md:p-8">
          <h2 className="mb-2 text-3xl font-extrabold md:text-5xl bg-gradient-to-r from-amber-600 via-red-600 to-pink-500 bg-clip-text text-transparent">Book Your Slot</h2>
          <h1 className="mb-4 text-6xl font-extrabold italic uppercase tracking-wider md:text-8xl bg-gradient-to-r from-amber-600 via-red-600 to-pink-500 bg-clip-text text-transparent">Cyber <br/> Security</h1>
          <p className="mb-6 text-2xl font-bold md:text-3xl  text-orange-500">
           <span className="bg-gradient-to-r from-white to-blue-300 rounded-md pr-4 py-1 pl-1">
           Hands-on Industrial Training with Project

           </span>
           </p>
          <ul className="mb-6 space-y-2 font-bold text-3xl bg-gradient-to-r from-amber-600 via-red-600 to-pink-500 bg-clip-text text-transparent  ">
            <li>▪︎ VAPT</li>
            <li>▪︎ CLOUD SECURITY</li>
            <li>▪︎ SOC (SPLUNK, ELK)</li>
            <li>▪︎ GRC</li>
            <li>▪︎ PROJECTS/INTERNSHIP</li>
            <li className="sm:hidden">▪︎ PLACEMENTS</li>
            <li className="hidden sm:block ">▪︎ PLACEMENT WITH OUR CLIENT</li>
          </ul>
          <button className="self-start bg-blue-500 shadow-lg rounded-lg shadow-white  px-6 py-3 text-lg font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-green-500">
            Register Now
          </button>
        </div>
      </div> */}
    
    </>
  );
};

export default Home;
