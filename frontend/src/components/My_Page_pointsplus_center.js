import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import '../css/My_Page_center.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import My_Page_connected from "../pages/My_Page_connected";
import '../css/My_Page_pointsplus_center.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PaidIcon from '@mui/icons-material/Paid';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

function My_Page_pointsplus_center() {
    const data = [
        { point:'900 P', price:'1,000원' },
        { point:'1,900 P', price:'2,000원'  },
        { point:'5,500 P', price:'5,000원'  },
        { point:'11,000 P', price:'10,000원'  },
        { point:'55,000 P', price:'50,000원'  },
    ];
    const datatime = [
        { class: '상담', time: '9', date:'2023-11-15', point:'-50000' },
        { class: '상담', time: '10', date:'2023-10-20',point:'-50000' },
        { class: '멘토', time: '11', date:'2023-09-05',point:'-50000' },
        { class: '멘토', time: '12', date:'2023-11-03',point:'-50000' },
    ];
    const [inputPrice, setinputPrice] = useState('');
    const [selectedMonth, setSelectedMonth] = useState(0);

    const handleInputChange = (e) => {
        setinputPrice(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelectedMonth(parseInt(e.target.value, 10));
    };

    // 현재 날짜를 가져오는 함수
    const getCurrentDate = () => {
        const today = new Date();
        return today;
    };

    // n개월 전 날짜를 가져오는 함수
    const getPastMonthDate = (n) => {
        const today = new Date();
        const pastDate = new Date(today.getFullYear(), today.getMonth() - n, today.getDate());
        return pastDate;
    };

    // 선택된 달에 따라 데이터 필터링
    const filteredData = datatime.filter(item => {
        const itemDate = new Date(item.date);
        const targetDate = getPastMonthDate(selectedMonth);
        const itemPoint = item.point;

        return (itemDate >= targetDate && itemDate <= getCurrentDate());
    });
    return (
        <body>
        <div className="mypage_pointsplus">
            <span id='mypage_pointsplus_one'>포인트 충전</span>
            <hr id='pointshr_one'></hr>
            <table id="mypage_pointplus_table_one">
                <thead id="pointshead">
                <tr>
                    <th>포인트</th>
                    <th>가격</th>
                </tr>
                </thead>
                <tbody id="pointstbody">
                {data.map((item) => (
                    <tr>
                        <td>{item.point}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <input
                id="priceinput"
                type="text"
                value={inputPrice}
                onChange={handleInputChange}
                placeholder="충전할 금액을 입력해 주세요."
            ></input>
            <button id="mypage_pointsplus_two">결제하기</button>
            <div id="morelist">
                <label id="mypage_pointplus_label">조회 조건 선택 </label>
                <select value={selectedMonth} onChange={handleSelectChange} id="mypage_pointplus_select">
                    <option value={0}>현재 달</option>
                    <option value={1}>1개월 전</option>
                    <option value={3}>3개월 전</option>
                    <option value={3}>6개월 전</option>
                    <option value={3}>12개월 전</option>
                </select>
                <br />
                <br />
                <h2 id="mypage_pointsplus_three">포인트 충전/사용 내역</h2>
                <table id="mypage_pointplus_table_two">
                    <thead id="pointsplushead">
                    <tr>
                        <th>날짜</th>
                        <th>사용 포인트</th>
                    </tr>
                    </thead>
                    <tbody  id="pointsplustbody">
                    {filteredData.map(item => (
                        <tr key={item.date}>
                            <td>{item.date}</td>
                            <td>{item.point}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </body>
    );
}

export default My_Page_pointsplus_center;