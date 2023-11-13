import React, { useState } from 'react'
import './style.css'

const SignUp = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const handleInputChange = (event) => {
    const value = event.target.value
    setInputValue(value);
    setIsValid(true); // Reset the validity check on each change
  };

  const handleSubmit = () => {
    if (inputValue.includes('@') && inputValue.includes('.')) {
      const newWindow = window.open('https://app.loch.one/welcome', '_blank');
      newWindow.opener = null; // Ensures no access to the parent window
    } else {
      setIsValid(false);
      setInputValue('');
    }
  };
  return (
    <div className='signup-container'>
      <div className="sign_up">
        <div className="sign_up_input_btn">

        <h1>Sign up for exclusive access.</h1>
        <div className="sign_up_input">
            <input 
            type="text" 
            placeholder='Your email address'
            value={inputValue}
            onChange={handleInputChange}
            />
             {!isValid && <p>Please enter a valid email</p>}
        </div>
        <button onClick={handleSubmit} className='primary_btn signup_btn'>
        Get started
        </button>
        </div>
        <p>You’ll receive an email with an invite link to join.</p>
      </div>
    </div>
  )
}

export default SignUp
