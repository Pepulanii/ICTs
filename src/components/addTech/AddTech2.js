import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import './AddTech.css'
import Axios from 'axios'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
function AddTech2() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { LicencingCost: 0.00, AnnualRevenue: 0.00, Users:0,
            MobileEnabled: 'Disabled', SystemName: 'FISP', Access: 'online',
            Status: 'Operational', ServiceType: 'Information Collection', LaunchYear:2016 },
    });

    let history = useHistory();
    
    const notify = () => {
        toast.success('MIS successfully added to database!')
    }
    const [deptList, setDeptList] = useState([]); 
    
    useEffect ( () => {
        Axios({
            method: 'get',
            url:'http://localhost:3001/register',
            responseType: 'stream'
        }).then((response) =>{
            setDeptList(response.data)
        })
    }, [])

    const onSubmit = (data) => {
        // preventDefault();
        try{
            Axios.post("http://localhost:3001/addMIS", {

                MIS_Name: data.Name, 
                MIS_Institution: data.Institution,                  //
                MIS_Description: data.Description,            //Brief description of service     
                MIS_Launch_Year: data.LaunchYear,             //Year service was launched
                MIS_Mobile_Enabled: data.MobileEnabled,       //Mobile cability? enabled or disabled?
                MIS_Serial_Number: data.SerialNumber,         //Auto generated with institution prefix e.g. SZI/01 OR MOH/01
                MIS_System_Name: data.SystemName,             // e.g. e-Payslip system or FISP 
                MIS_Service_Type: data.ServiceType,           //e.g. Revenue Collection, Information Collection, Information Dissemination, Other (Drop down box)
                MIS_Host_Location: data.HostLocation,         // i.e. town and Country whether it is in-house or out-sourced
                MIS_Platform: data.Platform,                  //Programming Platform or Software
                MIS_Source_Code: data.SourceCode,             //Source Code Ownership
                MIS_Code_Type: data.CodeType,                 //Proprietary or Open source (Select button)
                MIS_Licencing_Cost: data.LicencingCost,       //Annual Licensing Cost
                MIS_Anual_Revenue: data.AnnualRevenue,        //Annual Revenue Collected 
                MIS_Number_of_Users: data.Users,              // Total number of Users
                MIS_Accessibility: data.Access,               // Type of accessibility – i.e. online, GWAN
                MIS_Status: data.Status,                        
                MIS_URL : data.websiteURL,
                Agency: data.Agency
            }
            ).then((response)=> {
                console.log(response);
            }, (error) =>{
                console.log(error)
            }
            )
        } catch(err) {
            console.log(err);
        }
        notify();
        history.push('/');
        
    };

    return (
        <div className="form-basic">
            <form onSubmit={handleSubmit(onSubmit)}>    
                <h1>ADD A MIS SYSTEM TO THE DATABASE</h1>

                {/* NAME OF MIS     */}
                <div class="form-row">
                    <label>
                        <span>Name of Technology</span>
                        <input 
                            type="text" 
                            name="Name" 
                            id="Name"
                            {...register("Name", {
                                required: {
                                    value:true,
                                    message:"You can suggest a name for the MIS"
                                },
                                minLength: {
                                    value: 3,
                                    message: "Name of MIS should be 3 characters or more"
                                }
                            })}    
                        />
                        {errors.Name && (
                            <p className="error">{errors.Name.message}</p>
                        )}
                    </label>
                </div>
                    
                {/* INSTITUTION */}
                <div className="form-row">
                    <label>
                        <span>Institution</span>
                        <select 
                            name="Institution"
                            id="Institution"
                            {... register("Institution", {
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
                        {errors.Institution && (
                            <p className="error">{errors.Institution.message}</p>
                        )
                        }
                    </label>
                </div>
                    
                {/* DESCRIPTION     */}
                <div className="form-row">
                    <label>
                        <span>Description</span>
                        <textarea
                            type="text" 
                            name="Description" 
                            rows="10" cols="40" 
                        {...register("Description")}
                        />
                    </label>
                    
                </div>

               {/* LAUNCH YEAR      */}
                <div className="form-row">
                    <label>
                    <span>Year Launched</span>
                        <select 
                            name="LaunchYear" 
                            id="LaunchYear"
                            {...register("LaunchYear")}
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
                
                {/* AGENCY */}
                <div className="form-row">
                    <label>
                        <span>Agency</span>
                        <input 
                            type="text" 
                            name="Agency" 
                            id="Agency"
                            {...register("Agency")}
                        />
                    </label>
                </div>

                {/* MOBILE ENABLED     */}
                <div className="form-row">
                    <label>
                        <span>Mobile Enabled</span>
                        <select 
                            name="MobileEnabled"
                            id="MobileEnabled" 
                            {...register("MobileEnabled")}
                        >
                            <option value="Disabled">Disabled</option>
                            <option value="Enabled">Enabled</option>
                        </select>
                    </label>
                </div>

                {/* SERIAL NUMBER     */}
                <div className="form-row">
                    <label>
                        <span>Serial Number</span>
                        <input 
                            type="text" 
                            name="SerialNumber" 
                            id="SerialNumber"
                            {...register("SerialNumber")}
                        />
                    </label>
                </div>

                {/* SYSTEM CATEGORY     */}
                <div className="form-row">
                    <label>
                        <span>System category</span>
                        <select name="SystemName" 
                                id="SystemName"
                                {...register("SystemName")}
                        >
                            <option selected value="FISP">FISP</option>
                            <option value="E-payslip">E-payslip</option>
                        </select>
                    </label>
                </div>

                {/* SERVICE TYPE         */}
                <div className="form-row">
                    <label>
                        <span>Kind of service</span>
                        <select name="ServiceType" 
                                id="ServiceType"
                                {...register("ServiceType")}
                        >
                            <option value="Information Dissemination">Information Dissemination</option>
                            <option value="Revenue Collection">Revenue Collection</option>
                            <option value="Information Collection">Information Collection</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    
                </div>

                {/* HOSTING LOCATION     */}
                <div className="form-row">
                    <label>
                    <span>Hosting Location</span>
                        <input 
                            type="text" 
                            name="HostLocation" 
                            id="HostLocation"
                            {...register("HostLocation")}

                        />
                    </label>
                </div>
                
                {/* PLATFORM */}
                <div className="form-row">
                    <label>
                        <span>Platform</span>
                        <input 
                            type="text" 
                            name="Platform" 
                            id="Platform"
                            {...register("Platform")}

                        />
                    </label>
                </div> 

                {/* SOURCE CODE OWNERSHIP     */}
                <div className="form-row">
                    <label>
                        <span>Source Code Ownership</span>
                        <input 
                            type="text" 
                            name="SourceCode" 
                            id="SourceCode"
                            {...register("SourceCode")}
                        />
                    </label>
                </div>

                {/* PROPIETARY / OPEN SOURCE      */}
                <div className="form-row">
                    <label>
                        <span>Proprietary / Open Source?</span>
                        <select name="CodeType" 
                                id="CodeType"
                                {...register("CodeType")}
                        >
                            <option value="Open Source">Open Source</option>
                            <option value="Proprietary">Proprietary</option>
                        </select>
                    </label>
                </div>
                    
                {/* LICENSING COST     */}
                <div className="form-row">
                    <label>
                        <span>Licensing Cost</span>
                        <input 
                            type="text" 
                            name="LicencingCost" 
                            id="LicencingCost"
                            {...register("LicencingCost")}
                        />
                        {errors.LicencingCost && (
                            <p className="error">{errors.LicencingCost.message}</p>
                        )
                        }
                    </label>
                </div>

                 {/* ANNUAL REVENUE    */}
                <div className="form-row">
                    <label>
                        <span>Annual Revenue</span>
                        <input 
                            type="text" 
                            name="AnnualRevenue" 
                            id="AnnualRevenue"
                            {...register("AnnualRevenue")}
                        />
                        {errors.AnnualRevenue && (
                            <p className="error">{errors.AnnualRevenue.message}</p>
                        )
                        }
                    </label>
                </div>

                {/* NUMBER OF USERS     */}
                <div className="form-row">
                    <label>
                        <span>Number Of Registered Users</span>
                        <input 
                            type="text" 
                            name="Users" 
                            id="Users"
                            {...register("Users")}
                        />
                    </label>
                </div>
                    
                    {/* <label>Type Of Access</label>
                    <select name="Access" onChange={(e)=>{
                        setAccess(e.target.value)
                    }}>
                        <option value="Online">Online</option>
                        <option value="GWAN">GWAN</option>
                    </select> */}
                

                {/* WEBSITE URL */}
                <div className="form-row">
                    <label>
                        <span>Website URL</span>
                        <input 
                            type="text" 
                            name="websiteURL" 
                            id="websiteURL"
                            {...register("websiteURL")}

                        />
                    </label>
                </div>
                
                {/* TYPE OF ACCESS */}
                <div className="form-row">
                    <label><span>Type Of Access</span></label>
                    <div className="form-radio-buttons">
                        
                        <div>
                            <label>
                                <input 
                                    type="radio" 
                                    name="Access" 
                                    value="Online" 
                                    id="Access"
                                    {... register("Access")}
                                />
                                <span>Online</span>
                            </label>
                        </div>

                        <div>
                            <label>
                                <input 
                                    type="radio" 
                                    name="Access" 
                                    value="GWAN" 
                                    id="Access"
                                    {... register("Access")}
                                />
                                <span>GWAN</span>
                            </label>
                        </div>
                    </div>
                </div>  

                {/* SYSTEM STATUS (OFFLINE/ONLINE) */}
                <div className="form-row">
                    <label><span>Status Of System</span></label>
                    <div className="form-radio-buttons">

                        <div>
                            <label>
                                <input 
                                    type="radio" 
                                    name="Status" 
                                    value="Operational" 
                                    id="Status"
                                    {... register("Status")}
                                />
                                <span>Operational</span>
                            </label>
                        </div>

                        <div>
                            <label>   
                                <input 
                                    type="radio" 
                                    name="Status" 
                                    value="Offline" 
                                    id="Status"
                                    {... register("Status")}
                                />
                                <span>Offline</span>
                            </label>
                        </div>
                    </div>
                </div> 
                
                    
                <div className="form-row">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddTech2
