import React, { useState } from 'react'
import './Podcasts.css';

function Podcasts() {

    const [apiResponse, getApiResponse] = useState("YO!");

    const ClientId = "d867dfaa810e4f9aba624fe61ad593b1"
    const redirectUri = "http://localhost:3000/"
    const spotifyURL = `https://accounts.spotify.com/authorize?client_id=d867dfaa810e4f9aba624fe61ad593b1&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
    



    return (
        <>
            <div className="Podcasts">    
                <h1>This is the API response:</h1>
                <h1>Not so much coding done today... I spent some time reading about using Axios</h1>

            </div>
        </>
    )
}

export default Podcasts
