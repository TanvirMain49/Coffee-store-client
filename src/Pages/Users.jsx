import React, { useContext, useState } from "react";
import { FaPencilAlt, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const{userDelete} = useContext(AuthContext);

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
        fetch(`http://localhost:5000/users/${id}`,{
          method: 'DELETE'
        }).then(res => res.json())
        .then(data =>{
          if(data.deletedCount){
            userDelete()
            .then(res =>{
              // console.log('deleted ');
            })
            .catch(error =>{
              // console.log(error.code);
            })
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            const remainingUser = users.filter(user => user._id !== id)
            setUsers(remainingUser);
          }
        })
        
      }
    });
  };

  return (
    <div className="overflow-x-auto w-6/12 mx-auto my-16">
      <table className="table-auto w-full text-sm text-left text-gray-700 bg-[#F4F3F0]">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="px-4 py-2 text-xl">Name</th>
            <th className="px-4 py-2 text-xl">Email</th>
            <th className="px-4 py-2 text-xl">Created At</th>
            <th className="px-4 py-2 text-xl">Last Log-In</th>
            <th className="px-4 py-2 text-xl">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-300 px-4 py-2 text-xl">
                {user.name}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-xl">
                {user.email}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-xl">
                {user.userCreateTime}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-xl">
                {user.lastLogIn}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex gap-5">
                <button className="btn border-2 font-extrabold bg-[#D2B48C] text-[#331A15] border-[#331A15] py-1 px-3 rounded-md  hover:bg-yellow-800 font-rancho">
                  <FaPencilAlt />
                </button>
                <button
                  onClick={() => {
                    handleDelete(user._id);
                  }}
                  className="btn border-2 font-extrabold bg-[#D2B48C] text-[#331A15] border-[#331A15] py-1 px-3 rounded-md  hover:bg-yellow-800 font-rancho"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
