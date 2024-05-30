import React from 'react'
import FooterItem from "./FooterItem"
const Footer2 = ({title,links}) => {
  return (
    <div className='w-fit'>
      <div className='font-semibold  font-inter text-richblack-50 mb-3 text-base'>{title}</div>
      <div className='flex flex-col text-richblack-400 text-[15px] gap-2 '>
        {links.map((item,index)=>(
           <FooterItem key={index} title={item.title} link={item.link}/>
        ))}
      </div>
    </div>
  )
}

export default Footer2
