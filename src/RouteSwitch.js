import React from 'react';
import App from './App';
import Shop from './Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const RouteSwitch = () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/Shop" element={<Shop/>} />
        </Routes>
        </BrowserRouter>
    );
}
export default RouteSwitch;