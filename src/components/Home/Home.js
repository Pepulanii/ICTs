import React, {useState, useEffect} from 'react'
import './Home.css'
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
            <h2>Existing Services:</h2>
            <div className="main__cards">
                {techList.map((val)=> {
                    return (
                        <div className="card">
                            <i className=""></i>
                            <div className="card_inner">
                                <p className="card_text">{val.Name} </p><br/>
                                <p className="card_text"> {val.Developer}</p>
                            </div>
                            {/* <div>
                    <h2>Technology: {val.Name} | Category: {val.Category}</h2><br />
                    <h2>Description: {val.Description} | Developer: {val.Developer}</h2><br />
                    <hr />
                            </div> */}
                        </div>)
                })}
            </div>
            <div>
                <h2>Proposed Projects:</h2>
                {propList.map((val)=>{
                    return (
                        <div className="proposals">
                            <p className="prop_title">
                                Name: {val.name} <br />
                                Priority: {val.priority} <br />
                                Category: {val.category} <br />
                                Requirements: {val.requirement_1} | {val.requirement_2} | {val.requirement_3} | {val.requirement_}
                                <br /><hr width="800px" align="left"/>
                            </p>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Home
