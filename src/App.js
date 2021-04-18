import {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
// import Sidebar2 from './components/sidebar/Sidebar2';
import {BrowserRouter as Router, Switch, Route } from  'react-router-dom'
import Home from './components/Home/Home';
import Eservices from './components/eservices/Eservices'

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
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Router>
        <Switch>
          {/* <Route path ='/' component = {Home}></Route> */}
          <Route exact path='/eservices' component = {Eservices}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
