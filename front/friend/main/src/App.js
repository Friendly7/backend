import logo from './img/logo.png';
import './App.css';
var image_size = 150;

const Header=()=>{
  return (
    <div className="Header">
    <img src={logo} alt="no image" width={image_size} height={image_size}></img>
    <a href="service" className="menu">서비스 소개</a>
    <a href="pro_consultation" className="menu">전문 상담</a>
    <a href="npro_consultation" className="menu">비전문 상담</a>
    <a href="friend_consultation" className="menu">친구 상담</a>
    <a href="mentoring" className="menu">멘토링</a>
    <a href="community" className="menu">커뮤니티</a>
    </div>
    )
}

const Menu_Line=()=>{
  return(
    <div className='Menu_Line'>
      <hr></hr>
    </div>
  )
}

const Body_Top=()=>{
  return(
    <div className='Body_Top_Wrap'>
      <div className='Body_Top_Box'><br/><br/><span style={{color: '#7E78C3', fontWeight: 'bold'}}>동네친구</span>
      <span style={{color: '#536F5E'}}>에게 이야기 하듯</span> <br/><br/>
      <span style={{color: '#536F5E'}}>부담 없이 여러분의 고민 들어 드립니다</span> <br/><br/>
      <span style={{color: '#7E78C3', fontWeight: 'bold'}}>친구 상담</span>
      <span style={{color: '#536F5E'}}>서비스 사용하기</span>
     </div>
    </div>
  )
}

const Body_Bottom=()=>{
  return(
    <div className='Body_Bottom_Wrap'>
      <div className='Body_Bottom_Box'>

      </div>
    </div>
  )
}

const App=()=>{
  return (
    <div className="App">
      <Header></Header>
      <Menu_Line></Menu_Line>
      <Body_Top></Body_Top>
    </div>
  );
}

export default App;
