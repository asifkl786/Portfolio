import React from 'react'
import java from "../../public/java.png"
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import javascript from "../../public/javascript.png"
import react from "../../public/reactjs.png"
import spring from "../../public/spring.png"
import springBoot from "../../public/springBoot.jpg"
import mySQL from "../../public/mysql.png"
import oracle from "../../public/oracle.png"
import jquery from "../../public/jquery.png"

const Experience = () => {

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
        {
            id:8,
            logo:jquery,
            name:"jquery"
         },
         {
            id:9,
            logo:mySQL,
            name:"mySQL"
         },
         {
            id:10,
            logo:oracle,
            name:"oracle"
         },
        
   ]

  return (
    <div
    name="Experiance"
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
    <div >
       <h1 className='text-3xl font-bold mb-5 underline'>Experience</h1> 
       <p className='font-semibold'>I have more than 3 years of experience in below technologies</p> 
       <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
            {cardItems.map(({id, logo, name}) =>(
                <div key={id} className='flex flex-col items-center border-[1px] md:w-[150px] rounded-full  cursor-pointer hover:scale-110 duration-300 '> 
                    <img 
                    src={logo} 
                    className='w-[80px] rounded-full'
                    alt=''/>
                    <div>
                        <div className='px-3 mb-2'>{name}</div>
                       
                    </div>
                    
                </div>   
            ))}
       </div>
    </div>   
    </div>
  )
}

export default Experience