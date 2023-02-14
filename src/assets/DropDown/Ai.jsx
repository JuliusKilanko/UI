import React, {useState} from 'react'
import '../../component/NabLinks.css'
import DropdownItems from '../../component/DropdownItems'

function Ai() {
    const [openAi, setOpenAi]= useState(false)

    function handleMouseOn(){
        setOpenAi(true)

    }
    function handleMouseOut(){
        setOpenAi(false)

    }
  return (
    <div>
        <div className=' relative'>
            <li>
                <p className=' text-[14px] cursor-pointer' onMouseOver={handleMouseOn} onMouseOut={handleMouseOut} >AI Service <span>New</span></p>
            </li>
            <div className={`dropdown-Ai ${openAi ? 'active' : 'inactive'}`}>
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
    </div>
  )
}

export default Ai