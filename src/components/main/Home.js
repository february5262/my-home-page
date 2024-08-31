import React from 'react';
import { Login } from './login/loginComponent';
import SolarSystem from './planet/SolarSystem';
import { Collision } from './planet/Collision';
export const Home = () => {
    return (
        <div className="app">
            {/* <Login/> */}
            {/* <SolarSystem /> */}
            <Collision/>
        </div>
    )
}