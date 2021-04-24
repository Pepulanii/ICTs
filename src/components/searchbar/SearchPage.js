import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import DeptList from './DeptList';
import Axios from 'axios'

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [techListDefault, setTechListDefault] = useState();
//   const [deptList, setDeptList] = useState();
  const [techList, setTechList] = useState([])


  const fetchData = async () => {
    return await fetch('http://localhost:3001/api/get')
      .then(response => response.json())
      .then(data => {
        setTechList(data) 
         setTechListDefault(data)
       });}
       

  const updateInput = async (input) => {
     const filtered = setTechListDefault.filter(tech => {
      return tech.MIS_Name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setTechList(filtered);
  }

  useEffect( () => {fetchData()},[]);
    // useEffect(() => {
    //     Axios.get('http://localhost:3001/api/get').then((response)=>{
    //         setTechList(response.data)
    //         setTechListDefault(response.data)
    //     })
    // }, [],[])
	
  return (
    <>
      <h1>Department List</h1>
      <Searchbar 
       input={input} 
       onChange={updateInput}
      />
      <DeptList techList={techList}/>
    </>
   );
}

export default SearchPage