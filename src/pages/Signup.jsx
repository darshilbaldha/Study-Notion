import React from 'react'
import Template from '../components/core/Auth/Template'
import signinimg from '../assets/Images/signup.png'

const Signup = ({setlogin}) => {
  return (
    <div className='w-11/12 max-w-maxContent mx-auto bg-richblack-900'>
    <Template
    title="Join the millions learning to code with StudyNotaion for free"
    des1="Build skills for today, tomorrow, and beyond."
    des2="Education to future-proof your career."
    formtype="signup"
    setlogin={setlogin}
    image={signinimg}
    ></Template></div>
  )
}

export default Signup