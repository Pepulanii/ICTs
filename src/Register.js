import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import "./components/addTech/AddTech.css";

function Register(){

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm();

    const [deptList, setDeptList] = useState([]);
    const [department, setDepartment] = useState([1]);
    
    const onSubmit = (data) => {
    //     Axios.post("http://localhost:3001/register", {
    //         username: usernameReg, 
    //         password: passwordReg,
    //         department: departmentReg,
        
    //     }).then((response) => {
    //         console.log(response);
    //     });
            console.log(data);
    };
    useEffect(() => {
        Axios.get('http://localhost:3001/register').then((response) =>{
            setDeptList(response.data)
        })
    }, []);

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
                        <option value="none" selected disabled hidden>
                            Select an Option
                        </option>
                        {deptList.map((val) => {
                            return (
                                <option value={val.id_Institution}>{val.Institution_Name}</option>
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