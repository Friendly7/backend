import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MentoHeader from "../components/layouts/MentoHeader";
import MentoProfile from "./MentoProfile";
import MentoMypage from "./MentoMypage";
import styled from "styled-components";

function MentoMain() {
  return (
      <div>
<ScreenWrapper>
    <MentoHeader />

    <ViewWrapper>
        <ProfileWrapper>
            <MentoProfile />
        </ProfileWrapper>
        <MentoMypage/>
        <TableWrapper>

        </TableWrapper>
    </ViewWrapper>
</ScreenWrapper>
      </div>
  );
}

export default MentoMain;

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
const ScreenWrapper = styled.div`
margin-left: 260px;
margin-right: 260px;
`;