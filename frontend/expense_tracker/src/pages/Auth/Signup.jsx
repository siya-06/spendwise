import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/authLayout'
import Input from '../../components/inputs/input'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'
import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector'

const Signup = () => {
  const [profilePic, setProfilePic] = useState(null)
  const [fullName,setFullName] = useState("")
  const [email, setEmail] =useState("")
  const [password,setPassword] = useState("")

  const [error,setError] =useState(null)

  const navigate= useNavigate()
  const handleSignUp= async (e) => {
   e.preventDefault();
   let profileImageURL =""

   if(!fullName){
    setError("Please enter your name ")
    return
   }
   if(!validateEmail(email)){
    setError("Please enter a valid email address ")
    return
   }
   if(!password){
    setError("Please enter your password")
    return
   }

   setError("")

   //signup api calls
  }
  return (
    <AuthLayout>
     <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex-col justify-center'>
      <h3 className="text-xl font-semibold text-black">Create an account</h3>
      
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>
        Join us today by entering your details below.
      </p>
      <form onSubmit={handleSignUp}>

        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
          value={fullName}
          onChange={({target}) => setFullName(target.value)}
          label="Full Name"
          placeholder="abc"
          type="text"
          />
          <Input
         value={email}
         onChange={({target}) => setEmail(target.value)}
         label="Email Address"
         placeholder="abc@ex.com"
         type="text"
         />

        <div className="col-span-2">
         <Input
         value={password}
         onChange={({target}) => setPassword(target.value)}
         label="Password"
         placeholder="Enter your password (min 8 characters)"
         type="password"
         />
        </div>
        </div>

        {error && <p className="text-red-500 text-xs pb-2.5"> {error}</p>}
        <button type="submit" className='btn-primary'>
          SIGN UP
        </button>
        <p className='text-[13px] text-slate-800 mt-3'>
          already have an account? {" "}
          <Link className="font-medium text-primary underline" to ="/Login">
          Login 
          </Link>
        </p>
      </form>

     </div>

    
    </AuthLayout>
  )
}

export default Signup
