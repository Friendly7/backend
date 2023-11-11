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


function My_Page_main() {
    return (
        <body>
        <My_Page_Header />
        <My_Page_Leftnav />
        <Line />
        <My_Page_center />
        </body>
    );
}

export default My_Page_main;