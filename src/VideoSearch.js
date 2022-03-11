// 1) import the useState Hook //

import { useState } from 'react';

function VideoSearch(props) {

    // 2) initialize state to track the changing value of the user input on the search form //

    const [searchValue, setSearchValue] = useState('');


    // 3) Track the change event on the search form element 

    const handleChange = function (event) {

        // 4) take the value of the user’s search query and save it in state //

        setSearchValue(event.target.value);

    }

    // 5) A submit event on the form

    // 6) then call the function passed via props from the App component which will update the videoSearchQuery state within App

    return (

        // 4) track a submit event on the form (search bar)

        <form action="" onSubmit={(event) => {
            props.handleSubmit(event, searchValue)
        }} onChange={handleChange} value={searchValue}>


            <input type="text" placeholder="   Enter your video search..." name="search" />

            <button>Search for my videos</button>

        </form>

    )
}
export default VideoSearch;


