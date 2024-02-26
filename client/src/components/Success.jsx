import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Success = () => {
  return (
    <div>
      <div className="h-screen bg-blue-500 text-white flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-5 rounded-lg bg-[#191919] px-12 py-24 mt-12">
          <IoIosCheckmarkCircle className="text-4xl" />
          <div className="flex flex-col items-center justify-center font-bold text-2xl p-5">
            <div className="">Registered</div>
            <div className="">Successfully</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
