import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import My_Page_Header from '../components/My_Page_Header.js';
import My_Page_Leftnav from '../components/My_Page_Leftnav.js';
import My_Page_schedule_center from '../components/My_Page_schedule_center.js';
import Line from '../components/Line.js';

function My_Page_schedule() {
    return (
        <body>
        <My_Page_Header />
        <My_Page_Leftnav />
        <Line />
        <My_Page_schedule_center />
        </body>
    );
}

export default My_Page_schedule;