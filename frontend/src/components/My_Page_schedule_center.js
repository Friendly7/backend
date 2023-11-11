import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import '../css/My_Page_center.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import My_Page_connected from "../pages/My_Page_connected";
import '../css/My_Page_schedule_center.css';
/* import 'react-calendar/dist/Calendar.css' */
import Calendar from "react-calendar";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
import AddIcon from '@mui/icons-material/Add';


function My_Page_schedule_center() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const formattedDay = selectedDate.toLocaleDateString('ko-KR', { weekday: 'short' }).charAt(0);
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토','일','월','화','수','목','금','토','일'];
    var formattedDayfirst='';
    var formattedDaysecond='';
    var formattedDaythird='';
    var formattedDayfourth='';
    var formattedDayfifth='';
    var formattedDaysixth='';
    for (let i = 0; i < 7; i++) {
        if(formattedDay==daysOfWeek[i]){
            formattedDayfirst=daysOfWeek[i+1];
            formattedDaysecond=daysOfWeek[i+2];
            formattedDaythird=daysOfWeek[i+3];
            formattedDayfourth=daysOfWeek[i+4];
            formattedDayfifth=daysOfWeek[i+5];
            formattedDaysixth=daysOfWeek[i+6];
        }
    }

    return (
        <body>
        <div className="mypage_calendar">
            <span id='mypage_schedule_one'>이번주 일정</span>
            <hr id="schedule_hrone"></hr>
            <button id="schedule_one_first">
                <span id="pickdayofweek_first">{formattedDay}</span>
                <span id="pickday_first">{selectedDate.getDate()}</span>
            </button>
            <button id="schedule_one_second">
                <span id="pickdayofweek_second">{formattedDayfirst}</span>
                <span id="pickday_second">{selectedDate.getDate()+1}</span>
            </button>
            <button id="schedule_one_third">
                <span id="pickdayofweek_third">{formattedDaysecond}</span>
                <span id="pickday_third">{selectedDate.getDate()+2}</span>
            </button>
            <button id="schedule_one_fourth">
                <span id="pickdayofweek_fourth">{formattedDaythird}</span>
                <span id="pickday_fourth">{selectedDate.getDate()+3}</span>
            </button>
            <button id="schedule_one_fifth">
                <span id="pickdayofweek_fifth">{formattedDayfourth}</span>
                <span id="pickday_fifth">{selectedDate.getDate()+4}</span>
            </button>
            <button id="schedule_one_sixth">
                <span id="pickdayofweek_sixth">{formattedDayfifth}</span>
                <span id="pickday_sixth">{selectedDate.getDate()+5}</span>
            </button>
            <button id="schedule_one_seventh">
                <span id="pickdayofweek_seventh">{formattedDaysixth}</span>
                <span id="pickday_seventh">{selectedDate.getDate()+6}</span>
            </button>

            <span id='mypage_schedule_two'>일정 설정</span>
            <hr id="schedule_hrtwo"></hr>
            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                formatDay={(locale, date) => new Intl.DateTimeFormat(locale, { day: 'numeric'}).format(date)}
            />
            <div id="pickdatebox">
                <span id="pickdate">{selectedDate.getDate()}일</span>
                <button id="deleteschedule" ><Icon id='deleteicon'>
                    <DeleteIcon /> {/* Material-UI 아이콘을 Icon 컴포넌트 내에 추가 */}
                </Icon><span id="deletelabel">삭제</span></button>
                <button id="plusschedule" ><Icon id='addicon'>
                    <AddIcon /> {/* Material-UI 아이콘을 Icon 컴포넌트 내에 추가 */}
                </Icon><span id="addlabel">저장</span></button>
            </div>
        </div>
        </body>
    );
}

export default My_Page_schedule_center;