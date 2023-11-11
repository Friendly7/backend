import React, { useState } from "react";
import {
  BrowserRouter as Route,
  Routes,
  Link,
  useParams,
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

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader component="div" id="nested-list-subheader" />}
    >
      <ListItemButton
        sx={{
          padding: "10px 20px",
          backgroundColor: "white",
          border: "1px solid green",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
          margin: "10px 0",
        }}
      >
        <Link to={`/Community_free`}>
          <ListItemText primary="자유 게시판" sx={{ textAlign: "center" }} />
        </Link>
      </ListItemButton>

      <ListItemButton
        sx={{
          padding: "10px 20px",
          backgroundColor: "white",
          border: "1px solid green",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
          margin: "10px 0",
        }}
      >
        <Link to={`/Community_mentoring`}>
          <ListItemText primary="멘토링 게시판" sx={{ textAlign: "center" }} />
        </Link>
      </ListItemButton>

      <ListItemButton
        sx={{
          padding: "10px 20px",
          backgroundColor: "white",
          border: "1px solid green",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
          margin: "10px 0",
        }}
      >
        <Link to={`/Community_location`}>
          <ListItemText primary="지역 게시판" sx={{ textAlign: "center" }} />
        </Link>
      </ListItemButton>
    </List>
  );
}
