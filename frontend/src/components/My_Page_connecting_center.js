import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import '../css/My_Page_center.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import My_Page_connected from "../pages/My_Page_connected";
import '../css/My_Page_connecting_center.css';

function My_Page_connecting_center() {
    const data = [
        { id:1, name: '박멘토', content: '자기소개서 멘토링', classify: '진로' , dur:'YYYY.MM.DD 부터 YYYY.MM.DD 까지', schedule: '매주 화요일 09:00', homework: '미제출'  },
        { id:2, name: '정상담', content: '대인관계 상담', classify: 'TCI', dur:'YYYY.MM.DD 부터 YYYY.MM.DD 까지', schedule: '매주 수요일 09:00' , homework: '미제출' },
    ];

    const handleButtonClick = (id) => {
        console.log(`버튼 클릭 - 데이터 ID: ${id}`);
        // 여기에 버튼 클릭 시 실행할 동작 추가
    };
    return (
        <body>
        <div className='mypage_connecting'>
            <span id='mypage_connecting_one'>상담 내역</span>
            <hr></hr>
            <table id="mypage_connecting_table_one">
                <colgroup>
                    <col width="5%" />
                    <col width="12%" />
                    <col width="25%" />
                    <col width="10%" />
                    <col width="20%" />
                    <col width="10%" />
                    <col width="10%" />
                </colgroup>
                <thead id="connecting_one_thead">
                <tr>
                    <th>id</th>
                    <th>상담사 닉네임</th>
                    <th>내용</th>
                    <th>분류</th>
                    <th>기간</th>
                    <th>일정</th>
                    <th>과제</th>
                </tr>
                </thead>
                <tbody id="connecting_one_tbody">
                {data.map((item,index) => (
                    <tr key={item.id} style={{ backgroundColor: index % 2 === 1 ? '#F5F8FA' : 'transparent' }}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.content}</td>
                        <td>{item.classify}</td>
                        <td>{item.dur}</td>
                        <td>{item.schedule}</td>
                        <td>
                            {item.homework === '미제출' && (<div>
                                <button id='gohomework_red' onClick={() => handleButtonClick(item.id)}>미제출</button>
                            </div>)}
                            {item.homework === '제출' && (<div>
                                <button id='gohomework_blue' onClick={() => handleButtonClick(item.id)}>미제출</button>
                            </div>)}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <span id='mypage_connecting_two'>멘토링 내역</span>
            <hr id="hr_two"></hr>
            <table id="mypage_connecting_table_two">
                <colgroup>
                    <col width="5%" />
                    <col width="12%" />
                    <col width="25%" />
                    <col width="10%" />
                    <col width="20%" />
                    <col width="10%" />
                    <col width="10%" />
                </colgroup>
                <thead id="connecting_two_thead">
                <tr>
                    <th>id</th>
                    <th>상담사 닉네임</th>
                    <th>내용</th>
                    <th>분류</th>
                    <th>기간</th>
                    <th>일정</th>
                    <th>과제</th>
                </tr>
                </thead>
                <tbody id="connecting_two_tbody">
                {data.map((item,index) => (
                    <tr key={item.id}  style={{ backgroundColor: index % 2 === 1 ? '#F5F8FA' : 'transparent' }}>
                        <td>{item.id}</td>
                        <td><Link to={`/detail/${item.name}`}>{item.name}</Link></td>
                        <td>{item.content}</td>
                        <td>{item.classify}</td>
                        <td>{item.dur}</td>
                        <td>{item.schedule}</td>
                        <td>{item.homework === '미제출' && (<div>
                            <button id='gohomework_red' onClick={() => handleButtonClick(item.id)}>미제출</button>
                        </div>)}
                            {item.homework === '제출' && (<div>
                                <button id='gohomework_blue' onClick={() => handleButtonClick(item.id)}>미제출</button>
                            </div>)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </body>
    );
}

export default My_Page_connecting_center;