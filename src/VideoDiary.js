// import the firebase component //
import firebase from "./firebase";
// import the videoDiary component //
import VideoDisplay from "./VideoDisplay";
// import the useState Hook and the useEffect Hook //
import { useState, useEffect } from 'react';
// import getDatabase, ref, onValue and push //
import { getDatabase, ref, onValue, push } from 'firebase/database';


function VideoDiary(props) {
    // 1) // console log to confirm the data from VideoDisplay is coming back //
    console.log(props)
    // 2) // initialize a piece of state to represent the value of the users saved from thier search and display them at the bottom of the page) //
    const [videoDiaryDisplay, setVideoDiaryDisplay] = useState(null);
    // 3 // initalize a piece of state to represent the userInput from the 'save video' button clicked which cooresponds with the userVideo //
    const [userInput, setUserInput] = useState(null);

    useEffect(() => {

        const database = getDatabase(firebase);
        const dbRef = ref(database);

        onValue(dbRef, (response) => {
            const newState = [];
            const data = response.val()
            for (let propertyName in data) {
                newState.push(data[propertyName])
            }
            setVideoDiaryDisplay(newState);
        });
    }, []);

    const handleInputChange = (event) => {
        setUserInput(event.target.value)
    }

    const handleSubmit = () => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        push(dbRef, videoDiaryDisplay);
        setUserInput();
    }

    return (
        <div>
            <button onClick={handleSubmit}
                onChange={handleInputChange}
                value={userInput}
            > Save video </ button >
        </div >
    );
}

export default VideoDiary;