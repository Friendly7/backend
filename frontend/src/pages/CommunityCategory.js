import React, { useState } from "react";
import {
    BrowserRouter as Route,
    Routes,
    Link,
    useParams, useNavigate,
} from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SessionManager from "./SessionManager";

export default function CommunityCategory() {
    const [openNotice, setOpenNotice] = useState(false);
    const [openEtc, setOpenEtc] = useState(false);
    const [openOption, setOpenOption] = useState(false);

    const handleClickNotice = () => {
        setOpenNotice(!openNotice);
    };

    const handleClickEtc = () => {
        setOpenEtc(!openEtc);
    };

    const handleClickOption = () => {
        setOpenOption(!openOption);
    };
    const navigate = useNavigate();
    return (
        <List
            sx={{ width: "100%", maxWidth: 350, bgcolor: "background.paper" ,fontSize:20}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={<ListSubheader component="div" id="nested-list-subheader" />}
        >
            <ListItemButton onClick={()=>navigate(`/Community_free`)}
                sx={{
                    padding: "10px 20px",
                    fontSize: '20px',
                    backgroundColor: "white",
                    border: "2px solid #95d5b2",
                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                    "&:hover": {
                        backgroundColor: "#95d5b2",
                        color:'#1b4332',
                    },
                    margin: "10px 0",
                }}
            >
                    <ListItemText primary="자유 게시판" sx={{ textAlign: "center" }} />

            </ListItemButton>

            <ListItemButton onClick={()=>navigate(`/Community_mentoring`)}
                sx={{
                    padding: "10px 20px",
                    fontSize: '20px',
                    backgroundColor: "white",
                    border: "2px solid #95d5b2",
                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                    "&:hover": {
                        backgroundColor: "#95d5b2",
                        color:'#1b4332',
                    },
                    margin: "10px 0",
                }}
            >
                <ListItemText primary="멘토링 게시판" sx={{ textAlign: "center" }} />
            </ListItemButton>

            <ListItemButton onClick={()=>navigate(`/Community_location`)}
                sx={{
                    padding: "10px 20px",
                    fontSize: 20,
                    backgroundColor: "white",
                    border: "2px solid #95d5b2",
                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                    "&:hover": {
                        backgroundColor: "#95d5b2",
                        color:'#1b4332',
                    },
                    margin: "10px 0",
                }}
            >
                    <ListItemText primary="지역 게시판" sx={{ textAlign: "center" }} />

            </ListItemButton>
        </List>
    );
}