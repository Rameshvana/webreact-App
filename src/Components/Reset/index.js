import './index.css'

import resetImg from './../../Images/resetImg.jpg'
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';

import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { LiaLessThanSolid } from "react-icons/lia";

function ResetCompont(){
    return (
        <div className="forgot-section">

            <div className='login-card'>

             <p className='back'><LiaLessThanSolid className='back-icon'/> Back to login</p>   
            <h1 className="login-head">Set a Password</h1>
            <p className='para'>Your previous password has been reset. Please set a new password for your account</p>
            <input type="password" placeholder="Create Password" className="forgot-email"/> <br/>
            <input type="password" placeholder="Re-enter Password" className="forgot-email"/> <br/>


            <button type='button' className="forgot-btn">Set Password</button>

    


            
            </div>
            <div>
                <img src={resetImg} className='forgot-img'/>
            </div>

        </div>
    )
}

export default ResetCompont;