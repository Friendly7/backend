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
import Location from "./pages/Location";
import ErrorPage from "./pages/ErrorPage";
import CashConversion from "./pages/CashConversion";
import RatingAndReview from "./pages/RatingAndReview";
import ReviewList from "./pages/ReviewList";
import ReviewListLogin from "./pages/ReviewListLogin";
import ChatRoom from "./pages/ChatRoom";
import ChatRoomList from "./pages/ChatRoomList";
import Chat from "./pages/Chat";
import styled from 'styled-components'
import FriendChat from "./pages/friendChat";
import CreateChatRoomFriend from "./pages/CreateChatRoomFriend";
import MainPage from "./pages/MainPage"
import ProCounseling from "./pages/ProCounseling";
import Counsel from "./pages/Counsel";
import CounselForm from "./pages/CounselForm";
import CounselForm2 from "./pages/CounselForm2";
import MentorForm from "./pages/MentorForm";
import Mentoring from "./pages/Mentoring";
import MoveAdviceRequest from "./pages/MoveAdviceRequest";
import ManagementMatchDetail from "./pages/ManagementMatchDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="login" element={<Login />} />
        <Route path="explanation" element={<Explanation />} />
        <Route path="JoinMenti" element={<JoinMenti />} />
        <Route path="JoinMento" element={<JoinMento />} />
        <Route path="Location" element={<Location />} />
        <Route path="CashConversion" element={<CashConversion />} />
        <Route path="ErrorPage" element={<ErrorPage />} />
        <Route path="RatingAndReview" element={<RatingAndReview />} />
        <Route path="ReviewListLogin" element={<ReviewListLogin />} />
        <Route path="ReviewList" element={<ReviewList />} />
        <Route path="ChatRoom" element={<ChatRoom />} />
        <Route path="ChatRoomList" element={<ChatRoomList />} />
        <Route path="Chat" element={<Chat />} />
        <Route path="FriendChat" element={<FriendChat />} />
        <Route path="CreateChatRoomFriend" element={<CreateChatRoomFriend />} />
        <Route path="ProCounseling" element={<ProCounseling />} />
        <Route path="Counsel" element={<Counsel />} />
        <Route path="CounselForm" element={<CounselForm />} />
        <Route path="Mentoring" element={<Mentoring />} />
        <Route path="CounselForm2" element={<CounselForm2 />} />
        <Route path="MentorForm" element={<MentorForm />} />
        <Route path="ManagementMatchDetail/:request_id" element={<ManagementMatchDetail />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;