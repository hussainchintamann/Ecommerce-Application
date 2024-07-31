import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegUser,FaShoppingCart  } from "react-icons/fa";

const Navbar = () => {
  return (
   
      <div className="sticky top-0 bg-white z-10">
        <div className="container hidden  lg:block">
            <div className="flex justify-between items-center p-8">
                <h1 className='text-4xl font-medium'>Logo </h1>
                <div className="relative w-full max-w-[500px]">
              <input type="text" placeholder='search product' className='bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full' />
              <CiSearch  className='absolute top-0 right-0 mt-4 mr-5 text-grey-500' size={20}/>
            </div>
            <div className="flex gap-5">
              <div className="icon_wrapper ">
              <FaRegUser/>
              </div>
              <div className="icon_wrapper relative">
              <FaShoppingCart />
              </div>
              
            


            </div>
            </div>
            
          
        </div>
      </div>
   
  )
}

export default Navbar
