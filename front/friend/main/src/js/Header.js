const Header=()=>{
    return (
      <div className="Header">
        <div className="Image">
          <img src={logo} alt="no image" width={image_size} height={image_size}></img>
        </div>
        <div className="User">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter> 
        </div>
        <div className="Menu">
          <a href={Login} className="menu">서비스 소개</a>
          <a href="pro_consultation" className="menu">전문 상담</a>
          <a href="npro_consultation" className="menu">비전문 상담</a>
          <a href="friend_consultation" className="menu">친구 상담</a>
          <a href="mentoring" className="menu">멘토링</a>
          <a href="community" className="menu">커뮤니티</a>
        </div>
      </div>
      )
  }