import { useState, useRef } from "react"

import Input from "../Input/Input"
import TracksList from "../TrackList/TrackList"


function Songs({ track, setTrack, audioRef }) {
  const inputRef = useRef(null)

  const [tracksList, setTracksList] = useState(null)

  const options = {
	  method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': 'fe2c019ce6msh8fdf668ff5000eep1a5c30jsnd01e105c3468',
		  'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	  }
  };

  const handleSearch = async () => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${inputRef.current.value}`;
    const response = await fetch(url, options)
    const result = await response.json()
    setTracksList(result.data)
  }

  return (
    <>
      <Input reference={inputRef} func={handleSearch} />
      <TracksList tracks={tracksList} setFunc={setTrack} audioRef={audioRef} />
    </>
  )
}

export default Songs
