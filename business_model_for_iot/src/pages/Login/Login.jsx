import React from 'react'
import './Login.css'
import {useState} from 'react'

function Login() {

  const [signState, setSignState] = useState("Sign In");

  return (
    <div className='login'>
        <div className='login-form'>
          <h1>{signState}</h1>
          <form>
            {signState ==="Sign Up" ?<input type='text' placeholder='Your name'/>:
            <></>}
            
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <button>{signState}</button>
            <div className='form-help'>
              <div className='remember'>
                <input type='checkbox' />
                <label htmlFor=''>Remember me</label>
              </div>
              <p>Need Help?</p>
            </div>
            <div className="form-switch">
              {signState ==="Sign In" ?<p>Are you new user?
                <span onClick={()=>{setSignState("Sign Up")}}
                >Sign Up Now</span></p>
              :<p>Already have account? <span onClick={() =>{setSignState("Sign In")}}
              >Sign In Now</span></p>}              
            </div>
          </form>
        </div>
    </div>
  )
}

export default Login