import React, {useState} from 'react';


const Searchbar = () => {
    const [keyword, setKeyword] = useState('')
  const BarStyling = {width:"20rem",background:"#233456", border: "1px solid", padding:"0.5rem", color:"#fff"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search MIS"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default Searchbar;