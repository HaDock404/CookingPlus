import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import PrintPage from './pages/PrintPage';

import reportWebVitals from './reportWebVitals';
import './styles/normalize.css'
import GlobalStyle from './styles/createGlobalStyle.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/calendar" element={<CalendarPage />}/>
          <Route path="/print" element={<PrintPage />}/>
        </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
