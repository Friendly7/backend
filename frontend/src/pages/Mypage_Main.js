import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Switch,
    Router,
} from "react-router-dom";
import { Link } from 'react-router-dom';

import My_Page_main from "./My_Page_main.js";
import My_Page_connected from "./My_Page_connected.js";
import My_Page_connecting from "./My_Page_connecting.js";
import My_Page_schedule from "./My_Page_schedule.js";

function Mypage_Main() {
    return (
        <body>
        <Routes>
            <Route path="/" element= {<My_Page_main />} />
            <Route path="My_Page_connected" element={<My_Page_connected />} />
            <Route path="My_Page_connecting" element={<My_Page_connecting />} />
            <Route path="My_Page_schedule" element={<My_Page_schedule />} />
        </Routes>
        </body>
    );
}

export default Mypage_Main;