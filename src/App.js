import {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route } from  'react-router-dom'
// import LandingPage from './components/Login/LandingPage'
import Home3 from './components/Home/Home3';
import Eservices from './components/eservices/Eservices';
import Messages from './components/messages/Messages';
import About from './components/about/About';
import Login from './Login';
// import Addtech from './components/addTech/AddTech';
import Addtech2 from './components/addTech/AddTech2';
import Propose from './components/propose/Propose';
import Stock from './components/stock/Stock';
import Register from './Register';
import './App.css';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className="container">
      <Router>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <Switch>
          <Route exact path ='/' component = {Home3}></Route>
          <Route exact path ='/login' component = {Login}></Route>

          {/* <Route exact path ='/' component = {SearchPage}></Route> */}
          <Route exact path='/eservices' component = {Eservices}></Route>
          <Route exact path='/messages' component = {Messages}></Route>
          <Route exact path='/about' component = {About}></Route>
          <Route exact path='/addservice' component = {Addtech2}></Route>
          <Route exact path='/propose' component = {Propose}></Route>
          <Route exact path='/stock' component = {Stock}></Route>
          <Route exact path='/Register' component = {Register}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
