import React from 'react'

export const isEmailValid = (email,password) => {
 const emailValidation=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
 
if(!emailValidation){
    return "Email Id Is not Valid"
}


return null;

}

