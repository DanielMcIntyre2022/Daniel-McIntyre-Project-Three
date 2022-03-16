// import the firebase component //
import firebase from "./firebase";
// import the useState Hook and the useEffect Hook //
import { useState, useEffect } from 'react';
// import getDatabase, ref, onValue and push //
import { getDatabase, ref, onValue, remove } from 'firebase/database';

function SaveVideoGallery(props) {

    // 1) // initalize a piece of state to represent the saved videos clicked by the user //

    const [savedVideo, setSavedVideo] = useState();

    // 2) // Make second call to the database to retrive the user video saved information //

    useEffect(() => {

        const database = getDatabase(firebase);
        const dbRef = ref(database);

        onValue(dbRef, (response) => {
            const newState = [];
            const data = response.val()
            for (let propertyName in data) {
                newState.push(data[propertyName])
            }
            setSavedVideo(newState);

            console.log(savedVideo);
        });
    }, []);

    // 3) // Create a function to remove the video from the datbase and off of the screen //

    const handleRemoveVideo = () => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        remove(dbRef);
    }

    return (
        props.userInput !== null ? <div className="saved-video-container">
            <h2> Your Saved Videos: </h2>
            <iframe src={`https://www.youtube.com/embed/${savedVideo}`} />
            <button onClick={() => handleRemoveVideo}>Remove</button>
        </div> : null
    )
}

export default SaveVideoGallery; 
