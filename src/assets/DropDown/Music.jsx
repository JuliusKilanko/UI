import React, {useState} from 'react'
import DropdownItems from '../../component/DropdownItems'
import '../../component/NabLinks.css'

function Music() {
    const [openMusic, setOpenMusic]= useState(false)

    function handleMouseOn(){
        setOpenMusic(true)

    }
    function handleMouseOut(){
        setOpenMusic(false)

    }
  return (
    <div className='relative'>
         <li>
                <p className=' text-[14px] cursor-pointer' onMouseOver={handleMouseOn} onMouseOut={handleMouseOut} >Music and Audio</p>
            </li>
            <div className={`dropdown-Music ${openMusic ? 'active' : 'inactive'}`}>
            <ul>
            <DropdownItems text = {"Development"}/>
            <DropdownItems text = {"Business"}/>
            <DropdownItems text = {"Finance and Accounting"}/>
            <DropdownItems text = {"IT & Software"}/>
            <DropdownItems text = {"Office Productivity"}/>
            <DropdownItems text = {"Personal Development"}/>
            <DropdownItems text = {"Design"}/>
            <DropdownItems text = {"Marketing"}/>
            <DropdownItems text = {"Lifestyle"}/>
            <DropdownItems text = {"Photography & Video"}/>
            <DropdownItems text = {"Health & Fitness"}/>
            <DropdownItems text = {"Music"}/>
        </ul>
            </div>
    </div>
  )
}

export default Music