import React from 'react';
import { Login } from './login/loginComponent';
import SolarSystem from './planet/SolarSystem';
export const Home = () => {
    return (
        <div className="app">
            <Login/>
            <SolarSystem />
        </div>
    )
}