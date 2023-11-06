import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/FirstPage";
import Login from "./pages/LogIn";
import Explanation from "./pages/Explan";
import JoinMenti from "./pages/JoinMenti";
import JoinMento from "./pages/JoinMento";
import Counsel from "./pages/Counsel";
import Location from "./pages/Location";
import ErrorPage from "./pages/ErrorPage";
import CashConversion from "./pages/CashConversion";
import RatingAndReview from "./pages/RatingAndReview";
import ReviewList from "./pages/ReviewList";
import ReviewListLogin from "./pages/ReviewListLogin";
import ChatRoom from "./pages/ChatRoom";
import ChatRoomList from "./pages/ChatRoomList";
import Chat from "./pages/Chat";
import ManagerHeader from "./components/layouts/ManagerHeader";
import ManagerProfile from "./pages/ManagerProfile";
import ManagerMain from "./pages/ManagerMain";
import styled from 'styled-components'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="explanation" element={<Explanation />} />
        <Route path="JoinMenti" element={<JoinMenti />} />
        <Route path="JoinMento" element={<JoinMento />} />
        <Route path="Counsel" element={<Counsel />} />
        <Route path="Location" element={<Location />} />
        <Route path="CashConversion" element={<CashConversion />} />
        <Route path="ErrorPage" element={<ErrorPage />} />
        <Route path="RatingAndReview" element={<RatingAndReview />} />
        <Route path="ReviewListLogin" element={<ReviewListLogin />} />
        <Route path="ReviewList" element={<ReviewList />} />
        <Route path="ChatRoom" element={<ChatRoom />} />
        <Route path="ChatRoomList" element={<ChatRoomList />} />
        <Route path="Chat" element={<Chat />} />
      </Routes>
      <ScreenWrapper>
        <ManagerMain />
      </ScreenWrapper>
    </BrowserRouter>

  );
}

export default App;

const ScreenWrapper = styled.div`
margin-left: 260px;
margin-right: 260px;
`;
const ProfileWrapper = styled.div`
  width: 380px;
  height: 800px;
  margin-top: 70px;
`;

const ViewWrapper = styled.div`
  display: flex;
  flex-direction: row;

  padding-top: 10px;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 1000px;

  padding-top: 100px;
`;