import React  from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter,RouterProvider, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice'
import { useEffect } from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../utils/firebase'

const Body = () => {
const dispatch=useDispatch();
// const Navigate=useNavigate();
   const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
   {
      path:'/browse',
      element:<Browse/>
    },
    {
       path:'/login',
       element:<Login/>
     }
  ])
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email, displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        
      } else {
        dispatch(removeUser());
        
      }
    });
  },[])
  return (
   <RouterProvider router={appRouter}/>
    )
}

export default Body