import "./Navbar.css";
import user from "../../assets/user.svg"
import { Link } from "react-router-dom";
import { BsSearch, BsClock } from "react-icons/bs"

const Navbar = ({ sidebarOpen, openSidebar}) =>{
    return(
        
        <nav className="navbar">
            {/* <div>MINISTRY OF HEALTH</div> */}
            <div className="nav_icon" onCLick={() => openSidebar()}> 
                <i className="fa fa-bars"></i>
            </div>

            <div className="navbar__left">
                <Link to='/stock'>Messages</Link>
                <Link to='/stock'>News Feed</Link>
                <Link to='/stock'>About Us</Link>
            </div>
            <div className="navbar__right">
                <Link to="">
                    <BsSearch />
                </Link>
                <Link to="">
                    <BsClock />
                </Link> 
                <Link to="">
                    <img width="30" src={user} alt="user" />  
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;