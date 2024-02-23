import { useState, useRef, useEffect } from "react"

import Songs from './components/Songs/Songs'
import Player from "./components/Player/Player"

import './App.css'

function App() {
  const audioSourceRef = useRef(null)
  const [track, setTrack] = useState(null)

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }

  const pickRandomColor = () => {
    let r = getRandomInt(256), g = getRandomInt(256), b = getRandomInt(256);
    const color = "#" + r.toString(16) + g.toString(16) + b.toString(16)
    return color
  }

  useEffect(() => {
    if (track) {
      console.log(track)
    } else {
      const [color1, color2] = [pickRandomColor(), pickRandomColor()]
      document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), linear-gradient(45deg, ${color1}, ${color2})`
      document.getElementById("album").style.background = `linear-gradient(45deg, ${color1}, ${color2})`
    }
  }, [])

  return (
    <div className="mp-container">
      <div id="album" className="mp-album-container">
      </div>
      <div className="mp-app-container">
        <Songs track={track} setTrack={setTrack} audioRef={audioSourceRef} />
        <Player track={track} reference={audioSourceRef}/>
      </div>
    </div>
  )
}

export default App
