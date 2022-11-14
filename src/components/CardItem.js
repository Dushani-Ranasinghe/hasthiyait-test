import React from 'react'
import bullet from "../assests/icons/circle.png"
import "../styles/CardItem.css" 
function CardItem(props) {
  return (
    <div>
        <div className='card-container'>
          <div className='card'>
            <img className='bullet' src={bullet} alt="bullet"/>
            <img className='dp' src={props.image} alt="dp"/>
            <div className='card-content'>
                    <span className='sp-heading'>{props.heading}</span>
                    <p>{props.text}</p>
                    <span className='sp-date'>{props.date}</span>
             
            </div>
            </div>
        </div>
    </div>
  )
}

export default CardItem