import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Center = (props) => {
  return (
    <div className='pb-16 px-18 h-[90vh] flex items-center gap-10'>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Center