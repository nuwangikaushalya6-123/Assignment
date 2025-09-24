import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Rooms from './pages/Rooms';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Contact from './pages/BookingForm';
import EventPage from './pages/EventPage';
import AuthForm from './Components/Auth/AuthForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route index element ={<Home/>}/>
    <Route path='/AboutUs' element = {<AboutUs/>}/>
    <Route path='/Rooms' element ={<Rooms/>}/>
    <Route path='/Facilities' element={<Facilities/>}/>
    <Route path='/Gallery' element={<Gallery/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/EventPage' element={<EventPage/>}/>
    <Route path='/AuthForm' element={<AuthForm/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
