import ListElement from "../ListElement/ListElement"

function TrackList({ tracks, setFunc, audioRef }) {
  if (tracks) {
    return(
      <div className="tl-container">
        {
          tracks.map((track) => {
            return (
              <ListElement key={track.id} track={track} setFunc={setFunc} audioRef={audioRef} />
            )
          })
        }
      </div>
    )
  }
}

export default TrackList
