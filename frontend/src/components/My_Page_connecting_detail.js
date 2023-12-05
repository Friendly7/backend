import * as React from "react";
import {useNavigate, useParams} from "react-router-dom";
import My_Page_Header from './My_Page_Header.js';
import My_Page_Leftnav from './My_Page_Leftnav.js';
import Line from './Line.js';
import My_Page_center from './My_Page_center.js';
import  '../css/My_Page_connecting_detail.css';
import {useEffect, useState} from "react";
import axios from "axios";

export default function My_Page_connecting_detail() {
    const { name,id } = useParams();
    const navigate = useNavigate()
    const[data, setData] = useState([]);
    const [memos,setMemos] = useState([])
    const loadMemos = () => {
        axios.get('/api/memos')
            .then((response) => {
                console.log(response.data)
                if(response.data!== null)
                    setMemos(response.data);
            })
            .catch((error) => {
                console.error('메모 로딩 중 오류:', error);
            });
    };

    useEffect(() => {
        axios.get('/matching/success/getList/login/'+id).then(response => {
            if(response.data!=null) {
                console.log(response.data)
                setData(response.data);
            }
            console.log(response.data)
        })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        loadMemos();
    },[])
    const finish = () => {
        let b = window.confirm('상담을 종료하시겠습니까?');
        if(b) {
            window.alert('상담을 종료합니다')
            navigate(`/My_Page_review/${name}`)
        }
    }

    return (
        <div id="MypagecondetailBox">
            <div>
                <span id='DTname'>{name}</span><button onClick={finish} className='button_finish_'>멘토링/상담 종료</button>
                {data && data.map((item) => (<span id="DTclass">{item.category}</span>))}
                <hr id="DThr"></hr>
                <div id="DTsche">
                    <span id="DTschespan">SCHEDULE</span>
                    {data && data.map((item) => (<span id="DTschespantwo">예정 멘토링: {item.schedule}</span>))}
                </div>
                <span id="DTMemospan">MEMO</span>
                <button id='DTMbtn' onClick={()=>navigate('/ChatMain')}>채팅방 가기</button>
                <div id='DTMemoBox'>
                    {memos && memos.map((item) => (<span id="DTmemospanone">{item.contents}</span>))}
                </div>
            </div>
            <div>
                <div id='DTPersonalBox'>
                    {data &&data.map((item) => (<span id="DTpersonalspanone">{item.personal}</span>))}
                </div>
                <div id="DTHomework">
                    <span id="DThomeworkspan">HOMEWORK</span>
                    {data && data.map((item) => (<span id="DTworkspanone">과제 내용: {item.homeworkname}</span>))}
                    {data &&data.map((item) => (<span id="DTworkspantwo">제출 여부: {item.homeworkox}</span>))}
                </div>
            </div>
        </div>
    );
}