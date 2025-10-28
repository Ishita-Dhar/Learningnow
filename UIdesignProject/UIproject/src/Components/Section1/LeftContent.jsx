import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const LeftContent = () => {
  return (
    <div className='h-full w-1/3'>
        <div className='p-6 '>
            <h1 className='text-4xl leading-normal font-bold mb-7'>
                Prospective<br/>
                Customer <br/>

                Segmentation
            </h1>
            <p className='text-xs font-light text-gray-500'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, voluptatum. Molestiae numquam vel minis illum rem nihil molestias error in qudjgkfhghk is, quod ratione unde eaque doloremque praesentiu.
            </p>

        </div>
        <div className='m-3 pt-35'>
            <FiArrowUpRight size={50}/>
        </div>
    </div>
  )
}

export default LeftContent