import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";
import "./components/addTech/AddTech.css";
import Axios from 'axios';
import { Redirect } from  'react-router-dom'


function Login() {
    let history = useHistory();

    // const [usernameReg, setUsernameReg] = useState('');
    // const [passwordReg, setPasswordReg] = useState('');
    // const [departmentReg, setDepartmentReg] = useState(1);
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    // const [department, setDepartment] = useState(1);
    // const [deptList, setDeptList] = useState([]);

    // useEffect(() => {
    //     Axios.get('http://localhost:3001/register').then((response) =>{
    //         setDeptList(response.data)
    //     })
    // }, [])

    // const register = () => {
    //     Axios.post("http://localhost:3001/register", {
    //         username: usernameReg, 
    //         password: passwordReg,
    //         department: departmentReg,
        
    //     }).then((response) => {
    //         console.log(response);
    //     });
    // };

    const login = props => {
        
        Axios.post("http://localhost:3001/login", {
            username: username, 
            password: password,
            // department: department,
        
        }).then((response) => {

            if(response.data.message){
                setLoginStatus(response.data.message)
            } else{
                setLoginStatus(response.data[0].username)
                // appLogin();
                // <Redirect to="/" />
                
            }
            console.log(response.data);
        });
    };

    // function appLogin(){
    //     history.push("/")
    // }

    return (
        <div className="form-basic">
            {/* <div className="registration">
                <h1>Registration</h1>
                <div className="form-row">
                    <label>
                        <span>Username</span>
                        <input 
                            type="text" 
                            onChange={(e) => {
                            setUsernameReg(e.target.value)
                        }}/>
                    </label>
                </div>
                
                <div className="form-row">
                    <label> 
                        <span>Password</span>
                        <input 
                            type="password"
                            onChange={(e) => {
                            setPasswordReg(e.target.value)
                        }}/>
                    </label>
                </div>
                
                
                <div class="form-row">
                <label>
                    <span>Department</span>
                    
                    <select name="department" onChange={(e)=> {
                        setDepartmentReg(e.target.value)
                    }}>
                    {deptList.map((val) => {
                        return (
                            <option value={val.id_Institution}>{val.Institution_Name}</option>
                        )
                    })}
                    </select>
                </label>
                </div>

                <button onClick={register}>Register</button>
            </div> */}
            
            <div className="login">
            <h1>Login</h1>
                <div className="form-row">
                    <label>
                        <span>Username</span>
                        <input 
                            type="text" 
                            placeholder="Username..." 
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                    </label>
                </div>

                <div className="form-row">
                    <label>
                        <span>Password</span>
                        <input 
                            type="password"    
                            placeholder="Password..." 
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}   
                        />
                    </label>
                </div>

                {/* <div class="form-row">
                <label>
                    <span>Department</span>
                    
                    <select name="department" onChange={(e)=> {
                        setDepartment(e.target.value)
                    }}>
                    {deptList.map((val) => {
                        return (
                            <option value={val.id_Institution}>{val.Institution_Name}</option>
                        )
                    })}
                    </select>
                </label>
                </div> */}
                <button onClick={login}> Log in </button>
                
            </div>
            <h2>{loginStatus}</h2>

            <Link to="Register">Sign up</Link>
        </div>
        
    )
}

export default Login
