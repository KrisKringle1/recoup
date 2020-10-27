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

        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/28-day-kickstart" activeClassName="active">28 Day KICKSTART</Link></li>
        <li><Link to="/personal-training" activeClassName="active">Personal Training</Link></li>
        <li><Link to="/success-stories" activeClassName="active">Success Stories</Link></li>
        <li><Link to="/blog" activeClassName="active">The RECOUP Blog</Link></li>
        <li><Link to="/team" activeClassName="active">Team</Link></li>
        <li><Link to="/virtual-services" activeClassName="active">Virtual Services</Link></li>
        <li><Link to="/our-story" activeClassName="active">Our Story</Link></li>
        <li><Link to="/contact" activeClassName="active">Contact</Link></li>

      </ul>

     </div>

    </>
  )
}

export default Menu
