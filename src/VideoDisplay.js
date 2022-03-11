function VideoDisplay(props) {

    console.log(props);

    return (
        <li className="video-container">
            <h4> {props.videoTitle} </h4>
            <iframe src={`https://www.youtube.com/embed/${props.videoSource}`} />
            <p>  {props.videoDescription} </p>
            <p>  {props.videoDate}</p>
        </li>
    )


}

export default VideoDisplay;