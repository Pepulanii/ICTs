
import React, {useState, useEffect} from 'react'
import './Home2.css'
import Axios from 'axios'

function Home() {
    // const [showServices, setShowServices ] = useState(false);
    const [techList, setTechList] = useState([])
    const [propList, setPropList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response)=>{
            setTechList(response.data)
        })
    }, [])

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get/propose').then((response)=>{
            setPropList(response.data)
        })
    }, [])

    return (
        <div className='home_container'>
             <h1>Existing Services</h1>
            <div className="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                    <th>MIS</th>
                    <th>Ministry</th>
                    <th>Category</th>
                    <th>Agency</th>
                    <th>Description</th>
                    </tr>
                </thead>
                </table>
            </div>
            <div className="tbl-content">
                {techList.map((val)=> {
                    return (
                        
                        <div className="card">
                            <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                                <tr>
                                <td>{val.Name}</td>
                                <td>Ministry Of Health </td>
                                <td>{val.Category}</td>
                                <td>{val.Agency}</td>
                                <td>{val.Description}</td>
                                </tr>
                            
                            </tbody>
                            </table>
                        </div>)
                })}
                
            </div>

        </div>
    )
}

export default Home

