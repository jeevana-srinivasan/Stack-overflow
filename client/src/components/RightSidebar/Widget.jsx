import React from 'react'

import './RightSidebar.css'
import comment from '../../assets/message.png'
import pen from '../../assets/pen.png'
import blacklogo from '../../assets/blacklogo.png'


const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width="18" />
                <p>Celebrating the Stack Exchange sites that turned ten years old in Q1 2022</p>
            </div>
        </div>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width="18" />
            <p>New data: What makes developers happy at work</p>
        </div>
        </div>

        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width="18" />
                <p>What goes into site sponsorships on SE?</p>
            </div>
        </div>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width="18" />
            <p>Stack Exchange Q & A access will not be restricted in Russia</p>
        </div>
        </div>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <img src={blacklogo} alt="pen" width="18"/>
            <p>Announcing an A/B test for a Trending sort option</p>
        </div>
        </div>

        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p >38</p>
                <p>Changing initializer-list tag wiki</p>
            </div>
        </div>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <p>56</p>
            <p>What is the true intention in the "How to reference material written by...</p>
        </div>
        </div>

    </div>
  )
}

export default Widget