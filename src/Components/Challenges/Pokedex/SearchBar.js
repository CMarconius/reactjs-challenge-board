import React from 'react'

function SearchBar({keyword,setKeyword}) {
    
    const BarStyling = {background:"#F2F1F9", border:"none", padding:"0.5rem", width: "100%"};
    
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
