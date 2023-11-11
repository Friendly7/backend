import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import My_Page_Header from '../components/My_Page_Header.js';
import My_Page_Leftnav from '../components/My_Page_Leftnav.js';
import My_Page_review_center from '../components/My_Page_review_center.js';
import Line from '../components/Line.js';

function My_Page_review() {
    return (
        <body>
        <My_Page_Header />
        <My_Page_Leftnav />
        <Line />
        <My_Page_review_center />
        </body>
    );
}

export default My_Page_review;