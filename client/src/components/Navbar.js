import React from 'react'
import { Link } from "react-router-dom";

const NavBar = ({
    elements
  }) => 
    <nav>
      <div className="nav-wrapper">
        <Link to='/' className="brand-logo logoP navLinks">Home</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {elements.map(item => <li key={item.page}><Link to={item.address} className='navLinks'>{item.page}</Link></li>)}
        </ul>
      </div>
    </nav>
    
export default NavBar
