import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/FirstPage";
import Login from "./pages/LogIn";
import Explanation from "./pages/Explan";
import JoinMenti from "./pages/JoinMenti";
import JoinMento from "./pages/JoinMento";
import Counsel from "./pages/Counsel";
import Location from "./pages/Location";
import ErrorPage from "./pages/ErrorPage";
import CashConversion from "./pages/CashConversion";
import Raiting from "./pages/Raiting";

function App() {
  return (
    <body>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="explanation" element={<Explanation />} />
        <Route path="JoinMenti" element={<JoinMenti />} />
        <Route path="JoinMento" element={<JoinMento />} />
        <Route path="Counsel" element={<Counsel />} />
        <Route path="Location" element={<Location />} />
        <Route path="CashConversion" element={<CashConversion />} />
        <Route path="ErrorPage" element={<ErrorPage />} />
        <Route path="Raiting" element={<Raiting />} />
      </Routes>
    </BrowserRouter>
    </body>
  );
}

export default App;