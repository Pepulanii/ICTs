import './Sidebar.css'
import { Link } from 'react-router-dom';
import ZMC from '../../assets/ZM_Coat_of_Arms.png';
import { useHistory } from "react-router-dom";
import {IconContext } from "react-icons";


const Sidebar = ({ sidebarOpen, closeSidebar }) => {  
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={ZMC} alt="ZMC"/><br />
                    {/* <h1>Ministry Of Health</h1> */}
                </div>
                <i
                    className="fa fa-times"
                    id="sidebarIcon"
                    onClick={() => closeSidebar()}
                ></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link sidebar_home"
                   >
                    <i className="fa fa-home"></i>
                    <Link to="/">HOME</Link>
                </div>
                <h2>SMART ZAMBIA TECHNOLOGY</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Admin Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">GSB Systems</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="/eservices">E-Services</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-plus"></i>
                    <Link>Add A Technology</Link>
                </div>
                <h2>TAXABLE SERVICES</h2>
                <div className="sidebar__link">
                    <i className="fa fa-plus"></i>
                    <a href="#">Add A Taxable Service</a>
                </div>
                <h2>PROPOSED SERVICES</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <Link to="/">Pending projects</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-plus"></i>
                    <Link to="/">Propose A Service</Link>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <Link to="#">Log Out</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;