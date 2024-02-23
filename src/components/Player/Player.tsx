function Player({ track, reference }) { 
  const trackSource = track ? track.preview : ""

  return(
    <audio controls ref={reference}>
      <source src={trackSource} />
    </audio>
  )
}

export default Player
