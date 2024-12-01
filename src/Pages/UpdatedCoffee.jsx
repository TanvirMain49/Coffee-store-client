import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatedCoffee = () => {
    const LoadCoffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photoURL } = LoadCoffee;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;
    
        const coffey = { name, chef, supplier, taste, category, details, photoURL };
    
        //send data to the backend
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "PUT",
          headers:{
            "content-type": "application/json"
          },
          body: JSON.stringify(coffey)
        })
        .then(res => res.json())
        .then(data => {
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'success',
              text: 'Updated coffee successfully',
              icon: 'success',
              confirmButtonText: 'ok'
            })
            // form.reset()
          }
        })
    
    
      };
    
      return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6 md:p-8">
          <div className="w-full max-w-3xl bg-[#F4F3F0] shadow-md rounded-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-black">
            Update Existing Coffee Details
            </h2>
            <p className="text-sm md:text-base text-center text-gray-600 mb-6 md:mb-8 px-4 md:px-8 font-raleway">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
            </p>
            <form
              onSubmit={handleUpdate}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 font-raleway text-black"
            >
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  defaultValue={name}
                  className="p-3 border rounded-md w-full"
                />
              </div>
              {/* Chef */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Chef</span>
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                  defaultValue={chef}
                  className="p-3 border rounded-md w-full"
                />
              </div>
              {/* Supplier */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee Supplier"
                  defaultValue={supplier}
                  className="p-3 border rounded-md w-full"
                />
              </div>
              {/* Taste */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Taste</span>
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee Taste"
                  defaultValue={taste}
                  className="p-3 border rounded-md w-full"
                />
              </div>
              {/* Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee Category"
                  defaultValue={category}
                  className="p-3 border rounded-md w-full"
                />
              </div>
              {/* Details */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  defaultValue={details}
                  className="p-3 border rounded-md w-full"
                />
              </div>
              {/* Photo */}
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Photo</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Enter photo URL"
                  defaultValue={photoURL}
                  className="p-3 border rounded-md w-full"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="col-span-1 md:col-span-2 border-2 text-2xl font-extrabold bg-[#D2B48C] text-[#331A15] border-[#331A15] py-2 px-4 rounded-md mt-4 mb-4 hover:bg-yellow-800 font-rancho"
              >
                Updated Coffee
              </button>
            </form>
          </div>
          <Link to='/' className="btn text-2xl text-black font-bold text-start my-8 bg-base-300 rounded-lg">Back to Home</Link>
        </div>
      );
};

export default UpdatedCoffee;