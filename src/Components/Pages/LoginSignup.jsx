import React from 'react'
import './CSS/LoginSignUp.css'

function LoginSignup() {
  return (
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email address' />
            <input type="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Already Login? <span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
  )
}

export default LoginSignup