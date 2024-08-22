import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";

import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

import { ReactTyped } from "react-typed";


const Home = () => {
  return (
    <>
    <div 
    name="Home"
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt-14 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-2xl'>
                <h1>Hello I'm a</h1>
                {/*<span className='text-red-600 font-bold'>Developer</span>*/}
                <ReactTyped
                    className='text-red-600 font-bold'
                    strings={["Developer","Software Engineer","Coder"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                />
            </div>
            <br />
             <p className='text-sm md:text-md text-justify'>Lorem, ipsum dolor 
                sit amet consectetur adipisicing elit.
                 Veniam, vitae omnis! Animi, ratione culpa similique
                  alias ab ipsam cum inventore nisi voluptatum harum
                   delectus nemo voluptatibus laborum, veritatis
                    sequi iusto!
             </p>
             {/*social media icons */}
            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 '>
                <div className='space-y-2'>
                    <h1 className='font-bold text-center'>Available on</h1>
                        <ul className='flex space-x-5'>
                            <a href="https://www.facebook.com/" target='_blank'>
                            <li><FaFacebook className='text-2xl cursor-pointer'/></li>
                            </a>
                            <a href="https://in.linkedin.com/" target='_blank'>
                            <li><FaLinkedin className='text-2xl cursor-pointer'/></li>
                            </a>
                            <a href="https://www.youtube.com/" target='_blank'>
                            <li><IoLogoYoutube className='text-2xl cursor-pointer'/></li>
                            </a>
                            <a href="https://www.instagram.com/" target='_blank'>
                            <li><FaSquareInstagram className='text-2xl cursor-pointer' /></li>
                            </a>
                        </ul>
                </div>
                <div className='space-y-2'>
                    <h1 className='font-bold text-center'>Current working on</h1>
                        <div className='flex space-x-5'>
                            <TiHtml5 className='text-2xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px]' />
                            <FaCss3Alt className='text-xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px]' />
                            <TbBrandJavascript className='text-xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px]' />
                            <SiJquery className='text-2xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px]' />
                            <FaReact className='text-2xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px]'/>
                            <FaJava  className='text-2xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px]'/>
                        </div>
                </div>
            </div>
                        
            </div>

            <div className='md:w-1/2 md:ml-40 md:mt-20 md:order-1'>
             <img src="../../public/asif.jpg" className='rounded-full md:w-[300px] md:h-[300px]' alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home