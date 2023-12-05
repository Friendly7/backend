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
import FriendChat from "./pages/FriendChat";
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
import ChatMain from "./pages/ChatMain"
import ManagementChat from "./pages/ManagementChat";
import ManagementUserList from "./pages/ManagementUserList";
import ManagementConnect from "./pages/ManagementConnect";
import ManagementQnA from "./pages/ManagementQnA";
import ManagementChatDetail from "./pages/ManagementChatDetail";
import ManagementUserListDetail from "./pages/ManagementUserListDetail";
import ManagementConnectDetail from "./pages/ManagementConnectDetail";
import ManagementQnADetail from "./pages/ManagementQnADetail";
import ManagementMatch from "./pages/ManagementMatch";
import ManagerMain from "./pages/ManagerMain"

import MentoPastMentiList from "./pages/MentoPastMentiList";
import MentoNowMentiList from "./pages/MentoNowMentiList";
import MentoCalendar from "./pages/MentoCalendar";
import MentoCertification from "./pages/MentoCertification";

import MentoHeader from "./components/layouts/MentoHeader";
import MentoMypage from "./pages/MentoMypage";
import MentoMain from "./pages/MentoMain"

import Mypage_Main from "./pages/Mypage_Main";
import My_Page_main from './pages/My_Page_main';
import My_Page_connected from './pages/My_Page_connected';
import My_Page_connecting from './pages/My_Page_connecting';
import My_Page_connecting_center_detail from './pages/My_Page_connecting_center_detail';
import My_Page_schedule from './pages/My_Page_schedule';
import My_Page_points from './pages/My_Page_points';
import My_Page_pointsplus from './pages/My_Page_pointsplus';
import My_Page_review from './pages/My_Page_review';
import Mentor_mypage_Main from "./pages/Mentor_mypage_Main";
import Mentor_Page_main from "./pages/Mentor_Page_main";
import Mentor_mypage_connecting from "./pages/Mentor_mypage_connecting";
import Payment from "./pages/Payment";
import My_Page_region from "./pages/My_Page_region";

import CommunityCategory from "./pages/CommunityCategory";
import Community_free from "./pages/Community_free";
import Community_location from "./pages/Community_location";
import Community_detail from "./pages/Community_detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
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
        <Route path="ChatMain" element={<ChatMain />} />
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
        <Route path="/ManagementMatchDetail/:request_id" element={<ManagementMatchDetail />} />
        <Route path="MentorForm" element={<MentorForm />} />

        <Route path="/ManagementChat" element={<ManagementChat />} />
        <Route path="/ManagementUserList" element={<ManagementUserList />} />
        <Route path="/ManagementConnect" element={<ManagementConnect />} />
        <Route path="/ManagementQnA" element={<ManagementQnA />} />
        <Route path="/ManagementChatDetail/:id" element={<ManagementChatDetail />} />
        <Route path="/ManagementUserListDetail/:No" element={<ManagementUserListDetail />} />
        <Route path="/ManagementConnectDetail/:No" element={<ManagementConnectDetail />} />
        <Route path="/ManagementQnADetail/:State" element={<ManagementQnADetail />} />
        <Route path="/ManagerMain" element={ <ManagerMain /> } />

        <Route path="/MentoMain" element={<MentoMain />} />
        <Route path="/MentoMypage" element={ <MentoMypage /> } />
        <Route path="/MentoPastMentiList" element={ <MentoPastMentiList /> } />
        <Route path="/MentoNowMentiList" element={ <MentoNowMentiList /> } />
        <Route path="/MentoCalendar" element={ <MentoCalendar /> } />
        <Route path="/MentoCertification" element={ <MentoCertification /> } />

        <Route path="Mypage_Main" element={<Mypage_Main />} />
        <Route path="My_Page_main" element={<My_Page_main />} />
        <Route path="My_Page_connected" element={<My_Page_connected />} />
        <Route exact path="My_Page_connecting" element={<My_Page_connecting />} />
        <Route path="My_Page_schedule" element={<My_Page_schedule />} />
        <Route path="My_Page_points" element={<My_Page_points />} />
        <Route path="My_Page_pointsplus" element={<My_Page_pointsplus />} />
        <Route path="My_Page_review/:mentorId" element={<My_Page_review />} />
        {/*<Route path="Chatting_Main" element={<Chatting_Main />} />*/}
        <Route path="/detail/:name/:id" element={<My_Page_connecting_center_detail />} />
        <Route path="/Mentor_mypage_Main" element={<Mentor_mypage_Main />} />
        <Route path="/Mentor_Page_main" element={<Mentor_Page_main />} />
        <Route path="/Mentor_mypage_connecting" element={<Mentor_mypage_connecting />} />
        <Route path="/Payment/:inputPrice" element={<Payment />} />
        <Route path="/My_Page_region" element={<My_Page_region />} />
        <Route path="CommunityCategory" element={<CommunityCategory />} />
        <Route path="Community_free" element={<Community_free />} />
        <Route path="Community_location" element={<Community_location />} />
        <Route path="/Community_detail/:id" element={<Community_detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;