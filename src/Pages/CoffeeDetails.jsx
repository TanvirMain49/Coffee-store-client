import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const LoadCoffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photoURL } =
    LoadCoffee;
  return (
    <div>
        <NavLink to='/' className="btn bg-transparent hover:bg-[#3D2929] hover:text-white font-bold text-2xl absolute left-[17%] top-[20%]">Back to home</NavLink>
      <div className=" w-8/12 mx-auto flex flex-col md:flex-row items-center md:items-start bg-[#F8F5F0] p-6 rounded-lg shadow-md gap-10 mt-28 mb-20 py-20">
        {/* Coffee Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img src={photoURL} alt={name} className="rounded-lg max-w-full" />
        </div>

        {/* Coffee Details */}
        <div className="w-full md:w-2/3 ">
          <h3 className="font-bold text-[#3D2929] mb-4 text-3xl">Niceties</h3>
          <ul className="space-y-2 text-base font-raleway">
            <li>
              <span className="font-semibold text-[#3D2929]">Name: </span>
              {name}
            </li>
            <li>
              <span className="font-semibold text-[#3D2929]">Chef: </span>
              {chef}
            </li>
            <li>
              <span className="font-semibold text-[#3D2929]">Supplier: </span>
              {supplier}
            </li>
            <li>
              <span className="font-semibold text-[#3D2929]">Taste: </span>
              {taste}
            </li>
            <li>
              <span className="font-semibold text-[#3D2929]">Category: </span>
              {category}
            </li>
            <li>
              <span className="font-semibold text-[#3D2929]">Details: </span>
              {details}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
