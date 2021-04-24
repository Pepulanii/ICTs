import './Sidebar.css'
import { Link } from 'react-router-dom';
import ZMC from '../../assets/ZM_Coat_of_Arms.png';
import { GiHamburgerMenu } from "react-icons/gi"
import { AiFillHome, AiOutlineAppstoreAdd } from "react-icons/ai"
import { GoDeviceMobile } from "react-icons/go"
import { BiLayerPlus, BiAddToQueue, BiPowerOff} from "react-icons/bi"
import { FaNetworkWired } from "react-icons/fa"
import { VscLoading } from "react-icons/vsc"
import { IoIosCreate } from "react-icons/io"

// import {IconContext } from "react-icons";


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={ZMC} alt="ZMC" /><br />
                    {/* <h1>Ministry Of Health</h1> */}
                </div>
                <i
                    // className="fa fa-times"
                    // id="sidebarIcon"
                    onClick={() => closeSidebar()}
                ><GiHamburgerMenu size={30}/></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link sidebar_home"
                >
                    <AiFillHome size={20}/>
                    <Link to="/">  HOME</Link>
                </div>
                <h2> SERVICES</h2>
                <div className="sidebar__link">
                    <AiOutlineAppstoreAdd size={20}/>
                    <Link to='/stock'>  Existing Services</Link>
                </div>
                <div className="sidebar__link">
                    <FaNetworkWired size={20}/>
                    <Link to='/stock'>  GSB</Link>
                </div>
                <div className="sidebar__link">
                    {/* <i className="fa fa-archive"></i> */}
                    <Link to='/stock'>  E-Services</Link>
                </div>
                <div className="sidebar__link">
                    <GoDeviceMobile size={20}/>
                    <Link to='/stock'>  Mobile Services</Link>
                </div>
                <div className="sidebar__link">
                    <BiLayerPlus size={20}/>
                    <Link to="addservice">  Add A Service</Link>
                </div>
                <h2>TAXABLE SERVICES</h2>
                <div className="sidebar__link">
                    <BiAddToQueue size={20}/>
                    <Link to='/stock'>  Add A Taxable Service</Link>
                </div>
                <h2>PROPOSED SERVICES</h2>
                <div className="sidebar__link">
                    <VscLoading size={20}/>
                    <Link to='/stock'>  Pending projects</Link>
                </div>
                <div className="sidebar__link">
                    <IoIosCreate size={20} />
                    <Link to='/propose'>Propose A Service</Link>
                </div>
                <div className="sidebar__logout">
                    <BiPowerOff size={30}/>
                    <Link to="#">  Log Out</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;