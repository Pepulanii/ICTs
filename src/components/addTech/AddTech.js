import React, {useState} from 'react'
import './AddTech.css'
import Axios from 'axios'

function AddTech() {

    const [Name, setName] = useState('');
    const [Category, setCategory] = useState('');
    const [Description, setDescription] = useState('');
    const [Developer, setDeveloper] = useState('');

    const submitData = () => {
       Axios.post("http://localhost:3001/api/insert", {
           Name: Name, 
           Category: Category, 
           Description: Description, 
           Developer: Developer,
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
                
                <label>Category</label>
                <input 
                    type="text" 
                    name="Category" 
                    onChange={(e)=>{
                    setCategory(e.target.value)
                }}/>
                
                <label>Description</label>
                <input 
                    type="text" 
                    name="Description" 
                    onChange={(e)=>{
                    setDescription(e.target.value)
                }}/>

                <label>Developer</label>
                <input 
                    type="text" 
                    name="Developer" 
                    onChange={(e)=>{
                    setDeveloper(e.target.value)
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
