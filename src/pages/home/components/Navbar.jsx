import { useLocation } from "react-router-dom";

// CSS
import "../styles/Navbar.css";

function Navbar({ click }) {

    const location = useLocation().pathname;


    return (
        <div className='Navbar'>
            <nav>
                <a href="#" style={{ display: "flex" }}>
                    <img src="/beks_white.png" alt="logo" style={{ width: 'auto', height: '40px' }} />
                </a>

                {
                    location == '/chidiebere' ?
                    
                    <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-9 text-sm text-white">
                    <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-400">About</a></li>
                    <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>

                     </ul>
        :
                     <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#solutions">Solutions</a></li>
                    {/* <li><a href="#team">Team</a></li> */}
                    <li><a href="#faq">FAQ</a></li>
                </ul>
                }
               
                 <div className="toggle">
                   
                    <a href="#join" className="wait"> {location === '/chidiebere' ? "Contact me" : "Contact Us"} </a>
                    <i onClick={click}>
                        <box-icon name='menu' color="white"></box-icon>
                    </i>
                </div>
               
               
            </nav>
        </div>
    )
}

export default Navbar