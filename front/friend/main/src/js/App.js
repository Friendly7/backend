import logo from '../img/logo.png';
import '../css/App.css';
import Login from './login.js';
import { Routes, Route, BrowserRouter } from "react-router-dom";

var image_size = 150;

const Menu_Line=()=>{
  return(
    <div className='Menu_Line'>
      <hr></hr>
    </div>
  )
}

const App=()=>{
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       
        {/* <LogIn /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
