import React from 'react'

import './LeftSidebar.css'
import { NavLink } from "react-router-dom";
import Globe from '../../assets/Globe.png'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeClassName='active'>
                <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                <div><p>PUBLIC</p></div>
                <NavLink to='/Questions' className='side-nav-links' activeClassName='active' style={{paddingLeft:'0.2px'}}>
                    <img src={Globe} alt='Globe' width='20px'/>
                    <p style={{paddingLeft:'10px'}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:'30px'}}>
                    <p>Tags</p>
                </NavLink>
                <NavLink to='/Users' className='side-nav-links' activeClassName='active' style={{paddingLeft:'30px'}}>
                    <p>Users</p>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default LeftSidebar