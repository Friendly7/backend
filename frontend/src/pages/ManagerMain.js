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
        <div>
          <ManagerHeader />

          <ViewWrapper>
            <ProfileWrapper>
              <ManagerProfile />
            </ProfileWrapper>

            <TableWrapper>
              <Routes>
                <Route path="/ManagementMatch" element= {<ManagementMatch />} />
                <Route path="/ManagementChat" element={<ManagementChat />} />
                <Route path="/ManagementUserList" element={<ManagementUserList />} />
                <Route path="/ManagementConnect" element={<ManagementConnect />} />
                <Route path="/ManagementQnA" element={<ManagementQnA />} />
                <Route path="/ManagementMatchDetail/:No" element={<ManagementMatchDetail />} />
                <Route path="/ManagementChatDetail/:No" element={<ManagementChatDetail />} />
                <Route path="/ManagementUserListDetail/:No" element={<ManagementUserListDetail />} />
                <Route path="/ManagementConnectDetail/:No" element={<ManagementConnectDetail />} />
                <Route path="/ManagementQnADetail/:State" element={<ManagementQnADetail />} />
                <Route path="/" element={ <ManagementMatch /> } />
              </Routes>
            </TableWrapper>
          </ViewWrapper>
        </div>
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

  width: 1000px;

  padding-top: 100px;
`;