import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
    const{createUser, setUser} = useContext(AuthContext);

    const handleCreateUser = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(res=>{
            setUser(res.user);
            // console.log(res.user, res?.user?.metadata?.creationTime);
            const userCreateTime = res?.user?.metadata?.creationTime
            const newUser = {name, email, userCreateTime}
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })

        })
        .catch(error=>{
            // console.log(error.message);
        })
    }


  return (
    <div className="card bg-[#F4F3F0] w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8">
      <form onSubmit={handleCreateUser} className="card-body font-raleway">
        <h1 className="text-2xl text-center font-bold">SingIn</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
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
        <div className="form-control mt-6">
          <button className="btn border-2 text-2xl font-extrabold bg-[#D2B48C] text-[#331A15] border-[#331A15] py-2 px-4 rounded-md  hover:bg-yellow-800 font-rancho">
            Signin
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
