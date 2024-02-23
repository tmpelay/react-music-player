function ListElement({ track, setFunc, audioRef }) {

  const handleClick = () => {
    setFunc(track)
    document.getElementById("album").style.backgroundImage = `url(${track.album.cover_big})`
    document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${track.album.cover_big})`
    audioRef.current.load()
    audioRef.current.play()
    console.log(track)
  }

  return (
    <div className="le-container" onClick={handleClick}>
      <img src={track.album.cover_small}/>
      <div className="le-content">
        <h3 className="le-title">{track.title}</h3>
        <p className="le-artist">{track.artist.name}</p>
      </div>
    </div>
  )
}

export default ListElement
