import React, { useState } from "react";
import { BrowserRouter as Route, Routes, Link, useParams } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
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
import HomeIcon from '@mui/icons-material/Home';

export default function MentoCategory() {
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

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" />
      }
    >

        <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Link to={`/MentoMypage`} >
        <ListItemText primary="마이 페이지" />
        </Link>
      </ListItemButton>

      <ListItemButton onClick={handleClickNotice}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="내담자 관리" />
        {openNotice ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openNotice} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <Link to={`/MentoPastMentiList`} >
            <ListItemText primary="과거 내담자" />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <Link to={`/MentoNowMentiList`} >
            <ListItemText primary="연결된 내담자" />
            </Link>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
        <ListItemIcon>
          <CalendarMonthIcon />
        </ListItemIcon>
        <Link to={`/MentoCalendar`} >
        <ListItemText primary="일정" />
        </Link>
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
            <Link to={`/MentoCertification`} >
              <ListItemText primary="인증하기" />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="포인트" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="후기" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="분야 설정" />
          </ListItemButton>
        </List>
      </Collapse>

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
            <ListItemText primary="프로필 / 개인정보 변경" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="마이 페이지 편집" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
