import React from 'react'

export const isEmailValid = (email,password) => {
 const emailValidation=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
 const passwordValidation =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/.test(password)

if(!emailValidation){
    return "Email Id Is not Valid"
}
if(!passwordValidation){
    return "Password is not Valid"
}

return null;

}

