import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagerHeader from "../components/layouts/ManagerHeader";
import ManagerProfile from "./ManagerProfile";
import ManagementMatch from "./ManagementMatch";
import ManagementChat from "./ManagementChat";
import ManagementUserList from "./ManagementUserList";
import ManagementConnect from "./ManagementConnect";
import ManagementQnA from "./ManagementQnA";
import ManagementMatchDetail from "./ManagementMatchDetail";
import ManagementChatDetail from "./ManagementChatDetail";
import ManagementUserListDetail from "./ManagementUserListDetail";
import ManagementConnectDetail from "./ManagementConnectDetail";
import ManagementQnADetail from "./ManagementQnADetail";
import styled from "styled-components";

function ManagerMain() {
  return (
        <ScreenWrapper>
          <ManagerHeader />
          <ViewWrapper>
            <ProfileWrapper>
              <ManagerProfile />
            </ProfileWrapper>
            <TableWrapper>
              <ManagementMatch />
            </TableWrapper>
          </ViewWrapper>
        </ScreenWrapper>
  );
}

export default ManagerMain;

const ProfileWrapper = styled.div`
  width: 380px;
  height: 800px;
  margin-top: 70px;
`;

const ViewWrapper = styled.div`
  display: flex;
  flex-direction: row;

  padding-top: 10px;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 800px;

  padding-top: 100px;
`;
const ScreenWrapper = styled.div`
margin-left: 260px;
margin-right: 260px;
margin-top: 5%;
`;
//
//
//   <Routes>
//     <Route path="/ManagementChat" element={<ManagementChat />} />
//     <Route path="/ManagementUserList" element={<ManagementUserList />} />
//     <Route path="/ManagementConnect" element={<ManagementConnect />} />
//     <Route path="/ManagementQnA" element={<ManagementQnA />} />
//     <Route path="/ManagementChatDetail/:No" element={<ManagementChatDetail />} />
//     <Route path="/ManagementUserListDetail/:No" element={<ManagementUserListDetail />} />
//     <Route path="/ManagementConnectDetail/:No" element={<ManagementConnectDetail />} />
//     <Route path="/ManagementQnADetail/:State" element={<ManagementQnADetail />} />
//     <Route path="/ManagementMatchDetail/:request_id" element={<ManagementMatchDetail />} />
//     <Route path="/ManagerMain" element={ <<ManagementMatch> /> } />