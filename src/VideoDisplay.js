function VideoDisplay(props) {

    console.log(props);

    return (
        <div className="videos-container">
            <div className="video-container">
                {/* <h4> {props.videoTitle} </h4> */}
                <iframe src={`https://www.youtube.com/embed/${props.videoSource}`} />
                {/* <p>  {props.videoDescription} </p> */}
                {/* <p>  {props.videoDate}</p> */}
                <button> Save video </button>
            </div>
        </div>
    )


}

export default VideoDisplay;