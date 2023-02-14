import "./navbar.css"
import LanguageIcon from '@mui/icons-material/Language';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState, useEffect } from "react";
import NabLinks from "../NabLinks";
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/user.png'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import '../../assets/DropDown/use.css'


function Navbar() {

    const [active , setActive] = useState(false)

    const currentSeller ={
        isSeller : false,
        id : 1,
        userName : 'Olaoluwa',
        icon : logo
    }


    const isActive=()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);
        return () => {
            window.removeEventListener('scroll', isActive)
        };
    }, []);

    const [openUser, setOpenUser]= useState(false)

    function handleOpenUser(){
        setOpenUser(!openUser)
    }
  return (
    <div className="navbar  text-white">
        <div className={`${active ? 'nav-Container active' : 'custom flex justify-between items-center bg-transparent px-[14px] py-[10px]'} `}>
            <div className="logo w-fit flex items-end">
                <span className=" flex items-end gap-1 text-4xl logo font-extrabold">fiverr</span><span className=""><div className=" w-[9px] h-[9px] rounded-full bg-green-700 mt-[-15px]"></div></span>
            </div>
            {active &&(
                <div className="w-[400px] flex justify-between items-center">
                <input type="text" placeholder="What service are you looking for today?" className="w-[90%] py-2 outline-none border indent-3" />
                <div className="bg-black h-[42px] w-[45px] flex justify-center items-center">
                <SearchIcon  className=" text-white"/>
                </div>
                </div>
            )}
            <div className="link hidden sm:block md:block ">
                <ul className=" block sm:flex sm:gap-7 items-center">
                    <li className=" mt-2 sm:mt-0 font-semibold cursor-pointer sm:hidden md:block">Fiverr Business</li>
                    <li className=" mt-2 sm:mt-0 font-semibold cursor-pointer sm:hidden md:block">Explore</li>
                    <li className=" mt-2 sm:mt-0 font-semibold cursor-pointer flex items-center gap-2 sm:hidden md:flex"><LanguageIcon fontSize="25px"/> English</li>
                    <li className=" mt-2 sm:mt-0 font-semibold cursor-pointer flex items-center gap-2 sm:hidden md:flex"><MonetizationOnIcon fontSize="25px"/>USD</li>
                    {!currentSeller ?.isSeller && <li className=" mt-2 sm:mt-0 font-semibold cursor-pointer sm:hidden md:block">Become a Seller</li> }
                    <div className=" sm:flex sm:gap-5 sm:items-center">
                    {!currentSeller ?.isSeller && <li className=" mt-2 sm:mt-0 font-semibold cursor-pointer">Sign in</li>}
                    {!currentSeller ?.isSeller && <li className={` ${active ? 'border-green-600 text-green-600' : ''} mt-2 sm:mt-0 font-bold cursor-pointer border h-[40px] px-6 flex justify-center items-center hover:bg-green-600 hover:text-black rounded-[5px] hover:border-green-600`}>Join</li>}
                    </div>
                        {currentSeller?.isSeller &&(
                            <div className=' relative'>
        <div className="user w-10 rounded-full object-cover">
        <img src={logo} alt="" className="rounded-full border cursor-pointer object-cover" onClick={handleOpenUser}/>
        <div className={`Users ${openUser ? 'active' : 'inactive'}`}>
        <ul>
           <li className='flex justify-between cursor-pointer'>{currentSeller.userName} <AccountBoxIcon /></li> 
           <li className='flex justify-between cursor-pointer'>Gigs <StorefrontIcon /></li>
           <li className='flex justify-between cursor-pointer'>New Gig <AddBusinessIcon /></li>
           <li className='flex justify-between cursor-pointer'>My Orders <LocalAtmIcon /></li>
           <li className='flex justify-between cursor-pointer'>Messages <MarkEmailUnreadIcon /></li>
           <li className='flex justify-between cursor-pointer'>Logout <ExitToAppIcon /></li>
        </ul>
        </div>
        </div>
    </div>
                        )}
                </ul>
            </div>

            <div className=" sm:hidden">
            <MenuOpenIcon  className=" cursor-pointer"/>
            </div>
        </div>

        {active && (
            <>
           <NabLinks />
            </>
        )}
    </div>
  )
}

export default Navbar