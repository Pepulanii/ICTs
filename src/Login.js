import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./components/addTech/AddTech.css";
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import { Redirect } from  'react-router-dom'
// import {BrowserRouter as Router, Switch, Route } from  'react-router-dom';
// import App from './App';


function Login(props) {
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm();
    // let history = useHistory();

    // const [usernameReg, setUsernameReg] = useState('');
    // const [passwordReg, setPasswordReg] = useState('');
    // const [departmentReg, setDepartmentReg] = useState(1);
    
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState(false);
    // const [ user, setUser ] = useState([]);

    // Axios.defaults.withCredentials = true;
    const onSubmit = (data) => {
        try {
            Axios.post('http://localhost:3001/login',{
                username: data.username, 
                password: data.password,
            }
            ).then((response) => {

                // if(response.data.message){
                console.log(response)
                // if(!response.data.auth){
                //     setLoginStatus(false);
                // }else{
                //     console.log(response.data.result);
                    // localStorage.setItem("token", response.data.token)
                    // setLoginStatus(true);
                    // props.history.push("/");

                    // <Redirect 
                    //     to={{
                    //         pathname:'/',
                    //         state: {
                    //                 // loggedIn: true,
                    //                 // department:response.data.result[0].department,
                    //                 // user: response.data.result[0].id,
                    //                 // {{... props} handleLogin(result[0])},
                    //                 props.handleLogin(response.data.result[0])
                    //         }
                    //         }}    
                    // />
                // }

            }, (error) => {
                // console.log(error);
                }
            );
        }catch(err){
            console.log(err)
        }
        
        // if(loginStatus){
        //     // {props.handleLogin(response.data.result[0])}
        //     return <Redirect to='/' />
        // }
    }

    // const userAuthenticated = () => {
    //     Axios.get("http://localhost/3001/userAuth", {
    //         headers:{
    //             "x-access-token": localStorage.getItem("token"),
    //         },
    //     }).then((response) =>{
    //             console.log(response)
    //         })
    // }

    return (
        <div className="form-basic">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="registration">
                    <h1>Log In</h1>
                    <h2>Status: {props.loggedInStatus}</h2>
                        <div className="form-row">
                            <label htmlFor="username">
                                <span>Username</span>
                                <input 
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder=""
                                    {...register("username", {
                                        required: {
                                            value: true,
                                            message: "You must enter a username"
                                            }, 
                                        // minLength: {
                                        //     value: 3,
                                        //     message: "username should be 3 or more characters"
                                        //     }
                                    })
                                    }
                                />
                                {errors.username && (
                                    <p className="error">{errors.username.message}</p>
                                )
                                }
                            </label>
                        </div>
                        
                        <div className="form-row">
                            <label> 
                                <span>Password</span>
                                <input 
                                    name="password" 
                                    type="password"
                                    id="password"
                                    placeholder=""
                                    {...register("password", {
                                        required: { 
                                        value: true, 
                                        message: "You must enter a password"
                                        },
                                        // minLength: {
                                        //     value: 8,
                                        //     message: "Password should be at least 8 characters"
                                        // }
                                    })
                                    } 
                                />
                                {errors.password && (
                                    <p className="error">{errors.password.message}</p>
                                )
                                }
                            </label>
                        </div>

                        <div>
                            <button type="submit">Log in</button>
                            <br /><br /><br />
                        </div>
                        
                        {/* <div>

                            {loginStatus && (
                                <button onClick={userAuthenticated}>Check If Authenticated</button>
                            )}
                        </div> */}
                        <div>
                            <Link to="/Register">Sign Up</Link>
                        </div>
                </div>  
            </form>
        </div>
    )
}

export default Login
