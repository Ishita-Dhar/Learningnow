import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Card = (props) => {
  return (
    <div className='h-full w-80 bg-red-400 rounded-4xl overflow-hidden relative shrink-0'>
        <img className='h-full full object-cover ' src={props.image} alt="" />
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-bold'>{props.id+1}</h2>
            <div >
                <p className='text-shadow-2xl text-lg leading-relaxed text-gray-50 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime nesciunt tempora, illum expedita adipisci?</p>

                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full '>
                        {props.tag}
                    </button>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-2 rounded-full'>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card