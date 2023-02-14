import React from 'react'
import Tech from '../assets/DropDown/Tech'
import Write from '../assets/DropDown/Write'
import Digital from '../assets/DropDown/Digital'
import Ai from '../assets/DropDown/Ai'
import Video from '../assets/DropDown/Video'
import LifeStyle from '../assets/DropDown/LifeStyle'
import Business from '../assets/DropDown/Business'
import Graphics from '../assets/DropDown/Graphics'
import Music from '../assets/DropDown/Music'
import './NabLinks.css'

function NabLinks() {

  return (
    <div className=' hidden md:block top'>
        <ul className=' flex justify-between px-[14px] py-[10px] bg-white border-t-2 text-black flex-wrap gap-4'>
            <Graphics />
            <Digital />
            <Write />
            <Video />
            <Tech /> 
            <Music />
            <Business />
            <LifeStyle />
            <Ai />
        </ul>
    </div>
  )
}

export default NabLinks