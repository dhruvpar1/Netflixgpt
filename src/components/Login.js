import React, { useState, useRef } from "react";
import Header from "./Header";
import { isEmailValid } from "../utils/Validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
// import {createBrowserRouter,RouterProvider, useNavigate} from 'react-router-dom'
import {createBrowserRouter,RouterProvider, useNavigate} from 'react-router-dom'

import { auth } from "../utils/firebase";
const Login = () => {
 
  const [isSignIn, setIsSignIn] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState();
  const Navigate=useNavigate();
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleSinginForm = () => {
    
    //validation
    setErrorMessage(isEmailValid(email.current.value, password.current.value));
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // Navigate("/browse")

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          Navigate("/browse")
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode+ errorMessage)
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="LoginContainer flex justify-center p-10 items-center h-screen rounded-e-3xl ">
        {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />     */}
        <div className="flex-col justify-start  w-3/12   bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 rounded-3xl centre flex-col  background ">
          <h1 className="text-left px-10 pt-8 text-zinc-100 text-3xl">
            {isSignIn ? "Login" : "SignUp"}
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="align-middle mb-20 p-10 justify-center"
          >
            <input
              type="text"
              className="
        my-2 w-full bg-slate-800 p-3 rounded-lg"
              ref={email}
              placeholder="Email Address"
            ></input>
            {!isSignIn && (
              <input
                type="text"
                className="
        my-2 w-full bg-slate-800 p-3 rounded-lg"
                placeholder="Name"
              ></input>
            )}
            <input
              type="password"
              ref={password}
              className="my-2  bg-slate-800 p-3 rounded-lg
         w-full"
              placeholder="Password"
            ></input>
            <p
              className="text-red-700 font-bold textlg
            "
            >
              {errorMessage}
            </p>
            <br />
            <button
              onClick={handleSinginForm}
              className="text-white my-2 w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
              {isSignIn ? "Login" : "Sign up"}
            </button>
            <p
              className=" text-gray-300 cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignIn
                ? "New to Netflix? Sign up now"
                : "Already Registerd Sign In"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
