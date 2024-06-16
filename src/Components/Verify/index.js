import './index.css'

import verifyImg from './../../Images/verifyImg.jpg'
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';

import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { LiaLessThanSolid } from "react-icons/lia";

import TextField from '@mui/material/TextField';

function VeriyComponent(){
    return (
        <div className="forgot-section">

            <div className='login-card'>

             <p className='back'><LiaLessThanSolid className='back-icon'/> Back to login</p>   
            <h1 className="login-head">Verify Code</h1>
            <p className='para'>An authentication code has been sent to your email.</p>
            <input type="password" placeholder="Enter Code" className="forgot-email"/> <br/>
            <p className='not-account v'>Don't recive a code?<span className='sign-word'>Resend</span></p>



            <button type='button' className="forgot-btn">Verify</button>

    


            
            </div>
            <div>
                <img src={verifyImg} className='forgot-img'/>
            </div>

        </div>
    )
}

export default VeriyComponent;