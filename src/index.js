import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Horizontal from "../src/components/Horizontal"
import Vertical from "../src/components/Vertical"
import Dashboard from "../src/pages/Dashboard"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/* <Horizontal />
        <Vertical /> */}
        <Routes>
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
);