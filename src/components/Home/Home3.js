
import React, {useState, useEffect} from 'react'
import './Home3.css'
import Axios from 'axios'

function Home() {
    // const [showServices, setShowServices ] = useState(false);
    const [techList, setTechList] = useState([])
    // const [propList, setPropList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/home').then((response)=>{
            setTechList(response.data)
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
                    <th>MIS</th>
                    <th>Description</th>
                    <th>Year Launched</th>
                    <th>Ministry</th>
                    {/* <th>Description</th> */}
                    </tr>
                </thead>
                <tbody>
                    {techList.map((val)=> {
                        return (
                                <tr>
                                <td>{val.MIS_Name}</td>
                                <td>{val.MIS_Description} </td>
                                <td>{val.MIS_Launch_Year}</td>
                                <td>{val.Institution_Name}</td>
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

export default Home

