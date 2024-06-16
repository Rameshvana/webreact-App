import './index.css'

import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';

import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

import sinupImg from './../../Images/sinupImg.jpg'

function SignUpCompont(){
    return (
        <div className="signup-section">
          <div><img src={sinupImg} className='signup-img'/></div>

            <div className='signup-card'>
            <h1 className="login-head">Sign Up</h1>
            <p>Let's get you all set up you can access your personal account.</p>
            <div>
               <input placeholder='First Name' className='signup-input'/>
               <input placeholder='Lst Name' className='signup-input'/>
            </div>
            <div>
              <input type="mail" placeholder="Email" className='signup-input'/> 
              <input type="mail" placeholder="Phone Number" className='signup-input'/> 
            </div>

            <input type='password' placeholder="Password" className="password-input"/> <br/>
            <input type='password' placeholder="Confirm Password" className="password-input"/> <br/>
            <div className="forgot-card">
                <Checkbox className="che">I agree to all the <span className='sign-word'>Terms</span> and <span className='sign-word'> Privacy Policies</span></Checkbox>
                <p className="forgot-text"></p>
            </div>
            <button type='button' className="signup-btn a">Create account</button>
            
           <p className='not-account'>Already have an account? <span className='sign-word'> <Link to='/login'>Login </Link></span></p>
            <p className='with'>or Sign Up with</p>

            <div className='icons-card'>
             <div className='facebook-card'><FaFacebook  className='facebook-size'/>  </div>
             <div className='facebook-card'><FcGoogle  className='facebook-size'/>  </div>
             <div className='facebook-card'><FaApple  className='facebook-size'/>  </div>
            </div>
    


            </div>


        </div>
    )
}

export default SignUpCompont