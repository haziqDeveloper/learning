import React from 'react';
import './App.css';
import Domain from './components/Domain/Domain';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Login from './components/Register/Login';
import Layout from './components/Layouts/Layout1/layout';
import Layout2 from './components/Layouts/Layout2/layout2';
import Layout3 from './components/Layouts/Layout3/layout3';
import MainLayout from './pages/Home/MainLayout/MainLayout';
import Portal from './pages/Portal';
import {Route, Routes} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import TemplateLayout from './pages/Home/MainLayout/TemplateLayout';
import Protected from './components/Protected'

function App() {
 
  return (
    <>
        <Toaster
        position="top-right"
        reverseOrder={false}
        limits={1}
        preventDuplicates
        autoClose={2000} />
      <Navbar />
      <Routes>
      <Route path="/" element={<Domain/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/mainLayout" element={<Protected  Component={MainLayout} />} />
      <Route path="/templatelayout/:id" element={<Protected  Component={TemplateLayout} />} />
      <Route path="/portal" element={<Protected  Component={Portal} />} />
      <Route path="/layout-1" element={<Protected  Component={Layout} />} />
      <Route path="/layout-2" element={<Protected  Component={Layout2} />} />
      <Route path="/layout-3" element={<Protected  Component={Layout3} />} />
      </Routes>
    </>
  );
}

export default App;
