import React, { useState } from "react";
import Banner from "../Component/Banner";
import SubBanner from "../Component/SubBanner";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCart from "../Component/CoffeeCart";


const Home = () => {
  const LoadedCoffees = useLoaderData();
  console.log(LoadedCoffees);
  const [coffeeCarts, setCoffeeCarts] = useState(LoadedCoffees);
  return (
    <div>
      <Banner></Banner>
      <SubBanner></SubBanner>
      <div
        className="py-8 text-center"
      >
        <h2 className="font-raleway">--- Sip & Savor ---</h2>
        <h2 className="font-rancho text-4xl font-extrabold">
          Our Popular Products
        </h2>
        <Link
          to="/addCoffee"
          className="btn font-bold border-[#331A15] bg-[#E3B577] rounded-lg text-2xl my-5"
        >
          Add coffee
        </Link>
      </div>
      <div
        className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 font-raleway"
      >
        {coffeeCarts.map((coffee) => (
          <CoffeeCart
            key={coffee._id}
            coffee={coffee}
            coffeeCarts={coffeeCarts}
            setCoffeeCarts={setCoffeeCarts}
          ></CoffeeCart>
        ))}
      </div>
    </div>
  );
};

export default Home;
