import React from 'react'
import ReactPlayer from 'react-player/youtube'
import './MyVideoPlayer.css'

function MyVideoPlayer() {
    return (
        <>
            <p>This is a video I made back in college...</p>
            <div className="video-wrapper">
                <ReactPlayer width="100%" height="300px" url='https://youtu.be/BnwDROPuVGw' />
            </div>
        </>
    )
}

export default MyVideoPlayer
