

import loginImg from './../../Images/loginImg.jpg'
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';

import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

import TextField from '@mui/material/TextField';


//            <TextField id="outlined-basic" label="Outlined" variant="outlined" /> <br/>


import './index.css'

function LoginCompont() {
    return (
        <div className="name">

            <div className='login-card'>
                <h1 className="login-head">Login</h1>
                <p>Login to access your account</p>
                <input type="mail" placeholder="Email" className="input-El" /> <br />
                <input type='password' placeholder="Password" className="input-El" /> <br />
                <div className="forgot-card">
                    <Checkbox className="che">Rember me</Checkbox>
                    <p className="forgot-text"><Link to='/forgot'>Forgot Password</Link></p>
                </div>
                <button type='button' className="login-btn">Login</button>
                <p className='not-account'>Don't have an account? <span className='sign-word'><Link to='/signup'>Sign up</Link></span></p>
                
               {/* { <p className='with'>Or login with</p>} */}

                <hr />
                <span className='ax'>Or login with</span>


                <div className='icons-card'>
                    <div className='facebook-card'><FaFacebook className='facebook-size' />  </div>
                    <div className='facebook-card'><FcGoogle className='facebook-size' />  </div>
                    <div className='facebook-card'><FaApple className='facebook-size' />  </div>
                </div>



            </div>
            <div>
                <img src={loginImg} className='log-img' />
            </div>

        </div>
    )
}

export default LoginCompont;