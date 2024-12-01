import React, { useContext } from "react";
import bgImg from "../assets/more/15.jpg";
import logoImg from "../assets/more/logo1.png";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOut = () =>{
    userSignOut()
    .then(res =>{
      // console.log('logged out')
    })
    .catch(error =>{
      // console.log(error.code);
    })
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex justify-between items-center h-28 w-full px-16"
    >
      <div className="flex items-center">
        <img src={logoImg} alt="" className="w-24 h-24" />
        <h2 className="text-4xl font-bold text-white">Espresso Emporium</h2>
      </div>

      <div className="flex items-center text-white fon-bold text-xl gap-4 mr-44">
        <Link
          to="/"
          className="btn font-bold border-[#331A15] bg-[#E3B577] rounded-lg text-2xl"
        >
          Home
        </Link>
        <Link
          to="/addCoffee"
          className="btn font-bold border-[#331A15] bg-[#E3B577] rounded-lg text-2xl"
        >
          Add Coffee
        </Link>
        <Link
          to="/users"
          className="btn font-bold border-[#331A15] bg-[#E3B577] rounded-lg text-2xl"
        >
          Users
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <>
          <FaUserCircle className="text-5xl text-white" />
            <Link
              onClick={handleSignOut}
              to="/coffee/signIn"
              className="btn font-bold border-[#331A15] bg-[#E3B577] rounded-lg text-2xl my-5"
            >
              Log out
            </Link>
          </>
        ) : (
          <>
            <FaUserCircle className="text-5xl text-white" />
            <Link
              to="/coffee/signIn"
              className="btn font-bold border-[#331A15] bg-[#E3B577] rounded-lg text-2xl my-5"
            >
              Sing In
            </Link>
            <Link
              to="/coffee/logIn"
              className="btn font-bold border-[#331A15] bg-[#E3B577] rounded-lg text-2xl my-5"
            >
              Log In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
