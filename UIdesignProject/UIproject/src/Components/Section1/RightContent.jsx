import React from 'react'
import Card from './Card'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full w-2/4 p-6 flex flex-nowrap gap-10 overflow-x-auto'>
        {props.users.map(function(elem,idx){
            return <Card color={elem.color} key={idx} id={idx} image={elem.img} tag={elem.tag}/>
        })}
        
    </div>
  )
}

export default RightContent