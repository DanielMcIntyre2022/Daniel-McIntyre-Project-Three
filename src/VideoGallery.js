// 1) import the VideoDisplay component //

import VideoDisplay from "./VideoDisplay"

// 2) Return a videoDisplay component for each object in the array, and pass it the video ID, title and description via props // 

function VideoGallery(props) {

    console.log(props)

    return (
        <section>
            <h2 id="video-search-description">Trending Videos:</h2>
            <div className="wrapper">
                <ul className="videos">
                    {/* 3) map over the array of searched videos which has been passed via props */}
                    {
                        props.currentVideos.map((video) => {
                            return (

                                < VideoDisplay
                                    videoSource={video.id.videoId}
                                    videoTitle={video.snippet.title}
                                    videoDescription={video.snippet.description}
                                    videoDate={video.snippet.publishTime}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default VideoGallery;
