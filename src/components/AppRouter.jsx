import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Body from '../pages/Body';
import Cpu from '../pages/Cpu';
import CpuFan from '../pages/CpuFan';
import Gpu from '../pages/Gpu';
import PowerUnit from '../pages/PowerUnit';
import Ram from '../pages/Ram';
import Storage from '../pages/Storage';
import Fan from '../pages/Fan';
import Motherboard from '../pages/Motherboard';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about' element={<About/>} key="/about"/>
            <Route exact path='/body' element={<Body/>} key="/body"/>
            <Route exact path='/cpu' element={<Cpu/>} key="/cpu"/>
            <Route exact path='/cpufan' element={<CpuFan/>} key="/cpufan"/>
            <Route exact path='/gpu' element={<Gpu/>} key="/gpu"/>
            <Route exact path='/powerunit' element={<PowerUnit/>} key="/powerunit"/>
            <Route exact path='/ram' element={<Ram/>} key="/ram"/>
            <Route exact path='/storage' element={<Storage/>} key="/storage"/>
            <Route exact path='/fan' element={<Fan/>} key="/fan"/>
            <Route exact path='/motherboard' element={<Motherboard/>} key="/motherboard"/>
        </Routes>
    )
}

export default AppRouter;