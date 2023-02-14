import Navbar from "../../component/navbar/Navbar"
import "./home.css";
import SearchIcon from '@mui/icons-material/Search';
import IMAGE from '../../assets/img/man.png'
import Trusted from "../../component/Trusted/Trusted";
import MostPopular from "../../component/MostPopular/MostPopular";
import HandleIncoming from "../../texting/HandleIncoming";

function Home() {
  return (
    <div>
    <div className=" bg-green-800 min-h-[500px]">
      <Navbar />
      <div className="flex justify-between">
      <div className=" px-6 py-32 md:w-[750px] mx-auto md:mx-0">
        <div className="mx-auto w-[450px] sm:ml-[100px] md:mx-0 md:w-full">
        <span className=" text-4xl text-white sm:text-5xl sm:max-w-[100px] sm:mx-auto md:text-[55px] leading-normal font-bold">Find the perfect <span className=" font-thin stylingText">freelance</span> services for your business</span>
        </div>
        <div className=" w-[87%] mx-auto sm:w-[500px] md:w-[600px] bg-white h-10 md:h-12 rounded-md flex items-center pl-4 justify-between mt-5 flex-col md:flex-row md:mx-0"><div className=" flex items-center justify-between w-full h-full">
        <SearchIcon className=" text-gray-400 md:text-2xl"/> <input type="text" 
         className=" bg-transparent w-[100%] h-10 outline-none rounded-sm indent-6 md:w-[550px] md:h-12 md:indent-2" placeholder='Try "building mobile app"'/></div> <button className=" bg-green-600 ml-[-14px] cursor-pointer sm:ml-[-px] mt-3 px-4 py-4 flex items-center justify-center h-10 rounded-sm md:h-12 md:px-6 text-white w-[410px] sm:w-[496px] mx-auto md:mt-0">Search</button></div>
         <div className=" flex
         items-center justify-between w-[450px] text-white gap-1 py-3 mt-14 md:mt-4 sm:w-[500px] md:w-[675px] mx-auto md:mx-0">
          <p className=" text-[12px] md:text-[15px] font-bold">Popular:</p>
          <ul className=" flex gap-1">
            <li className=" border px-3 py-1 font-semibold text-[11px] sm:text-[18px] rounded-full md:text-sm hover:bg-white hover:text-black cursor-pointer">Website Design</li>
            <li className=" border px-3 py-1 font-semibold text-[11px] sm:text-[18px] rounded-full md:text-sm hover:bg-white hover:text-black cursor-pointer">WordPress</li>
            <li className=" border px-3 py-1 font-semibold text-[11px] sm:text-[18px] rounded-full md:text-sm hover:bg-white hover:text-black cursor-pointer">Logo Design</li>
            <li className=" border px-3 py-1 font-semibold text-[11px] sm:text-[18px] rounded-full md:text-sm hover:bg-white hover:text-black cursor-pointer">Ai Services</li>
          </ul>
         </div>
      </div>
      <div className="left mr-[0px]">
        <img src={IMAGE} alt="" className="mr-[-20px]"/>
      </div>
      </div>
    </div>
<Trusted />
<MostPopular />

    </div>
  )
}

export default Home