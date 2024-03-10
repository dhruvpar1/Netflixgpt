import React from "react";
import logo from "../utils/icon/Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser,removeUser } from '../utils/userSlice'
import { useEffect } from 'react'
import {onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import {USER_AVTAR} from '../utils/const'
// import {  } from '../utils/firebase'

const Header = () => {
  const dispatch=useDispatch();

  const navigate=useNavigate();
  const profile=useSelector((store)=>store.user )
  const handlesignOut=()=>{

   
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate('/error')
    });
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user)
        const {uid,email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName , photoURL:photoURL}))
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")

      }
    });

    return()=>unsubscribe();
  },[] )
  return (
    <div className="flex w-screen bg-gradient-to-b from-grey-700 z-30 absolute justify-between align-middle p-5">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        className="h-20"
        alt="Failed to load icon"
      />
{profile && (<div className=" flex flex-row items-center justify-center">
<img
        src={profile?.photoURL}
        className="h-10 m-2"
        alt="Failed to load icon"
      />
      <div  onClick={handlesignOut} className="flex align-middle cursor-pointer ">
        <h3 className="text-red-600 font-bold">SignOut</h3>
      </div>
      </div>
)}
    </div>
  );
};

export default Header;
