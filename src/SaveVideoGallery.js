// import the firebase component //
import firebase from "./firebase";
// import the useState Hook and the useEffect Hook 
import { useState, useEffect } from 'react';
// import getDatabase, ref, onValue and push //
import { getDatabase, ref, onValue } from 'firebase/database';

function SaveVideoGallery(props) {

    // 1) // initalize a piece of state to represent the saved videos clicked by the user //

    const [savedVideo, setSavedVideo] = useState([]);

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

        });
    }, []);

    return (
        props.userInput !== null ? <div className="wrapper">
            <h2> Your Saved Videos: </h2>
            <div className="saved-videos-container">
                {savedVideo.map((savedVideoDisplay) => {
                    return (
                        <iframe title="saved-video-iframe" src={`https://www.youtube.com/embed/${savedVideoDisplay}`} />
                    )
                })
                }
            </div>
        </div> : null
    )
}

export default SaveVideoGallery; 
