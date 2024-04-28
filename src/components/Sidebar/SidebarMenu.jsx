import React, { useState } from 'react'
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
import { RiDashboardFill, RiBarChartBoxFill, RiDatabaseFill, RiCameraFill } from "react-icons/ri";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';



function SidebarMenu() {
  const [open, setOpen] = useState(true);

  const Menu = [
    {
      title: "Dashboard",
      icon: <RiDashboardFill />,
      tooltip: "Dashboard"
    },
    {
      title: "Grafik",
      icon: <RiBarChartBoxFill />,
      tooltip: "Grafik"
    },
    {
      title: "Tabel",
      icon: <RiDatabaseFill />,
      tooltip: "Tabel"
    },
    {
      title: "Camera",
      icon: <RiCameraFill />,
      tooltip: "Camera"
    },
  ]
  
  return (
    <div className='flex'>
        <div className={`bg-DarkPurple h-screen p-5 pt-8 ${open ? "w-20" : "w-20"} ${open ? "md:w-72" : "md:w-20"} sticky top-0  duration-300`}>
            <BsArrowLeftShort 
              className={`bg-white text-DarkPurple text-3xl rounded-full absolute -right-3 top-9 border-DarkPurple border cursor-pointer ${!open && "rotate-180"} `} 
              onClick={() => setOpen (!open)} 
            />

            {/* LOGO  */}
            <div className='inline-flex items-center'>
                <IoWaterOutline className='text-4xl text-white rounded cursor-pointer block float-left mr-2'/>
                <h1 className={`text-white font-medium text-2xl duration-300 hidden md:block ${!open && "md:hidden"}`}>WaterTank</h1>
            </div>

            {/* SearchBar */}
            <div className={`flex items-center rounded-md bg-LightWhite mt-6 px-4 py-2 ${!open ? "px-2.5" : "px-4"}`}>
                <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
                <input 
                  type={"search"} 
                  placeholder='Search' 
                  className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} 
                />
            </div>

            {/* Menu */}
            <ul>
                {Menu.map((menu, index) => (
                     <Tooltip
                      key={index}
                      title={menu.tooltip}
                      position="right"
                      arrow={true}
                      trigger="mouseenter"
                      duration={300}
                      animation="fade"
                      className="sm:block md:hidden "
                    >
                        <li 
                          key={index}
                          className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-LightWhite rounded-md mt-5`}
                        >
                            <span className='text-2xl block float-left'>
                                {menu.icon}
                            </span>
                            <span className={`text-base font-medium flex-1 duration-200 hidden md:block ${!open && "md:hidden"}`}>
                                {menu.title}
                            </span>
                        </li>
                    </Tooltip>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default SidebarMenu