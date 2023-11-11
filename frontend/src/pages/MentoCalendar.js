// import * as React from "react";
// import {
//   BrowserRouter as Route,
//   Routes,
//   Link,
//   useParams,
// } from "react-router-dom";
// import styled from "styled-components";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import Button from "@mui/material/Button";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
//
// export default function MentoCalendar() {
//   return (
//     <div>
//       <DateWrapper>
//         <WeekendWrapper>
//           이번주 일정
//           <br />
//           <ButtonGroup
//             disableElevation
//             variant="contained"
//             aria-label="Disabled elevation buttons"
//             sx={{ borderTop: "1px solid green", gap: "10px", paddingTop: "20px" }}
//           >
//             <Button>일<br/>23</Button>
//             <Button>월<br/>24</Button>
//             <Button>화<br/>25</Button>
//             <Button>수<br/>26</Button>
//             <Button>목<br/>27</Button>
//             <Button>금<br/>28</Button>
//             <Button>토<br/>29</Button>
//           </ButtonGroup>
//         </WeekendWrapper>
//
//         <CalendarWrapper>
//           일정 설정
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DateCalendar
//             sx={{ borderTop: "1px solid green", gap: "10px", paddingTop: "20px", position: "left"}} />
//           </LocalizationProvider>
//         </CalendarWrapper>
//       </DateWrapper>
//     </div>
//   );
// }
//
// const DateWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
//
// const WeekendWrapper = styled.div`
//   width: 355px;
//   margin-left: 100px;
//   margin-right: 230px;
//   font-size: large;
// `;
//
// const CalendarWrapper = styled.div`
//   width: 355px;
//   margin-left: 10px;
//   font-size: large;
// `;
