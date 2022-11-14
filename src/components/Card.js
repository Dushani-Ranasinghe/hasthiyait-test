import React from 'react'
import CardList from './CardList'
import "../styles/Card.css"
import CardHeader from './CardHeader'

function Card() {
  return (
    <div className='card-conatiner'>
      <CardHeader/>
      <hr/>
        <CardList/>
        <hr className='footer-hr'/>
        <div className='footer'>
        <span>View all notification</span>
        </div>
     
    </div>
  )
}

export default Card