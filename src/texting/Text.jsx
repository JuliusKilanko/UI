import React from 'react'
import './Text.css'

function Text({props}) {
  return (
    <div className='catCard'>
        <span className='title'>{props.title}</span>
        <span className='desc'>{props.desc}</span>
        <img src={props.img} alt=""/>

    </div>
  )
}

export default Text