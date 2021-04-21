import {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
// import Sidebar2 from './components/sidebar/Sidebar2';
import {BrowserRouter as Router, Switch, Route } from  'react-router-dom'
// import Home from './components/Home/Home';
import Home2 from './components/Home/Home2';
import Eservices from './components/eservices/Eservices';
import Messages from './components/messages/Messages';
import About from './components/about/About';
import Addtech from './components/addTech/AddTech';
import Propose from './components/propose/Propose';
import Stock from './components/stock/Stock';
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
          {/* <Route exact path ='/' component = {Home}></Route> */}
          <Route exact path ='/' component = {Home2}></Route>
          <Route exact path='/eservices' component = {Eservices}></Route>
          <Route exact path='/messages' component = {Messages}></Route>
          <Route exact path='/about' component = {About}></Route>
          <Route exact path='/addservice' component = {Addtech}></Route>
          <Route exact path='/propose' component = {Propose}></Route>
          <Route exact path='/stock' component = {Stock}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
