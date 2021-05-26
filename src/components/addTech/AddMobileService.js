import React, { useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './AddTech.css'


function AddMobileService() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm({
        defaultValues: { platform: "multi-platform"}
    });
    let history = useHistory();

    const [deptList, setDeptList] = useState([]);
    const notify = () => {
        toast.success('Successfully added mobile service.')
    }

    useEffect ( () => {
        axios({
            method: 'get',
            url:'http://localhost:3001/register',
            responseType: 'stream'
        }).then((response) =>{
            setDeptList(response.data)
        })
    }, [])

    const onSubmit = (data) => {    
        try{
            axios.post('http://localhost:3001/mobile', {
                MobileName: data.name, 
                MobileDescription: data.description,
                Institution: data.institution,
                LaunchYear: data.year,
                Platform: data.platform,
                Agency: data.agency
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
        notify();
        history.push('/');
    };

    return (
        <div className="form-basic">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Add a mobile service</h1>
                
                {/* Mobile service name */}
                <div className="form-row">
                    <label>
                        <span>Name</span>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder=""
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Please enter a name"
                                    }, 
                                minLength: {
                                    value: 3,
                                    message: "mobile service name should be 3 or more characters"
                                    }}
                                )
                            } 
                        />
                        {errors.name && (
                            <p className="error">{errors.name.message}</p>
                        )}
                    </label>
                </div>

                {/* Description of mobile service */}
                <div className="form-row">
                    <label>
                        <span>Description</span>
                        <textarea
                            type="text" 
                            name="description" 
                            rows="6" cols="80" 
                        {...register("description")}
                        />
                    </label>       
                </div>

                {/* Institution to which the mobile service belongs */}
                <div className="form-row">
                    <label>
                        <span>Institution</span>
                        <select 
                            name="institution"
                            id="institution"
                            {... register("institution", {
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
                            <option value="none">
                                Select an Option
                            </option>
                            {deptList.map((val, i) => {
                                return (
                                    <option key={i} value={val.id_Institution}>{val.Institution_Name}</option>
                                )
                            })}
                        </select>
                        {errors.institution && (
                            <p className="error">{errors.institution.message}</p>
                            )
                        }
                    </label>
                </div> 

                {/* Year which the mobile service was launched */}
                <div className="form-row">
                    <label>
                    <span>Year Launched</span>
                        <select 
                            name="year" 
                            id="year"
                            {...register("year")}
                        >
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                        </select>
                    </label> 

                </div>
                

                {/* Platform on which the mobile service is available */}
                <div className="form-row">
                    <label><span>Platform</span></label>
                    <div className="form-radio-buttons">
                        
                        <div>
                            <label>
                                <input 
                                    type="radio" 
                                    name="platform" 
                                    value="Android" 
                                    id="platform"
                                    {... register("platform")}
                                />
                                <span>Android</span>
                            </label>    
                        </div>
                        
                        <div>
                            <label>
                                <input 
                                    type="radio" 
                                    name="platform" 
                                    value="iOS" 
                                    id="platform"
                                    {... register("platform")}
                                />
                                <span>iOS</span>
                            </label>
                        </div>
                        
                        <div>
                            <label>
                                <input 
                                    type="radio" 
                                    name="platform" 
                                    value="multi-platform" 
                                    id="platform"
                                    {... register("platform")}
                                />
                                <span>Multi-platform</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <label>
                        <span>Agency</span>
                        <input
                            type="text"
                            name="agency"
                            id="agency"
                            placeholder=""
                            {...register("agency")} 
                        />
                    </label>
                </div>

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
       
    )
}

export default AddMobileService
