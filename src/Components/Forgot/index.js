import forgotImg from './../../Images/forgotImg.jpg'
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';

import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { LiaLessThanSolid } from "react-icons/lia";

import TextField from '@mui/material/TextField';


import './index.css'

function ForgotCompont(){
    return (
        <div className="forgot-section">

            <div className='login-card'>

             <p className='back'><LiaLessThanSolid className='back-icon'/> Back to login</p>   
            <h1 className="login-head">Forgot your Password?</h1>
            <p className='para'>Don't worry, happens to all of us. Enter your email below to  recover your password</p>
            <input type="mail" placeholder="Email" className="forgot-email"/> <br/>


            <button type='button' className="forgot-btn">Submit</button>
            <p className='with f'>Or login with</p>
   

            <div className='icons-card'>
             <div className='facebook-card'><FaFacebook  className='facebook-size'/>  </div>
             <div className='facebook-card'><FcGoogle  className='facebook-size'/>  </div>
             <div className='facebook-card'><FaApple  className='facebook-size'/>  </div>
            </div>
    


            
            </div>
            <div>
                <img src={forgotImg} className='forgot-img'/>
            </div>

        </div>
    )
}

export default ForgotCompont