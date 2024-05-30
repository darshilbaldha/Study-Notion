import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterItem = ({title,link}) => {
  return (
    <div className="hover:text-richblack-50">
      <NavLink to={link}>{title}</NavLink>
    </div>
  )
}

export default FooterItem
