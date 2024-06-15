
import './LoginSignup.css';
import email_icon from '../Assets/email1.png';
import password_icon from '../Assets/password1.png';
import user_icon from '../Assets/user1.png';
import { useState } from 'react';
import view_icon from '../Assets/view.png';
import hide_icon from '../Assets/hide.png';


const LoginSignup =() => {
    const [isPassVisible, setIsPassVisible] = useState(true);
    const changeVisibility = () =>{
        setIsPassVisible(!isPassVisible);
    }
    const [action, setAction] = useState("Sign Up");
    return(
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login"? <div></div>: <div className="input">
                    <img src={user_icon} alt="user" style={{width: '27px', height : '25px', marginLeft:'30px'}}/>
                    <input type="text" placeholder="Name"/>
                </div>}
                
                <div className="input">
                    <img src={email_icon} alt="email" style={{width: '35px', height : '35px'}}/>
                    <input type="email" placeholder="Email Id"/>
                </div>

                <div className="input">
                    <img src={password_icon} alt="password" style={{width: '35px', height : '35px'}}/>
                    <input type={isPassVisible? "text":"password"} placeholder="Password"/>
                    <img src={isPassVisible? view_icon:hide_icon} alt="eye" style={{width: '25px', height: '27px', opacity: '0.6'}} onClick={changeVisibility}/>
                </div>
                {action=== "Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
                
                <div className="submit-container">
                    <div className={action==="Login"?"submit grey": "submit"} onClick={ ()=> setAction("Sign Up")}>Sign Up</div>
                    <div className={action === "Sign Up"?"submit grey":"submit"} onClick={ () => setAction("Login")}>Login</div>
                </div>
            </div>
        </div>

    );
}

export default LoginSignup;
