// import the firebase component //
import firebase from "./firebase";
// import the useState Hook and the useEffect Hook //
import { useState, useEffect } from 'react';
// import getDatabase, ref, onValue and push //
import { getDatabase, ref, onValue, push } from 'firebase/database';


function UserSaveInput(props) {
    // 1) // console log to confirm the data from VideoDisplay is coming back //
    console.log(props)
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
            setUserInput(newState);
        });
    }, []);

    const handleSubmit = () => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        push(dbRef, userInput);
        setUserInput();
    }

    return (
        <div className="video-diary-button">
            <button onClick={handleSubmit}
                value={userInput}
            > Save video </ button >
        </div >
    );
}

export default UserSaveInput;