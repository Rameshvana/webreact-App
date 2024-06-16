import { Routes,BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import loginImg from './Images/loginImg.jpg'
import LoginCompont from './Components/Login';
import SignUpCompont from './Components/Singnup';
import ForgotCompont from './Components/Forgot';
import ResetCompont from './Components/Reset';
import VeriyComponent from './Components/Verify';
import HomeComponent from './Components/Home';
import WebComponent from './Components/Web';
import CongratsComponent from './Components/Congrats';

function App() {
  return (
    <div className="Asp">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent></HomeComponent>} />
          <Route path='/login' element={<LoginCompont></LoginCompont>} />
          <Route path='/signup' element={<SignUpCompont></SignUpCompont>} />
          <Route path='/forgot' element={<ForgotCompont></ForgotCompont>} />
          <Route path='/reset' element={<ResetCompont></ResetCompont>} />
          <Route path='/verify' element={<VeriyComponent></VeriyComponent>} />
          <Route path='/web' element={<WebComponent></WebComponent>} />
          <Route path='/congrats' element={<CongratsComponent></CongratsComponent>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
