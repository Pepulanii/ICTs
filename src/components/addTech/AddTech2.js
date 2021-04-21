import React, {useState} from 'react'
import './AddTech.css'
import Axios from 'axios'

function AddTech2() {

    const [Name, setName] = useState('');
    const [Institution, setInstitution] = useState(1);
    const [Description, setDescription] = useState('');
    const [LaunchYear, setLaunchYear] = useState(2021);
    const [MobileEnabled, setMobileEnabled] = useState('Disabled');
    const [SerialNumber, setSerialNumber] = useState('');
    const [SystemName, setSystemName] = useState('');
    const [ServiceType, setServiceType] = useState('');
    const [HostLocation, setHostLocation] = useState('');
    const [Platform, setPlatform] = useState('');
    const [SourceCode, setSourceCode] = useState('');
    const [CodeType, setCodeType] = useState('');
    const [LicencingCost, setLicencingCost] = useState(0);
    const [AnnualRevenue, setAnnualRevenue] = useState(0);
    const [Users, setUsers] = useState(0);
    const [Access, setAccess] = useState('Online');

    const submitData = () => {
       Axios.post("http://localhost:3001/api/insert_MIS", {
           MIS_Name: Name, 
           MIS_Institution: Institution,                  //
           MIS_Description: Description,            //Brief description of service     
           MIS_Launch_Year: LaunchYear,             //Year service was launched
           MIS_Mobile_Enabled: MobileEnabled,       //Mobile cability? enabled or disabled?
           MIS_Serial_Number: SerialNumber,         //Auto generated with institution prefix e.g. SZI/01 OR MOH/01
           MIS_System_Name: SystemName,             // e.g. e-Payslip system or FISIP 
           MIS_Service_Type: ServiceType,           //e.g. Revenue Collection, Information Collection, Information Dissemination, Other (Drop down box)
           MIS_Host_Location: HostLocation,         // i.e. town and Country whether it is in-house or out-sourced
           MIS_Platform: Platform,                  //Programming Platform or Software
           MIS_Source_Code: SourceCode,             //Source Code Ownership
           MIS_Code_Type: CodeType,                 //Proprietary or Open source (Select button)
           MIS_Licencing_Cost: LicencingCost,       //Annual Licensing Cost
           MIS_Anual_Revenue: AnnualRevenue,        //Annual Revenue Collected 
           MIS_Number_of_Users: Users,              // Total number of Users
           MIS_Accessibility: Access,               //Type of accessibility – i.e. online, GWAN


        }).then(()=> {
            alert('successful insert');
        });  
    };

    return (
        <div className="AddTech">
            <h1>ADD A MIS SYSTEM TO THE DATABASE</h1>

            <div className="form">
                <label>Name of Technology</label>
                <input type="text" 
                    name="Name" 
                    onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                
                <label>Institution</label>
                <input 
                    type="text" 
                    name="Institution" 
                    onChange={(e)=>{
                    setInstitution(e.target.value)
                }}/>
                
                <label>Description</label>
                <textarea
                    type="text" 
                    name="Description" 
                    rows="10" cols="40" 
                    onChange={(e)=>{
                    setDescription(e.target.value)
                }}/>

                
                <label>Year Launched</label>
                <select name="LaunchYear" 
                onChange={(e)=>{setLaunchYear(e.target.value)}}>
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
                <label>Mobile Enabled</label>
                <select name="MobileEnabled" onChange={(e)=>{
                    setMobileEnabled(e.target.value)
                }}>
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                </select>
                <label>Serial Number</label>
                <input 
                    type="text" 
                    name="SerialNumber" 
                    onChange={(e)=>{
                    setSerialNumber(e.target.value)
                }}/>
                <label>System category</label>
                <select name="SystemName" onChange={(e)=>{
                    setSystemName(e.target.value)
                }}>
                    <option value="E-payslip">E-payslip</option>
                    <option value="FISP">FISP</option>
                </select>
                <label>Kind of service</label>
                <select name="ServiceType" onChange={(e)=>{
                    setServiceType(e.target.value)
                }}>
                    <option value="Revenue Collection">Revenue Collection</option>
                    <option value="Information Collection">Information Collection</option>
                    <option value="Information Dissemination">Information Dissemination</option>
                    <option value="Other">Other</option>
                </select>
                <label>Hosting Location</label>
                <input 
                    type="text" 
                    name="Location" 
                    onChange={(e)=>{
                    setHostLocation(e.target.value)
                }}/>
                <label>Platform</label>
                <input 
                    type="text" 
                    name="Platform" 
                    onChange={(e)=>{
                    setPlatform(e.target.value)
                }}/>
                
                <label>Source Code Ownership</label>
                <input 
                    type="text" 
                    name="SourceCode" 
                    onChange={(e)=>{
                    setSourceCode(e.target.value)
                }}/>
                
                <label>Proprietary / Open Source?</label>
                <select name="CodeType" onChange={(e)=>{
                    setCodeType(e.target.value)
                }}>
                    <option value="Open Source">Open Source</option>
                    <option value="Proprietary">Proprietary</option>
                </select>
                
                <label>Licensing Cost</label>
                <input 
                    type="text" 
                    name="LicencingCost" 
                    onChange={(e)=>{
                    setLicencingCost(e.target.value)
                }}/>

                <label>Annual Revenue</label>
                <input 
                    type="text" 
                    name="AnnualRevenue" 
                    onChange={(e)=>{
                    setAnnualRevenue(e.target.value)
                }}/>

                <label>Number Of Registered Users</label>
                <input 
                    type="text" 
                    name="Users" 
                    onChange={(e)=>{
                    setUsers(e.target.value)
                }}/>

                <label>Type Of Access</label>
                <select name="Access" onChange={(e)=>{
                    setAccess(e.target.value)
                }}>
                    <option value="Online">Online</option>
                    <option value="GWAN">GWAN</option>
                </select>

                <button onClick={submitData}>Submit</button>
            </div>

        </div>
    )
}

export default AddTech2
