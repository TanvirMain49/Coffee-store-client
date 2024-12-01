import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { logInUser, setUser } = useContext(AuthContext);
  const navigation = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((res) => {
        // console.log("Users: ", res.user);
        setUser(res.user);
        const lastLogIn = res.user.metadata?.lastSignInTime;
        // console.log("last Time log In: ", lastLogIn);
        const logInInfo = { email, lastLogIn };

        fetch(`http://localhost:5000/users/${email}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(logInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            navigation('/');
          });
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };
  return (
    <div className="card bg-[#F4F3F0] w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8">
      <form onSubmit={handleLogIn} className="card-body font-raleway">
        <h1 className="text-2xl text-center font-bold">log In!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
        <div className="form-control mt-6">
          <button className="btn border-2 text-2xl font-extrabold bg-[#D2B48C] text-[#331A15] border-[#331A15] py-2 px-4 rounded-md  hover:bg-yellow-800 font-rancho">
            Signin
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
