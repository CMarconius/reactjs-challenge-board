import React from 'react'

function SearchBar({keyword,setKeyword}) {
    
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    
    return (
        <input 
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"Search For Pokemon"}
        onChange={(e) => setKeyword(e.target.value)}
        />
    );
}

export default SearchBar
