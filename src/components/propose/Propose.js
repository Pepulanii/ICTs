import React, {useState} from 'react'
import './Propose.css'
import Axios from 'axios'

function AddTech() {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('');
    const [requirement_1, setReq1] = useState('');
    const [requirement_2, setReq2] = useState('');
    const [requirement_3, setReq3] = useState('');

    const submitData = () => {
       Axios.post("http://localhost:3001/api/insert_propose", {
           name: name, 
           category: category, 
           priority: priority, 
           requirement_1: requirement_1, 
           requirement_2: requirement_2,
           requirement_3: requirement_3,

        }).then(()=> {
            alert('successful insert');
        });  
    };

    return (
        <div className="propose_tech">
            <h1 className="header_prop">Propose a project that you would like to see developed</h1>

            <div className="form">
                <label>Name of Technology</label>
                <input type="text" 
                    name="name" 
                    onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                
                <label>Category</label>
                <input 
                    type="text" 
                    name="category" 
                    onChange={(e)=>{
                    setCategory(e.target.value)
                }}/>
                
                <label>Priority</label>
                <input 
                    type="text" 
                    name="priority" 
                    onChange={(e)=>{
                    setPriority(e.target.value)
                }}/>

                <label>Enter a Requirement</label>
                <input 
                    type="text" 
                    name="requirement_1" 
                    onChange={(e)=>{
                    setReq1(e.target.value)
                }}/>

                <label>Enter a Requirement</label>
                <input 
                    type="text" 
                    name="requirement_2" 
                    onChange={(e)=>{
                    setReq1(e.target.value)
                }}/>

                <label>Enter a Requirement</label>
                <input 
                    type="text" 
                    name="requirement_3" 
                    onChange={(e)=>{
                    setReq3(e.target.value)
                }}/>
                {/* <label>Taxable</label>
                <select value={this.state.taxable} onChange={this.handleChange}>
                    <option name></option>
                </select> */}
                <button onClick={submitData}>Submit</button>
            </div>
        </div>
    )
}

export default AddTech
