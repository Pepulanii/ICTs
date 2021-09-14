
import React, {useState, useEffect} from 'react'
import '../Home/Home3.css'
import Axios from 'axios'

const Eservices = props => {
    // const [showServices, setShowServices ] = useState(false);
    const [servicesList, setEservices] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [nameFilter, setFilter] = useState('EName');
    
    useEffect(() => {
        Axios.get('http://localhost:3001/services').then((response)=>{
            setEservices(response.data)
        })
    }, [])


    return (
        <div className='home_container'>
            {/* <h1>Existing Services</h1> */}
            <h1>Status: {props.loggedInStatus}</h1>
            <input type="text" placeholder="Search E Service..." onChange={event =>{setSearchTerm(event.target.value)}} />
            <p>Filter search according to:</p>
            <div onChange={event =>{setFilter(event.target.value)}}> 
            <label>
                <input 
                    type="radio" 
                    name="searchType"
                    value="EName"
                    // onchange={event =>{setFilter(event.target.value)}}
                />
                <span>Name of E Service</span>
            </label>
            <label>
                <input 
                    type="radio" 
                    name="searchType"
                    value="Institution_Name"
                    // onchange={event =>{setFilter(event.target.value)}}
                />
                <span>Ministry</span>
            </label>
            </div>

            <table>
                <thead>
                    <tr>
                    <th>E-Service</th>
                    <th>Description</th>
                    <th>Ministry</th>
                    <th>Status</th>
                    {/* <th>Description</th> */}
                    </tr>
                </thead>
                <tbody>
                    {servicesList.filter((val)=> {
                        if (nameFilter === "EName"){
                            if (searchTerm === "") {
                                return val
                            } else if(val.EName.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val
                            }
                        } 
                        
                        if (nameFilter === "Institution_Name") {
                            if (searchTerm === "") {
                                return val
                            } else if(val.Institution_Name.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val
                            }
                        }
                    }).map((val, i)=> {
                        return (
                            <tr key={i}>
                                <td>{val.EName}</td>
                                <td>{val.E_Description} </td>
                                <td>{val.Institution_Name}</td>
                                <td>{val.EStatus}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Eservices

