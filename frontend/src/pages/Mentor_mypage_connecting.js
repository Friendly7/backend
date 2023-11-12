import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import My_Page_Header from '../components/My_Page_Header.js';
import My_Page_Leftnav from '../components/My_Page_Leftnav.js';
import My_Page_connecting_center from '../components/My_Page_connecting_center.js';
import Line from '../components/Line.js';
import Mentor_mypage_Leftnav from "./Mentor_mypage_Leftnav";
import Mentor_mypage_Main from "./Mentor_mypage_Main";
import Mentor_mypage_connecting_center from "../components/Mentor_mypage_connecting_center";

function Mentor_mypage_connecting() {
    return (
        <body>
        <My_Page_Header />
        <Mentor_mypage_Leftnav />
        <Line />
        <Mentor_mypage_connecting_center />
        </body>
    );
}

export default Mentor_mypage_connecting;