import React from 'react'

const section = ({ heading, paragraph }) => {
  return (
    <div className='service-detail-section'>
      <h4>{heading}</h4>
      <p>{paragraph}</p>
    </div>
  )
}

export default section
