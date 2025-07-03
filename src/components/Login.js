import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,SetIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    SetIsSignInForm(!isSignInForm);
  };

  return (
    <div>
        <Header/> 
        <div className='absolute'>
          <img 
      src='https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg'
      alt='bg-image'/>
        </div>
      
      <form className="absolute bg-black bg-opacity-80 text-white p-12 w-3/12 left-0 right-0 mx-auto my-40 rounded-md shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-center">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm ? <input
          type="text"
          placeholder="User name"
          className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
        /> : ''}

        <input
          type="text"
          placeholder="User name or Email address"
          className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
        /> 

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
        />

        {!isSignInForm ? <input
          type="password"
          placeholder="Re-enter password"
          className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
        /> : ''}

        <button className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"} 
        </button>

        {isSignInForm ? <div>
          <h1 className='text-1xl mx-44'>OR</h1>
          <br></br>

        <button className="w-full bg-gray-600 hover:bg-gray-800 text-white py-3 rounded font-semibold">
          Use a Sign in code
        </button>
        </div> : ''}

        

        <div className='flex text-white mt'>
          <p>{isSignInForm ? "New to Netflix?" : "Already registered ? "}</p>
          <p className='font-bold cursor-pointer hover:underline '
          onClick={toggleSignInForm}>
            {isSignInForm ? "Sign Up Now" : "Sign In now"}  
            </p>
        
          

        </div>

        {isSignInForm ? <h1 className='underline cursor-pointer'>Forgot Password</h1> : ''}
        
        
      </form>


    </div>
  )
}

export default Login