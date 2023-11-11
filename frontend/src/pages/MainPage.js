import styled from 'styled-components';
import SessionManager from './SessionManager';
import ManagerMain from "./ManagerMain";
import * as React from "react";
import MainHeader from './MainHeader';
import MainCenterOne from './MainCenterOne';
import MainCenterTwo from './MainCenterTwo';

function App() {

    return (
        <>
            <MainHeader />
            <MainCenterOne />
            <MainCenterTwo />
        </>
    );
}

export default App;

