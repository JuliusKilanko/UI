import React from 'react'
import SimpleSlider from '../Slider/Slider'
import HandleIncoming from '../../texting/HandleIncoming'

function MostPopular() {
  return (
    <div className='py-24 px-[14px]'>
        <div>
            <h1 className=' font-bold text-3xl'>Popular professional services</h1>
            <div>
                <HandleIncoming />
                {/* <SimpleSlider /> */}
            </div>
        </div>
    </div>
  )
}

export default MostPopular