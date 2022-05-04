import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Body from '../pages/Body';
import Cpu from '../pages/Cpu';
import CpuFan from '../pages/CpuFan';
import Gpu from '../pages/Gpu';
import PowerUnit from '../pages/PowerUnit';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about' element={<About/>} key="/about"/>
            <Route exact path='/body' element={<Body/>} key="/body"/>
            <Route exact path='/cpu' element={<Cpu/>} key="/cpu"/>
            <Route exact path='/cpufan' element={<CpuFan/>} key="/cpufan"/>
            <Route exact path='/gpu' element={<Gpu/>} key="/gpu"/>
            <Route exact path='/powerunit' element={<PowerUnit/>} key="/powerunit"/>
        </Routes>
    )
}

export default AppRouter;