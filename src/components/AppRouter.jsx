import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Cpu from '../pages/Cpu';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about' element={<About/>} key="/about"/>
            <Route exact path='/cpu' element={<Cpu/>} key="/cpu"/>
        </Routes>
    )
}

export default AppRouter;