import React from 'react';
import { useLocation } from 'react-router-dom'; 

import "../styles/Sidebar.css";

function Sidebar({ effect, click }) {
    const location = useLocation(); 
    const isPortfolio = location.pathname.includes("chidiebere");

    return (
        <div className={effect ? "Sidebar show" : "Sidebar"}>
            <ul>
                {isPortfolio ? (
                    <>
                        <li><a href="#home" onClick={click}>Home</a></li>
                        <li><a href="#about" onClick={click}>About</a></li>
                        <li><a href="#projects" onClick={click}>Projects</a></li>
                        <li><a href="#join" onClick={click}>Contact</a></li>
                    </>
                ) : (
                    <>
                        <li><a href="#features" onClick={click}>Features</a></li>
                        <li><a href="#solutions" onClick={click}>Solutions</a></li>
                        {/* <li><a href="#team" onClick={click}>Team</a></li> */}
                        <li><a href="#faq" onClick={click}>FAQ</a></li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Sidebar;
