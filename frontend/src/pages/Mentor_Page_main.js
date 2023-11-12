import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import My_Page_Header from '../components/My_Page_Header.js';
import My_Page_Leftnav from '../components/My_Page_Leftnav.js';
import Line from '../components/Line.js';
import My_Page_center from '../components/My_Page_center.js';
import Mentor_mypage_Main from "./Mentor_mypage_Main";
import Mentor_mypage_Leftnav from "./Mentor_mypage_Leftnav";


export default function Mentor_page_main() {
    return (
        <body>
        <My_Page_Header />
        <Mentor_mypage_Leftnav />
        <Line />
        <Mentor_mypage_Main />
        </body>
    );
}
