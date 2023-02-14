import React from 'react'
import faceBook from '../../assets/fiverrFace.png'
import google from '../../assets/google.png';
import netflix from '../../assets/netflix.png'
import P_G from '../../assets/pandg.png';
import PayPal from '../../assets/paypal.png'

function Trusted() {
  return (
    <div className='flex py-6 px- justify-center items-center gap-16 bg-gray-200/30'>
        <div>
        <span className=' text-xl font-bold text-gray-500'>Trusted by:</span>
        </div>
        <div className='flex gap-16'>
            <img src={faceBook} alt="" />
            <img src={google} alt="" />
            <img src={netflix} alt="" />
            <img src={P_G} alt="" />
            <img src={PayPal} alt="" />
        </div>
    </div>
  )
}

export default Trusted