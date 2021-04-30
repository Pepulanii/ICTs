
import React, {useState, useEffect} from 'react'
import '../Home/Home3.css'
import Axios from 'axios'

function Eservices() {
    // const [showServices, setShowServices ] = useState(false);
    const [servicesList, setEservices] = useState([])
    // const [propList, setPropList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/services').then((response)=>{
            setEservices(response.data)
        })
    }, [])

    // useEffect(()=>{
    //     Axios.get('http://localhost:3001/api/get/propose').then((response)=>{
    //         setPropList(response.data)
    //     })
    // }, [])

    return (
        <div className='home_container'>
              {/* <h1>Existing Services</h1> */}
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
                    {servicesList.map((val)=> {
                        return (
                                <tr>
                                <td>{val.EName}</td>
                                <td>{val.E_Description} </td>
                                <td>{val.Institution_Name}</td>
                                <td>{val.EStatus}</td>
                                {/* <td>{val.Description}</td> */}
                                </tr>
                        )
                    })}
                    {/* <tr>
                        <td>Some Data</td>
                        <td>More data</td>
                        <td>garbage data</td>
                    </tr> */}
                </tbody>
            </table>

        </div>
    )
}

export default Eservices

