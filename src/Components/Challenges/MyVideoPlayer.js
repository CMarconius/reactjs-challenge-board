import React from 'react'
import ReactPlayer from 'react-player/youtube'

function MyVideoPlayer() {
    return (
        <div>
            
            {/* // Render a YouTube video player */}
            <ReactPlayer width="100%" height="100%" url='https://youtu.be/BnwDROPuVGw' />
        </div>
    )
}

export default MyVideoPlayer
