import React, {useState, useEffect} from 'react'
import './Home3.css'
import Axios from 'axios'

function Home(props) {
    const [techList, setTechList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [nameFilter, setFilter] = useState('MIS_Name');

    useEffect(() => {
        Axios({
            method: 'get',
            url:'http://localhost:3001/',
            credentials: 'true',
            responseType: 'stream'
        }).then((response)=>{
            setTechList(response.data)
        })
    }, [])
    
    return (
        <div className='home_container'>
              {/* <h1>Existing Services</h1> */}
              {/* <h1>Status: {props.loggedInStatus}</h1> */}
              {/* <h2>Department: {props.department}</h2> */}
              
              <input type="text" placeholder="Search MIS..." onChange={event =>{setSearchTerm(event.target.value)}} />
              <p>Filter search according to:</p>
              <div onChange={event =>{setFilter(event.target.value)}}> 
                <label>
                    <input 
                        type="radio" 
                        name="searchType"
                        value="MIS_Name"
                        // onchange={event =>{setFilter(event.target.value)}}
                    />
                    <span>Name of MIS</span>
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
                    <th>MIS</th>
                    <th>Description</th>
                    <th>Year Launched</th>
                    <th>Ministry</th>
                    </tr>
                </thead>
                <tbody>
                    {techList.filter((val)=> {
                        if (nameFilter === "MIS_Name"){
                            if (searchTerm === "") {
                                return val
                            } else if(val.MIS_Name.toLowerCase().includes(searchTerm.toLowerCase())){
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
                                <td>{val.MIS_Name}</td>
                                <td>{val.MIS_Description} </td>
                                <td>{val.MIS_Launch_Year}</td>
                                <td>{val.Institution_Name}</td>
                            </tr>
                        )
                    })}
    
                </tbody>
            </table>

        </div>
    )
}

export default Home

