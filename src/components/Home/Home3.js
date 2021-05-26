import React, {useState, useEffect} from 'react'
import './Home3.css'
import Axios from 'axios'

function Home(props) {
    const [techList, setTechList] = useState([])

    useEffect(() => {
        Axios({
            method: 'get',
            url:'http://localhost:3001/',
            responseType: 'stream'
        }).then((response)=>{
            setTechList(response.data)
        })
    }, [])
    
    return (
        <div className='home_container'>
              {/* <h1>Existing Services</h1> */}
              <h1>Status: {props.loggedInStatus}</h1>
              {/* <h2>Department: {props.department}</h2> */}
            <table>
                <thead>
                    <tr>
                    <th>MIS</th>
                    <th>Description</th>
                    <th>Year Launched</th>
                    <th>Ministry</th>
                    {/* <th>Description</th> */}
                    </tr>
                </thead>
                <tbody>
                    {techList.map((val, i)=> {
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

