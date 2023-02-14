import React, {useState} from 'react'
import DropdownItems from '../../component/DropdownItems'
import '../../component/NabLinks.css'

function Digital() {
    const [openDigi, setopenDigi]= useState(false)

    function handleMouseOn(){
        setopenDigi(true)

    }
    function handleMouseOut(){
        setopenDigi(false)

    }
  return (
    <div className='relative'>
        <li>
                <p className=' text-[14px] cursor-pointer' onMouseOver={handleMouseOn} onMouseOut={handleMouseOut} >Digital Marketing</p>
            </li>
            <div className={`dropdown-Digi ${openDigi ? 'active' : 'inactive'}`}>
            <ul>
            <DropdownItems text = {"Logo Design"}/>
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

export default Digital