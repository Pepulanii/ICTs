import "./Navbar.css";
import user from "../../assets/user.svg"

const Navbar = ({ sidebarOpen, openSidebar}) =>{
    return(
        <nav className="navbar">
            <div className="nav_icon" onCLick={() => openSidebar()}> 
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="#">Messages</a>
                <a href="#">News Feed</a>
                <a className="about" href="#">About Us</a>
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