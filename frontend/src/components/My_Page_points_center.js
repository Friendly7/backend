import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import '../css/My_Page_center.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import My_Page_connected from "../pages/My_Page_connected";
import '../css/My_Page_points_center.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PaidIcon from '@mui/icons-material/Paid';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { useNavigate } from 'react-router-dom';

function My_Page_points_center() {
    const navigate = useNavigate();
    const data = [
        { name:'정두비', have:13000, given:1000, future: 0, ing: 14000},
    ];
    const haveValue = data[0].have;
    const givenValue = data[0].given;
    const futureValue = data[0].future;
    const ingValue = data[0].ing;

    const gotomore = () =>{
        navigate('/My_Page_pointsplus');
    }

    const gotopluspoints = () =>{
        navigate('/My_Page_pointsplus');
    }
    return (
        <body>
        <div className="mypage_points">
            <span id='mypage_points_one'>포인트</span>
            <hr id='pointshr_one'></hr>
            <div className="mypage_points_conone">
                <AccountBalanceWalletIcon id='wallet'/>
                <span id="mypage_points_conone_spanone">보유중인 <span id="points_yellow">충전</span> 포인트는</span>
                <span id="mypage_points_conone_spantwo"> {0} P</span>
            </div>
            <div className="mypage_points_contwo">
                <FileDownloadIcon id='download' />
                <span id="mypage_points_contwo_spanone">보유중인 <span id="points_yellow">받은</span> 포인트는</span>
                <span id="mypage_points_contwo_spantwo">{0}  P</span>
            </div>
            <div className="mypage_points_conthree">
                <PaidIcon id='futpoint' />
                <span id="mypage_points_conthree_spanone">보유중인 <span id="points_yellow">이벤트</span> 포인트는</span>
                <span id="mypage_points_conthree_spantwo">{0}  P</span>
            </div>
            <div className="mypage_points_confour">
                <LocalParkingIcon id='ingpoint' />
                <span id="mypage_points_confour_spanone">보유중인 <span id="points_yellow">총</span> 포인트는</span>
                <span id="mypage_points_confour_spantwo">{0}  P</span>
            </div>
            <hr id="pointshr_two"></hr>
            <button className="points_more" onClick={gotomore}>
                <span id="points_more_span">상세 내역 보기 / 충전하기</span>
            </button>
        </div>
        </body>
    );
}

export default My_Page_points_center;