import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import '../css/My_Page_center.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import My_Page_connected from "../pages/My_Page_connected";
import '../css/My_Page_connected_center.css';

function My_Page_connected_center() {
    const data = [
        { id:1, name: '박멘토', content: '자기소개서 멘토링', classify: '진로' , dur:'YYYY.MM.DD 부터 YYYY.MM.DD 까지' },
        { id:2, name: '정상담', content: '대인관계 상담', classify: 'TCI', dur:'YYYY.MM.DD 부터 YYYY.MM.DD 까지'},
    ];
    return (
        <body>
        <div className='mypage_connected'>
            <span id='mypage_connected_one'>상담 내역</span>
            <hr></hr>
            <table id="mypage_connected_table_one">
                <thead>
                <tr>
                    <th>id</th>
                    <th>상담사 닉네임</th>
                    <th>내용</th>
                    <th>분류</th>
                    <th>기간</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item,index) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.content}</td>
                        <td>{item.classify}</td>
                        <td>{item.dur}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <span id='mypage_connected_two'>멘토링 내역</span>
            <hr id="hr_two"></hr>
            <table id="mypage_connected_table_two">
                <thead>
                <tr>
                    <th>id</th>
                    <th>상담사 닉네임</th>
                    <th>내용</th>
                    <th>분류</th>
                    <th>기간</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.content}</td>
                        <td>{item.classify}</td>
                        <td>{item.dur}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </body>
    );
}

export default My_Page_connected_center;