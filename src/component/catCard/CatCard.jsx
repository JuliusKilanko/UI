import React from 'react'

function CatCard({props}) {
  return (
    <div>
      <p>{props.id}</p>
      <img src={props.img} alt="" />
      <span>{props.desc}</span>
      <span>{props.title}</span>
    </div>
  )
}

export default CatCard