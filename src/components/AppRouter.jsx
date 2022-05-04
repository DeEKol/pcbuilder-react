import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Body from '../pages/Body';
import Cpu from '../pages/Cpu';
import CpuFan from '../pages/CpuFan';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about' element={<About/>} key="/about"/>
            <Route exact path='/cpu' element={<Cpu/>} key="/cpu"/>
            <Route exact path='/cpufan' element={<CpuFan/>} key="/cpufan"/>
            <Route exact path='/body' element={<Body/>} key="/body"/>
        </Routes>
    )
}

export default AppRouter;