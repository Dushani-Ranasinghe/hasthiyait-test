import React from 'react'
import CardItem from './CardItem'
import p1 from "../assests/images/p1.jpg"
import p2 from "../assests/images/p2.jpg"
import p3 from "../assests/images/p3.jpg"
import "../styles/CardList.css"

function CardList() {
  return (
    <div>
        <div className='card-list-conatiner'>
            <CardItem
             image={p1}
             heading="Jimi Hendricks"
             text="Hey Brandon, we’ve stocked our shelves with
               assorted mint cookie treats for you. Visit your 
               local KookieU store. Hurry! This flavor is for a limited..."
             date="21 Oct, 2022 at 3.30 PM"
            />
            <div className='second'>
            <CardItem
             image={p2}
             heading="Francis Thompson"
             text="They're supposed to interest and engage your subscribers immediately. 
             There's no time to beat around the bush - you have a few second..."
             date="21 Oct, 2022 at 2.30 PM"
  
            />
            </div>
            <CardItem
             image={p3}
             heading="John Martinez"
             text="Hey Brandon, we’ve stocked our shelves with
               assorted mint cookie treats for you. Visit your 
               local KookieU store. Hurry! This flavor is for a limited..."
             date="21 Oct, 2022 at 1.30 PM"
            />
        </div>
    </div>
  )
}

export default CardList