import './index.css'
import { useNavigate } from 'react-router-dom'

import splash2 from './../../Images/Splash2.jpg'

function WebComponent(){
   const navigate = useNavigate()

   function sayHi() {
      navigate('/signup')
    }
    

    setTimeout(sayHi, 4000);

    return(
       <div className='card'>
          <img src={splash2} className='splash-img'/>
       </div> 
      
    )
}

export default WebComponent