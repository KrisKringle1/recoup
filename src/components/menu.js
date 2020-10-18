import React from 'react'
import {Link} from 'gatsby'


const Menu = () => {
  return (
    <>
    <div style={{
      background: '#f4f4f4',
      paddingTop: '10px'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/28-day-kickstart">28 Day KICKSTART</Link></li>
        <li><Link to="/personal-training">Personal Training</Link></li>
        <li><Link to="/success-stories">Success Stories</Link></li>
        <li><Link to="/blog">The RECOUP Blog</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/virtual-services">Virtual Services</Link></li>
        <li><Link to="/our-story">Our Story</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>

     </div>

    </>
  )
}

export default Menu
