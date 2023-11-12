import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route, useNavigate,
} from "react-router-dom";
import '../css/My_Page_Header.css';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HomeIcon from '@mui/icons-material/Home';


function My_Page_Header() {
    const navigate = useNavigate()
    return (
        <body>
        <div id='c_mypagelogo'></div>
        <div id='alarm'>
            <ListItemButton >
                <ListItemIcon>
                    <NotificationsActiveIcon style={{fontSize: 80}}/>
                </ListItemIcon>
            </ListItemButton>
        </div>
        <div id='c_gohome'>
            <ListItemButton >
                <ListItemIcon>
                    <HomeIcon onClick={()=>navigate('/')} style={{fontSize: 80}}/>
                </ListItemIcon>
            </ListItemButton>
        </div>
        </body>
    );
}

export default My_Page_Header;