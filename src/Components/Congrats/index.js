import './index.css'

import congratsImg from './../../Images/congratsImg.jpg'
import { useNavigate } from 'react-router-dom';

function CongratsComponent(){

      return(
       <div className='card'>
          <img src={congratsImg} className='splash-img'/>
       </div> 
      
    )

   
}

export default CongratsComponent;