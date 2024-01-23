import React from 'react'

const Paragraph = ({title,design}) => {
  return (
    <p className={design}>{title}</p>
  )
}

export default Paragraph