import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import javascript from "../../public/javascript.png"
import react from "../../public/reactjs.png"
import quiz from "../../public/quiz.png"
import movie from "../../public/movie.png"
import search from "../../public/search.png"
import dictionary from "../../public/dictionary.png"
import weather from "../../public/weather.png"

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
            logo:weather,
            name:"Weather App",
            url:"https://shimmering-puffpuff-365156.netlify.app/"
         },
         {
            id:5,
            logo:dictionary,
            name:"Dictionary App",
            url:"https://luminous-peony-4d2de5.netlify.app/"
         },
         {
            id:6,
            logo:quiz,
            name:"Quiz App",
            url:"https://imaginative-meringue-2c41c0.netlify.app/"
         },
         {
            id:7,
            logo:search,
            name:"Search Engine",
            url:"https://moonlit-douhua-b0ceaa.netlify.app/"
         },
         {
            id:8,
            logo:movie,
            name:"Movie App",
            url:"https://bright-medovik-c7cfbe.netlify.app/"
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
                {cardItems.map(({id, logo, name, url}) =>(
                    <div key={id} className='md:w-[270px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 '> 
                        
                        <div>
                            <a href={url} target='_blank'>
                                <img 
                                    src={logo} 
                                    className='w-[120px] h-[120px] p-1 rounded-full border-[2px]'
                                    alt=''/>
                                <div className='px-7 font-bold text-xl mb-2'>{name}</div>
                            </a>
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