import React from 'react'
import java from "../../public/java.png"
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import javascript from "../../public/javascript.png"
import react from "../../public/reactjs.png"
import spring from "../../public/spring.png"
import springBoot from "../../public/springBoot.jpg"

const PortFolio = () => {
    const cardItems = [
         
         {
            id:1,
            logo:html,
            name:"html"
         },
         {
            id:2,
            logo:css,
            name:"css"
         },
         {
            id:3,
            logo:javascript,
            name:"javascript"
         },
         {
            id:4,
            logo:react,
            name:"react"
         },
         {
            id:5,
            logo:java,
            name:"java"
         },
         {
            id:6,
            logo:spring,
            name:"spring"
         },
         {
            id:7,
            logo:springBoot,
            name:"springBoot"
         },
         
    ]
  return (
    <div
    name="Portfolio"
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div >
           <h1 className='text-3xl font-bold mb-5'>PortFolio</h1> 
           <span className='underline font-semibold'>Featured Projects</span> 
           <div className='grid grid-cols-1 md:grid-cols-4 gap-6 my-6'>
                {cardItems.map(({id, logo, name}) =>(
                    <div key={id} className='md:w-[270px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 '> 
                        <img 
                        src={logo} 
                        className='w-[120px] h-[120px] p-1 rounded-full border-[2px]'
                        alt=''/>
                        <div>
                            <div className='px-7 font-bold text-xl mb-2'>{name}</div>
                            <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectotoer adipisicing slit</p>
                        </div>
                        <div className='p-4 gap-3 space-x-4'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-1 py-2 rounded'>Video</button>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-1 py-2 rounded'>Source code</button>
                        </div>
                    </div>   
                ))}
           </div>
        </div>   
    </div>
  );
}

export default PortFolio