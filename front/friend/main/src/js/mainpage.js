import Header from './Header.js';
import Body_Top from './Body_Top.js'
import { Routes, Route, BrowserRouter } from "react-router-dom";

const MainPage=()=>{
    return (
      <div className="App">
        <Header></Header>
        <Body_Top></Body_Top>
      </div>
    );
  }
  
  export default MainPage;