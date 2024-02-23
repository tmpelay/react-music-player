function Input({ reference, func }) {
  return(
    <input className="search-input" type="text" ref={reference} onChange={func} />
  )
}

export default Input
