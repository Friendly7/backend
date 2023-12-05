import * as React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import  { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/My_Page_Leftnav.css';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HouseIcon from '@mui/icons-material/House';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import SessionManager from '../pages/SessionManager'
import PersonIcon from '@mui/icons-material/Person';

function My_Page_Leftnav() {
    const navigate = useNavigate();
    const [openNotice, setOpenNotice] = useState(false);
    const [openEtc, setOpenEtc] = useState(false);
    const [openOption, setOpenOption] = useState(false);
    const {name, isLoggedIn,setIsLoggedIn} = SessionManager();

    const handleClickNotice = () => {
        setOpenNotice(!openNotice);
    };

    const handleClickEtc = () => {
        setOpenEtc(!openEtc);
    };

    const handleClickOption = () => {
        setOpenOption(!openOption);
    };

    const [currentImage, setCurrentImage] = useState(null);
    const fetchCurrentImage = () => {
        // 서버 API 엔드포인트를 사용하여 현재 프로필 이미지를 가져옴
        // axios.get('/api/getCurrentProfileImage')
        //     .then((response) => {
        //         setCurrentImage(response.data.imageUrl);
        //     })
        //     .catch((error) => {
        //         console.error('프로필 이미지 가져오기 실패:', error);
        //     });
    };
    useEffect(() => {
        // 컴포넌트가 마운트될 때 사용자의 현재 프로필 이미지를 가져옴
        fetchCurrentImage();
    }, []);

    const logout=()=>{
        axios.post('/logout').then(response => {
            if(response.data=='logout') {
                setIsLoggedIn(false);
                navigate('/')
            }
        })
    }

    return (

        <body>
        <div id="left_profile">
            <PersonIcon sx={{ fontSize:100}}/>
            <span id="profile_text_one">1급 상담사</span>
            <span id="profile_text_two">{name}</span>
            <div id="ingspot" ></div>
        </div>
        <div id='left_nav'>
            <span id='catego_one'>메인</span>
            <List>
                <ListItemButton onClick={() => navigate('/My_Page_main')}>
                    <ListItemIcon>
                        <HouseIcon />
                    </ListItemIcon>
                    <ListItemText primary="마이 페이지" />
                </ListItemButton>

                <ListItemButton onClick={handleClickNotice}>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="멘토, 상담사" />
                    {openNotice ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openNotice} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/My_Page_connected')}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary="과거 연결 기록" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/Mentor_mypage_connecting')}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary="연결된 멘토, 상담사" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={() => navigate('/My_Page_schedule')}>
                    <ListItemIcon>
                        <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText primary="일정" />
                </ListItemButton>

                <ListItemButton onClick={handleClickEtc}>
                    <ListItemIcon>
                        <LibraryBooksIcon />
                    </ListItemIcon>
                    <ListItemText primary="기타" />
                    {openEtc ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openEtc} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary="인증 관리" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/My_Page_points')}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary="포인트 관리" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/My_Page_review')}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary="후기" />
                        </ListItemButton>
                    </List>
                </Collapse>

            </List>
            <span id='catego_two'>설정</span>
            <List id='tools_list'>
                <ListItemButton onClick={handleClickOption}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="설정" />
                    {openOption ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openOption} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary="관리자 변경" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary="관리자 페이지 편집" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <div className="list_bottom">
                    <ListItemButton>
                        <ListItemIcon>
                            <HelpOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="문의하기" />
                    </ListItemButton>
                    <div className="list_logout">
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText onClick={logout} primary="로그아웃" />
                        </ListItemButton>
                    </div>
                </div>
            </List>
        </div>
        </body>
    );
}

export default My_Page_Leftnav;