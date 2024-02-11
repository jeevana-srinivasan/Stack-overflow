import React from 'react'

const TagsList = ({tag}) => {
  return (
    <div className='tag'>
        <h5>{tag.tagname}</h5>
        <p>{tag.tagdesc}</p>
    </div>
  )
}

export default TagsList