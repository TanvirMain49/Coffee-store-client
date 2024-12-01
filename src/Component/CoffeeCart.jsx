import React from "react";
import { FaPencilAlt, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCart = ({ coffee, coffeeCarts, setCoffeeCarts }) => {
  const { _id, name, chef, supplier, taste, category, details, photoURL } =
    coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffeeCarts.filter((cof) => cof._id !== id);
              setCoffeeCarts(remaining);
              
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-[#F5F4F1] p-4">
      <figure>
        <img src={photoURL} alt={name} className="w-52 h-52 py-5" />
      </figure>
      <div className="flex justify-between items-center gap-6 ">
        <div className="text-sm space-y-3">
          <p className="font-semibold">
            Name: <span className="text-gray-800 font-normal">{name}</span>
          </p>
          <p className="font-semibold">
            Chef: <span className="text-gray-800 font-normal">{chef}</span>
          </p>
          <p className="font-semibold">
            Supplier:{" "}
            <span className="text-gray-800 font-normal">{supplier}</span>
          </p>
        </div>
        <div className="join join-vertical space-y-2 pr-2">
          <NavLink 
          to={`coffee/${_id}`}
          className="btn w-14 bg-[#D2B48C]">
            <FaRegEye />
          </NavLink>
          <NavLink
            to={`/updatedCoffee/${_id}`}
            className="btn w-14 bg-black text-white"
          >
            <FaPencilAlt />
          </NavLink>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn w-14 bg-red-500 text-white"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCart;
