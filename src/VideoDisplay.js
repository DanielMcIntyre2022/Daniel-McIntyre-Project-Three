// import the firebase component //
import firebase from "./firebase";
// import the useState Hook and the useEffect Hook //
import { useState, useEffect } from 'react';
// import getDatabase, ref, onValue and push //
import { getDatabase, ref, onValue, push } from 'firebase/database';
// import SaveVideo component 
import SaveVideoGallery from "./SaveVideoGallery";

function VideoDisplay(props) {

    // 1) // initalize a piece of state to represent the userInput from the 'save video' button clicked which cooresponds with the userVideo //
    const [userInput, setUserInput] = useState({});

    useEffect(() => {

        const database = getDatabase(firebase);
        const dbRef = ref(database);

        onValue(dbRef, (response) => {
            const newState = [];
            const data = response.val()
            for (let propertyName in data) {
                newState.push(data[propertyName])
            }
            setUserInput(newState);
        });
    }, []);


    const handleSubmit = () => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        push(dbRef, userInput);
        setUserInput(props.videoSource);
    }

    return (
        <div className="videos-container">
            <div className="video-container">
                <iframe src={`https://www.youtube.com/embed/${props.videoSource}`} />
                <button className="video-diary-button" onClick={handleSubmit}
                    value={userInput}
                >
                    Save video </ button >
                < SaveVideoGallery userInput={userInput} />
            </div>
        </div>
    )
}

export default VideoDisplay;
