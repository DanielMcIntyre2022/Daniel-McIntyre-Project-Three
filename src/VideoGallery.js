// 1) import the VideoDisplay component //

import VideoDisplay from "./VideoDisplay"

// 2) Return a videoDisplay component for each object in the array, and pass it the video ID, title and description via props // 

function VideoGallery(props) {

    return (
        <section>
            <h2>Your searched videos!</h2>

            <ul className="videos">
                {/* 3) map over the array of searched videos which has been passed via props */}

            </ul>

        </section>
    )
}

export default VideoGallery;
