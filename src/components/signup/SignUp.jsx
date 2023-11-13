import React from 'react'
import './style.css'

const SignUp = () => {
  return (
    <div className='signup-container'>
      <div className="sign_up">
        <div className="sign_up_input_btn">

        <h1>Sign up for exclusive access.</h1>
        <div className="sign_up_input">
            <input type="text" placeholder='Your email address' />
        </div>
        <button className='primary_btn signup_btn'>
        Get started
        </button>
        </div>
        <p>You’ll receive an email with an invite link to join.</p>
      </div>
    </div>
  )
}

export default SignUp
