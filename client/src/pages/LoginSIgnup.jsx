import React from 'react'
import './css/login.css'
export const LoginSIgnup = () => {
  return (
    <div className='login-signup'>
        <div className="login-container">
<h1>Sign Up</h1>
<div className="fields">
    <input type='text' placeholder='Your Name'/>
    <input type='email' placeholder='Email Adress'/>
    <input type='password' placeholder='Password'/>

</div>
<button>Continue</button>

<p className='login'>Already Have An Account?<span>Login</span></p>
<div className="agree">
<input type='checkbox' name='' id=''/>
<p>By Continue I agree to terms of use & privacy policy</p>

</div>

        </div>



    </div>
  )
}
