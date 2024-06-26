import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { firebase, auth } from "./firebase";

const Register = () => {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    otp: "",
  });

  const [otpsent, setOtpsent] = useState(false);
  const [final, setFinal] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateOtp = async () => {
    try {
      const verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
      const num = formData.phone;

      const response = await axios.post("https://cybervie-backend.vercel.app/generate-otp", {
        email: formData.email,
        phone: formData.phone,
      });

      if (response.status === 200) {
        const result = await auth.signInWithPhoneNumber(`+91${num}`, verify);
        setFinal(result);
        toast.success("Firebase OTP Sent Successfully", toastOptions);
        setOtpsent(true);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message, toastOptions);
    }
  };

  const getLocation = async () => {
    try {
      const response = await axios.get(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=202cd10c262842ca9cd29537fbfcd6dd"
      );
      const data = response.data;
      return JSON.stringify(
        `${data.ip_address}, ${data.city}, ${data.region}, ${data.postal_code}, ${data.country}   ISP: ${data.connection.isp_name}, ${data.connection.organization_name}`
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const registerUser = async () => {
    if (!formData.otp || !final) return;
    try {
      const result = await final.confirm(formData.otp);
      if (result) {
        const loc = await getLocation();
        await axios.post("https://cybervie-backend.vercel.app/register", {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: loc,
        });

        await axios.post("https://cybervie-backend.vercel.app/api/email", formData);
        navigate("/success");
      }
    } catch (error) {
      console.error(error);
      toast.error("Wrong Code or Registration Failed", toastOptions);
    }
  };

  return (
    <div className="h-screen bg-[#0c0633] text-white flex flex-col items-center">
      <div className="flex flex-col items-center justify-center rounded-lg bg-white text-black px-12 py-4 mt-12">
        <img src="/assets/cybervielogo.gif" alt="logo" height={120} width={120} />
        <div className="font-bold text-2xl p-5">Register Here!</div>
        <div className="flex flex-col justify-center items-center gap-3 p-2">
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-1 ring-1 bg-transparent ring-orange-500 focus:ring-green-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-1 ring-1 bg-transparent ring-orange-500 focus:ring-green-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm">
                Phone Number:
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="1234567890"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-1 ring-1 bg-transparent ring-orange-500 focus:ring-green-500"
              />
            </div>
            {otpsent && (
              <input
                type="tel"
                name="otp"
                id="otp"
                placeholder="Enter otp here"
                required
                value={formData.otp}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-1 ring-1 bg-transparent ring-orange-500 focus:ring-green-500"
              />
            )}
            {!otpsent && <div id="recaptcha-container"></div>}
            <button
              className="border-none rounded-full bg-[#0c0633] text-white px-16 py-2 mt-3"
              onClick={otpsent ? registerUser : generateOtp}
            >
              {otpsent ? "Register" : "Send OTP"}
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
