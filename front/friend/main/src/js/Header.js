import logo from '../img/logo.png';
import { Routes, Route, BrowserRouter } from "react-router-dom";

var image_size = 150;

const Header=()=>{
    return (
      <div className="Header">
        <div className="Image">
          <img src={logo} alt="no image" width={image_size} height={image_size}></img>
        </div>
        <div className="User">
          
        </div>
        <div className="Menu">
          <a href="service">서비스 소개</a>
          <a href="pro_consultation">전문 상담</a>
          <a href="npro_consultation">비전문 상담</a>
          <a href="friend_consultation">친구 상담</a>
          <a href="mentoring">멘토링</a>
          <a href="community">커뮤니티</a>
        </div>
      </div>
      )
  }

  export default Header;