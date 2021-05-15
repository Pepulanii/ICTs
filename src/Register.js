import React, { useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import "./components/addTech/AddTech.css";

function Register(){
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm();
    let history = useHistory();

    const [deptList, setDeptList] = useState([]);
    
    // const authAxios = axios.create({
    //     baseURL: 'http://localhost:3001/',


    // Using Axios to set the list of ministries from the Database
    // to an object variable 'deptList'    
    useEffect ( () => {
        Axios({
            method: 'get',
            url:'http://localhost:3001/register',
            responseType: 'stream'
        }).then((response) =>{
            setDeptList(response.data)
        })
    }, [])

    // onSubmit function to send post request to server to register a user
    const onSubmit = (data) => {    
        try{
            Axios.post('http://localhost:3001/register', {
                username: data.username, 
                password: data.password,
                department: data.department
                }
            ).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error)
                }
            );
        } catch (err) {
            console.log(err);
        }
        // console.log(data);
        history.push('/Login');

    };
    
    return (
        <div className="form-basic">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="registration">
                <h1>Registration</h1>
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
                                    minLength: {
                                        value: 3,
                                        message: "username should be 3 or more characters"
                                        }}
                                    )
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
                                    minLength: {
                                        value: 8,
                                        message: "Password should be at least 8 characters"
                                    }
                                })
                                } 
                            />
                            {errors.password && (
                                <p className="error">{errors.password.message}</p>
                            )
                            }
                        </label>
                    </div>
                    
                    
                    <div class="form-row">
                    <label>
                        <span>Department</span>
                        
                        <select 
                            name="department"
                            id="department"
                            defaultValue="Select a dept"
                            {... register("department", {
                                required: {
                                    value: true,
                                    message: "Please select a department that you belong to"
                                },
                                pattern: {
                                    value: /\d+/,
                                    message: "Please select a department"
                                }
                            })
                            }
                        >
                            <option value="none" defaultValue>
                                Select an Option
                            </option>
                            {deptList.map((val, i) => {
                                return (
                                    <option key={i} value={val.id_Institution}>{val.Institution_Name}</option>
                                )
                            })}
                        </select>
                        {errors.department && (
                                <p className="error">{errors.department.message}</p>
                            )
                        }
                    </label>
                    </div>
                    
                    <div>
                        <button type="submit">Register</button>
                    </div>
            </div>  
          </form>
        </div>
    )
}
export default Register