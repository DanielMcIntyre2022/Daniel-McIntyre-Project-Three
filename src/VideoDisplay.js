import UserSaveInput from "./VideoDiary";

function VideoDisplay(props) {

    console.log(props);

    return (
        <div className="videos-container">
            <div className="video-container">
                {/* <h4> {props.videoTitle} </h4> */}
                <iframe src={`https://www.youtube.com/embed/${props.videoSource}`} />
                < UserSaveInput handleSubmit={props.userInput} />
            </div>
        </div>
    )


}

export default VideoDisplay;