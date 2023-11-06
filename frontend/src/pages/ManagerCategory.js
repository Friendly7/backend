import React, { useState } from "react";
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

export default function ManagerCategory() {
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
      <ListItemButton onClick={handleClickNotice}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="공지관리" />
        {openNotice ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openNotice} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="공지사항 목록 확인" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="공지 추가" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
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
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="포인트 관리" />
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
            <ListItemText primary="관리자 변경" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="관리자 페이지 편집" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
