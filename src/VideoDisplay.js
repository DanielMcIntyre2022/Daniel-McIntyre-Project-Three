function VideoDisplay(props) {

    console.log(props);

    return (
        <li className="video-container">
            <img src={props.imageSource} alt="" />
        </li>
    )


}

export default VideoDisplay;