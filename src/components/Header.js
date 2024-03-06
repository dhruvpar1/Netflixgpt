import React from "react";
import logo from "../utils/icon/Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate=useNavigate();
  const handlesignOut=()=>{

   
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <div className="flex w-screen justify-between absolute align-middle p-10">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        className="h-20"
        alt="Failed to load icon"
      />
      <div  onClick={handlesignOut} className="flex align-middle cursor-pointer ">
        <h3 className="text-red-600 font-bold">SignOut</h3>
      </div>
      
    </div>
  );
};

export default Header;
