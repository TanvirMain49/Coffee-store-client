import React from "react";
import logo from "../assets/more/logo1.png";
import subBannerImg from '../assets/more/13.jpg'
import img from '../assets/more/24.jpg'
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      style={{
                backgroundImage:`url(${subBannerImg})`,
                backgroundSize:'cover',
                backgroundPosition:'center'
            }}
    className="bg-[#F8F5F0] pt-10 mt-20">
      <div className="container px-20">
        {/* Flex container */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-4">
            <div className="flex flex-col items-start space-x-2">
              <img
                src={logo} // Replace with your logo URL
                alt="Logo"
                className="w-20 h-20"
              />
              <h2 className="text-4xl font-semibold text-[#3D2929]">Espresso Emporium</h2>
            </div>
            <p className="text-base pr-20 font-raleway">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 text-3xl">
              <FaFacebook></FaFacebook>
              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
              <FaYoutube></FaYoutube>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 text-base text-[#3D2929] mt-8 font-raleway">

              <p className="text-4xl font-extrabold my-6 font-rancho">Get in Touch</p>

              <div className="flex gap-2 items-center">
                <FaPhone></FaPhone>
                +88 01533 333 333
              </div>

              <div className="flex gap-2 items-center">
                <MdEmail></MdEmail>
                info@gmail.com
              </div>

              <div className="flex gap-2 items-center">
              <FaLocationDot />
              72, Wall street, King Road, Dhaka
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 space-y-6 font-raleway">
            <h3 className="text-xl font-semibold">Connect with Us</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D2929]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D2929]"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D2929]"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="px-5 py-2 bg-transparent text-[#3D2929] rounded-full hover:bg-[#3D2929] hover:text-white border-2 border-[#3D2929] transition duration-300 font-bold text-xl font-rancho"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div 
      style={{
        backgroundImage:`url(${img})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
    }}
      className="bg-black text-white text-center mt-10 border-t border-gray-300 py-6 text-sm font-raleway">
        <p>Copyright © Espresso Emporium | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
