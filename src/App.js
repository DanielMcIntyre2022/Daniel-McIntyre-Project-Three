import './App.css';
// import axios so that we can use it to make our aysnc request to the API //
import axios from 'axios';
// import the useState Hook and the useEffect Hook //
import { useState, useEffect } from 'react';
// import the VideoSearch component // 
import VideoSearch from './VideoSearch';
// import the VideoGallrey component //
import VideoGallery from './VideoGallery';
// import the videoDiary component //
import VideoDiary from './VideoDiary';

function App() {

  // 1) call useState to initialize state to keep track of the data which is returned from the API //
  // 2) Initialize our state as an empty array, from the API return of objects //
  const [videoDisplay, setVideoDisplay] = useState([]);

  // 3)  // initialize another piece of state to represent the VideoSearchQuery value (which the user will be searching through the form 

  const [videoSearchQuery, setvideoSearchQuery] = useState(null);

  // 4) Once the component has rendered,  run the useEffect function in order to fetch some data from the API //
  useEffect(() => {

    const API_KEY = 'AIzaSyAJ4akmIO_29YCPrpZr2rZRWUgO_3-e7-E';

    axios({
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: API_KEY,
        part: 'snippet',
        q: videoSearchQuery,
        maxResult: 1,
      }
    }).then((apiData) => {
      console.log(apiData);
      // 5) Test the API to query for videos that match the hardcoded query parameter and check the data which is returned by console logging it //

      // 6) take the data that is returned from the API can save it within state //
      setVideoDisplay(apiData.data.items)
    })

    // 7) run this side effect every time the user submits the form with a new search query //

  }, [videoSearchQuery])

  // 8) Define a function which will be passed as props to the VideoSearch component //
  // 9) When this function is called - by VideoSearch - it will update the videoSearchQuery state
  const searchVideoQuery = function (event, searchedVideo) {

    // 10)  Prevent the default on the form AKA tell is to prevent its default behavior (refreshing the page once the user submits the form - or selects videos to search)
    event.preventDefault();

    // 11) Call the state updater function and use the searched option value to update the SearchedVideo state //
    setvideoSearchQuery(searchedVideo);

  }

  return (
    <div className="App">
      <header>
        <h1>Video Diary</h1>
      </header>
      < VideoSearch handleSubmit={searchVideoQuery} />
      < VideoGallery />
    </div>
  );
}

export default App;
