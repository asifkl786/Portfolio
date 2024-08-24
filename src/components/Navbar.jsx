import React, { useState } from 'react'
import pic from "../../public/asif.png";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import {Link} from "react-scroll"

const Navbar = () => {
  const [menu,setMenu] = useState(false);

  const navItems = [
     {
        id:1,
        text:"Home"
     },
     {
      id:2,
      text:"About"
     },
     {
      id:3,
      text:"Portfolio"
     },
     {
      id:4,
      text:"Experiance"
     },
     {
      id:5,
      text:"Contacts"
     },
  ]

  return (

    <>
       <div className='max-w-screen-2xl container mx-auto  px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
            <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-4'>
                       {/*<img src={"../../public/asif.png "} className='w-12 h-12 rounded-full' alt="" />*/} 
                        <img src={pic} className="h-12 w-12 rounded-full" alt="" />
                          <h1 className='font-semibold text-xl cursor-pointer'>Asif <span className='khan text-rose-600 text-xl'>Khan</span>
                            <p className='text-sm'>Software Engineer</p>
                          </h1>
                    </div>
                    {/*DeskTop Navbar*/}      
                    <div>
                        <ul className='hidden md:flex space-x-5 cursor-pointer'>
                          {navItems.map(({id, text}) => (
                            <li className='hover:scale-110 duration-300 cursor-pointer font-semibold' key={id}>
                              <Link to={text}
                               smooth={true}
                               duration={500}
                               offset={-70}
                               activeClass='active'
                              
                              >

                              {text}</Link></li>
                          ))}
                        </ul>
                        <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                            {menu ? <IoIosClose size={25}/> : <IoMenu size={25}/>  }
                        </div>
                        
                    </div>
                    
          </div>
          {/*Mobile Navbar*/}
          {menu && ( <div className='bg-white'>
                       <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3'>
                          {navItems.map(({id, text}) => (
                                <li className='hover:scale-110 duration-300 cursor-pointer' key={id}>
                                <Link 
                                onClick={()=>setMenu(!menu)}
                                to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'
                               >
                               {text}</Link></li>
                              ))}
                        </ul>
                      </div>
                    )}  
       </div>
    </>
  );
}

export default Navbar