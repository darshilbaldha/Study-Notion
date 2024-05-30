import React from 'react'
import Template from '../components/core/Auth/Template'
import loginimg from '../assets/Images/login.png'

const Login = () => {
  return (
    <div className='w-11/12 max-w-maxContent mx-auto bg-richblack-900'>
    <Template
    title="Welcome Back"
    des1="Build skills for today, tomorrow, and beyond."
    des2="Education to future-proof your career"
    formtype="login"
    image={loginimg}
    ></Template>
    </div>
  )
}

export default Login