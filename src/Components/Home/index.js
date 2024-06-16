import './index.css'

import splash1 from './../../Images/Splash1.jpg'
import { useNavigate } from 'react-router-dom';

function HomeComponent(){
   const navigate = useNavigate()

   function sayHi() {
      navigate('/web')
    }
    

    setTimeout(sayHi, 4000);

    return(
       <div className='card'>
          <img src={splash1} className='splash-img'/>
       </div> 
      
    )
}

export default HomeComponent