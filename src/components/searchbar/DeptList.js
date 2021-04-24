import React from 'react';
import '../Home/Home3.css';

const DeptList = ({techList=[]}) => {
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
  );
}

export default DeptList