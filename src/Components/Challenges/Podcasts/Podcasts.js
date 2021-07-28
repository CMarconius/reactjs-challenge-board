import React, { useState } from 'react'
import './Podcasts.css';

function Podcasts() {

    const [apiResponse, getApiResponse] = useState("YO!");


    return (
        <>
            <div className="Podcasts">    
                <h1>This is the API response:</h1>
                <h1>{apiResponse}</h1>
            </div>
        </>
    )
}

export default Podcasts
