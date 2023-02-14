import React from 'react'
import Text from './Text'
import { cards } from './TextData'
import Slider from 'infinite-react-carousel';
import './Text.css'

function HandleIncoming() {
  return (
        <div className='slide'>
            <div className='container'>
            <Slider dots >
    <div>
    <h1>hello</h1>
    </div>
    <div>
        <h1>workin</h1>
    </div>
  </Slider>
  </div>
  </div>
  )
}

export default HandleIncoming