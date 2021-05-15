import {useState, Component} from 'react';
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

class App extends Component {
  constructor(){
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data
    });
  }

  // const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // const openSidebar = () => {
  //   setSidebarOpen(true);
  // };
  
  // const closeSidebar = () => {
  //   setSidebarOpen(false);
  // }
  render(){
    return (
      <div className="container">
        <Router>
          <Navbar  />
          <Sidebar />
          <Switch>
            <Route exact 
            path ='/' 
            render = {props => (
              <Home3 {...props} loggedInStatus = {this.state.loggedInStatus} />
            )}/>
            <Route exact path ='/login' component = {Login} />
  
            {/* <Route exact path ='/' component = {SearchPage}></Route> */}
            <Route exact path='/eservices' 
              render = {props => (
              <Eservices {...props} loggedInStatus = {this.state.loggedInStatus} />
            )}
            />
            <Route exact path='/messages' component = {Messages} />
            <Route exact path='/about' component = {About} />
            <Route exact path='/addservice' component = {Addtech2} />
            <Route exact path='/propose' component = {Propose} />
            <Route exact path='/stock' component = {Stock} />
            <Route exact path='/Register' component = {Register} />
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
