const List = ({ heading, paragraph, list }) => {
  return (
    <div className='list-section'>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  )
}

export default List
