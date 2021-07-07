import React from 'react'
import ReactPlayer from 'react-player/youtube'

function MyVideoPlayer() {
    return (
        <div>
            <p>This is a video I made back in college...</p>
            {/* // Render a YouTube video player */}
            <ReactPlayer width="100%" height="300px" url='https://youtu.be/BnwDROPuVGw' />
        </div>
    )
}

export default MyVideoPlayer
