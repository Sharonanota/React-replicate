import React from 'react';
// import ReactDOM from 'react-dom/client';

import './style.css';



export default function Header (){

    return (
        <header>
            <nav className='nav'>
       <img src="./logo192.png" className='pic' alt='logo' />

       <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
       </nav>


        <h1>Fun facts about React</h1>
        </header>
    )
}