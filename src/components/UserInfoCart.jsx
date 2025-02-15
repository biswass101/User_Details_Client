import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserInfoCart = ({_id, first_name, last_name, username, email, password }) => {
  const navigate = useNavigate()
  const handDeleteUser = () => {
    axios(`http://localhost:5000/user/delete-user/${_id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if(res.data.success) {
          toast(res.data.message)
          localStorage.removeItem('userToken')
          location.reload()
        } else {
          toast(res.data.message)
        }
      })
      .catch(err => toast(err.message)) 
  };
  return (
    <div className="bg-white p-3 rounded-xl flex flex-col gap-2">
      <div className="bg-green-500 p-3 rounded-xl text-white font-semibold text-sm">
        <p>{username}</p>
        <p>{first_name + " " + last_name}</p>
      </div>
      <div className="bg-red-500 p-3 rounded-xl text-white font-semibold text-sm">
        <p>{email}</p>
        <p>{password.slice(0, 5)}</p>
      </div>
      <div className="flex gap-2 justify-center items-center bg-slate-200 p-1 rounded-xl">
        <DeleteIcon className="" />
        <Button onClick={handDeleteUser}>Delete User</Button>
      </div>
    </div>
  );
};

export default UserInfoCart;
