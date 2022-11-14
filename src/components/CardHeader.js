import React from 'react'
import tick from "../assests/icons/doubletick.png"
import refresh from "../assests/icons/refresh.png"
import "../styles/CardHeader.css" 

function CardHeader() {
  return (
    <div className='card-header'>
        <div className='notification-head'>
         <div className='n-1'>
         <span>Latest Message</span>
         <img className='icon' src={refresh} alt="refresh"/>
         </div>
         <span className='msg'>You have 4 new messages</span>
        
        </div>
        <div className='mark-read'>
        <img className='icon' src={tick} alt="tick"/>
        <span className='read'>Mark all as read</span>
        </div>

    </div>
  )
}

export default CardHeader