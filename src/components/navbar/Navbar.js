import "./Navbar.css";
import user from "../../assets/user.svg"
import { Link } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route } from  'react-router-dom'


const Navbar = ({ sidebarOpen, openSidebar}) =>{
    return(
        
        <nav className="navbar">
            <div>MINISTRY OF HEALTH</div>
            <div className="nav_icon" onCLick={() => openSidebar()}> 
                <i className="fa fa-bars"></i>
            </div>

            <div className="navbar__left">
                <Link to='/messages'>Messages</Link>
                <a href="#">News Feed</a>
                <Link to='/about'>About Us</Link>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a> 
                <a href="#">
                    <img width="30" src={user} alt="user" />  
                </a>
            </div>
        </nav>
    )
}

export default Navbar;