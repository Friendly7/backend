import React from 'react';
import MainHeader from '../pages/MainHeader'
import {useEffect, useState} from "react";
import axios from "axios";
import styledC from "styled-components";
import "../css/Community_location.css";
import {Link} from "react-router-dom";

export default function Community_location() {
    const [data, setData] = useState([])
    // const data = [
    //     { id: 1, name: 'John Doe', age: 25 },
    //     { id: 2, name: 'Jane Doe', age: 30 },
    //     { id: 3, name: 'Bob Smith', age: 22 },
    // ];
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.post('/moveAreaBoard')
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    return (
        <body>
            <MainHeader/>
            <MyPageHeader id='commlocationname'>지역 게시판</MyPageHeader>
            <div id='communitylocationBox'>
                <table id='communitylocationtbl'>
                    <thead id='communitylocationthead'>
                    <tr>
                        <th>제목</th>
                        <th>제목</th>
                        <th>닉네임</th>
                    </tr>
                    </thead>
                    <tbody id='communitylocationtbody'>
                    {data.map((item,index) => (
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td><Link to={`/Community_detail/${item.id}`}>{item.board_name}</Link></td>
                            <td>{item.user_name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </body>
    );
}


const MyPageHeader = styledC.div`
    font-size: 30px;
    padding-bottom: 10px;
    width:15%;
    margin-left: 40%;
    mrgin-right: 40%;
    margin-top: 10%;
    text-align:center;
    border-bottom:5px solid green;
`;
